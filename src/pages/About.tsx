import { Contact } from '../components/Contact'
import { PageMeta } from '../components/PageMeta'

const timeline = [
  {
    year: '2025 – 2026',
    title: 'Independent product work',
    body: 'Binn, AgentPay, and Lectry. I built the apps and the APIs.',
  },
  {
    year: '2025 – 2026',
    title: 'Coachly · AI Biomechanics Coach (Unreleased)',
    body: 'Built a real-time fitness coach in Flutter and Go. Real-time 3D pose tracking, WebRTC streaming, and SAM3-to-YOLOv8 distillation on Modal A10G GPUs.',
  },
  {
    year: 'Sep 2025 – Jan 2026',
    title: 'Mobile Developer Intern · Eprime Technologies',
    body: 'Built Flutter screens from Figma, added offline caching and token refresh, and wired Mixpanel funnels.',
  },
  {
    year: '2024 – present',
    title: 'B.Sc. Computer Science · University of Nigeria, Nsukka',
    body: 'Coursework in algorithms, operating systems, and databases.',
  },
  {
    year: '2024',
    title: 'First repos',
    body: 'Flutter apps and Node backends. Most started as coursework tools.',
  },
]

export function About() {
  return (
    <>
      <PageMeta
        title="About · Favour Nwachukwu"
        description="Favour Nwachukwu is a software engineer in Lagos, Nigeria, studying Computer Science at the University of Nigeria, Nsukka."
      />

      <div className="page">
        <header className="page-head wrap">
          <span className="section-label">About</span>
          <h1 className="page-title" style={{ marginTop: 16 }}>
            I just build and ship shiii.
          </h1>
        </header>

        <div className="wrap">
          <div className="about-head">
            <img
              className="about-photo"
              src="/avatar.jpg"
              alt="Favour Nwachukwu"
              width="460"
              height="460"
            />
            <p className="about-lede">
              I&apos;m Favour, a software engineer in Lagos. I build mobile apps in Flutter and
              backend services in Go.
            </p>
          </div>

          <div style={{ marginTop: 28 }}>
            <p className="about-copy">
              Binn started because I kept opening TikTok instead of studying. Before Binn, I spent months
              building Coachly—an AI workout coach with real-time computer vision, sub-100ms WebRTC streaming,
              and live voice cues. I ended up shelving it to ship Binn, but it set the foundation for how I architect
              multimodal pipelines.
            </p>
            <p className="about-copy">
              Whenever I need heavy compute—whether it’s training a custom YOLOv8 model from SAM3 masks,
              running sub-second voice cloning with Breeze TTS on an A100, or batching FLUX diffusion slides—I
              use Modal cloud GPUs. Spinning up serverless GPUs with persistent model volumes lets me experiment
              with cutting-edge open-weights architectures quickly without paying for idle cloud instances.
            </p>
            <p className="about-copy">
              Most of my time goes into thinking about the product. I use AI to get the
              implementation working.
            </p>
          </div>

          <section className="about-section">
            <h2 className="subhead">Currently</h2>
            <div className="now-list">
              <p className="now-item">
                <span>
                  Building <strong>Binn</strong>, an Android app that makes you answer a question
                  from your notes before distracting apps open.
                </span>
              </p>
              <p className="now-item">
                <span>
                  Experimenting with diverse models on <strong>Modal GPUs</strong> (Breeze TTS voice cloning, FLUX media generation, and computer vision distillation).
                </span>
              </p>
              <p className="now-item">
                <span>
                  Open to <strong>remote software engineering roles</strong>, mostly on product
                  and backend teams.
                </span>
              </p>
              <p className="now-item">
                <span>
                  Learning distributed systems by writing a job queue and a payment ledger.
                </span>
              </p>
              <p className="now-item">
                <span>
                  Based in <strong>Lagos, Nigeria</strong> (WAT), usually online.
                </span>
              </p>
            </div>
          </section>

          <section className="about-section">
            <h2 className="subhead">Timeline</h2>
            <div className="timeline">
              {timeline.map((item) => (
                <div className="timeline-row" key={item.title}>
                  <span className="timeline-year">{item.year}</span>
                  <div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-body">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="rule wrap" />

        <Contact
          title="Say hello."
          copy="I'm looking for remote software engineering work. If you have a project in mind, email me."
        />
      </div>
    </>
  )
}
