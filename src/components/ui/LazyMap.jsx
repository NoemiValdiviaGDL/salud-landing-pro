// src/components/ui/LazyMap.jsx
import React, { useEffect, useRef, useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";

export const LazyMap = ({ embedUrl, externalUrl, address }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      // Empieza a cargar 350px antes de que el usuario llegue al footer
      { rootMargin: "350px" },
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-brand-ocean/30 border border-white/15 shadow-inner group"
    >
      {/* Skeleton / Placeholder ultraligero mientras carga */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-brand-ocean/40 to-brand-cobalt/60 animate-pulse">
          <MapPin className="w-6 h-6 text-[#4FD1C5] mb-2" />
          <span className="text-xs text-white/75 font-medium">
            Cargando mapa del consultorio...
          </span>
        </div>
      )}

      {/* Iframe inyectado solo al acercarse en el scroll */}
      {shouldLoad && (
        <iframe
          src={embedUrl}
          title={`Ubicación: ${address}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full border-0 transition-opacity duration-500 ${
            isLoaded ? "opacity-95 hover:opacity-100" : "opacity-0"
          }`}
          allowFullScreen=""
        />
      )}

      {/* Botón flotante para abrir ruta directa en móvil */}
      {externalUrl && (
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-cobalt/90 hover:bg-brand-emerald text-white text-[11px] font-semibold backdrop-blur-md border border-white/20 shadow-lg transition-all duration-200"
        >
          <span>Cómo llegar</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  );
};

export default LazyMap;
