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
      { name: 'Modal GPUs', note: 'Serverless NVIDIA A100, A10G, L4, and T4 compute with attached volumes for rapid model experiments.' },
      { name: 'Breeze TTS 2', note: 'Ultra-fast voice cloning and voiceovers running on Modal A100s with full CUDA Graph optimizations (--fast-all).' },
      { name: 'SAM3 → YOLOv8', note: 'Heavy Segment Anything (SAM3) auto-labeling distilled into custom YOLOv8-seg models on Modal A10Gs for Coachly.' },
      { name: 'FLUX & Qwen-Image', note: 'Serverless image diffusion and typography compositing pipelines (binn-media-engine) on A100 GPUs.' },
      { name: 'ComfyUI & Wan2', note: 'Persistent cloud workflows and video diffusion models hosted on Modal with dedicated storage volumes.' },
      { name: 'Whisper & Moonshine', note: 'Low-latency speech-to-text with CTranslate2 and Sherpa-ONNX on T4s and edge servers.' },
      { name: 'TwelveLabs', note: 'Video indexing, semantic embeddings, and video search for Lectry.' },
      { name: 'Gemini / Claude', note: 'Multimodal reasoning, structured extraction, and automated fallback.' },
      { name: 'FFmpeg', note: 'Slicing, transcoding, and audio extraction in Go and Python.' },
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

const modalWorkflows = [
  {
    title: 'Ephemeral, per-second compute over idle VMs.',
    body: 'I do not pay for idle GPU servers. Modal lets me define container environments directly in Python, request the exact GPU required (from a T4 to an A100 80GB), and tear it down the instant the task ends.',
  },
  {
    title: 'Model distillation for edge and real-time execution.',
    body: 'For Coachly, running heavy segmentation models on a phone was impossible. I used Modal A10G instances to run SAM3 over gym footage, generate ground-truth masks, and distill that knowledge into lightweight YOLOv8-seg models that run at 60 FPS.',
  },
  {
    title: 'Persistent volume caching for massive weights.',
    body: 'Downloading 20 GB model checkpoints on every cold start destroys latency. Using Modal Volumes (modal.Volume), checkpoints for FLUX, Qwen, Breeze TTS, and HuggingFace stay mounted and cached across runs.',
  },
  {
    title: 'Testing new model releases as they drop.',
    body: 'Whenever a new open-weights release arrives—whether it is Wan2 video, Moonshine STT, or new vision transformers—I can spin up a Modal container and benchmark its real latency and memory footprint within 15 minutes.',
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
            <h2 className="subhead">How I use Modal GPUs</h2>
            <div className="principles">
              {modalWorkflows.map((item, index) => (
                <div className="principle" key={item.title}>
                  <span className="principle-num">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="principle-title">{item.title}</h3>
                    <p className="principle-body">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

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
