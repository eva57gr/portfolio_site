import Image from "next/image";

type Metric = {
  value: string;
  label: string;
  context: string;
};

type Capability = {
  title: string;
  summary: string;
  stack: string[];
};

type Project = {
  name: string;
  url: string;
  category: string;
  role: string;
  contribution: string;
  impact: string;
  stack: string[];
  image: string;
};

type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  highlights: string[];
};

const metrics: Metric[] = [
  {
    value: "70%",
    label: "Faster Information Retrieval",
    context: "RAG and vector search optimization in enterprise AI systems"
  },
  {
    value: "<120ms",
    label: "Consistent API Latency",
    context: "Secure REST/gRPC endpoints under high-load production traffic"
  },
  {
    value: "40%",
    label: "Faster Incident Response",
    context: "Distributed tracing, logging strategy, and alerting workflows"
  },
  {
    value: "8+",
    label: "Years Delivery Experience",
    context: "Production software shipped across AI, web, mobile, and cloud"
  }
];

const capabilities: Capability[] = [
  {
    title: "AI Product Systems",
    summary:
      "Designing and shipping LLM applications, RAG services, and agent-based workflows with production guardrails, observability, and compliance.",
    stack: ["LLMs", "RAG", "AI Agents", "NLP", "Prompt/Eval Loops"]
  },
  {
    title: "Backend Architecture",
    summary:
      "Building reliable API platforms and event-driven microservices for enterprise-grade workloads with strong performance characteristics.",
    stack: ["Python", "FastAPI", "Node.js", "TypeScript", "NestJS", "gRPC"]
  },
  {
    title: "Full-Stack Execution",
    summary:
      "Delivering complete product experiences from interface to infrastructure with practical ownership across frontend, backend, and DevOps.",
    stack: ["React", "Next.js", "React Native", "PostgreSQL", "Redis", "Kafka"]
  }
];

const projects: Project[] = [
  {
    name: "Jiminny",
    url: "https://jiminny.com/",
    category: "Revenue AI",
    role: "Senior AI Full-Stack Engineer",
    contribution:
      "Contributed to AI-driven conversation workflows, platform integrations, and scalable product delivery across backend and UI layers.",
    impact: "Improved sales intelligence delivery and team productivity through reliable AI-enhanced experiences.",
    stack: ["Next.js", "TypeScript", "Node.js", "AI APIs"],
    image: "https://image.thum.io/get/width/1400/noanimate/https://jiminny.com/"
  },
  {
    name: "Rechat",
    url: "https://rechat.com/",
    category: "PropTech Platform",
    role: "Full-Stack Engineer",
    contribution:
      "Worked on user-facing workflows and backend integrations supporting high-volume real-estate operations and communication.",
    impact: "Increased reliability and speed of multi-step customer workflows.",
    stack: ["React", "Next.js", "API Integration", "Cloud Services"],
    image: "https://image.thum.io/get/width/1400/noanimate/https://rechat.com/"
  },
  {
    name: "Socialmm",
    url: "https://socialmm.ai/",
    category: "AI Marketing",
    role: "AI Product Engineer",
    contribution:
      "Built and optimized AI-powered features for content and workflow automation with scalable backend support.",
    impact: "Enabled faster campaign execution and reduced manual operations for marketing teams.",
    stack: ["LLMs", "TypeScript", "Automation", "Analytics"],
    image: "/projects/socialmm.png"
  },
  {
    name: "Second Nature",
    url: "https://secondnature.ai/",
    category: "AI Coaching",
    role: "Full-Stack AI Engineer",
    contribution:
      "Delivered AI interaction flows and web platform enhancements focused on usability, reliability, and learning outcomes.",
    impact: "Improved engagement through high-quality interactive user experiences.",
    stack: ["React", "AI Workflows", "Backend APIs", "Data Pipelines"],
    image: "https://image.thum.io/get/width/1400/noanimate/https://secondnature.ai/"
  },
  {
    name: "My Thinking Cap",
    url: "https://mythinkingcap.ai/",
    category: "Learning AI",
    role: "AI Full-Stack Engineer",
    contribution:
      "Implemented product features and architecture patterns for scalable AI-assisted educational experiences.",
    impact: "Accelerated delivery of personalized and interactive learning features.",
    stack: ["Next.js", "AI APIs", "Node.js", "Product Analytics"],
    image: "https://image.thum.io/get/width/1400/noanimate/https://mythinkingcap.ai/"
  },
  {
    name: "Audiosocket",
    url: "https://audiosocket.com/",
    category: "Music Platform",
    role: "Full-Stack Engineer",
    contribution:
      "Contributed to platform capabilities and core user journeys with a focus on responsiveness and scalability.",
    impact: "Improved user flow consistency and performance across content-heavy interfaces.",
    stack: ["React", "Node.js", "Media Delivery", "Cloud"],
    image: "https://image.thum.io/get/width/1400/noanimate/https://audiosocket.com/"
  },
  {
    name: "Impakt",
    url: "https://impakt.com/",
    category: "Fitness Tech",
    role: "Full-Stack Engineer",
    contribution:
      "Shipped cross-functional features spanning frontend interactions, backend APIs, and platform reliability improvements.",
    impact: "Supported smooth user journeys across a fast-moving product roadmap.",
    stack: ["React", "TypeScript", "Backend APIs", "DevOps"],
    image: "/projects/impakt.png"
  },
  {
    name: "Toshimon",
    url: "https://toshimon.io/",
    category: "Web Platform",
    role: "Full-Stack Engineer",
    contribution:
      "Delivered robust frontend modules and backend services, ensuring clean architecture and maintainability.",
    impact: "Strengthened product quality while supporting rapid feature expansion.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "CI/CD"],
    image: "https://image.thum.io/get/width/1400/noanimate/https://toshimon.io/"
  },
  {
    name: "Senja",
    url: "https://senja.io/",
    category: "SaaS Growth Tool",
    role: "Full-Stack Engineer",
    contribution:
      "Built polished user-facing components and scalable backend integrations for creator and business workflows.",
    impact: "Enabled faster rollout of customer-facing capabilities with stable performance.",
    stack: ["React", "Next.js", "APIs", "Performance Optimization"],
    image: "/projects/senja.png"
  },
  {
    name: "Stans Footwear",
    url: "https://www.stansfootwear.com",
    category: "E-commerce",
    role: "Full-Stack Engineer",
    contribution:
      "Implemented modern storefront and backend integrations with attention to conversion flow and operational stability.",
    impact: "Enhanced purchasing experience and site performance for online retail users.",
    stack: ["Next.js", "Commerce APIs", "UX", "Deployment"],
    image: "https://image.thum.io/get/width/1400/noanimate/https://www.stansfootwear.com/"
  }
];

const experience: ExperienceItem[] = [
  {
    period: "Jun 2024 - Mar 2026",
    role: "Senior AI Backend Engineer",
    company: "Beejern",
    highlights: [
      "Architected backend systems and AI pipelines for enterprise automation and knowledge intelligence.",
      "Built LLM services including RAG pipelines, vector search APIs, embedding workflows, and ingestion modules.",
      "Integrated PostgreSQL, Kafka, Redis, Elastic, and object storage for low-latency distributed processing.",
      "Implemented observability with tracing and structured logging to reduce incident response time by 40%."
    ]
  },
  {
    period: "Jan 2020 - May 2024",
    role: "Full Stack Engineer",
    company: "Meta",
    highlights: [
      "Developed end-to-end product features across frontend and backend systems at large scale.",
      "Improved rendering and frontend performance metrics through component and infrastructure optimization.",
      "Designed backend services and data flows supporting high-volume product traffic.",
      "Contributed to engineering velocity via tooling, CI/CD quality improvements, and mentoring."
    ]
  },
  {
    period: "Nov 2018 - Dec 2019",
    role: "Full Stack Engineer",
    company: "Intellectsoft",
    highlights: [
      "Delivered full-lifecycle software solutions for startups, SMBs, and enterprise clients.",
      "Built responsive applications with React/Vue/Next.js and backend APIs with Node.js and Python frameworks.",
      "Implemented secure authentication, payments, and multi-tenant SaaS capabilities.",
      "Designed cloud-native deployments on AWS/GCP with Docker, Terraform, and CI/CD pipelines."
    ]
  }
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    alt: "Software engineers collaborating around modern AI architecture"
  },
  {
    src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern code workspace with dashboard and development tools"
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    alt: "Team collaboration session planning product roadmap"
  },
  {
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
    alt: "Backend and cloud infrastructure visualization on display"
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
    alt: "Abstract data and machine intelligence visualization"
  },
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    alt: "Global digital connectivity and scalable platform concept"
  }
];

const skillGroups = [
  {
    title: "AI & ML",
    items: ["LLMs", "RAG", "Agents", "NLP", "Prompt Engineering", "Model Integrations"]
  },
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Django", "Node.js", "TypeScript", "NestJS", "gRPC"]
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "React Native", "Expo", "Vue", "Angular"]
  },
  {
    title: "Data & Platform",
    items: ["PostgreSQL", "Redis", "Kafka", "Docker", "Kubernetes", "AWS", "CI/CD"]
  }
];

export default function HomePage() {
  return (
    <main className="portfolio-shell">
      <div className="bg-3d-scene" aria-hidden="true">
        <div className="bg-3d-core">
          <div className="bg-grid-plane" />
          <div className="bg-grid-plane bg-grid-plane-secondary" />
          <div className="bg-orb orb-one" />
          <div className="bg-orb orb-two" />
          <div className="bg-orb orb-three" />
          <div className="bg-ring ring-one" />
          <div className="bg-ring ring-two" />
        </div>
      </div>

      <section className="panel hero reveal" id="top">
        <header className="topbar">
          <a className="identity" href="#top">
            <span className="identity-dot" />
            <span className="identity-name">Don Bryan</span>
          </a>
          <nav className="topnav">
            <a href="#capabilities">Capabilities</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Senior AI Full-Stack Engineer</p>
            <h1>
              Shipping robust <span>AI-native products</span> from architecture
              design to user-facing delivery.
            </h1>
            <p className="lead">
              Senior AI Full Stack Developer with strong ownership across LLM
              systems, scalable backend services, and modern frontend
              experiences. I focus on measurable outcomes, clean architecture,
              and production reliability.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="mailto:donbryan019@gmail.com">
                donbryan019@gmail.com
              </a>
              <a className="btn btn-ghost" href="#projects">
                Review project portfolio
              </a>
            </div>

            <ul className="metrics-grid">
              {metrics.map((metric) => (
                <li key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <p>{metric.label}</p>
                  <span>{metric.context}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="hero-side">
            <figure className="hero-image-wrap">
              <Image
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1400&q=80"
                alt="Professional engineering team collaborating"
                width={1400}
                height={980}
                className="hero-image"
                priority
              />
            </figure>
            <div className="hero-summary">
              <p className="summary-label">Current Location</p>
              <p>Warsaw, Poland</p>
              <p className="summary-label">Latest Role</p>
              <p>Senior AI Backend Engineer at Beejern</p>
              <a href="https://beejern.com/" target="_blank" rel="noreferrer">
                Visit beejern.com
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="panel section reveal delay-1" id="capabilities">
        <div className="section-head">
          <p className="eyebrow">Core Capabilities</p>
          <h2>Execution depth across AI, backend, and product engineering.</h2>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.summary}</p>
              <div className="tag-row">
                {capability.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel section reveal delay-1" id="projects">
        <div className="section-head">
          <p className="eyebrow">Project Portfolio</p>
          <h2>Detailed project links with visual references and contributions.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <figure className="project-image-wrap">
                <Image
                  src={project.image}
                  alt={`Screenshot preview of ${project.name}`}
                  width={1400}
                  height={900}
                  className="project-image"
                />
              </figure>
              <div className="project-body">
                <div className="project-topline">
                  <h3>{project.name}</h3>
                  <span>{project.category}</span>
                </div>
                <p className="project-role">Role: {project.role}</p>
                <p>{project.contribution}</p>
                <p className="project-impact">Impact: {project.impact}</p>
                <div className="tag-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.url}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel section reveal delay-2" id="experience">
        <div className="section-head">
          <p className="eyebrow">Professional Experience</p>
          <h2>Leadership and delivery across enterprise AI and product teams.</h2>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-card" key={`${item.company}-${item.period}`}>
              <p className="experience-period">{item.period}</p>
              <h3>
                {item.role} <span>{item.company}</span>
              </h3>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="panel section reveal delay-2" id="gallery">
        <div className="section-head">
          <p className="eyebrow">Engineering Gallery</p>
          <h2>Additional visuals from modern software and AI environments.</h2>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <figure className="gallery-item" key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1400}
                height={980}
                className="gallery-image"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="panel section reveal delay-3" id="skills">
        <div className="section-head">
          <p className="eyebrow">Skills & Education</p>
          <h2>University of Warsaw graduate with strong cross-stack depth.</h2>
        </div>

        <article className="education-card">
          <h3>Education</h3>
          <p>
            University of Warsaw (Sep 2014 - Oct 2018)<br />
            Bachelor of degree, Computer Software Engineering
          </p>
        </article>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel cta reveal delay-3" id="contact">
        <p className="eyebrow">Open To Opportunities</p>
        <h2>Let&apos;s build high-impact AI products together.</h2>
        <p>
          Available for Senior AI Full-Stack Engineer and Senior AI Backend
          Engineer roles.
        </p>
        <div className="hero-actions centered">
          <a className="btn btn-primary" href="mailto:donbryan019@gmail.com">
            Contact by Email
          </a>
          <a
            className="btn btn-ghost"
            href="https://beejern.com/"
            target="_blank"
            rel="noreferrer"
          >
            Beejern
          </a>
          <a className="btn btn-ghost" href="#projects">
            View All Project Links
          </a>
        </div>
      </section>
    </main>
  );
}
