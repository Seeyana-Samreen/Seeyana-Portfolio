import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Ambience } from "@/components/Ambience";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Lightbox } from "@/components/Lightbox";
import {
  certificates,
  education,
  experience,
  links,
  profileUrl,
  projects,
  resumeUrl,
  skillGroups,
} from "@/data/portfolio";

const TITLE = "Seeyana Samreen — UI/UX Designer & Frontend Developer";
const DESC =
  "Portfolio of Seeyana Samreen, CSE (AI & ML) undergraduate blending UI/UX design, frontend development and creative AI technology.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function SectionHeading({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <Reveal className="mb-10">
      <p className="font-mono text-xs tracking-[0.4em] text-wine-bright uppercase">
        {index} / {label}
      </p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
      <div
        className="mt-5 h-px w-28"
        style={{ background: "var(--gradient-wine)", boxShadow: "var(--glow-soft)" }}
      />
    </Reveal>
  );
}

function Portfolio() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-background">
      <Ambience />
      <Nav />

      <main className="relative z-10">
        {/* ---------------- HERO ---------------- */}
        <section className="relative flex min-h-[100svh] items-center px-5 pt-28 pb-20">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p
                className="animate-rise font-mono text-xs tracking-[0.35em] text-wine-bright uppercase"
                style={{ animationDelay: "80ms" }}
              >
                Creative Technology Portfolio
              </p>
              <h1
                className="animate-rise mt-6 text-[clamp(2.6rem,9vw,5.5rem)] leading-[0.95] font-bold"
                style={{ animationDelay: "180ms" }}
              >
                <span className="block text-gradient-wine">SEEYANA</span>
                <span className="block text-gradient-wine">SAMREEN</span>
              </h1>
              <p
                className="animate-rise mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
                style={{ animationDelay: "320ms" }}
              >
                CSE (AI &amp; ML) Undergraduate · UI/UX Designer · Frontend Developer ·
                Creative Technology Enthusiast
              </p>

              <div
                className="animate-rise mt-9 flex flex-wrap gap-3"
                style={{ animationDelay: "440ms" }}
              >
                <a
                  href="#projects"
                  className="sweep-line focus-ring rounded-full px-6 py-3 text-sm font-medium text-primary-foreground transition-shadow"
                  style={{ background: "var(--gradient-wine)", boxShadow: "var(--glow-soft)" }}
                >
                  View Work
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-wine-bright"
                >
                  Download Résumé
                </a>
              </div>

              <div
                className="animate-rise mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground"
                style={{ animationDelay: "560ms" }}
              >
                <a className="focus-ring hover:text-foreground" href={`mailto:${links.email}`}>
                  {links.email}
                </a>
                <a
                  className="focus-ring hover:text-foreground"
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="focus-ring hover:text-foreground"
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="animate-rise relative mx-auto w-full max-w-xs" style={{ animationDelay: "300ms" }}>
              <div
                className="animate-orbit absolute -inset-6 rounded-full border border-dashed opacity-40"
                style={{ borderColor: "color-mix(in oklab, var(--wine-bright) 55%, transparent)" }}
                aria-hidden
              />
              <div
                className="animate-breathe absolute -inset-10 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in oklab, var(--wine) 40%, transparent), transparent 70%)",
                }}
                aria-hidden
              />
              <div
                className="surface-panel relative overflow-hidden rounded-[2rem]"
                style={{ boxShadow: "var(--glow-soft)" }}
              >
                <img
                  src={profileUrl}
                  alt="Portrait of Seeyana Samreen"
                  className="aspect-[3/4] w-full object-cover object-top"
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, color-mix(in oklab, var(--background) 85%, transparent), transparent 55%)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- ABOUT ---------------- */}
        <section id="about" className="scroll-mt-24 px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading index="01" label="About" title="Designing at the edge of AI." />
            <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
              <Reveal className="surface-panel glow-hover rounded-2xl p-7 sm:p-9">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  B.Tech CSE (AI &amp; ML) student combining UI/UX, frontend, AI and creative
                  technology. Interested in interactive digital experiences. Exploring React,
                  Tailwind CSS, Figma, motion design, 3D web and AI integration.
                </p>
              </Reveal>
              <Reveal delay={120} className="grid gap-4">
                {[
                  ["Focus", "UI/UX · Frontend · AI"],
                  ["Degree", "B.Tech CSE (AI & ML)"],
                  ["Based in", "Warangal, India"],
                ].map(([k, v]) => (
                  <div key={k} className="surface-panel glow-hover rounded-2xl px-6 py-5">
                    <p className="font-mono text-[11px] tracking-[0.3em] text-wine-bright uppercase">
                      {k}
                    </p>
                    <p className="mt-2 text-sm text-foreground">{v}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- EXPERIENCE ---------------- */}
        <section id="experience" className="scroll-mt-24 px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading index="02" label="Experience" title="Where I've built." />
            <ol className="relative ml-3 space-y-6 border-l border-border pl-7 sm:pl-9">
              {experience.map((e, i) => (
                <Reveal as="li" key={e.org} delay={i * 90} className="relative">
                  <span
                    className="animate-node absolute top-7 -left-[35px] size-2.5 rounded-full sm:-left-[43px]"
                    style={{
                      background: "var(--wine-bright)",
                      boxShadow: "0 0 16px 3px color-mix(in oklab, var(--wine-bright) 70%, transparent)",
                      animationDelay: `${i * 0.5}s`,
                    }}
                    aria-hidden
                  />
                  <div className="surface-panel glow-hover sweep-line grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-6 py-5">
                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-semibold">{e.org}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{e.role}</p>
                    </div>
                    <span className="shrink-0 font-mono text-[11px] tracking-wider text-wine-bright">
                      {e.period}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------------- PROJECTS ---------------- */}
        <section id="projects" className="scroll-mt-24 px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading index="03" label="Projects" title="Selected work." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <Reveal as="article" key={p.title} delay={(i % 3) * 100}>
                  <div className="surface-panel glow-hover sweep-line flex h-full flex-col rounded-2xl p-6">
                    <p className="font-mono text-[11px] tracking-[0.25em] text-wine-bright uppercase">
                      {p.stack}
                    </p>
                    <h3 className="mt-3 text-lg leading-snug font-semibold">{p.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    {p.repo ? (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-xs transition-colors hover:border-wine-bright hover:text-foreground"
                      >
                        View on GitHub <span aria-hidden>↗</span>
                      </a>
                    ) : (
                      <span className="mt-6 inline-flex w-fit rounded-full border border-border/60 px-4 py-2 text-xs text-muted-foreground">
                        Repository not public
                      </span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- SKILLS ---------------- */}
        <section id="skills" className="scroll-mt-24 px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading index="04" label="Skills" title="Toolkit." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((g, i) => (
                <Reveal key={g.label} delay={(i % 4) * 90}>
                  <div className="surface-panel glow-hover h-full rounded-2xl p-6">
                    <p className="font-mono text-[11px] tracking-[0.28em] text-wine-bright uppercase">
                      {g.label}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {g.items.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-border/80 bg-secondary/40 px-3 py-1.5 text-xs text-foreground/90 transition-colors hover:border-wine-bright"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- CERTIFICATES ---------------- */}
        <section id="certificates" className="scroll-mt-24 px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading index="05" label="Certificates" title="Credentials." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {certificates.map((c, i) => (
                <Reveal key={c.title} delay={(i % 3) * 100}>
                  <button
                    onClick={() => setOpenIdx(i)}
                    aria-label={`Open ${c.title} certificate`}
                    className="surface-panel glow-hover focus-ring group block h-full w-full overflow-hidden rounded-2xl text-left"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={c.image}
                        alt={`${c.title} certificate`}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-500 group-hover:opacity-30"
                        style={{
                          background:
                            "linear-gradient(to top, var(--background), color-mix(in oklab, var(--wine-deep) 45%, transparent))",
                        }}
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-sm leading-snug font-semibold">{c.title}</h3>
                      <p className="mt-1.5 text-xs text-muted-foreground">{c.issuer}</p>
                      <span className="mt-3 inline-block font-mono text-[10px] tracking-[0.3em] text-wine-bright uppercase">
                        View certificate
                      </span>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- EDUCATION ---------------- */}
        <section id="education" className="scroll-mt-24 px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading index="06" label="Education" title="Academics." />
            <div className="grid gap-5 md:grid-cols-2">
              {education.map((e, i) => (
                <Reveal key={e.school} delay={i * 110}>
                  <div className="surface-panel glow-hover sweep-line h-full rounded-2xl p-7">
                    <p className="font-mono text-[11px] tracking-[0.28em] text-wine-bright uppercase">
                      {e.period}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold">{e.school}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{e.detail}</p>
                    <p className="mt-4 text-sm text-foreground">{e.score}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- RESUME CTA ---------------- */}
        <section className="px-5 py-16">
          <Reveal className="mx-auto max-w-6xl">
            <div
              className="surface-panel sweep-line grid gap-6 rounded-3xl p-8 text-center sm:p-12"
              style={{ boxShadow: "var(--glow-soft)" }}
            >
              <h2 className="text-2xl font-bold sm:text-4xl">Full résumé, one click away.</h2>
              <p className="mx-auto max-w-lg text-sm text-muted-foreground">
                Experience, projects, skills, certifications and education in a single PDF.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={resumeUrl}
                  download="Seeyana_Samreen_Resume.pdf"
                  className="focus-ring rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground"
                  style={{ background: "var(--gradient-wine)", boxShadow: "var(--glow-soft)" }}
                >
                  Download Résumé
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:border-wine-bright"
                >
                  Open in new tab
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section id="contact" className="scroll-mt-24 px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              index="07"
              label="Contact"
              title="Let's build something meaningful."
            />
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                { label: "Email", value: links.email, href: `mailto:${links.email}` },
                { label: "LinkedIn", value: "seeyana-samreen", href: links.linkedin },
                { label: "GitHub", value: "Seeyana-Samreen", href: links.github },
              ].map((c, i) => (
                <Reveal key={c.label} delay={i * 100}>
                  <a
                    href={c.href}
                    {...(c.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="surface-panel glow-hover sweep-line focus-ring block h-full rounded-2xl p-7"
                  >
                    <p className="font-mono text-[11px] tracking-[0.3em] text-wine-bright uppercase">
                      {c.label}
                    </p>
                    <p className="mt-3 truncate text-sm text-foreground">{c.value}</p>
                    <span className="mt-4 inline-block text-xs text-muted-foreground">
                      Open ↗
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-border/60 px-5 py-10">
          <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
            <p className="min-w-0 truncate text-xs text-muted-foreground">
              © {new Date().getFullYear()} Seeyana Samreen
            </p>
            <p className="shrink-0 font-mono text-[10px] tracking-[0.3em] text-wine-bright uppercase">
              Designed &amp; Built
            </p>
          </div>
        </footer>
      </main>

      <Lightbox
        open={openIdx !== null}
        title={certificates[openIdx ?? 0]?.title ?? ""}
        issuer={certificates[openIdx ?? 0]?.issuer ?? ""}
        image={certificates[openIdx ?? 0]?.image ?? ""}
        onClose={() => setOpenIdx(null)}
        onPrev={() =>
          setOpenIdx((i) => (i === null ? i : (i - 1 + certificates.length) % certificates.length))
        }
        onNext={() => setOpenIdx((i) => (i === null ? i : (i + 1) % certificates.length))}
      />
    </div>
  );
}
