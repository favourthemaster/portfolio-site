import { Link, Navigate, useParams } from 'react-router-dom'
import { CoverArt } from '../components/CoverArt'
import { ArrowLeft, ArrowRight, ExternalLink } from '../components/Icons'
import { Mark } from '../components/Mark'
import { PageMeta } from '../components/PageMeta'
import { getNextProject, getProject } from '../data/projects'

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  if (!project || !project.caseStudy) {
    return <Navigate to="/work" replace />
  }

  const next = getNextProject(project.slug)
  const caseStudy = project.caseStudy

  return (
    <>
      <PageMeta
        title={`${project.name} · Favour Nwachukwu`}
        description={project.summary}
      />

      <article className="case wrap page">
        <Link className="back-link" to="/work">
          <ArrowLeft size={13} /> All work
        </Link>

        <header className="case-head">
          <div className="case-kicker">
            <Mark name={project.mark} size={26} />
            <span>
              {project.category} · {project.year}
            </span>
          </div>
          <h1 className="case-title">{project.name}</h1>
          <p className="case-tagline">{project.tagline}</p>
          <p className="case-intro">{caseStudy.intro}</p>
        </header>

        {project.cover ? (
          <div className="case-cover">
            <CoverArt variant={project.cover} />
          </div>
        ) : null}

        <div className="case-meta">
          <div>
            <p className="meta-label">Year</p>
            <p className="meta-value">{project.year}</p>
          </div>
          <div>
            <p className="meta-label">Role</p>
            <p className="meta-value">{project.role}</p>
          </div>
          <div>
            <p className="meta-label">Status</p>
            <p className="meta-value">{project.status}</p>
          </div>
        </div>

        {project.links.length ? (
          <div className="case-links">
            {project.links.map((link, index) => (
              <a
                key={link.href}
                className={`button${index === 0 ? ' primary' : ''}`}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} <ExternalLink size={12} />
              </a>
            ))}
          </div>
        ) : null}

        <section className="case-section">
          <p className="case-eyebrow">Background</p>
          <p className="case-p">{caseStudy.problem}</p>
          {project.highlight ? (
            <p className="case-highlight">{project.highlight}</p>
          ) : null}
        </section>

        <Link className="next-project" to={`/work/${next.slug}`}>
          <span>
            <span className="next-label">Next project</span>
            <span className="next-name">{next.name}</span>
          </span>
          <ArrowRight className="next-arrow" size={26} />
        </Link>
      </article>
    </>
  )
}
