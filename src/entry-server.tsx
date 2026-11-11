import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { AppRoutes } from './App'
import { projects, getProject } from './data/projects'

export type RouteMetadata = {
  title: string
  description: string
  canonicalUrl: string
}

export function getRouteMetadata(url: string): RouteMetadata {
  const cleanUrl = url.replace(/\/$/, '') || '/'

  if (cleanUrl === '/') {
    return {
      title: 'Favour Nwachukwu · Software Engineer',
      description:
        'Favour Nwachukwu is a software engineer in Lagos, Nigeria. He builds mobile applications, distributed backend systems, and developer tools.',
      canonicalUrl: 'https://nwachukwufavour.me',
    }
  }

  if (cleanUrl === '/work') {
    return {
      title: 'Work · Favour Nwachukwu',
      description:
        'Products and developer tools built by Favour Nwachukwu, a software engineer in Lagos, Nigeria.',
      canonicalUrl: 'https://nwachukwufavour.me/work',
    }
  }

  if (cleanUrl === '/stack') {
    return {
      title: 'Stack · Favour Nwachukwu',
      description:
        'The languages, frameworks, and infrastructure Favour Nwachukwu uses to build products end to end.',
      canonicalUrl: 'https://nwachukwufavour.me/stack',
    }
  }

  if (cleanUrl === '/about') {
    return {
      title: 'About · Favour Nwachukwu',
      description:
        'Favour Nwachukwu is a software engineer in Lagos, Nigeria, studying Computer Science at the University of Nigeria, Nsukka.',
      canonicalUrl: 'https://nwachukwufavour.me/about',
    }
  }

  if (cleanUrl.startsWith('/work/')) {
    const slug = cleanUrl.replace('/work/', '')
    const project = getProject(slug)
    if (project) {
      return {
        title: `${project.name} · Favour Nwachukwu`,
        description: project.summary,
        canonicalUrl: `https://nwachukwufavour.me/work/${project.slug}`,
      }
    }
  }

  return {
    title: 'Favour Nwachukwu · Software Engineer',
    description:
      'Favour Nwachukwu is a software engineer in Lagos, Nigeria. He builds mobile applications, distributed backend systems, and developer tools.',
    canonicalUrl: `https://nwachukwufavour.me${cleanUrl}`,
  }
}

export function getRoutes(): string[] {
  return [
    '/',
    '/work',
    '/stack',
    '/about',
    ...projects.map((p) => `/work/${p.slug}`),
  ]
}

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  )
  const meta = getRouteMetadata(url)
  return { html, meta }
}
