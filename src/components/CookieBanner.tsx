import { useEffect, useState } from "react";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.localStorage.getItem("cookie-ack")) setShow(true);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-24 left-4 right-4 z-50 max-w-md border border-ink/10 bg-background/95 p-5 backdrop-blur-xl md:bottom-6 md:left-6 md:right-auto md:p-6">
      <p className="eyebrow mb-3">— Hinweis</p>
      <p className="text-xs font-light leading-relaxed text-ink">
        Diese Seite verwendet nur technisch notwendige Cookies. Mehr im Impressum.
      </p>
      <div className="mt-4 flex gap-2">
        <button
          className="btn btn-filled !py-2.5 !px-4 !text-[10px]"
          onClick={() => {
            window.localStorage.setItem("cookie-ack", "1");
            setShow(false);
          }}
        >
          Verstanden
        </button>
      </div>
    </div>
  );
}
