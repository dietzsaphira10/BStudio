// routes/index.tsx
import { createFileRoute } from "@tanstack/react-router";

// HIER GEÄNDERT: Die geschweiften Klammern { } sind weg. 
// So importiert man einen "export default".
import Hero from "@/components/Hero"; 

import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Instagram } from "@/components/Instagram";

// HIER IMPORTIEREN:
import { FloatingBottomBar } from "@/components/FloatingBottomBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "B STUDIO — Nagelstudio Zürich" },
      { name: "description", content: "Maniküre, Pediküre, Gel & Nail Art in einem ruhigen Studio aus Beton und warmem Licht. Termin buchen." },
      { property: "og:title", content: "B STUDIO — Nagelstudio Zürich" },
      { property: "og:description", content: "Maniküre, Pediküre, Gel & Nail Art in einem ruhigen Studio aus Beton und warmem Licht." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      
      {/* Hier fügen wir sie ein. Sie ist 'fixed', also ist die Position im HTML 
        fast egal, aber am Ende ist semantisch am saubersten.
      */}
      <FloatingBottomBar />

      <Services /> {/* Vergiss nicht, hier id="services" hinzuzufügen */}
      <Gallery />  {/* Vergiss nicht, hier id="gallery" hinzuzufügen */}
      <Reviews />
      <Instagram />
      <FAQ />
      <Contact />   {/* Vergiss nicht, hier id="contact" hinzuzufügen */}
    </>
  ); 
}