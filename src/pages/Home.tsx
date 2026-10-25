import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Contact } from '../components/Contact'
import { ArrowRight } from '../components/Icons'
import { PageMeta } from '../components/PageMeta'
import { Mark } from '../components/Mark'
import { Reveal } from '../components/Reveal'
import { SocialLinks } from '../components/SocialLinks'
import { MoreItem, WorkRow } from '../components/WorkRow'
import { featuredProjects, moreProjects, projects } from '../data/projects'

const clusterStyle = (rotate: string, lift: string, z: number) =>
  ({ '--r': rotate, '--y': lift, '--z': z }) as CSSProperties

const clusterRotations = [
  ['-6deg', '1px', 1],
  ['4deg', '-2px', 2],
  ['-3deg', '1px', 3],
  ['6deg', '-1px', 4],
] as const

const heroProjects = projects.filter(
  (project) => project.featured || project.slug === 'twelvelabs-go-sdk',
)

export function Home() {
  // Keep the hero short; the work rows carry the detail.
  return (
    <>
      <PageMeta
        title="Favour Nwachukwu · Software Engineer"
        description="Favour Nwachukwu is a software engineer in Lagos, Nigeria. He builds mobile applications, distributed backend systems, and developer tools."
      />

      <div className="page">
        <section className="hero wrap">
          <h1 className="sr-only">Favour Nwachukwu, software engineer</h1>
          <p className="hero-line hero-name">
            Hi, I’m Favour Nwachukwu
            <img className="avatar" src="/avatar.jpg" alt="" width="460" height="460" />
          </p>
          <p className="hero-line">
            I just build and ship shiii
            <span className="cluster">
              {heroProjects.map((project, index) => {
                const [rotate, lift, z] = clusterRotations[index]
                return (
                  <Link
                    key={project.slug}
                    to={`/work/${project.slug}`}
                    style={clusterStyle(rotate, lift, z)}
                    aria-label={project.name}
                  >
                    <span className="mark-tip">{project.name}</span>
                    <Mark name={project.mark} size={36} />
                  </Link>
                )
              })}
            </span>
          </p>
          <p className="hero-line">Mostly Go, Flutter, and TypeScript. Based in Lagos, Nigeria.</p>
          <p className="hero-note">
            <Link className="text-link" to="/stack">
              See the tools I use.
            </Link>
          </p>
          <SocialLinks />
        </section>

        <div className="rule wrap" />

        <section className="section wrap">
          <div className="section-head">
            <h2 className="section-label">Work</h2>
            <Link className="section-action" to="/work">
              All work <ArrowRight size={12} />
            </Link>
          </div>
          <div className="work-list">
            {featuredProjects.map((project) => (
              <WorkRow key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <div className="rule wrap" />

        <Reveal>
          <section className="section wrap">
            <div className="section-head">
              <h2 className="section-label">Tools</h2>
              <span className="section-action">Smaller builds</span>
            </div>
            <div className="more-grid">
              {moreProjects.map((project) => (
                <MoreItem key={project.slug} project={project} />
              ))}
            </div>
            <div className="more-foot">
              <Link className="link-arrow" to="/work">
                See all projects <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        </Reveal>

        <div className="rule wrap" />

        <Reveal>
          <section className="section wrap about-preview">
            <span className="section-label">About</span>
            <p className="lede">
              I&apos;m a software engineer in Lagos. Binn started because I kept opening TikTok
              instead of studying. Lectry started because it was hard to turn knowledge into
              courses.
            </p>
            <Link className="link-arrow" to="/about">
              About me <ArrowRight size={14} />
            </Link>
          </section>
        </Reveal>

        <div className="rule wrap" />

        <Contact />
      </div>
    </>
  )
}
