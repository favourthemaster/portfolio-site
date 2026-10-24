import { Link } from 'react-router-dom'
import { email } from '../data/projects'
import { ArrowRight } from './Icons'
import { SocialLinks } from './SocialLinks'

type ContactProps = {
  title?: string
  copy?: string
  cta?: { label: string; to: string }
}

export function Contact({
  title = 'Say hello.',
  copy = "I'm looking for remote software engineering work. If you're building something and need another engineer, email me.",
  cta,
}: ContactProps) {
  return (
    <section className="contact wrap">
      <h2 className="contact-title">{title}</h2>
      <p className="contact-copy">{copy}</p>
      {cta ? (
        <Link className="button contact-cta" to={cta.to}>
          {cta.label} <ArrowRight size={14} />
        </Link>
      ) : null}
      <a className="contact-mail" href={`mailto:${email}`}>
        {email}
      </a>
      <p className="contact-fine">Lagos, Nigeria · WAT · Open to remote</p>
      <SocialLinks label={false} />
    </section>
  )
}
