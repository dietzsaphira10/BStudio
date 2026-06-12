import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { SVGProps, PointerEvent } from "react";
import { STUDIO } from "@/lib/studio";

// Asset Imports (Bitte prüfen, ob die Pfade bei dir stimmen!)
import hero from "@/assets/studio-hero.mp4";
import logoImage from "@/assets/LogoGlow2.png"; 
import atelierThumb from "@/assets/studiointerior.jpg";

// --- B STUDIO NAILS LOGO (Fallback / Hover-Komponente) ---
export function BStudioNailsLogo({
  className = "w-full h-auto",
  title = "B Studio Nails",
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    const ry = px * 16;
    const rx = -py * 10;
    el.style.setProperty("--bsn-rx", `${rx.toFixed(2)}deg`);
    el.style.setProperty("--bsn-ry", `${ry.toFixed(2)}deg`);
    el.style.setProperty("--bsn-active", "1");
  };

  const handleLeave = () => {
    const el = wrapperRef.current;
    if (!el) return;
    el.style.setProperty("--bsn-rx", "0deg");
    el.style.setProperty("--bsn-ry", "0deg");
    el.style.setProperty("--bsn-active", "0");
  };

  return (
    <div
      ref={wrapperRef}
      className="bsn-logo-wrapper inline-block w-full"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{ overflow: "visible" }}
    >
      <style>{`
        .bsn-logo-wrapper {
          perspective: 1200px;
          perspective-origin: 50% 50%;
          overflow: visible;
          --bsn-rx: 0deg;
          --bsn-ry: 0deg;
          --bsn-active: 0;
        }
        .bsn-logo-wrapper svg {
          transform-style: preserve-3d;
          transform-origin: 50% 50%;
          transform: rotateX(var(--bsn-rx)) rotateY(var(--bsn-ry));
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), filter 0.35s ease-out;
          filter: drop-shadow(0 0 5px rgba(255,255,255,0.85)) drop-shadow(0 0 16px rgba(255,255,255,0.4));
          will-change: transform, filter;
          display: block;
        }
        .bsn-logo-wrapper:hover svg {
          filter: drop-shadow(0 0 7px #fff) drop-shadow(0 0 22px rgba(255,255,255,0.65)) drop-shadow(0 0 44px rgba(200,220,255,0.5));
        }
      `}</style>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="50 120 950 620"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={title}
        overflow="visible"
        className={className}
        {...props}
      >
        <title>{title}</title>
        <defs>
          <linearGradient id="bsn-white" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#f5f8ff" />
            <stop offset="100%" stopColor="#c9d4e6" />
          </linearGradient>

          <linearGradient id="bsn-sheen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g fill="url(#bsn-white)">
          <rect x="598" y="130" width="6" height="250" />
          <rect x="576" y="185" width="5" height="160" />
          <text x="80" y="455" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight={800} fontSize="92" letterSpacing="2"></text>
          <text x="650" y="370" fontFamily="'Didot', 'Bodoni 72', 'Playfair Display', Georgia, serif" fontWeight={700} fontSize="270"></text>
          <text x="810" y="500" fontFamily="'Didot', 'Bodoni 72', 'Playfair Display', Georgia, serif" fontStyle="italic" fontWeight={400} fontSize="325"></text>
          <rect x="536" y="480" width="6" height="250" />
          <rect x="556" y="520" width="5" height="160" />
          <text x="600" y="680" fontFamily="'Didot', 'Bodoni 72', 'Playfair Display', Georgia, serif" fontWeight={700} fontSize="270"></text>
        </g>
        <g fill="url(#bsn-sheen)" aria-hidden="true">
          <text x="80" y="455" fontFamily="'Helvetica Neue', Arial, sans-serif" fontWeight={800} fontSize="92" letterSpacing="2"></text>
        </g>
      </svg>
    </div>
  );
}

// --- ANIMATIONS-VARIANTEN ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.5 },
  },
};

const fadeUpBlur = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, mass: 0.8, damping: 20 },
  },
};

// --- HERO SEKTION ---
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yVideo = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-neutral-950 text-white flex flex-col justify-center pb-24 md:pb-0"
      aria-label="Hero"
    >
      {/* Subtile Sternen-/Glow-Atmosphäre */}
      <div className="pointer-events-none absolute inset-0 opacity-40 z-10">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      {/* --- VIDEO / BACKGROUND --- */}
      <motion.div
        style={{ y: yVideo, scale: scaleVideo }}
        className="absolute inset-0 z-0"
      >
        <video
          src={hero}
          autoPlay
          muted
          loop
          playsInline // Sehr wichtig für iPhone Safari!
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-[radial-(ellipse_at_top,_rgba(100,100,120,0.3),_rgba(20,20,25,0.8)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/0" />
      </motion.div>

      {/* --- TOP META BAR --- */}
      <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 py-5 text-[11px] uppercase tracking-[0.3em] text-neutral-300 md:px-10">
        <span>{STUDIO.city}</span>
        <span> {STUDIO.since}</span>
      </div>

      {/* --- CONTENT BLOCK --- */}
      <motion.div
        style={{ opacity: opacityText }}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-20 mx-auto flex w-full max-w-[1400px] flex-col items-center px-6 py-12 md:py-16"
      >
        {/* LOGO: Verzögerung von 3 Sekunden und wieder GRÖSSER auf dem Desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 3, duration: 1.5, ease: "easeOut" }} 
          className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[750px] xl:max-w-[850px] cursor-pointer flex justify-center shrink-0 -translate-x-2 md:-translate-x-4 translate-y-6 md:translate-y-16"
        >
          <img 
            src={logoImage} 
            alt="B Studio Nails Logo" 
            // HIER GEÄNDERT: drop-shadow-2xl ersetzt durch drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] für den sanften Glow
            className="w-full h-auto max-h-[30dvh] md:max-h-[55dvh] object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] md:scale-125 lg:scale-[1.75]" 
          />
        </motion.div>

        {/* 3-SPALTIGES GRID-LAYOUT */}
        <div className="mt-8 md:mt-24 flex w-full flex-col md:grid md:grid-cols-3 md:items-center gap-8 md:gap-4 px-0 lg:px-8">
          
          {/* Linke Seite: Leer auf Desktop */}
          <div className="hidden md:block"></div>

          {/* Mitte: Text Block */}
          <div className="flex flex-col items-center text-center justify-center w-full">
            <motion.p
              variants={fadeUpBlur}
              className="mt-3 md:mt-4 max-w-[280px] md:max-w-sm text-lg md:text-xl font-light leading-relaxed text-white/90"
            >
            </motion.p>

            <motion.a
              variants={fadeUpBlur}
              href={STUDIO.bookingUrl}
              className="mt-6 inline-flex items-center justify-center border border-white/20 bg-white/10 backdrop-blur-md px-10 py-4 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-white transition-all hover:bg-white/20 hover:border-white/40"
            >
              Termin buchen
            </motion.a>

            <motion.p
              variants={fadeUpBlur}
              className="mt-4 text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/70"
            >
              — Nagelstudio Zürich
            </motion.p>
          </div>

          {/* Rechte Seite: Atelier Karte & Mehr Entdecken Button */}
          <motion.div variants={fadeUpBlur} className="flex flex-col gap-3 w-full sm:max-w-[320px] mx-auto md:mx-0 md:ml-auto md:w-full lg:max-w-[280px]">
            
            {/* Atelier Info Card */}
            <div className="flex w-full items-center gap-4 border border-white/20 bg-white/10 p-3 backdrop-blur-md justify-start">
              <img src={atelierThumb} alt="Atelier" className="h-14 w-20 md:h-16 md:w-24 object-cover shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] md:text-xs font-medium uppercase tracking-widest text-white">Unser Atelier</span>
                <span className="text-[9px] md:text-[10px] text-white/70">Besuche uns vor Ort</span>
              </div>
            </div>

            {/* Reservieren Button */}
            <a
              href={STUDIO.bookingUrl}
              className="flex w-full items-center justify-center border border-white/20 bg-white/85 backdrop-blur-md px-6 py-3 md:py-4 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white"
            >
              Mehr entdecken ↗
            </a>
          </motion.div>

        </div>
      </motion.div>
        
      {/* --- GLASS MARQUEE --- */}
      <div className="absolute bottom-0 left-0 right-0 z-30 overflow-hidden border-t border-white/10 bg-white/5 py-4 backdrop-blur-md">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-12 px-6 text-[10px] uppercase tracking-[0.3em] text-white/40"
            >
              <span>Maniküre</span>
              <span>•</span>
              <span>Pediküre</span>
              <span>•</span>
              <span>Nagelkunst</span>
              <span>•</span>
              <span>BStudio 893</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}