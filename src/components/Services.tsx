import { motion } from "framer-motion";
import { SERVICES } from "@/lib/studio";

import mediaManicure from "@/assets/manicurevideo.mp4";
import mediaPedicure from "@/assets/pedicurestudio.jpg";
import mediaLounge from "@/assets/studio.jpg";
import videoVlog from "@/assets/studiovlog.mp4";
import bgPattern from "@/assets/backgroundpattern.png"; 

const MEDIA = [mediaManicure, mediaPedicure, mediaLounge];

const FALLBACK_SERVICES = [
  { title: "Maniküre", priceFrom: "50", blurb: "Klassische Pflege für deine Hände.", slug: "manikure" },
  { title: "Pediküre", priceFrom: "65", blurb: "Entspannung und Pflege für deine Füße.", slug: "pedikure" },
  { title: "Nail Art & Lounge", priceFrom: "15", blurb: "Kreative Designs in entspannter Atmosphäre.", slug: "nail-art" }
];

export function Services() {
  const safeServices = Array.isArray(SERVICES) && SERVICES.length > 0 ? SERVICES : FALLBACK_SERVICES;
  return (
    <section
    id="services"
     className="relative w-full bg-gradient-to-b from-[#F4F1EA] via-[#FDF8F7] to-[#F4F1EA]">
      
      {/* --- SEKTION 1: WILLKOMMEN --- */}
      {/* Rahmenlinie jetzt in Taupe/Braun */}
      <div className="relative w-full py-16 md:py-24 border-b border-[#A48973]/20 overflow-hidden">
        
        {/* Pattern-Bild als Background mit Beige/Rosa-Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={bgPattern} alt="Background Pattern" className="h-full w-full object-cover blur-[4.4px] opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F4F1EA]/90 to-[#FAF9F6]/80" /> 
        </div>

        <div className="pointer-events-none absolute left-1/2 top-4 z-10 -translate-x-1/2 select-none whitespace-nowrap opacity-[0.03]">
          <span className="font-serif text-[16vw] uppercase tracking-widest text-ink"></span>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-20 mx-auto w-full max-w-[1400px] grid grid-cols-1 gap-8 md:grid-cols-12 items-start px-6 md:px-12"
        >
          <div className="flex flex-col md:col-span-8 lg:pr-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.15em] text-ink font-medium leading-snug" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
              Willkommen in deinem neuen Nagelstudio in Zürich
            </h3>
            
            <p className="mt-4 text-sm md:text-base font-light leading-relaxed text-ink/80">
              Unser Studio in Zürich bietet dir eine moderne und entspannende Atmosphäre. Wir haben uns neu gestaltet, damit du dich bei uns wohlfühlst. Von der modernen Einrichtung bis zu unserem freundlichen Team, alles ist darauf ausgerichtet, dir eine tolle Zeit zu bieten. Komm vorbei und überzeug dich selbst.
            </p>

            {/* Willkommens-Box: Leichter Glass-Effekt in Beige mit Taupe-Akzent */}
            <div className="my-8 bg-[#FAF9F6]/70 backdrop-blur-md p-5 md:p-6 shadow-sm border-l-2 border-[#A48973]">
              <p className="text-sm font-medium tracking-wide text-ink uppercase" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>Bei uns sind Walk-ins willkommen!</p>
              <p className="mt-2 text-xs font-light tracking-[0.1em] uppercase leading-relaxed text-ink/70">Schau einfach spontan vorbei oder ruf kurz an, um zu sehen, ob gerade ein Plätzchen frei ist. Wir freuen uns auf dich!</p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              
              {/* LINKE SPALTE */}
              <div>
                {/* Linien und Highlights in Taupe (#A48973) */}
                <p className="eyebrow mb-2 border-b border-[#A48973]/30 pb-2 text-ink tracking-widest">LOCATION & KONTAKT</p>
                <div className="space-y-4 text-xs md:text-sm font-light text-ink/80">
                  <div>
                    <p className="mb-0.5 font-medium text-ink uppercase tracking-wide">Adresse:</p>
                    <p>Bahnhofplatz 3 <br />Zurich</p>
                  </div>
                  <div>
                    <p className="mb-0.5 font-medium text-ink uppercase tracking-wide">Telefon (Festnetz):</p>
                    {/* Hover-Effekt hier im dezenten Rosa (#EACDCE) */}
                    <a href="tel:+41783079688" className="hover:text-[#EACDCE] transition-colors">+41 78 307 96 88</a>
                  </div>
                  <div>
                    <p className="mb-0.5 font-medium text-ink uppercase tracking-wide">WhatsApp:</p>
                    <a href="https://wa.me/41783079688" target="_blank" rel="noreferrer" className="hover:text-[#EACDCE] transition-colors">+41 78 307 96 88</a>
                  </div>
                  <div>
                    <p className="mb-0.5 font-medium text-ink uppercase tracking-wide">E-Mail:</p>
                    <a href="mailto:hallo@studio.ch" className="hover:text-[#EACDCE] transition-colors">coming soon</a>
                  </div>
                  <div>
                    <p className="mb-0.5 font-medium text-ink uppercase tracking-wide">Website:</p>
                    <a href="#" className="hover:text-[#EACDCE] transition-colors">coming soon</a>
                  </div>
                </div>
              </div>

              {/* RECHTE SPALTE */}
              <div className="flex flex-col h-full">
                <div>
                  <p className="eyebrow mb-2 border-b border-[#A48973]/30 pb-2 text-ink tracking-widest">ÖFFNUNGSZEITEN</p>
                  <ul className="flex flex-col gap-3 text-xs md:text-sm font-light text-ink/80">
                    <li className="flex justify-between items-center"><span className="font-medium uppercase tracking-wide text-ink">Mo - Fr</span><span>10:00 - 19:30</span></li>
                    <li className="flex justify-between items-center"><span className="font-medium uppercase tracking-wide text-ink">Samstag</span><span>10:00 - 18:00</span></li>
                    <li className="flex justify-between items-center text-ink/50"><span className="font-medium uppercase tracking-wide text-ink">Sonntag</span><span>Geschlossen</span></li>
                  </ul>
                </div>

                {/* Google Maps Element */}
                <div className="mt-auto pt-8">
                  <a 
                    href="https://maps.google.com/?q=Bahnhofplatz+3,+Zurich" 
                    target="_blank" 
                    rel="noreferrer"
                    className="group relative block aspect-[16/9] w-full max-w-[280px] overflow-hidden bg-white shadow-sm border border-[#A48973]/30 hidden sm:block rounded-sm"
                  >
                    <iframe 
                      src="https://maps.google.com/maps?q=Bahnhofplatz%203%2C%20Zurich&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                      className="pointer-events-none absolute inset-0 h-full w-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                      style={{ border: 0 }} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    
                    <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/0 transition-colors duration-700">
                      <span 
                        className="bg-white/95 backdrop-blur-sm px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-ink shadow-lg transition-colors group-hover:bg-[#A48973] group-hover:text-white"
                        style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}
                      >
                        Route planen
                      </span>
                    </div>
                  </a>
                  <p className="mt-3 text-[10px] uppercase tracking-widest text-[#A48973] hidden sm:block font-medium">Auf Maps ansehen</p>
                </div>
              </div>

            </div>

            <div className="mt-10">
              {/* HIER GEÄNDERT: Button in Beige-Braun (#A48973), beim Hover etwas dunkler (#8A7360) */}
              <a href="/booking" className="inline-flex items-center justify-center bg-[#A48973] px-10 py-5 text-xs font-medium uppercase tracking-[0.2em] text-white transition-all hover:bg-[#8A7360] hover:shadow-lg shadow-md rounded-sm" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
                Termin online buchen
              </a>
            </div>
          </div>
          
          <div className="md:col-span-4 relative mt-12 md:mt-0 z-10 w-full max-w-[400px] mx-auto md:ml-auto">
            
            {/* HIER GEÄNDERT: Rotierendes Quality Seal in ROSA (#EACDCE) mit GLASS EFFEKT */}
            <div className="absolute -bottom-8 -left-8 z-20 h-28 w-28 hidden sm:flex items-center justify-center bg-[#EACDCE]/40 backdrop-blur-md border border-white/60 text-[#8A7360] rounded-full p-2 shadow-lg">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite]">
                <defs>
                  <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text fontSize="11" fill="currentColor" fontWeight="600" letterSpacing="2" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
                  <textPath href="#circle">
                    PREMIUM NAIL ART • ZÜRICH • 
                  </textPath>
                </text>
              </svg>
              <div className="absolute flex items-center justify-center">
                <span className="text-xl text-[#8A7360]">✧</span>
              </div>
            </div>

            {/* Video Container in schlichtem Beige */}
            <div className="bg-[#FAF9F6] p-3 shadow-xl border border-[#A48973]/20 relative z-10 rounded-sm">
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#F4F1EA]">
                <video src={videoVlog} autoPlay muted loop playsInline className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- EDITORIAL BANNER --- */}
      {/* HIER GEÄNDERT: Marquee jetzt in Beige-Braun (#A48973) passend zum Button */}
      <div className="w-full bg-[#A48973] border-b border-[#8A7360]/20 py-4 overflow-hidden flex items-center justify-center shadow-inner">
        <div 
          className="flex gap-6 md:gap-12 items-center text-[#FAF9F6] uppercase tracking-[0.25em] text-[10px] md:text-xs font-medium whitespace-nowrap opacity-90" 
          style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}
        >
          <span>Premium Manicure</span>
          <span className="text-[#EACDCE] opacity-80">•</span>
          <span>Premium Pedicure</span>
          <span className="text-[#EACDCE] opacity-80">•</span>
          <span>Nail Art Design</span>
          <span className="text-[#EACDCE] opacity-80">•</span>
          <span className="hidden sm:block">in Zürich </span>
          <span className="text-[#EACDCE] opacity-80 hidden sm:block">•</span>
          <span className="hidden md:block">BSTUDIO 893</span>
        </div>
      </div>

      {/* --- SEKTION 2: LEISTUNGEN --- */}
      <div className="w-full py-20 md:py-32 px-4 md:px-8">
        {/* Die Box nutzt ein milchiges Frosted Glass auf dem beigen Hintergrund */}
        <div className="mx-auto max-w-[1400px] relative bg-white/50 backdrop-blur-2xl border border-white/60 p-6 md:p-12 lg:p-20 shadow-[0_8px_30px_rgb(164,137,115,0.15)] overflow-hidden rounded-sm">
          
          <div className="pointer-events-none absolute left-1/2 top-4 -z-10 -translate-x-1/2 select-none whitespace-nowrap opacity-[0.03]">
            <span className="font-serif text-[16vw] uppercase tracking-widest text-ink">Services</span>
          </div>

          <div className="mb-16 md:mb-20 text-left relative z-10">
            {/* Kleine Nuance: Die Blume 🌸 bleibt, passend zum zarten Rosa */}
            <p className="eyebrow mb-4 tracking-widest text-[#A48973] uppercase font-bold" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>— Unsere Leistungen 🌸</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.15em] text-ink font-medium leading-snug" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
              Unsere Leistungen<br className="hidden sm:block" /> für dich
            </h2>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-8 lg:gap-10 pb-10">
            {safeServices.slice(0, 3).map((s, i) => {
              const mediaSource = MEDIA[i];
              const isVideo = typeof mediaSource === 'string' && mediaSource.includes('.mp4');
              const isMiddle = i === 1;
              const marginClass = isMiddle ? "md:-mt-4" : "md:mt-4";

              return (
                <motion.article 
                  key={s.slug || i} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.8, delay: i * 0.15 }} 
                  className={`flex flex-col relative group ${marginClass}`}
                >
                  {/* Hintergrund-Schattenriss in Taupe */}
                  <div className="absolute inset-0 border border-[#A48973]/30 rounded-[4rem_1rem_4rem_1rem] translate-x-2 translate-y-2 -z-10 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3 bg-white/40"></div>
                  
                  <div 
                    className={`relative w-full overflow-hidden bg-[#F4F1EA] rounded-[4rem_1rem_4rem_1rem] shadow-[0_20px_50px_-12px_rgba(164,137,115,0.3)] ${isMiddle ? 'aspect-[3/4]' : 'aspect-[4/5]'}`}
                  >
                    {isVideo ? (
                      <video src={mediaSource} autoPlay muted loop playsInline className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    ) : (
                      <img src={mediaSource} alt={s.title} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    )}
                  </div>
                  
                  {/* Frosted Glass Karte für den Text */}
                  <div className="relative z-10 mx-4 -mt-10 bg-white/90 p-5 md:p-6 backdrop-blur-md border border-white shadow-sm rounded-xl">
                    <div className="flex w-full items-center justify-between border-b border-[#A48973]/20 pb-3">
                      <h3 className="text-sm md:text-base font-medium uppercase tracking-[0.15em] text-ink" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>{s.title}</h3>
                      <span className="eyebrow text-[#A48973] font-bold">ab {s.priceFrom}</span>
                    </div>
                    <p className="mt-3 text-sm font-light leading-relaxed text-ink/70 line-clamp-2">{s.blurb}</p>
                    {/* Hover beim Link im dezenten Rosa (#EACDCE) */}
                    <a href={`/preise#${s.slug}`} className="mt-4 inline-block text-xs uppercase tracking-widest text-ink hover:text-[#EACDCE] transition-colors font-medium">
                      Details ansehen →
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}