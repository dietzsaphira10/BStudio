// @/components/FloatingBottomBar.tsx
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { STUDIO } from "@/lib/studio";

// --- ICONS ---
import { Sparkles, Image, Phone, CalendarCheck } from "lucide-react";

const navLinks = [
  { name: "Services", target: "#services", icon: Sparkles },
  { name: "Galerie", target: "#gallery", icon: Image },
  { name: "Kontakt", target: "#contact", icon: Phone },
];

export function FloatingBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Sichtbarkeits-Logik
    const handleScroll = () => {
      // Schwelle: Einblenden, wenn mehr als 80% der Viewport-Höhe gescrollt wurde.
      const threshold = window.innerHeight * 0.8;
      setVisible(window.scrollY > threshold);
    };

    // Initialer Check beim Mount
    handleScroll();

    // Listener hinzufügen
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Native smooth scrolling ist am performantesten
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    document.querySelector(target)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
          // fixed, z-50, und volle Breite für mobile Optimierung
          className="fixed bottom-0 left-0 right-0 z-50 w-full px-4 pb-4 md:pb-6 flex justify-center pointer-events-none"
        >
          {/* Main Glass Container - Dünner gemacht durch reduziertes Padding (p-1.5 md:p-2) */}
          <div className="pointer-events-auto flex items-center justify-between gap-1 w-full max-w-lg bg-black/30 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl p-1.5 md:p-2">
            
            {/* Nav Links - Links gruppiert */}
            <nav className="flex items-center gap-1 flex-1 justify-around">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.target}
                  onClick={(e) => handleAnchorClick(e, link.target)}
                  // App-like interaction feedback - Höhe/Breite für schlankere Leiste reduziert
                  className="group flex flex-col items-center justify-center gap-0.5 rounded-full aspect-square w-12 md:w-14 h-12 md:h-14 text-center transition duration-300 active:scale-95"
                >
                  <link.icon className="w-4 h-4 md:w-[18px] md:h-[18px] text-white group-hover:text-[#EACDCE] transition-colors" strokeWidth={1.5} />
                  <span className="text-[8px] md:text-[9px] uppercase tracking-wider font-light text-white group-hover:text-[#EACDCE] transition-colors mt-0.5">
                    {link.name}
                  </span>
                </a>
              ))}
            </nav>

            {/* Direct Booking CTA - Rechts verankert */}
            {/* HIER GEÄNDERT: Button-Höhe reduziert (h-12 md:h-14) und Farbe auf Beige-Braun geändert */}
            <a
              href={STUDIO.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-full px-5 md:px-7 text-[10px] md:text-xs font-semibold tracking-[0.05em] h-12 md:h-14 bg-[#A48973] hover:bg-[#8A7360] text-white shadow-lg shadow-[#A48973]/20 active:scale-95 transition-all uppercase"
              style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}
            >
              <CalendarCheck className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={2} />
              Termin
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}