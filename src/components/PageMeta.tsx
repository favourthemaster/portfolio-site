import { useEffect } from 'react'

type PageMetaProps = {
  title: string
  description: string
}

function setMeta(selector: string, content: string, attr = 'content') {
  const element = document.querySelector(selector)
  if (element) element.setAttribute(attr, content)
}

export function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)
    setMeta('meta[property="og:url"]', window.location.href)
    setMeta('link[rel="canonical"]', window.location.href, 'href')
  }, [title, description])

  return null
}
