import { motion } from "framer-motion";

// --- ASSET IMPORTS ---
// Hier importieren wir deine lokalen Dateien aus dem assets-Ordner
import profilePicAsset from "../assets/InstagramLogo.jpg";
import postStudio from "../assets/studio.jpg";
import postFrench from "../assets/french.jpg";
import postVideo from "../assets/manicurevideo.mp4"; // Video importieren
import postGold from "../assets/gold.jpg";

// Definition der Feed-Posts mit lokal importierten Assets
const INSTA_POSTS = [
  {
    id: 1,
    // Wir nutzen das importierte Asset-Objekt direkt
    src: postStudio, 
    type: 'image', // Typ definieren für bedingtes Rendern
    likes: "124",
  },
  {
    id: 2,
    src: postFrench,
    type: 'image',
    likes: "89",
  },
  {
    id: 3,
    src: postVideo, // Hier fügen wir das Video ein
    type: 'video', // Wichtig: Typ ist video
    likes: "210",
  },
  {
    id: 4,
    src: postGold,
    type: 'image',
    likes: "156",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", mass: 0.8, damping: 20 },
  },
};

export function Instagram() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F4F1EA] via-[#FAF9F6] to-[#FDF8F7] py-20 md:py-32">
      
      {/* Subtiler Glow-Effekt im Hintergrund hinter dem Profil */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EACDCE]/20 blur-[100px]" />

      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        
        {/* --- HEADER BEREICH --- */}
        <div className="text-center relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow mb-4 text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] text-[#A48973]"
            style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}
          >
            Entdecke BSTUDIO 893
          </motion.p>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="font-serif italic font-light text-neutral-800 tracking-wide pr-2">Auf   </span>
            <span className="font-serif text-[#A48973] font-medium tracking-wide">Instagram</span>
          </motion.h2>
        </div>

        {/* --- PROFIL BEREICH --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-12 md:mt-16 mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10 relative z-10"
        >
          {/* HIER GEÄNDERT: Absolut sichere "Masken"-Struktur für den perfekten Kreis */}
          <div className="flex h-24 w-24 md:h-32 md:w-32 shrink-0 items-center justify-center rounded-full border border-[#EACDCE] bg-white p-1 md:p-1.5 shadow-sm">
            <div className="h-full w-full overflow-hidden rounded-full">
              <img 
                src={profilePicAsset} 
                alt="BStudio 893 Profilbild" 
                className="h-full w-full object-cover" 
              />
            </div>
          </div>

          {/* Profil-Infos */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="mb-4 flex flex-col sm:flex-row items-center gap-4">
              <h3 className="font-serif text-xl md:text-2xl text-neutral-800 italic pr-2">bstudio893</h3>
              {/* Glassmorphism Follow Button */}
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="rounded-full border border-[#A48973]/30 bg-[#A48973] px-6 py-1.5 text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-white shadow-sm transition-all hover:bg-[#8A7360] hover:shadow-md"
                style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}
              >
                Follow
              </a>
            </div>

            <div className="mb-4 flex gap-6 text-xs md:text-sm text-neutral-600" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
              <p><span className="font-semibold text-neutral-800">124</span> Posts</p>
              <p><span className="font-semibold text-neutral-800">1.2K</span> Followers</p>
            </div>

            <div className="max-w-[280px]">
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#A48973] mb-1" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
                Nail Atelier Zürich
              </p>
              <p className="text-xs md:text-sm font-light text-neutral-600 leading-relaxed italic">
                „Präzision ist kein Zufall, sondern unser Standard.“
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- GRID BEREICH --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 relative z-10"
        >
          {INSTA_POSTS.map((post) => (
            <motion.a
              key={post.id}
              variants={fadeUp}
              href="#"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:rounded-3xl bg-[#EACDCE]/20 shadow-sm transition-all hover:shadow-xl"
            >
              {/* BEDINGTES RENDERN: Video oder Bild */}
              {post.type === 'video' ? (
                // Wenn es ein Video ist, nutzen wir das HTML5 video tag
                <video 
                  src={post.src} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  autoPlay 
                  loop 
                  muted 
                  playsInline // Wichtig für Autoplay auf Mobilgeräten
                />
              ) : (
                // Wenn es ein Bild ist, nutzen wir das img tag
                <img 
                  src={post.src} 
                  alt="Instagram Post" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              
              {/* Hover Overlay mit Glass-Effekt */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-2 text-white">
                  {/* Herz Icon */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="h-5 w-5 md:h-6 md:w-6"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                  <span className="font-medium text-sm md:text-base" style={{ fontFamily: "'Jost', 'Montserrat', sans-serif" }}>
                    {post.likes}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}