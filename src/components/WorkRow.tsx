import { Link } from 'react-router-dom'
import { projectHref, type Project } from '../data/projects'
import { ArrowRight, ArrowUpRight } from './Icons'
import { Mark } from './Mark'

type WorkRowProps = {
  project: Project
}

function RowInner({ project, external }: { project: Project; external: boolean }) {
  return (
    <>
      <Mark name={project.mark} size={38} />
      <span className="work-copy">
        <span className="work-name">
          {project.name}
          {project.status === 'Sunset' ? <span className="work-tag">sunset</span> : null}
        </span>
        <span className="work-desc">{project.card}</span>
      </span>
      <span className="work-side">
        <span className="work-year">{project.year}</span>
        <span className="work-arrow">
          {external ? <ArrowUpRight size={16} /> : <ArrowRight size={16} />}
        </span>
      </span>
    </>
  )
}

export function WorkRow({ project }: WorkRowProps) {
  const href = projectHref(project)

  if (!href) {
    return (
      <div className="work-row is-static">
        <Mark name={project.mark} size={38} />
        <span className="work-copy">
          <span className="work-name">
            {project.name}
            {project.status === 'Sunset' ? <span className="work-tag">sunset</span> : null}
            <span className="work-tag">local</span>
          </span>
          <span className="work-desc">{project.card}</span>
        </span>
        <span className="work-side">
          <span className="work-year">{project.year}</span>
        </span>
      </div>
    )
  }

  const external = href.startsWith('http')

  if (external) {
    return (
      <a className="work-row" href={href} target="_blank" rel="noreferrer">
        <RowInner project={project} external />
      </a>
    )
  }

  return (
    <Link className="work-row" to={href}>
      <RowInner project={project} external={false} />
    </Link>
  )
}

type MoreItemProps = {
  project: Project
}

export function MoreItem({ project }: MoreItemProps) {
  const href = projectHref(project)
  const external = href?.startsWith('http')
  const inner = (
    <>
      <span>{project.name}</span>
      <span className="more-meta">
        {project.year}
        {external ? ' ↗' : ''}
      </span>
    </>
  )

  if (!href) {
    return <div className="more-item is-static">{inner}</div>
  }

  if (external) {
    return (
      <a className="more-item" href={href} target="_blank" rel="noreferrer">
        {inner}
      </a>
    )
  }

  return (
    <Link className="more-item" to={href}>
      {inner}
    </Link>
  )
}
