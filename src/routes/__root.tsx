import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InstagramInstant } from "@/components/InstagramInstant";
import { CookieBanner } from "@/components/CookieBanner";
import { ThreeBackground } from "@/components/ThreeBackground";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">— 404</p>
        <h1 className="display-xl mt-4 text-ink" style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}>
          Nicht gefunden
        </h1>
        <p className="mt-4 text-sm font-light text-ink-soft">
          Diese Seite existiert nicht — oder ist umgezogen.
        </p>
        <Link to="/" className="btn btn-filled mt-10 inline-flex">Zurück zur Startseite</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl text-ink">Etwas ist schiefgelaufen</h1>
        <p className="mt-3 text-sm font-light text-ink-soft">Versuch es nochmal — oder geh zurück zur Startseite.</p>
        <div className="mt-8 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn btn-filled">Erneut versuchen</button>
          <a href="/" className="btn">Startseite</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "B STUDIO — Nagelstudio" },
      { name: "description", content: "Modernes Nagelstudio mit Maniküre, Pediküre, Gel und Nail Art." },
      { name: "theme-color", content: "#FDFCFB" },
      { property: "og:site_name", content: "B STUDIO" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@200;300;400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const onHero = path === "/";
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThreeBackground />      
      
      {/* ÄNDERUNG: 'z-10' hinzugefügt, damit alle Inhalte definitiv ÜBER dem Canvas (z-0) liegen */}
      <div className="relative z-10 min-h-screen">
        <Header />
        <main className={onHero ? "" : "pt-24 md:pt-28"}>
          <Outlet />
        </main>
        <Footer />
        <InstagramInstant />
        <CookieBanner />
      </div>
    </QueryClientProvider>
  );
}