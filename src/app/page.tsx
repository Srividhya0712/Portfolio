export default function Home() {
  return (
    <main>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        {/* Decorative gradient blob */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-accent-soft via-bg-warm to-transparent opacity-60 blur-3xl" />

        <p className="relative z-10 mb-4 text-lg font-medium text-accent">
          Hey, I&apos;m Srividhya{" "}
          <span className="inline-block animate-bounce">👋</span>
        </p>

        <h1 className="relative z-10 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-text-primary sm:text-5xl md:text-6xl">
          I build full-stack web &amp; mobile apps using{" "}
          <span className="bg-gradient-to-r from-accent to-sage bg-clip-text text-transparent">
            data &amp; cloud
          </span>
        </h1>

        <p className="relative z-10 mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
          The kind that solve real problems and make life a little easier for
          users. I enjoy working end to end — from crafting clean interfaces to
          building solid backends, working with data, and deploying applications
          that scale without drama.
        </p>

        <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-dark hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border bg-white px-8 py-3 text-sm font-semibold text-text-primary shadow-sm transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-text-muted/40 to-transparent" />
        </div>
      </section>

      {/* ═══════════════════ ABOUT ═══════════════════ */}
      <section id="about" className="py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>About Me</SectionLabel>
          <h2 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl">
            Curious builder, structured thinker
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                I&apos;m a final-year MCA student at PSG College of Technology
                who enjoys building things that actually work in the real world.
                I like understanding how systems come together — not just writing
                code, but seeing how data flows, services connect, and users
                interact with what I build.
              </p>
              <p>
                With a strong background in mathematics, I naturally lean toward
                structured thinking and problem-solving. I enjoy working with
                data, spotting patterns, and turning raw information into
                something useful and easy to understand.
              </p>
            </div>
            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                For me, data engineering isn&apos;t just about pipelines —
                it&apos;s about clarity. I care a lot about building things
                cleanly and thoughtfully.
              </p>
              <p>
                Whether it&apos;s a small feature or a full application, I like
                keeping systems simple, reliable, and pleasant to use.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {["End-to-End Ownership", "Clean Architecture", "User-Focused"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold text-accent-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ WHAT I DO ═══════════════════ */}
      <section id="whatido" className="py-24 px-6 bg-bg-warm">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>What I Do</SectionLabel>
          <h2 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl">
            Three pillars of my work
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ServiceCard
              icon="🚀"
              title="Full-Stack Development"
              description="Building clean, scalable web and mobile applications across frontend and backend. I enjoy creating user-friendly interfaces, writing backend logic that makes sense, and making sure everything runs smoothly once deployed."
            />
            <ServiceCard
              icon="📊"
              title="Data Engineering & Visualization"
              description="Working with data pipelines, analytics, and visualizing insights in a clear and intuitive way. If something can be made clearer with the right chart or workflow, I'll happily do that."
            />
            <ServiceCard
              icon="☁️"
              title="Cloud & DevOps"
              description="Taking applications all the way to production — containerizing them, setting up CI/CD pipelines, and deploying on cloud platforms so they're ready for real users, not just localhost."
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════ FEATURED PROJECTS ═══════════════════ */}
      <section id="projects" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Featured Projects</SectionLabel>
          <h2 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl">
            Things I&apos;ve built
          </h2>

          <div className="mt-12 space-y-12">
            <ProjectCard
              title="CropIQ — Smart Gardening Dashboard"
              problem="Helping users make smarter gardening decisions using data."
              description="A data-driven web application that brings together plant recommendations, fertilizer guidance, and plant disease detection in one place. This project combined data, ML, and UI design — balancing technical complexity with a simple, friendly user experience."
              tags={["Python", "Flask", "ML", "React", "Data Visualization"]}
              githubUrl="#"
              imageAlt="CropIQ dashboard screenshot"
            />
            <ProjectCard
              title="Smart City Traffic Heatmap & Analysis"
              problem="Turning traffic data into something you can actually understand."
              description="An analytical dashboard that processes traffic datasets and visualizes congestion patterns using interactive heatmaps. Working on this project strengthened my skills in data processing, visualization, and cloud deployment — all while tackling a very real-world problem."
              tags={["Python", "Data Analytics", "Heatmaps", "Cloud", "Visualization"]}
              githubUrl="#"
              imageAlt="Traffic heatmap screenshot"
              reverse
            />
            <ProjectCard
              title="Academic Resource Management System"
              problem="Helping students and faculty share academic resources more efficiently."
              description="A full-stack platform focused on secure access, better performance, and a smoother overall experience. Through this project, I gained hands-on experience building scalable systems, improving database performance, and thinking about reliability from a user's perspective."
              tags={["Java", "Spring Boot", "React", "PostgreSQL", "REST API"]}
              githubUrl="#"
              imageAlt="Academic resource management screenshot"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════ HOW I BUILD ═══════════════════ */}
      <section id="howibuild" className="py-24 px-6 bg-bg-warm">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>How I Build</SectionLabel>
          <h2 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl">
            The full picture
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-text-secondary">
            I like to think in terms of the full picture. When I build something,
            I care about how the pieces fit together — the data, the APIs, the
            frontend, and the deployment.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            I prefer clean architecture over quick hacks, and simple solutions
            over clever-but-fragile ones. My goal is always to build systems that
            feel calm, reliable, and easy to maintain.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: "🏗️", label: "Clean Architecture" },
              { icon: "🔄", label: "Data Flow" },
              { icon: "📐", label: "Scalability" },
              { icon: "🎯", label: "User Experience" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white p-6 shadow-sm border border-border-light hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-sm font-semibold text-text-primary">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SKILLS & TOOLS ═══════════════════ */}
      <section id="skills" className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <SectionLabel>Skills &amp; Tools</SectionLabel>
          <h2 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl">
            My toolkit
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <SkillGroup
              title="Languages"
              skills={["Python", "Java", "JavaScript", "SQL", "TypeScript"]}
            />
            <SkillGroup
              title="Frameworks"
              skills={["React", "Spring Boot", "Node.js", "Flask", "Next.js"]}
            />
            <SkillGroup
              title="Data & ML"
              skills={["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Jupyter"]}
            />
            <SkillGroup
              title="Cloud & DevOps"
              skills={["Docker", "Jenkins", "Git", "AWS", "CI/CD"]}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════ EXPERIENCE & ACHIEVEMENTS ═══════════════════ */}
      <section id="experience" className="py-24 px-6 bg-bg-warm">
        <div className="mx-auto max-w-4xl">
          <SectionLabel>Experience &amp; Achievements</SectionLabel>
          <h2 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl">
            Learning by doing
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm border border-border-light">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Freelance STEM Tutoring
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Alongside my academic work, I&apos;ve spent a lot of time teaching
                mathematics and computer science as a freelance STEM tutor.
                Explaining concepts to students from different backgrounds taught
                me how to communicate clearly and think patiently.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm border border-border-light">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Academic Excellence
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I&apos;ve done well in competitive exams and coursework,
                reflecting my strong quantitative foundation and consistent
                approach to learning and problem-solving. I believe in continuous
                growth and staying curious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BEYOND TECH ═══════════════════ */}
      <section id="beyond" className="py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Beyond Tech</SectionLabel>
          <h2 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl">
            The human side
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-text-secondary">
            When I&apos;m not coding, you&apos;ll probably find me cooking,
            reading, or painting. I enjoy these creative breaks — they help me
            reset, experiment, and come back to problem-solving with a fresh
            perspective.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: "🍳", label: "Cooking" },
              { icon: "📚", label: "Reading" },
              { icon: "🎨", label: "Painting" },
            ].map((hobby) => (
              <div
                key={hobby.label}
                className="flex items-center gap-3 rounded-full bg-sage-soft px-6 py-3 text-sm font-medium text-sage border border-sage/10"
              >
                <span className="text-xl">{hobby.icon}</span>
                {hobby.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT ═══════════════════ */}
      <section id="contact" className="py-24 px-6 bg-bg-warm">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Let&apos;s Connect</SectionLabel>
          <h2 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl">
            Have an idea? Let&apos;s chat
          </h2>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed">
            If you&apos;re working on something interesting, exploring
            data-driven ideas, or just want to talk tech, I&apos;d love to
            connect. Let&apos;s build something cool.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:srividhya@example.com"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-text-primary shadow-sm border border-border hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
            <a
              href="https://linkedin.com/in/srividhya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-text-primary shadow-sm border border-border hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/Srividhya0712"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-text-primary shadow-sm border border-border hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="border-t border-border-light py-8 px-6 text-center text-sm text-text-muted">
        <p>
          Designed &amp; built by Srividhya · {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}

/* ─── Sub-components ─── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-accent-dark">
      {children}
    </span>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl bg-white p-8 shadow-sm border border-border-light hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="text-4xl mb-5">{icon}</div>
      <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function ProjectCard({
  title,
  problem,
  description,
  tags,
  githubUrl,
  imageAlt,
  reverse = false,
}: {
  title: string;
  problem: string;
  description: string;
  tags: string[];
  githubUrl: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`group flex flex-col gap-8 rounded-2xl bg-white p-8 shadow-sm border border-border-light hover:shadow-lg transition-all duration-300 md:flex-row md:items-center ${reverse ? "md:flex-row-reverse" : ""
        }`}
    >
      {/* Image placeholder */}
      <div className="flex-shrink-0 w-full md:w-72 h-48 rounded-xl bg-gradient-to-br from-accent-soft via-bg-warm to-sage-soft flex items-center justify-center border border-border-light overflow-hidden">
        <div className="text-center text-text-muted">
          <div className="text-4xl mb-2">🖼️</div>
          <p className="text-xs">{imageAlt}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm font-medium text-accent">{problem}</p>
        <p className="text-text-secondary leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent-soft/60 px-3 py-1 text-xs font-medium text-accent-dark"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div className="rounded-2xl bg-bg-warm p-6 border border-border-light">
      <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-text-primary border border-border-light hover:border-accent hover:text-accent transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
