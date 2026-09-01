import { useEffect, useState } from "react";

const sections = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["certificates", "Certificates"],
  ["education", "Education"],
  ["contact", "Contact"],
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl" : ""
      }`}
      style={
        scrolled
          ? {
              background: "color-mix(in oklab, var(--background) 82%, transparent)",
              borderBottom: "1px solid color-mix(in oklab, var(--wine) 28%, transparent)",
            }
          : undefined
      }
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="focus-ring min-w-0 truncate text-left font-display text-sm font-bold tracking-[0.28em] text-foreground uppercase"
        >
          Seeyana<span className="text-wine-bright">.</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {sections.map(([id, label]) => (
            <li key={id}>
              <button
                onClick={() => go(id)}
                className={`focus-ring relative rounded-full px-3.5 py-2 text-xs tracking-wide transition-colors ${
                  active === id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
                {active === id && (
                  <span
                    className="absolute inset-x-3 -bottom-0.5 h-px"
                    style={{
                      background: "var(--gradient-wine)",
                      boxShadow: "var(--glow-soft)",
                    }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="focus-ring shrink-0 rounded-full border border-border px-3 py-2 text-xs lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul className="animate-rise border-t border-border/60 bg-background/95 px-5 pb-5 backdrop-blur-xl lg:hidden">
          {sections.map(([id, label]) => (
            <li key={id}>
              <button
                onClick={() => go(id)}
                className="focus-ring w-full border-b border-border/40 py-3 text-left text-sm text-muted-foreground"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
