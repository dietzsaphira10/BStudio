import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Asset Import für das Logo
import logoImage from "@/assets/InstagramLogo.jpg"; // Bitte Pfad und Groß-/Kleinschreibung prüfen

// --- AKTUELLE DATEN AUS DEINEM GOOGLE EINTRAG ---
const STUDIO_DATA = {
  name: "BSTUDIO 893",
  tagline: "Nagelstudio in Zürich, Schweiz",
  email: "info@bstudio893.ch", // Platzhalter, falls du eine Mailadresse hast
  phone: "+41 78 307 96 88",
  address: "Bahnhofplatz 3, 8001 Zürich, Schweiz"
};

// --- HILFS-KOMPONENTE: COMING SOON POPUP ---
function ComingSoonModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  
  // Schließen mit Escape-Taste
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#111111]/40 backdrop-blur-sm"
          onClick={onClose} // Schließt bei Klick auf den Hintergrund
        >
          <motion.div
            initial={{ scale: 0.9, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 15 }}
            transition={{ type: "spring", mass: 0.8, damping: 20 }}
            className="relative w-full max-w-sm rounded-2xl bg-[#FAF9F6] p-10 shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()} // Verhindert das Schließen bei Klick auf das Modal
          >
            {/* Schließen Button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center text-[#111111]/40 hover:text-[#111111]"
            >
              <span className="text-lg">✕</span>
            </button>

            {/* Inhalt */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-[#A48973]"></div>
              <span className="font-jost text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] text-[#A48973]">
                Hinweis
              </span>
            </div>

            <h4 className="font-serif italic font-light text-3xl md:text-4xl text-[#111111] mb-4">
              Coming Soon.
            </h4>
            
            <p className="font-jost text-sm text-[#111111]/70 leading-relaxed italic">
              Vielen Dank für dein Interesse! Wir arbeiten gerade fleißig an diesem Bereich für {STUDIO_DATA.name}.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- FOOTER HAUPT-KOMPONENTE ---
export function Footer() {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

  // Zentraler Click-Handler für deaktivierte Links
  const handleDisabledLinkClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Verhindert Navigation oder E-Mail/Anruf-Aktion
    setIsComingSoonOpen(true); // Öffnet das Popup
  };

  return (
    <>
      {/* Das helle Farbschema (Feather White Hintergrund, Ink Text) */}
      <footer className="relative bg-[#FAF9F6] text-[#111111] border-t border-[#111111]/5">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            
            {/* === MARKEN / SLOGAN BEREICH === */}
            <div className="col-span-12 md:col-span-5 flex flex-col items-start text-left">
              
              {/* Logo aus den Assets */}
              <div className="h-14 w-14 mb-6 overflow-hidden rounded-full border border-neutral-200">
                 <img src={logoImage} alt={STUDIO_DATA.name} className="h-full w-full object-cover" />
              </div>

              <h3 className="font-serif italic font-light tracking-wide text-[#111111] text-4xl sm:text-5xl lg:text-6xl">
                {STUDIO_DATA.name}
              </h3>
              
              <p className="font-jost text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#111111]/60 mt-6">
                — {STUDIO_DATA.tagline}
              </p>
            </div>

            {/* === NAVIGATION (Alle deaktiviert) === */}
            <div className="col-span-6 md:col-span-3 md:col-start-7 text-left">
              <p className="font-jost text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#111111]/50 mb-6">
                Navigation
              </p>
              <ul className="space-y-4 text-sm font-medium tracking-wide">
                {/* Deaktivierte Links mit gelbem Hover-Effekt */}
                <li><a href="#" onClick={handleDisabledLinkClick} className="cursor-pointer hover:text-[#A48973] transition-colors">Studio</a></li>
                <li><a href="#" onClick={handleDisabledLinkClick} className="cursor-pointer hover:text-[#A48973] transition-colors">Preise</a></li>
                <li><a href="#" onClick={handleDisabledLinkClick} className="cursor-pointer hover:text-[#A48973] transition-colors">Galerie</a></li>
                <li><a href="#" onClick={handleDisabledLinkClick} className="cursor-pointer hover:text-[#A48973] transition-colors">Impressum</a></li>
              </ul>
            </div>

            {/* === KONTAKT / FOLGEN (Alle deaktiviert) === */}
            <div className="col-span-6 md:col-span-3 text-left">
              <p className="font-jost text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#111111]/50 mb-6">
                Folgen & Kontakt
              </p>
              <ul className="space-y-4 text-sm font-medium tracking-wide">
                <li><a href="#" onClick={handleDisabledLinkClick} className="cursor-pointer hover:text-[#A48973] transition-colors">Instagram</a></li>
                <li><a href="#" onClick={handleDisabledLinkClick} className="cursor-pointer hover:text-[#A48973] transition-colors">{STUDIO_DATA.email}</a></li>
                <li><a href="#" onClick={handleDisabledLinkClick} className="cursor-pointer hover:text-[#A48973] transition-colors">{STUDIO_DATA.phone}</a></li>
              </ul>
            </div>
          </div>

          {/* === FOOTER BOTTOM BEREICH === */}
          <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-[#111111]/10 pt-8 md:flex-row md:items-center">
            <p className="font-jost text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#111111]/50">
              © {new Date().getFullYear()} {STUDIO_DATA.name} • Alle Rechte vorbehalten
            </p>
            <p className="font-jost text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#111111]/50">
              {STUDIO_DATA.address}
            </p>
          </div>
        </div>
        
        {/* Platzhalter für mobile Marquee */}
        <div className="h-20 md:h-0" />
      </footer>

      {/* --- COMING SOON MODAL --- */}
      <ComingSoonModal 
        isOpen={isComingSoonOpen} 
        onClose={() => setIsComingSoonOpen(false)} 
      />
    </>
  );
}