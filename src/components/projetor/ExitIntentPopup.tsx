import { useEffect, useState } from "react";
import { X, Lock } from "lucide-react";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);
  const [seconds, setSeconds] = useState(14 * 60 + 1);

  useEffect(() => {
    if (shown) return;

    const trigger = () => {
      if (!shown) {
        setOpen(true);
        setShown(true);
      }
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    let lastY = 0;
    let lastT = Date.now();
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY ?? 0;
      const t = Date.now();
      const dt = t - lastT;
      if (dt > 0) {
        const v = (y - lastY) / dt;
        if (v > 1.2 && window.scrollY < 50) trigger();
      }
      lastY = y;
      lastT = t;
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") trigger();
    };

    // Fallback: trigger after 25s of inactivity on page
    const timer = window.setTimeout(trigger, 25000);

    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("touchmove", onTouchMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [shown]);

  useEffect(() => {
    if (!open) return;
    const i = window.setInterval(
      () => setSeconds((s) => (s > 0 ? s - 1 : 0)),
      1000,
    );
    return () => window.clearInterval(i);
  }, [open]);

  if (!open) return null;

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  const scrollToBuy = () => {
    setOpen(false);
    document
      .querySelector("[data-buy-cta]")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 animate-in fade-in">
      <div className="relative w-full max-w-[420px] overflow-hidden rounded-2xl border-4 border-brand bg-background shadow-2xl animate-in zoom-in-95">
        {/* Header */}
        <div className="flex items-center justify-center bg-brand px-4 py-3 relative">
          <span className="text-sm font-bold tracking-wider text-white">
            OFERTA EXCLUSIVA
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-foreground hover:bg-white/90"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pt-6 pb-5 text-center">
          <h2 className="text-2xl font-extrabold leading-tight text-foreground">
            Vou perder essa
            <br />
            oportunidade?
          </h2>
          <p className="mt-2 text-base font-bold text-brand">
            Últimas unidades
          </p>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Se você sair agora, esse desconto especial pode não aparecer
            novamente. Liberamos mais 10% para as últimas unidades.
          </p>

          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="text-3xl font-extrabold text-brand">R$59,90</span>
            <span className="text-lg text-muted-foreground line-through">
              R$72,90
            </span>
          </div>
          <p className="mt-1 text-sm font-semibold text-green-600">
            Novo valor com desconto: R$60,69
          </p>

          <div className="mt-4 inline-flex items-center justify-center rounded-full bg-brand px-6 py-2 text-sm font-bold text-white">
            Termina em {mm}:{ss}
          </div>

          <a
            href="https://pay.transacaoseguraemprestimo.online/c/e0f6b187-d395-4e5e-ad25-fba255ce3663"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block w-full rounded-xl bg-brand py-4 text-center text-base font-extrabold tracking-wide text-white shadow-lg transition active:scale-[0.98]"
          >
            QUERO ESSE DESCONTO
          </a>

          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            Compra 100% segura • Estoque limitado
          </p>
        </div>
      </div>
    </div>
  );
}
