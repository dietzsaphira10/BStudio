import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import lounge from "@/assets/studio-lounge.jpg.asset.json";

export function About() {
  const r = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: r, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={r} className="relative">
      <div className="mx-auto grid max-w-[1280px] grid-cols-12 gap-8 px-6 py-32 md:gap-16 md:px-12 md:py-48">
        <motion.div style={{ y }} className="relative col-span-12 md:col-span-6">
          <div className="aspect-[4/5] overflow-hidden bg-stone">
            <img src={lounge.url} alt="Studio Lounge" className="h-full w-full object-cover" />
          </div>
        </motion.div>
        <div className="col-span-12 flex flex-col justify-center md:col-span-5 md:col-start-8">
          <p className="eyebrow mb-6">— 03 / Studio</p>
          <h2
            className="display-xl text-ink"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
          >
            Hochwertig.<br /><span style={{ fontStyle: "italic" }}>Ohne Lärm.</span>
          </h2>
          <p className="mt-8 max-w-md text-base font-light leading-relaxed text-ink-soft">
            Wir glauben an saubere Linien, ehrliche Materialien und präzises
            Handwerk. Beton, warme Eiche, weicher Bouclé, grüne Pflanzen,
            eine LED-Linie an der Wand — alles dient einem Ziel: dass du dich
            kurz wie aus der Stadt herausgenommen fühlst.
          </p>
          <div className="hairline mt-12 grid grid-cols-3 gap-6 pt-8">
            <Stat n="120+" l="Stammkunden" />
            <Stat n="06" l="Behandlungen" />
            <Stat n="5★" l="Google" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="display-xl text-ink" style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.5rem)" }}>{n}</div>
      <div className="eyebrow mt-2">{l}</div>
    </div>
  );
}
