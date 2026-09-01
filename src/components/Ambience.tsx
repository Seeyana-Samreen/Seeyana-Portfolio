import { useEffect, useState } from "react";

/** Cursor light (desktop only) + drifting circuit grid + light streaks. */
export function Ambience() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setFine(mq.matches);
    if (!mq.matches) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="grid-field animate-drift-grid absolute inset-0 opacity-60" />
      <div className="veil absolute inset-x-0 top-0 h-[70vh]" />

      {/* light streaks */}
      {[12, 34, 58, 79, 91].map((left, i) => (
        <span
          key={left}
          className="animate-streak absolute top-0 h-40 w-px"
          style={{
            left: `${left}%`,
            background:
              "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--wine-bright) 70%, transparent), transparent)",
            animationDelay: `${i * 1.9}s`,
            animationDuration: `${9 + i * 1.4}s`,
          }}
        />
      ))}

      {/* glowing nodes */}
      {[
        [8, 22],
        [24, 66],
        [47, 18],
        [63, 74],
        [82, 38],
        [92, 82],
      ].map(([l, t], i) => (
        <span
          key={`${l}-${t}`}
          className="animate-node absolute size-1 rounded-full"
          style={{
            left: `${l}%`,
            top: `${t}%`,
            background: "var(--ember)",
            boxShadow: "0 0 12px 2px color-mix(in oklab, var(--wine-bright) 80%, transparent)",
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}

      {fine && (
        <div
          className="absolute size-[520px] rounded-full transition-transform duration-300 ease-out"
          style={{
            left: pos.x - 260,
            top: pos.y - 260,
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--wine) 22%, transparent), transparent 65%)",
          }}
        />
      )}
    </div>
  );
}
