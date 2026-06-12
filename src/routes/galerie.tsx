import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/Gallery";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — B STUDIO" },
      { name: "description", content: "Eindrücke aus dem Studio: Beton, warmes Licht, Pflanzen, präzises Handwerk." },
    ],
  }),
  component: () => (
    <div className="pt-8">
      <Gallery />
    </div>
  ),
});
