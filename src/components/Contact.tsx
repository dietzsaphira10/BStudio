import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram, MessageCircle } from "lucide-react";
import { STUDIO } from "@/lib/studio";

// Asset Import für das große Bild (Bitte Pfad anpassen, falls nötig)
import contactImage from "@/assets/studio-hero.mp4";

// --- ANIMATIONS-VARIANTEN ---
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", mass: 0.8, damping: 20 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", mass: 0.8, damping: 20 },
  },
};

export function Contact() {
  return (
    <section
    id="contact" className="relative w-full overflow-hidden bg-[#FAF9F6] py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
        >
          {/* === LINKE SEITE: BILD MIT SCHWEBENDEN ELEMENTEN === */}
          <motion.div variants={fadeRight} className="lg:col-span-7 relative">
            
            {/* Hauptbild */}
            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(164,137,115,0.15)]">
              <img
                src={contactImage}
                alt="BStudio 893 Zürich"
                className="h-full w-full object-cover"
              />
              {/* Zartes Overlay für bessere Lesbarkeit der Floating-Elemente */}
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Floating Element 1: Route Planen Pill (Oben Links) */}
            <a
              href="https://maps.google.com/?q=Bahnhofplatz+3,+8001+Zürich"
              target="_blank"
              rel="noreferrer"
              className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-[#FAF9F6]/95 backdrop-blur-md px-5 py-2.5 text-[10px] md:text-xs font-medium uppercase tracking-widest text-[#111111] shadow-lg transition-transform hover:scale-105"
              style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}
            >
              <MapPin className="h-3.5 w-3.5 text-[#A48973]" />
              Route planen
            </a>

            {/* Floating Element 2: Location Box (Unten Links) */}
            {/* Angepasst auf deine Palette: Dunkles "Ink" statt dem Rot aus dem Screenshot */}
            <div className="absolute -bottom-6 left-4 md:-bottom-8 md:-left-8 flex flex-col justify-center rounded-2xl bg-[#111111] px-6 py-6 md:px-8 md:py-8 shadow-2xl w-48 md:w-56 z-10 border border-white/10">
              <span className="mb-1 text-[9px] uppercase tracking-[0.3em] text-[#A48973]">
                Location
              </span>
              <span className="font-serif text-lg md:text-xl text-[#FAF9F6] italic">
                Zürich City
              </span>
              {/* Sterne-Bewertung (aus deinem Prompt) */}
              <div className="mt-3 flex items-center gap-1 text-[#A48973] text-[10px] uppercase tracking-wider">
                <span>★★★★★</span> 
                <span className="text-white/50 ml-1">5.0</span>
              </div>
            </div>

            {/* Floating Element 3: Google Maps Widget (Unten Rechts) */}
            <div className="absolute -bottom-10 right-4 md:-bottom-12 md:-right-4 h-36 w-40 md:h-48 md:w-52 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl z-10 hidden sm:block">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-neutral-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.5547466547196!2d8.537648315622668!3d47.37775987917013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a09e02cba7b%3A0xc34346eb4a05f32a!2sBahnhofplatz%203%2C%208001%20Z%C3%BCrich%2C%20Schweiz!5e0!3m2!1sde!2sde!4v1680000000000!5m2!1sde!2sde"
                  className="absolute inset-0 h-full w-full opacity-80 mix-blend-luminosity grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a 
                  href="https://maps.google.com/?q=Bahnhofplatz+3,+8001+Zürich"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-2 left-2 flex items-center gap-1 rounded bg-white/90 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-[#111111] shadow-sm backdrop-blur"
                >
                  Maps ↗
                </a>
              </div>
            </div>
          </motion.div>

          {/* === RECHTE SEITE: TEXT & KONTAKTDATEN === */}
          <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-[#A48973]"></div>
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#A48973]" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
                The Destination
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#111111] mb-12">
              Dein Weg <br />
              <span className="font-serif italic text-[#A48973] font-light">zu uns.</span>
            </h2>

            {/* Contact Details List */}
            <div className="flex flex-col gap-8 md:gap-10">
              
              {/* Adresse */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F4F1EA] text-[#A48973]">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-[9px] uppercase tracking-widest text-[#111111]/50 mb-1" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
                    Adresse
                  </span>
                  <a href="https://maps.google.com/?q=Bahnhofplatz+3,+8001+Zürich" target="_blank" rel="noreferrer" className="text-sm md:text-base text-[#111111] font-medium hover:text-[#A48973] transition-colors">
                    Bahnhofplatz 3<br />
                    8001 Zürich, Schweiz
                  </a>
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F4F1EA] text-[#A48973]">
                  <Clock className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-[9px] uppercase tracking-widest text-[#111111]/50 mb-1" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
                    Opening Hours
                  </span>
                  <div className="text-sm md:text-base text-[#111111] font-medium">
                    Mo-Fr: 10:00 – 19:30 Uhr<br />
                    <span className="text-sm font-normal text-[#111111]/70">Sa: 10:00 – 18:00 Uhr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action & Social Links Row */}
            <div className="mt-12 flex flex-wrap items-center gap-6 pt-8 border-t border-[#111111]/10">
              
              {/* Instagram */}
              <a href={STUDIO.instagramUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111111]/10 bg-transparent text-[#111111] transition-all group-hover:bg-[#111111] group-hover:text-white">
                  <Instagram className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#111111] group-hover:text-[#A48973] transition-colors" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
                  Instagram
                </span>
              </a>

              {/* Telefon */}
              <a href="tel:+41783079688" className="group flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111111]/10 bg-transparent text-[#111111] transition-all group-hover:bg-[#111111] group-hover:text-white">
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#111111] group-hover:text-[#A48973] transition-colors" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
                  Telefon
                </span>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/41783079688" target="_blank" rel="noreferrer" className="group flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111111]/10 bg-transparent text-[#111111] transition-all group-hover:bg-[#111111] group-hover:text-white">
                  <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#111111] group-hover:text-[#A48973] transition-colors" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
                  WhatsApp
                </span>
              </a>

            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}