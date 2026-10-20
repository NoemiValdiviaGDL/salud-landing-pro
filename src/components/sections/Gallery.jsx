// src/components/sections/Gallery.jsx
import React from "react";
import { Camera, MapPin } from "lucide-react";
import { psychologistData } from "../../data/content";

export const Gallery = () => {
  const { gallery, profile } = psychologistData;

  if (!gallery) return null;

  return (
    <section className="py-16 md:py-24 bg-brand-warm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-sage-dark bg-brand-sage-light px-3.5 py-1.5 rounded-full">
            <Camera className="w-4 h-4" />
            <span>Instalaciones y Espacio</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
            {gallery.title}
          </h2>
          <p className="text-base sm:text-lg text-brand-navy/75">
            {gallery.subtitle}
          </p>
        </div>

        {/* Grilla de Imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.images.map((img) => (
            <div
              key={img.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-brand-sand border border-brand-navy/10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay suave con pie de foto */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-xs font-semibold text-white tracking-wide">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Detalle de ubicación */}
        <div className="mt-10 text-center flex items-center justify-center gap-2 text-xs sm:text-sm text-brand-navy/70">
          <MapPin className="w-4 h-4 text-brand-sage" />
          <span>
            Ubicados en zona accesible con estacionamiento en Zapopan, Jalisco.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
