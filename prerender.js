import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, 'dist')
const templatePath = path.resolve(distDir, 'index.html')

function escapeAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function updateMetaTag(html, attrName, attrValue, newContent) {
  const regex = new RegExp(
    `(<meta\\s+[^>]*${attrName}=["']${attrValue}["'][^>]*content=["'])[^"']*(["'][^>]*>)`,
    'i',
  )
  if (regex.test(html)) {
    return html.replace(regex, `$1${escapeAttr(newContent)}$2`)
  }
  const altRegex = new RegExp(
    `(<meta\\s+[^>]*content=["'])[^"']*(["'][^>]*${attrName}=["']${attrValue}["'][^>]*>)`,
    'i',
  )
  if (altRegex.test(html)) {
    return html.replace(altRegex, `$1${escapeAttr(newContent)}$2`)
  }
  return html
}

function updateCanonical(html, newUrl) {
  const regex = /(<link\s+[^>]*rel=["']canonical["'][^>]*href=["'])[^"']*(["'][^>]*>)/i
  if (regex.test(html)) {
    return html.replace(regex, `$1${newUrl}$2`)
  }
  return html
}

function updateTitle(html, newTitle) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(newTitle)}</title>`)
}

function updateJsonLd(html, meta) {
  const scriptRegex = /(<script\s+type=["']application\/ld\+json["']>)([\s\S]*?)(<\/script>)/i
  const match = html.match(scriptRegex)
  if (!match) return html

  try {
    const data = JSON.parse(match[2])
    if (data['@graph'] && Array.isArray(data['@graph'])) {
      for (const item of data['@graph']) {
        if (item['@type'] === 'WebPage') {
          item['@id'] = meta.canonicalUrl
          item.url = meta.canonicalUrl
          item.name = meta.title
          item.description = meta.description
        }
      }
    }
    return html.replace(
      scriptRegex,
      `$1\n    ${JSON.stringify(data, null, 2).replace(/\n/g, '\n    ')}\n    $3`,
    )
  } catch {
    return html
  }
}

async function main() {
  if (!fs.existsSync(templatePath)) {
    console.error(`Base template not found at ${templatePath}`)
    process.exit(1)
  }

  const template = fs.readFileSync(templatePath, 'utf8')

  // Spin up Vite in SSR middleware mode to load entry-server in-memory
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  })

  let render
  let getRoutes
  try {
    const mod = await vite.ssrLoadModule('/src/entry-server.tsx')
    render = mod.render
    getRoutes = mod.getRoutes
  } finally {
    await vite.close()
  }

  const routes = getRoutes()
  const allRoutes = [...routes, '/404']

  console.log(`Prerendering ${allRoutes.length} routes...`)

  for (const route of allRoutes) {
    const { html: renderedMarkup, meta } = render(route)

    // Separate leading preload links (hoisted by React 19) from root markup
    const preloadRegex = /<link\s+rel=["']preload["'][^>]*\/?>/gi
    const preloads = (renderedMarkup.match(preloadRegex) || []).join('\n    ')
    const bodyMarkup = renderedMarkup.replace(preloadRegex, '')

    let pageHtml = template

    // Inject title and meta
    pageHtml = updateTitle(pageHtml, meta.title)
    pageHtml = updateMetaTag(pageHtml, 'name', 'description', meta.description)
    pageHtml = updateMetaTag(pageHtml, 'property', 'og:title', meta.title)
    pageHtml = updateMetaTag(pageHtml, 'property', 'og:description', meta.description)
    pageHtml = updateMetaTag(pageHtml, 'property', 'og:url', meta.canonicalUrl)
    pageHtml = updateMetaTag(pageHtml, 'name', 'twitter:title', meta.title)
    pageHtml = updateMetaTag(pageHtml, 'name', 'twitter:description', meta.description)
    pageHtml = updateCanonical(pageHtml, meta.canonicalUrl)
    pageHtml = updateJsonLd(pageHtml, meta)

    // Inject preloads into head if any
    if (preloads) {
      pageHtml = pageHtml.replace('</head>', `    ${preloads}\n  </head>`)
    }

    // Replace root content
    pageHtml = pageHtml.replace(
      /<div id=["']root["']>[\s\S]*?<\/div>/,
      `<div id="root">${bodyMarkup}</div>`,
    )

    if (route === '/') {
      fs.writeFileSync(templatePath, pageHtml, 'utf8')
      console.log(`  ✓ / -> dist/index.html`)
    } else if (route === '/404') {
      const outPath = path.resolve(distDir, '404.html')
      fs.writeFileSync(outPath, pageHtml, 'utf8')
      console.log(`  ✓ /404 -> dist/404.html`)
    } else {
      const cleanPath = route.replace(/^\//, '')
      const dirPath = path.resolve(distDir, cleanPath)
      fs.mkdirSync(dirPath, { recursive: true })

      const indexPath = path.resolve(dirPath, 'index.html')
      const flatHtmlPath = path.resolve(distDir, `${cleanPath}.html`)

      fs.writeFileSync(indexPath, pageHtml, 'utf8')
      fs.writeFileSync(flatHtmlPath, pageHtml, 'utf8')
      console.log(`  ✓ ${route} -> dist/${cleanPath}/index.html & dist/${cleanPath}.html`)
    }
  }

  // Generate updated sitemap.xml
  const today = new Date().toISOString().split('T')[0]
  const sitemapUrls = routes.map((r) => {
    const loc = r === '/' ? 'https://nwachukwufavour.me/' : `https://nwachukwufavour.me${r}`
    let priority = '0.8'
    if (r === '/') priority = '1.0'
    else if (r === '/work') priority = '0.9'
    else if (r === '/stack' || r === '/about') priority = '0.7'

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
  })

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join('\n')}
</urlset>
`

  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf8')
  console.log(`  ✓ Updated dist/sitemap.xml with ${routes.length} routes.`)
}

main().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
