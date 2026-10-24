import { Contact } from '../components/Contact'
import { GitHub } from '../components/Icons'
import { PageMeta } from '../components/PageMeta'

const groups = [
  {
    key: 'Languages',
    items: [
      { name: 'Go', note: 'APIs, CLIs, workers, and the concurrency between them. My default for backend work.' },
      { name: 'TypeScript', note: 'React apps, VS Code extensions, and small browser tools.' },
      { name: 'Dart', note: 'Flutter apps, including platform channels and background services.' },
      { name: 'Python', note: 'Model inference, benchmarks, and data scripts.' },
      { name: 'SQL', note: 'Schema design, indexes, and queries.' },
      { name: 'C / C++', note: 'Kernels, renderers, and small experiments.' },
    ],
  },
  {
    key: 'Mobile',
    items: [
      { name: 'Flutter', note: 'Provider, go_router, secure storage, and frame profiling.' },
      { name: 'Android services', note: 'Foreground services, system overlays, and accessibility hooks.' },
      { name: 'Platform edges', note: 'Method channels for notifications, permissions, and app blocking.' },
      { name: 'Offline first', note: 'Cached reads and state recovery when the network drops.' },
    ],
  },
  {
    key: 'Backend',
    items: [
      { name: 'Go HTTP', note: 'Chi, Gin, GORM, and a lot of net/http.' },
      { name: 'PostgreSQL', note: 'Schema design, indexes, migrations, and transactions.' },
      { name: 'Redis + Asynq', note: 'Background jobs, retries, progress, and bounded concurrency.' },
      { name: 'SQLite', note: 'Local-first apps and small deployments.' },
      { name: 'APIs', note: 'REST APIs, WebSockets for live updates, and gRPC between services.' },
      { name: 'Auth', note: 'JWTs, refresh tokens, webhook signatures, and role checks.' },
    ],
  },
  {
    key: 'Web',
    items: [
      { name: 'React', note: 'Web apps in TypeScript, usually without a component library.' },
      { name: 'Vite', note: 'Static builds and a short config.' },
      { name: 'Next.js', note: 'App Router, server routes, and single-app deploys.' },
      { name: 'Tailwind', note: 'Product UI, plus hand-written CSS for custom layouts.' },
      { name: 'Prisma', note: 'Typed queries and migrations.' },
    ],
  },
  {
    key: 'AI & media',
    items: [
      { name: 'Gemini / Mistral', note: 'Text and vision calls, with fallback between providers.' },
      { name: 'TwelveLabs', note: 'Video indexing and search for Lectry.' },
      { name: 'Modal', note: 'On-demand GPUs for TTS and model runs.' },
      { name: 'ONNX', note: 'Quantized speech models on CPU.' },
      { name: 'FFmpeg', note: 'Slicing, transcoding, and audio extraction.' },
    ],
  },
  {
    key: 'Infra',
    items: [
      { name: 'Docker', note: 'Local environments and container deploys.' },
      { name: 'GitHub Actions', note: 'Tests, signed Android bundles, tags, and releases.' },
      { name: 'Cloudflare', note: 'R2 storage and Pages deploys.' },
      { name: 'Vercel + Supabase', note: 'Hosting and Postgres for small products.' },
      { name: 'AWS', note: 'S3 and EC2 for larger deployments.' },
      { name: 'Linux', note: 'Servers, shells, and system logs.' },
    ],
  },
]

const principles = [
  {
    title: 'Use Postgres first.',
    body: 'A relational database, a job queue, and logs cover most products. I add more infrastructure when there is a measured reason.',
  },
  {
    title: 'Handle the retry.',
    body: 'Webhooks arrive twice, networks drop, and people tap buttons twice. I test those paths before launch.',
  },
  {
    title: 'Measure before changing code.',
    body: 'A benchmark decides what to optimize. Without a number, I am guessing.',
  },
  {
    title: 'Keep the screen easy to scan.',
    body: 'Fewer controls, clear labels, and nothing that delays the next tap.',
  },
  {
    title: 'Finish the deploy.',
    body: 'A feature is done when it has a build, logs, and a way to roll back.',
  },
]

export function Stack() {
  return (
    <>
      <PageMeta
        title="Stack · Favour Nwachukwu"
        description="The languages, frameworks, and infrastructure Favour Nwachukwu uses to build products end to end."
      />

      <div className="page">
        <header className="page-head wrap">
          <span className="section-label">Stack · October 2026</span>
          <h1 className="page-title" style={{ marginTop: 16 }}>
            The tools I use.
          </h1>
          <p className="page-intro">
            These are the languages and services I use most. I pick tools I can debug alone and
            afford to run.
          </p>
        </header>

        <div className="wrap">
          {groups.map((group) => (
            <section className="stack-group" key={group.key}>
              <h2 className="stack-key">{group.key}</h2>
              <div className="stack-items">
                {group.items.map((item) => (
                  <div className="stack-item" key={item.name}>
                    <span className="stack-name">{item.name}</span>
                    <span className="stack-note">{item.note}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="about-section">
            <h2 className="subhead">How I work</h2>
            <div className="principles">
              {principles.map((principle, index) => (
                <div className="principle" key={principle.title}>
                  <span className="principle-num">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="principle-title">{principle.title}</h3>
                    <p className="principle-body">{principle.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              className="button"
              href="https://github.com/favourthemaster"
              target="_blank"
              rel="noreferrer"
              style={{ marginTop: 24 }}
            >
              <GitHub size={14} /> See the code
            </a>
          </section>
        </div>

        <Contact
          title="The work."
          copy="Every project, with a link and a short note on why it exists."
          cta={{ label: 'See all projects', to: '/work' }}
        />
      </div>
    </>
  )
}
