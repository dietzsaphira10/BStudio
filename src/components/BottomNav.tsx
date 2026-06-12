import { Link } from "@tanstack/react-router";
import { STUDIO } from "@/lib/studio";

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="grid grid-cols-4 border-t border-ink/10 bg-background/95 backdrop-blur-xl">
        <Link to="/" className="flex flex-col items-center gap-1.5 py-3.5 text-[9px] uppercase tracking-luxe text-ink">
          <span className="font-display text-base leading-none">S</span>
          Studio
        </Link>
        <Link to="/preise" className="flex flex-col items-center gap-1.5 border-l border-ink/10 py-3.5 text-[9px] uppercase tracking-luxe text-ink">
          <span className="font-display text-base leading-none">P</span>
          Preise
        </Link>
        <Link to="/galerie" className="flex flex-col items-center gap-1.5 border-l border-ink/10 py-3.5 text-[9px] uppercase tracking-luxe text-ink">
          <span className="font-display text-base leading-none">G</span>
          Galerie
        </Link>
        <a href={STUDIO.bookingUrl} className="flex flex-col items-center gap-1.5 border-l border-ink/10 bg-ink py-3.5 text-[9px] uppercase tracking-luxe text-background">
          <span className="h-1.5 w-1.5 bg-gold" />
          Termin
        </a>
      </div>
    </nav>
  );
}
