import { useState } from "react";
import { FAQS } from "@/lib/studio";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  
  return (
    // Die gesamte Sektion bekommt den Glass-Effekt, damit der 3D-Background durchschimmert
    <section className="relative bg-background/50 backdrop-blur-md">
      
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-4 py-24 md:grid-cols-12 md:gap-16 md:px-8 md:py-32">
        
        {/* Linke Seite: Header im neuen, eleganten Design */}
        <div className="md:col-span-4 md:col-start-1">
          <p className="eyebrow mb-6 uppercase tracking-[0.2em] text-ink-soft">
            — Häufig gefragt
          </p>
          <h2 className="font-serif font-thin text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
            Kurze<br />
            <span className="italic">Antworten.</span>
          </h2>
        </div>
        
        {/* Rechte Seite: Die Fragen */}
        <div className="md:col-span-7 md:col-start-6">
          <ul className="flex flex-col gap-4">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                // Jede Frage ist ein solider, undurchsichtiger Block (bg-mute), um Tiefe zu erzeugen
                <li 
                  key={i} 
                  className="bg-mute px-6 md:px-10 transition-all duration-500"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-8 py-8 text-left transition-colors hover:text-gold"
                  >
                    <span
                      // Cleane, moderne Schrift für die Fragen
                      className="text-sm md:text-base font-medium uppercase tracking-[0.15em] text-ink"
                    >
                      {f.q}
                    </span>
                    <span
                      className={`text-2xl font-light transition-transform duration-700 ease-in-out ${
                        isOpen ? "rotate-45 text-gold" : "text-ink-soft"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out"
                    // max-height großzügig gewählt, damit auch längere Antworten flüssig aufklappen
                    style={{ maxHeight: isOpen ? 500 : 0, opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="pb-8 pr-10 text-sm md:text-base font-light leading-relaxed text-ink-soft">
                      {f.a}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        
      </div>
    </section>
  );
}