import { useEffect } from 'react'

type PageMetaProps = {
  title: string
  description: string
}

function setMeta(selector: string, content: string) {
  const element = document.querySelector(selector)
  if (element) element.setAttribute('content', content)
}

export function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)
  }, [title, description])

  return null
}
