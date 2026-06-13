import { useEffect, useState } from "react";
// Nutzt das Video BStudionails.mp4 aus deinem Assets-Ordner
import heroVideo from "@/assets/Drohnenaufnahme893-Verbessert1080.mp4"; 

export default function HeroSection() {
  const [startAnim, setStartAnim] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Exakt 1 Sekunde (1000ms) warten, bevor die Animation triggert
    const timer = setTimeout(() => {
      setStartAnim(true);
    }, 1000);
    
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); 

    const handleResize = () => checkMobile();
    window.addEventListener("resize", handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-black">
      
      {/* --- BACKGROUND VIDEO CONTAINER --- */}
      <div className="absolute inset-0 z-0">
        <video 
          src={heroVideo} 
          autoPlay 
          loop 
          muted
          playsInline 
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isMobile ? 'scale-110' : 'scale-100'
          }`}
          style={{ 
            objectPosition: 'center',
          }} 
        />
        
        {/* HIER GEÄNDERT: Gold-Beiges Premium-Overlay. 
            Mischung aus deinem Marken-Beige (#d9bda8) und dunklem Kontrast, 
            damit das Video warm schimmert, aber die weiße Schrift knallt. */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d9bda8]/40 via-black/50 to-black/70 z-10 mix-blend-multiply" />
        
        {/* Optionaler ganz leichter Base-Shadow für garantierte Lesbarkeit */}
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* --- CONTENT AREA: ZENTRIERT --- */}
      <div className="relative container mx-auto px-4 z-20 h-[100dvh] flex flex-col justify-center items-center text-center">
        
        <div className={`flex flex-col items-center transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          startAnim ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
        }`}>
          
          {/* Top Subtitle mit seitlichen Linien */}
          <div className="flex items-center gap-4 text-white/70 mb-4 md:mb-6">
            <span className="w-6 md:w-12 h-[1px] bg-white/40"></span>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-medium">
              Exklusive Lash & Brow Art
            </span>
            <span className="w-6 md:w-12 h-[1px] bg-white/40"></span>
          </div>

          {/* Main Title */}
          <h1 
            className="text-white uppercase font-light leading-none tracking-[0.1em]"
            style={{ 
              fontFamily: "'Didot', 'Bodoni MT', 'Playfair Display', 'Times New Roman', serif",
              fontSize: "clamp(2.8rem, 11vw, 9rem)",
              textShadow: "0 0 15px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.15)"
            }}
          >
            B STUDIO
          </h1>

          {/* Bottom Subtitle */}
          <p className="mt-6 md:mt-8 text-white/50 text-[8px] md:text-[10px] uppercase tracking-[0.4em]">
            Zürich am See · Seit 2024
          </p>

          {/* Termin Button */}
          <a
            href="/kontakt"
            className="mt-10 md:mt-12 px-8 py-4 bg-[#d9bda8]/10 backdrop-blur-md border border-[#d9bda8]/30 text-white text-[9px] md:text-[10px] font-medium uppercase tracking-[0.25em] transition-all hover:bg-[#d9bda8] hover:text-black hover:border-[#d9bda8] shadow-2xl"
          >
            Termin buchen
          </a>

        </div>
      </div>

      {/* --- MARQUEE AM BODEN --- */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 py-3 md:py-4 bg-black/40 backdrop-blur-md overflow-hidden z-30">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#d9bda8]/60 mx-8">
              BSTUDIO · LASHES & BROWS · ZÜRICH · PREMIUM DESIGN · ARTISTIC LOOKS ·
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}