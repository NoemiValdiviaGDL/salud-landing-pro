// src/components/ui/LazyMap.jsx
import React, { useEffect, useRef, useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";

export const LazyMap = ({ embedUrl, externalUrl, address }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (shouldLoad) return;

    const triggerLoad = () => {
      setShouldLoad(true);
    };

    // 1. Carga automática en cuanto el usuario interactúa (scroll o toque en pantalla)
    window.addEventListener("scroll", triggerLoad, {
      once: true,
      passive: true,
    });
    window.addEventListener("touchstart", triggerLoad, {
      once: true,
      passive: true,
    });

    // 2. Respaldo por visibilidad en pantalla
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerLoad();
          observer.disconnect();
        }
      },
      { rootMargin: "500px" },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener("scroll", triggerLoad);
      window.removeEventListener("touchstart", triggerLoad);
      observer.disconnect();
    };
  }, [shouldLoad]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-60 sm:h-64 rounded-2xl overflow-hidden bg-brand-ocean/30 border border-white/15 shadow-inner isolate"
    >
      {/* Fondo estático mientras carga por primera vez */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-brand-ocean/40 to-brand-cobalt/60 pointer-events-none">
          <MapPin className="w-6 h-6 text-[#4FD1C5] mb-2 animate-bounce" />
          <span className="text-xs text-white/80 font-medium">
            Cargando ubicación...
          </span>
        </div>
      )}

      {/* Sin loading="lazy" para que móviles no lo descarguen de RAM al subir */}
      {shouldLoad && (
        <iframe
          src={embedUrl}
          title={`Ubicación: ${address}`}
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoaded(true)}
          style={{ transform: "translateZ(0)" }}
          className={`w-full h-full border-0 transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          allowFullScreen
        />
      )}

      {/* Botón flotante para abrir ruta directa en móvil */}
      {externalUrl && (
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-cobalt/95 hover:bg-brand-emerald text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200"
        >
          <span>Cómo llegar</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
  );
};

export default LazyMap;
