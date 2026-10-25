export type MarkName =
  | 'binn'
  | 'coachly'
  | 'lectry'
  | 'agentpay'
  | 'twelvelabs'
  | 'vscode'
  | 'agy'

export type CoverName = 'binn' | 'coachly' | 'lectry' | 'agentpay' | 'vscode'

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  name: string
  mark: MarkName
  year: string
  category: 'Product' | 'Tool' | 'Experiment'
  role: string
  status: string
  tagline: string
  card: string
  summary: string
  links: ProjectLink[]
  featured?: boolean
  cover?: CoverName
  caseStudy?: {
    intro: string
    problem: string
    links?: { text: string; href: string }[]
    sections?: {
      eyebrow: string
      body: string
      links?: { text: string; href: string }[]
    }[]
  }
  highlight?: string
}

export const projects: Project[] = [
  {
    slug: 'binn',
    name: 'Binn',
    mark: 'binn',
    year: '2026',
    category: 'Product',
    role: 'Product, design, engineering',
    status: 'Live',
    tagline: 'Study first, then scroll.',
    card: 'A study app that blocks distractions until you answer from your own notes.',
    summary:
      'An Android app for students who lose study time to short videos. Pick the apps that distract you, upload your notes, and answer one question before those apps open.',
    links: [{ label: 'Visit binn.space', href: 'https://binn.space' }],
    featured: true,
    cover: 'binn',
    caseStudy: {
      intro:
        'Binn is an Android app for students who open TikTok for a five-minute break and lose an hour. You choose the apps that distract you, upload your course notes, and answer one question from those notes before the app opens. A correct answer earns screen time. A wrong one keeps the lock on.',
      problem:
        'Most app blockers use a timer or a password. Neither makes you study. Binn ties the unlock to your notes: answer one question correctly, and the app opens. Miss it, and the lock stays on.',
    },
  },
  {
    slug: 'coachly',
    name: 'Coachly',
    mark: 'coachly',
    year: '2026',
    category: 'Product',
    role: 'Computer vision, Flutter, Go, Modal',
    status: 'Unreleased',
    tagline: 'Personal AI workout coaching on your schedule.',
    card: 'On-device AI joint tracking, rep counting, and live form correction from your phone camera.',
    summary:
      'A real-time AI fitness coach that used phone camera computer vision to track joints, count reps, and deliver live vocal corrections. Built for on-device calisthenics with zero equipment and zero internet, paired with Modal GPU model distillation for barbell tracking.',
    links: [],
    featured: true,
    cover: 'coachly',
    caseStudy: {
      intro:
        'Coachly was an AI fitness coach built to watch your workout form through a phone camera and deliver live voice corrections while you train. I built the mobile app in Flutter with on-device calisthenics tracking (zero equipment, zero internet), a Go WebRTC relay for sub-100ms video and telemetry streaming, and a cloud pipeline on Modal GPUs to distill heavy SAM3 segmentation masks into compact YOLOv8 models for barbell tracking. I never launched it, but it served as the proving ground for my work with real-time multimodal architectures and cloud GPUs.',
      problem:
        'Most fitness apps are static workout logs—they require you to manually enter sets, and cannot tell if your squat depth is valid, if your knees are caving, or if your form is breaking down under fatigue. Getting a dedicated human personal trainer costs $300 to $500 a month. Coachly was designed to turn any smartphone (from a budget Android to an iPhone) into an autonomous personal trainer: zero extra hardware, zero wearables, zero gym equipment, and zero internet latency.',
      links: [{ text: 'Modal GPUs', href: '/stack' }],
      sections: [
        {
          eyebrow: 'On-Device Vision & Zero-Latency Calisthenics',
          body: 'On Coachly, the core promise was zero equipment and zero internet: working out in a dorm room or small apartment shouldn’t require special gear or a 5G connection. The Flutter app ran MediaPipe BlazePose and TFLite models locally on the device to track skeletal keypoints, validate range of motion, and count reps with zero network delay.',
        },
        {
          eyebrow: 'Modal GPU Distillation for Heavy Barbell Tracking',
          body: 'When moving from bodyweight to heavy barbell training, running heavy multi-class segmentation on a mobile CPU/NPU caused thermal throttling. I built an automated data engine on Modal: "Barbell Labeler". It used Segment Anything (SAM3) on Modal A10G GPUs to generate ground-truth masks across thousands of gym frames, and distilled those masks into a tiny YOLOv8-seg model optimized for mobile inference.',
          links: [{ text: 'Modal', href: '/stack' }],
        },
        {
          eyebrow: 'Sub-100ms Streaming & Go Relays',
          body: 'For advanced real-time coaching cues, I engineered a low-latency WebRTC relay in Go using pion/webrtc and gorilla/websocket, relaying encoded frames and keypoints between the mobile client and backend evaluation engines. Audio coaching was generated with sub-second speech synthesis—using Breeze TTS deployed on Modal NVIDIA A100s with CUDA Graphs—giving users immediate voice feedback right at the inflection point of a rep.',
          links: [{ text: 'Breeze TTS', href: '/stack' }],
        },
        {
          eyebrow: 'Why I Shelved It',
          body: 'I built the entire working pipeline—Flutter mobile client, Go distributed backend, WebRTC streaming, pre-launch waitlist site with Founder’s Pass checkout, and cloud GPU inference. But launching a consumer fitness product requires massive distribution, gym video permission education, and high user acquisition budgets. As a solo engineer, my attention was pulled toward Binn, where the student pain point was immediate and personal. I made the conscious decision to shelve Coachly, but everything I learned about serverless GPUs, WebRTC, and model distillation became the technical backbone for every system I build today.',
        },
      ],
    },
    highlight:
      'Shelved before public launch to focus on Binn, but it remains one of the most technically demanding systems I’ve engineered: pion WebRTC relays, WholeBody-133 keypoint math, and serverless GPU distillation.',
  },
  {
    slug: 'lectry',
    name: 'Lectry',
    mark: 'lectry',
    year: '2025',
    category: 'Product',
    role: 'Backend, frontend',
    status: 'Sunset',
    tagline: 'Turn lectures into courses.',
    card: 'Turned lectures, slide photos, and PDFs into structured courses.',
    summary:
      'A tool that turned lecture recordings, slide photos, and PDFs into structured courses with transcripts, summaries, and quizzes.',
    links: [{ label: 'GitHub', href: 'https://github.com/favourthemaster/lectry' }],
    featured: true,
    cover: 'lectry',
    caseStudy: {
      intro:
        'Lectry turned the material students already had, such as a recorded lecture, photos of slides, or a PDF, into a course with lessons, transcripts, summaries, and quizzes. It used TwelveLabs for video understanding.',
      problem:
        'A recorded lecture or a folder of slides is not a course. Turning that material into lessons takes hours of cutting, writing, and structuring. Lectry did that work automatically, so students could study from a course instead of a pile of files.',
      links: [{ text: 'TwelveLabs', href: '/work/twelvelabs-go-sdk' }],
    },
  },
  {
    slug: 'agentpay',
    name: 'AgentPay',
    mark: 'agentpay',
    year: '2026',
    category: 'Product',
    role: 'Product, backend',
    status: 'In development',
    tagline: 'Autonomous payments for AI agents.',
    card: 'A payment API for AI agents, with limits set by the person who owns the money.',
    summary:
      'A payment layer for AI agents. The agent requests a payment; a policy layer checks the amount, recipient, and identity before money moves.',
    links: [],
    featured: true,
    cover: 'agentpay',
    caseStudy: {
      intro:
        'AgentPay is a payment layer for AI agents. It gives an agent two actions, pay and receive, and checks every request against limits set by the person who owns the money.',
      problem:
        'An agent can already browse a store and fill a checkout. It still cannot pay safely. A card number gives it too much access, and a crypto wallet does not help with Nigerian bank transfers. The agent needs a small, controlled way to move money. The owner needs limits that do not depend on the model behaving.',
    },
  },
  {
    slug: 'twelvelabs-go-sdk',
    name: 'TwelveLabs Go SDK',
    mark: 'twelvelabs',
    year: '2025',
    category: 'Tool',
    role: 'Go, SDK design',
    status: 'Open source',
    tagline: 'Video understanding, from Go.',
    card: 'A typed Go client for the TwelveLabs video understanding API.',
    summary:
      'An unofficial Go SDK for TwelveLabs. It covers indexes, video uploads, tasks, search, and embeddings with typed models and context-aware methods.',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/favourthemaster/twelvelabs-go-sdk',
      },
      {
        label: 'pkg.go.dev',
        href: 'https://pkg.go.dev/github.com/favourthemaster/twelvelabs-go-sdk',
      },
    ],
    caseStudy: {
      intro:
        'An unofficial Go SDK for the TwelveLabs video understanding API. It wraps indexes, video uploads, tasks, search, and embeddings in typed Go models and context-aware methods.',
      problem:
        'I was using TwelveLabs in Lectry, which I built in Go, but there was no Go SDK. I wanted a client that felt native to Go: typed models, context-aware methods, and one place for indexes, uploads, tasks, search, and embeddings.',
      links: [{ text: 'Lectry', href: '/work/lectry' }],
    },
    highlight:
      'After publishing the SDK, I got to talk with the TwelveLabs team about it.',
  },
  {
    slug: 'vscode-android-emulator',
    name: 'Android Emulator for VS Code',
    mark: 'vscode',
    year: '2026',
    category: 'Tool',
    role: 'Extension, streaming',
    status: 'Local build',
    tagline: 'An Android emulator inside VS Code.',
    card: 'A 60 FPS Android emulator and mirror inside VS Code.',
    summary:
      'A VS Code extension that streams a live Android emulator or phone into the editor, with gestures, keyboard input, and AVD management.',
    links: [],
    cover: 'vscode',
    caseStudy: {
      intro:
        'A VS Code extension that puts a live Android emulator or phone inside the editor. You can tap, scroll, type, and drag without switching windows.',
      problem:
        'Most editor Android previews refresh once a second. That is fine for checking a layout and bad for testing a gesture. I wanted the device to feel like it was inside the editor.',
    },
  },
  {
    slug: 'agy-remote',
    name: 'agy-remote',
    mark: 'agy',
    year: '2026',
    category: 'Tool',
    role: 'Go, Flutter',
    status: 'Local build',
    tagline: 'Drive a coding agent from your phone.',
    card: 'A 12 MB Go daemon for driving the Antigravity CLI from a phone.',
    summary:
      'A WebSocket daemon that streams thinking traces and tool execution to a mobile client over Tailscale. Small enough to leave running on a VPS.',
    links: [],
  },

]

export const featuredProjects = projects.filter((project) => project.featured)

export const caseStudyProjects = projects.filter((project) => project.caseStudy)

export const projectHref = (project: Project): string | undefined => {
  if (project.caseStudy) return `/work/${project.slug}`
  return project.links[0]?.href
}

export const getProject = (slug: string): Project | undefined =>
  projects.find((project) => project.slug === slug)

export const getNextProject = (slug: string): Project => {
  const caseStudies = caseStudyProjects
  const index = caseStudies.findIndex((project) => project.slug === slug)
  return caseStudies[(index + 1) % caseStudies.length]
}

export const moreProjects = [
  'twelvelabs-go-sdk',
  'vscode-android-emulator',
  'agy-remote',
]
  .map((slug) => getProject(slug))
  .filter((project): project is Project => Boolean(project))

export const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/favourthemaster',
    handle: '@favourthemaster',
  },
  {
    label: 'X',
    href: 'https://x.com/favour_dmaster',
    handle: '@favour_dmaster',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/favour-nwachukwu-972b3633a',
    handle: 'Favour Nwachukwu',
  },
  {
    label: 'Email',
    href: 'mailto:nwachukwufavs@gmail.com',
    handle: 'nwachukwufavs@gmail.com',
  },
] as const

export const email = 'nwachukwufavs@gmail.com'
