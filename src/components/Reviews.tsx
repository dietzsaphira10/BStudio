import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { REVIEWS } from "@/lib/studio";

// Asset Imports
import heroVideo from "@/assets/studio-hero.mp4";
import studioBg from "@/assets/studiointerior.jpg"; // Dein Studio-Bild für den neuen Slider

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Native Scroll-Logik für die Slider-Pfeile
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scrollt etwa eine Kartenbreite weiter
      const scrollAmount = direction === "left" ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-background/80 backdrop-blur-md">
      
    
{/* --- NEUE SPANNENDE REVIEWS SEKTION --- */}
      <section className="relative w-full overflow-hidden py-24 md:py-32">
        
        {/* Studio-Bild als edler Slider-Hintergrund */}
        <div className="absolute inset-0 z-10">
          <img src={studioBg} alt="Studio Ambiente" className="h-full w-full object-cover" />
          {/* Dunkler Overlay, damit die helle Schrift und die Karten perfekt lesbar sind */}
          <div className="absolute inset-0 bg-ink/55 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-16 px-6 md:px-12 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Linke Seite: Titel, Text & Button */}
          <div className="flex flex-col items-start lg:w-1/3">
            <p className="eyebrow mb-4 tracking-widest text-gold">— 04 / Stimmen</p>
            <h2 className="mb-6 font-serif font-thin text-4xl md:text-5xl text-white leading-tight">
              Echt gesagt. <br />
              <span className="italic text-white/80">Echt gemeint.</span>
            </h2>
            <p className="mb-10 max-w-md text-base font-light leading-relaxed text-white/70">
              Was unsere Kundinnen und Kunden über uns sagen. Wir legen größten Wert auf Qualität, Hygiene und ein einzigartiges Erlebnis.
            </p>
            
            {/* NEU: Bewertungs-Button */}
            <a 
              href="https://g.page/r/DeinGoogleReviewLink" // <-- Hier deinen echten Google Link einfügen!
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-gold/50 bg-gold/10 px-8 py-4 text-sm font-medium tracking-wide text-white transition-all hover:bg-gold hover:text-ink"
            >
              Selbst bewerten
              <Star className="size-4 transition-transform group-hover:scale-110" />
            </a>
          </div>

          {/* Rechte Seite: Der interaktive Slider */}
          <div className="relative w-full lg:w-2/3">
            
            {/* Navigations-Pfeile (im Vogue-Stil) */}
            <div className="absolute -top-16 right-0 hidden gap-4 md:flex lg:-top-24">
              <button 
                onClick={() => scroll("left")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-ink"
              >
                <ChevronLeft strokeWidth={1} className="size-6" />
              </button>
              <button 
                onClick={() => scroll("right")}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-ink"
              >
                <ChevronRight strokeWidth={1} className="size-6" />
              </button>
            </div>

            {/* Cards-Container mit nativem Snap-Scrolling */}
            <div
              ref={scrollRef}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-8 pt-4 md:gap-8 lg:pb-12"
              style={{ scrollbarWidth: "none" }} // Versteckt die Scrollbar
            >
              {REVIEWS.map((r, i) => (
                <figure
                  key={i}
                  className="relative flex w-[85%] flex-shrink-0 snap-center flex-col justify-between bg-background p-8 md:w-[380px] md:p-10 shadow-2xl"
                >
                  <span
                    className="absolute right-6 top-2 text-gold opacity-20"
                    style={{ fontFamily: "var(--font-display)", fontSize: "6rem", lineHeight: 1, fontStyle: "italic" }}
                  >
                    "
                  </span>
                  
                  {/* Sterne-Bewertung statisch */}
                  <div className="mb-6 flex gap-1 text-gold">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} fill="currentColor" className="size-3" />
                    ))}
                  </div>

                  <blockquote className="relative z-10 mb-10 text-sm font-light leading-relaxed text-ink md:text-base">
                    {r.text}
                  </blockquote>
                  
                  <figcaption className="hairline mt-auto flex flex-col border-t border-border/50 pt-5">
                    <span className="text-sm font-medium tracking-wide text-ink uppercase">{r.name}</span>
                    <span className="mt-1 text-[10px] tracking-widest text-ink-soft">GOOGLE REZENSION</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            
          </div>
        </div>
      </section>
    </section>
  );
}