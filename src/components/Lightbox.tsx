import { useEffect, useRef } from "react";

export function Lightbox({
  open,
  title,
  issuer,
  image,
  onClose,
  onPrev,
  onNext,
}: {
  open: boolean;
  title: string;
  issuer: string;
  image: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-8"
      style={{ background: "oklch(0.04 0.01 20 / 0.88)", backdropFilter: "blur(10px)" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="animate-modal-in surface-panel relative w-full max-w-4xl overflow-hidden rounded-2xl"
        style={{ boxShadow: "var(--glow-strong)" }}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border/70 px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold sm:text-base">{title}</h3>
            <p className="truncate text-xs text-muted-foreground">{issuer}</p>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close certificate preview"
            className="focus-ring shrink-0 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-wine-bright hover:text-foreground"
          >
            Close ✕
          </button>
        </div>

        <div className="relative bg-background/60 p-3 sm:p-6">
          <img
            src={image}
            alt={`${title} certificate`}
            className="mx-auto max-h-[68vh] w-full rounded-lg object-contain"
          />
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border/70 px-4 py-3 sm:px-6">
          <button
            onClick={onPrev}
            className="focus-ring rounded-full border border-border px-4 py-1.5 text-xs transition-colors hover:border-wine-bright hover:text-foreground"
          >
            ← Prev
          </button>
          <span className="text-[11px] tracking-widest text-muted-foreground uppercase">
            Esc to close
          </span>
          <button
            onClick={onNext}
            className="focus-ring rounded-full border border-border px-4 py-1.5 text-xs transition-colors hover:border-wine-bright hover:text-foreground"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
