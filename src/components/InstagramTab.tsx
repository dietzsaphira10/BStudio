import { useState } from "react";
import { Instagram } from "lucide-react";
import floralAsset from "@/assets/NailsPinkFlower.jpg";

export function InstagramTab() {
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
        className="glass-panel flex items-center gap-3 px-3 py-4 transition-all duration-700 ease-out"
        style={{ transform: open ? "translateX(0)" : "translateX(calc(100% - 40px))" }}
      >
        <Instagram className="size-5 shrink-0" strokeWidth={1.2} />
        <div
          className="flex items-center gap-3 transition-opacity duration-500"
          style={{ opacity: open ? 1 : 0 }}
        >
          <img src={floralAsset} alt="Floral Nails" className="size-12 object-cover" />
          <div className="pr-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Instant</div>
            <div className="text-sm font-medium">@bstudio893.zurich</div>
          </div>
        </div>
      </a>
    </div>
  );
}