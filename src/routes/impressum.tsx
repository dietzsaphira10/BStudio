import { createFileRoute } from "@tanstack/react-router";
import { STUDIO } from "@/lib/studio";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: [{ title: "Impressum — B STUDIO" }] }),
  component: Impressum,
});

function Impressum() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:px-12 md:py-24">
      <p className="text-[10px] uppercase tracking-luxe text-brown">— Impressum</p>
      <h1 className="mt-2 font-serif text-5xl text-ink">Impressum</h1>
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-brown-deep">
        <section>
          <h2 className="mb-2 text-[10px] uppercase tracking-luxe text-brown">Betreiberin</h2>
          <p>{STUDIO.name}<br />{STUDIO.address.street}<br />{STUDIO.address.city}</p>
        </section>
        <section>
          <h2 className="mb-2 text-[10px] uppercase tracking-luxe text-brown">Kontakt</h2>
          <p>{STUDIO.phone}<br />{STUDIO.email}</p>
        </section>
        <section>
          <h2 className="mb-2 text-[10px] uppercase tracking-luxe text-brown">Haftung</h2>
          <p>
            Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität wird jedoch
            keine Gewähr übernommen.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-[10px] uppercase tracking-luxe text-brown">Bildrechte</h2>
          <p>Alle Bilder © {STUDIO.name}, sofern nicht anders gekennzeichnet.</p>
        </section>
      </div>
    </div>
  );
}
