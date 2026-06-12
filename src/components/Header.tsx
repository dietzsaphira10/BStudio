import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { STUDIO } from "@/lib/studio";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const onHero = path === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = onHero && !scrolled;

  // Funktion zum Abfangen der Klicks
  const handleComingSoon = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowComingSoon(true);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-700 ease-out ${
          transparent
            ? "bg-transparent py-6 text-white border-b-0 shadow-none"
            : "bg-background/30 py-4 text-ink backdrop-blur-lg border-b border-white/20 shadow-sm"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-12">
          <Link to="/" className="flex items-center gap-3">
            <span className={`inline-block h-1.5 w-1.5 ${transparent ? "bg-white" : "bg-gold"}`} />
            <span
              className="font-display text-xl md:text-2xl"
              style={{ letterSpacing: "0.04em" }}
            >
              {STUDIO.name}
            </span>
          </Link>
          
          <nav className="hidden items-center gap-12 text-[10px] uppercase tracking-luxe md:flex">
            <button onClick={handleComingSoon} className="hover:opacity-60 transition-opacity uppercase">Studio</button>
            <button onClick={handleComingSoon} className="hover:opacity-60 transition-opacity uppercase">Preise</button>
            <button onClick={handleComingSoon} className="hover:opacity-60 transition-opacity uppercase">Galerie</button>
            <button onClick={handleComingSoon} className="hover:opacity-60 transition-opacity uppercase">Instagram</button>
          </nav>

          <button
            onClick={handleComingSoon}
            className={`btn hidden md:inline-flex !py-3 !px-5 ${transparent ? "btn-ghost-light" : "btn-filled"}`}
          >
            Termin
          </button>
        </div>
      </header>

      {/* --- COMING SOON POPUP --- */}
      <AnimatePresence>
        {showComingSoon && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowComingSoon(false)}
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-background p-10 md:p-16 text-center shadow-2xl border border-gold/20"
              style={{ borderRadius: 0 }} // Garantiert scharfe Kanten
            >
              <span className="eyebrow mb-4 block">BSTUDIO 893</span>
              <h2 className="font-display text-3xl md:text-4xl mb-6">Coming Soon</h2>
              <p className="text-ink-soft text-sm font-light leading-relaxed mb-10">
                Unsere neue digitale Präsenz befindet sich aktuell im Aufbau. 
                Wir freuen uns darauf, dich bald hier begrüßen zu dürfen.
              </p>
              <button 
                onClick={() => setShowComingSoon(false)}
                className="btn btn-filled w-full"
              >
                Schliessen
              </button>
              
              {/* Dekorative Linie */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gold" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}