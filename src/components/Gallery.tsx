import { useState, useEffect, useRef } from "react";
import { Shield, Sparkles, Heart, Zap } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Asset Imports
import vlog from "@/assets/studiovlog.mp4";
import studio from "@/assets/studiointerior.jpg";
import Nails from "@/assets/NailsCloseup.jpg";
import Nails2 from "@/assets/NailsCloseupRed.jpg";
import Nails3 from "@/assets/NailsGold.jpg";
import Nails4 from "@/assets/NailsLongGlitter.jpg";
import Nails5 from "@/assets/NailsPinkFlower.jpg";
import Nails6 from "@/assets/NailsStiletto.jpg";
import Nails7 from "@/assets/NailsSummer..jpg";
import heroVideo from "@/assets/studio-hero.mp4";

const AutoSlideshow = ({ images, className }: { images: string[], className?: string }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((p) => (p + 1) % images.length), 1500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      className={`group relative overflow-hidden bg-[#E6DAC3] cursor-pointer rounded-xl ${className}`}
      onClick={() => setIdx((p) => (p + 1) % images.length)}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-4 right-4 z-10 flex gap-1.5">
        {images.map((_, i) => (
          <div key={i} className={`h-1 transition-all duration-300 ${i === idx ? "w-4 bg-white" : "w-1.5 bg-white/40"}`} />
        ))}
      </div>
    </div>
  );
};

export function Gallery() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 100 });

  const xOffset = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const yOffset = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!parallaxRef.current) return;
    const { left, top, width, height } = parallaxRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  };

  return (
    <section 
    
    className="relative bg-background/50 backdrop-blur-md">
      
      {/* --- TRENNER VERSION 3: MAUS PARALLAX --- */}
      <div 
        ref={parallaxRef}
        onMouseMove={handleMouseMove}
        className="relative w-full overflow-hidden py-24 px-6 md:py-32"
      >
        {/* Bilder-Layer (pointer-events-none, damit sie nicht im Weg sind) */}
        <motion.div style={{ x: xOffset, y: yOffset }} className="absolute inset-[-40px] z-0 pointer-events-none">
          <img src={Nails7} alt="Studio Blur" className="h-full w-full object-cover blur-[2px] opacity-90" />
        </motion.div>
        
        {/* Sanfte Overlay-Filter passend zur Palette */}
        <div className="absolute inset-0 z-10 bg-[#E6DAC3]/30 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-[#FAF9F6]/60 pointer-events-none" />

        {/* HIER GEÄNDERT: Grid-Layout für Links (Titel), Mitte (Button), Rechts (Text) */}
        <div className="relative z-20 mx-auto grid max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-3 items-center text-center md:text-left">
          
          {/* LINKS: Überschrift in der Farbpalette */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.1em] text-ink leading-tight" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
              Mehr als nur <br className="hidden md:block" />
              <span className="font- italic text-[#A48973] UPPERCASE tracking-normal">NAGELDESIGN.</span>
            </h2>
          </div>

          {/* MITTE: Instagram CTA */}
          <div className="flex justify-center">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-[#FAF9F6] border border-[#A48973]/30 px-8 py-4 text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#A48973] hover:bg-[#A48973] hover:text-[#FAF9F6] hover:border-[#A48973] transition-all duration-300 font-medium rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1"
              style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}
            >
              Entdecke unser Instagram ↗
            </a>
          </div>

          {/* RECHTS: Aufgewerteter, eleganter Text */}
          <div className="flex flex-col items-center md:items-end md:text-right border-t border-[#A48973]/20 pt-8 md:pt-0 md:border-t-0 md:border-r-2 md:pr-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#A48973] mb-3 font-medium" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
              Unser Anspruch
            </p>
            <p className="max-w-[280px] text-sm md:text-base font-light leading-relaxed text-ink/80">
              Ein Konzept, das <span className="font-medium text-ink">reine Ästhetik</span>, kompromisslose Hygiene und tiefgehende Entspannung auf höchstem Niveau vereint.
            </p>
          </div>

        </div>
      </div>

      {/* CONTAINER 1: PHILOSOPHIE (Kompakt, Editorial & Aufregende Vorteile) */}
      {/* HIER GEÄNDERT: pb-8 statt pb-16/20, um den Abstand nach unten zu verringern */}
      <div className="relative w-full overflow-hidden pt-16 pb-8 md:pt-24 md:pb-8">
        
        {/* Dekorlinien SVG */}
        <div className="absolute inset-0 -z-10 pointer-events-none text-ink-soft opacity-15 overflow-hidden">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="w-full h-full">
            <path d="M -300 1000 A 2000 2000 0 0 1 1300 -300" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M -300 950  A 2000 2000 0 0 1 1300 -350" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M -300 900  A 2000 2000 0 0 1 1300 -400" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M -300 850  A 2000 2000 0 0 1 1300 -450" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M -300 800  A 2000 2000 0 0 1 1300 -500" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M 800 -300 A 1800 1800 0 0 1 1300 800" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M 850 -300 A 1800 1800 0 0 1 1300 850" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M 900 -300 A 1800 1800 0 0 1 1300 900" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M 950 -300 A 1800 1800 0 0 1 1300 950" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-[1300px] px-6 md:px-12">
          
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 relative pb-16 lg:pb-0">
            
            <div className="flex flex-col items-start lg:w-5/12 z-10 pt-2 md:pt-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.1em] text-ink leading-tight mb-5 max-w-xl" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
                Die Ästhetik der ganzen Hand
              </h2>
              <p className="max-w-md text-base md:text-lg font-light leading-relaxed text-ink/80 mb-8">
                Seit 2017 füllen wir diesen Raum mit unglaublich viel Liebe und Leidenschaft. Nach unserem großen Umbau atmet das Studio nun eine völlig neue, ruhige Energie. Wir arbeiten ausschließlich mit hochwertigem Gel und präziser Technik.
              </p>
              <a 
                href="/preise" 
                className="bg-[#A48973] px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[#FAF9F6] transition-all hover:bg-ink shadow-sm"
                style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}
              >
                Preise ansehen
              </a>
            </div>

            <div className="relative w-full lg:w-7/12 flex justify-center lg:justify-end z-10">
              <div className="relative w-full max-w-[550px]">
                
                <div className="w-[85%] aspect-[3/4] z-10 relative bg-stone shadow-lg rounded-tl-3xl rounded-br-3xl overflow-hidden">
                  <img src={Nails5} alt="Maniküre" className="w-full h-full object-cover" />
                </div>
                
                <div className="absolute top-[8%] right-[-5%] w-[55%] aspect-[4/5] z-20 shadow-2xl border-[6px] border-[#FAF9F6] rounded-tr-2xl rounded-bl-2xl overflow-hidden">
                  <img src={Nails3} alt="Detail Gold" className="w-full h-full object-cover" />
                </div>

                <div className="absolute bottom-[-8%] left-[-5%] md:left-[-10%] w-[75%] bg-[#FAF9F6]/95 backdrop-blur-md p-6 shadow-xl border border-[#CBB9A8]/30 z-30 rounded-xl">
                  <h4 className="text-base uppercase tracking-widest text-ink mb-2 font-medium" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>Perfektion</h4>
                  <p className="text-xs font-light text-ink/70 leading-relaxed mb-4">
                    Wir arbeiten ausschließlich mit hochwertigem Gel und präziser Technik. Liftings sind bei uns nahezu unbekannt.
                  </p>
                  <a href="/preise" className="text-[10px] font-medium text-[#A48973] hover:text-ink transition-colors flex items-center gap-2 uppercase tracking-[0.2em]">
                    Mehr erfahren <span>&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-28 z-10 relative">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.1em] text-ink leading-tight" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
                Vorteile, <span className="text-[#A48973] italic lowercase font-serif">die du fühlen wirst</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              {[
                { title: "Haltbarkeit", img: Nails4, text: "Exklusive Haltbarkeit dank modernster Techniken. Liftings sind so gut wie unbekannt." },
                { title: "Präzision", img: Nails, text: "Jeder Pinselstrich sitzt. Formvollendete Designs, die bis ins kleinste Detail begeistern." },
                { title: "Hygiene", img: Nails2, text: "Kompromisslose Sauberkeit und sterile Werkzeuge für deine absolute Sicherheit." },
                { title: "Wohlbefinden", img: Nails6, text: "Ein Ort, der atmet. Entspanne dich und genieße deine Auszeit in vollen Zügen." }
              ].map((benefit, idx) => (
                <motion.div 
                  key={idx} 
                  className="relative bg-[#FAF9F6]/90 p-6 lg:p-8 border border-[#CBB9A8]/30 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden rounded-2xl flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-5 border-2 border-[#E6DAC3] group-hover:border-[#A48973] transition-colors duration-500 shadow-inner z-10">
                    <img src={benefit.img} alt={benefit.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  
                  <h4 className="text-sm md:text-base uppercase tracking-widest text-ink mb-3 font-semibold z-10" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
                    {benefit.title}
                  </h4>
                  
                  <p className="text-xs md:text-sm font-light leading-relaxed text-ink/70 z-10">
                    {benefit.text}
                  </p>

                  <span className="absolute top-2 right-4 text-7xl font-serif italic text-[#A48973]/5 group-hover:text-[#A48973]/10 transition-colors pointer-events-none select-none">
                    0{idx + 1}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="/preise" className="inline-flex items-center gap-3 bg-transparent border-b border-[#A48973] pb-1 text-xs uppercase tracking-widest text-[#A48973] hover:text-ink hover:border-ink transition-all duration-300 font-medium">
                Lerne unsere Philosophie kennen <span>&rarr;</span>
              </a>
            </div>
          </div>

        </div>
      </div> 
      {/* ENDE CONTAINER 1 */}

      {/* --- HIER GEÄNDERT: mt-10 md:mt-12 statt mt-24/32, um das Video näher heranzuziehen --- */}
      <section className="relative mt-10 md:mt-12 flex h-[50vh] min-h-[400px] w-full items-center justify-center overflow-hidden bg-black" id="portfolio">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity30 blur-[4px]"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 px-6 flex flex-col items-center text-center text-[#FAF9F6]">
          <p className="eyebrow tracking-[0.3em] text-[#FAF9F6]/70 mb-5 uppercase" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>— Philosophie</p>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.15em] leading-relaxed text-[#FAF9F6]"
            style={{ 
              fontFamily: "'Jost', 'Montserrat', sans-serif",
              textShadow: "0 0 20px rgba(255,255,255,0.2), 2px 3px 6px rgba(0,0,0,0.6)" 
            }}
          >
            Perfektion bis ins <br className="hidden sm:block" />
            kleinste Detail.
          </h2>

          <a href="#portfolio-grid" className="mt-12 flex flex-col items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-[#FAF9F6]/70 hover:text-[#FAF9F6] transition-colors group">
            <span>Entdecke unsere Galerie</span>
            <span className="h-10 w-px bg-[#FAF9F6]/30 group-hover:bg-[#FAF9F6] transition-colors"></span>
          </a>
        </div>
      </section>

      {/* CONTAINER 2: PORTFOLIO */}
      <div id="gallery" className="mx-auto max-w-[1400px] px-4 pb-40 md:pb-48 md:px-8" >
        
        <div className="mt-24 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#CBB9A8]/30 pb-10">
          <div>
            <p className="eyebrow mb-4 tracking-[0.2em] uppercase text-[#A48973]" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>— Portfolio</p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.1em] text-ink font-medium leading-snug" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>Einblick ins Studio</h3>
          </div>
          <div className="max-w-md md:text-right">
            <p className="text-sm font-light leading-relaxed text-ink/70 mb-4">
              Tauche ein in unsere Welt. Von detaillierter Nail Art bis hin zum entspannten Studio-Ambiente – entdecke, was uns ausmacht und lass dich inspirieren.
            </p>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#A48973] hover:text-ink transition-colors">
              Folge uns auf Instagram ↗
            </a>
          </div>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          <div className="relative aspect-[3/4] overflow-hidden bg-[#E6DAC3] md:col-span-2 md:row-span-2 md:aspect-auto rounded-2xl shadow-md border border-[#CBB9A8]/20">
            <video src={vlog} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <p className="absolute bottom-6 left-6 text-lg md:text-xl uppercase tracking-[0.15em] font-light text-[#FAF9F6]" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>Atmosphäre & Handwerk.</p>
          </div>
          
          <div className="relative aspect-square md:col-span-1 border border-[#CBB9A8]/30 rounded-2xl overflow-hidden shadow-md">
            <AutoSlideshow images={[Nails, Nails2, Nails6]} className="h-full w-full rounded-2xl" />
          </div>
          
          <div className="relative aspect-square bg-[#E6DAC3] md:col-span-1 border border-[#CBB9A8]/30 rounded-2xl overflow-hidden shadow-md group">
            <img src={studio} alt="Studio Interior" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-2xl" />
          </div>
          
          <div className="flex aspect-square flex-col justify-center bg-[#FAF9F6]/90 backdrop-blur-sm p-8 text-center md:col-span-1 border border-[#CBB9A8]/30 shadow-inner rounded-2xl">
            <p className="eyebrow mb-3 tracking-widest text-[#A48973] uppercase" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>— Details</p>
            <p className="text-sm font-light leading-relaxed text-ink/80">Langlebigkeit und die Gesundheit des Naturnagels stehen bei uns an erster Stelle.</p>
          </div>
          
          <div className="relative aspect-square md:col-span-1 border border-[#CBB9A8]/30 rounded-2xl overflow-hidden shadow-md">
            <AutoSlideshow images={[Nails4, Nails5]} className="h-full w-full rounded-2xl" />
          </div>
        </div>

      </div>
    </section>
  );
}