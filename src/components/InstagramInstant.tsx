import { useState } from "react";
import { Instagram } from "lucide-react";
import floralAsset from "@/assets/NailsPinkFlower.jpg";

export function InstagramInstant() {
  const [open, setOpen] = useState(false);
  
  return (
    <div
      className="fixed right-0 top-1/2 z-30 hidden -translate-y-1/2 md:block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href="https://instagram.com/bstudio893.zurich"
        target="_blank"
        rel="noreferrer"
        // Echter Glassmorphism-Effekt über Tailwind-Klassen
        className="flex items-center gap-3 px-3 py-4 transition-all duration-700 ease-out bg-white/10 backdrop-blur-md border border-white/20 border-r-0 rounded-l-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        style={{ transform: open ? "translateX(0)" : "translateX(calc(100% - 40px))" }}
      >
        <Instagram className="size-5 shrink-0" strokeWidth={1.2} />
        
        <div
          className="flex items-center gap-3 transition-opacity duration-500"
          style={{ opacity: open ? 1 : 0 }}
        >
          {/* Bild leicht abgerundet für eine modernere Optik */}
          <img src={floralAsset} alt="Floral Nails" className="size-12 rounded-md object-cover" />
          
          <div className="pr-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Instant</div>
            <div className="text-sm font-medium">@bstudio893.zurich</div>
          </div>
        </div>
      </a>
    </div>
  );
}