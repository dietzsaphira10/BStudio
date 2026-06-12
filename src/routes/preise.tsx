import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES, STUDIO } from "@/lib/studio";

const PRICELIST = [
  {
    slug: "maniküre",
    title: "Maniküre",
    items: [
      { name: "Klassische Maniküre", price: "CHF 65" },
      { name: "Gel-Lack auf Naturnagel", price: "CHF 85" },
      { name: "French Maniküre", price: "CHF 95" },
      { name: "Soak-Off (nur Entfernung)", price: "CHF 35" },
    ],
  },
  {
    slug: "pediküre",
    title: "Pediküre",
    items: [
      { name: "Spa Pediküre", price: "CHF 85" },
      { name: "Gel Pediküre", price: "CHF 110" },
      { name: "Express Pediküre", price: "CHF 65" },
    ],
  },
  {
    slug: "gel-overlay",
    title: "Gel & Builder",
    items: [
      { name: "Builder Gel auf Naturnagel", price: "CHF 95" },
      { name: "Gel Verlängerung kurz", price: "CHF 120" },
      { name: "Refill", price: "CHF 85" },
    ],
  },
  {
    slug: "nail-art",
    title: "Nail Art",
    items: [
      { name: "Akzent pro Nagel", price: "ab CHF 5" },
      { name: "Filigranes Linework", price: "ab CHF 15" },
      { name: "Custom Design (alle 10)", price: "ab CHF 60" },
    ],
  },
];

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise — B STUDIO" },
      { name: "description", content: "Transparente Preise für Maniküre, Pediküre, Gel und Nail Art." },
    ],
  }),
  component: Preise,
});

function Preise() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
      <p className="mb-4 text-[10px] uppercase tracking-luxe text-brown">— Preise</p>
      <h1 className="font-serif text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.92] text-ink">
        Transparent.<br /><span className="italic">Ohne Sternchen.</span>
      </h1>
      <p className="mt-6 max-w-lg text-sm leading-relaxed text-brown-deep/85">
        Die Preise verstehen sich pro Behandlung inkl. aller Materialien.
        Bei Fragen schreib uns auf Instagram oder per Mail.
      </p>

      <div className="mt-16 space-y-20">
        {PRICELIST.map((cat, i) => (
          <section key={cat.slug} id={cat.slug} className="hairline border-t border-ink/15 pt-10">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-4">
                <p className="text-[10px] uppercase tracking-luxe text-brown">N°0{i + 1}</p>
                <h2 className="mt-2 font-serif text-4xl text-ink md:text-5xl">{cat.title}</h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a href={STUDIO.bookingUrl} className="btn btn-filled">Termin</a>
                  <Link to="/" className="btn">Zurück</Link>
                </div>
              </div>
              <ul className="col-span-12 md:col-span-7 md:col-start-6">
                {cat.items.map((it) => (
                  <li key={it.name} className="hairline-b flex items-baseline justify-between gap-4 border-b border-ink/15 py-5">
                    <span className="font-serif text-xl text-ink md:text-2xl">{it.name}</span>
                    <span className="text-sm uppercase tracking-wide-2 text-brown">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-24 hairline border-t border-ink/15 pt-10">
        <p className="text-[10px] uppercase tracking-luxe text-brown">Du suchst etwas anderes?</p>
        <p className="mt-3 max-w-xl font-serif text-2xl text-ink md:text-3xl">
          Schreib uns — wir machen dir ein individuelles Angebot.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <a href={STUDIO.bookingUrl} className="btn btn-filled">Termin anfragen</a>
          <a href={STUDIO.instagramUrl} target="_blank" rel="noreferrer" className="btn btn-led">Instagram DM</a>
        </div>
      </div>

      {/* Sanity reference */}
      <p className="sr-only">{SERVICES.map((s) => s.title).join(", ")}</p>
    </div>
  );
}
