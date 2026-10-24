import { Link } from 'react-router-dom'
import { ArrowLeft } from '../components/Icons'
import { PageMeta } from '../components/PageMeta'
import { WorkRow } from '../components/WorkRow'
import { projects } from '../data/projects'

const groups = [
  { label: 'Products', category: 'Product' as const },
  { label: 'Tools', category: 'Tool' as const },
]

export function Work() {
  return (
    <>
      <PageMeta
        title="Work · Favour Nwachukwu"
        description="Products and developer tools built by Favour Nwachukwu, a software engineer in Lagos, Nigeria."
      />

      <div className="page">
        <header className="page-head wrap">
          <Link className="back-link" to="/" style={{ paddingTop: 0, marginBottom: 28 }}>
            <ArrowLeft size={13} /> Home
          </Link>
          <h1 className="page-title">Things I&apos;ve built.</h1>
          <p className="page-intro">
            Products and developer tools I&apos;ve built. Some are live. Two only run locally.
          </p>
        </header>

        {groups.map((group) => {
          const items = projects.filter((project) => project.category === group.category)
          if (!items.length) return null
          return (
            <section className="work-group wrap" key={group.label}>
              <h2 className="group-label">
                {group.label} · {String(items.length).padStart(2, '0')}
              </h2>
              <div className="work-list">
                {items.map((project) => (
                  <WorkRow key={project.slug} project={project} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </>
  )
}
