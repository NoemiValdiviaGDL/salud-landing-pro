// src/components/sections/Gallery.jsx
import React from "react";
import { Camera, MapPin } from "lucide-react";
import { psychologistData } from "../../data/content";
import { Reveal } from "../ui/Reveal";

export const Gallery = () => {
  const { gallery } = psychologistData;

  if (!gallery) return null;

  return (
    <section id="gallery" className="py-16 md:py-24 bg-brand-mist relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-ice px-3.5 py-1.5 rounded-full">
            <Camera className="w-4 h-4" />
            <span>Instalaciones y Espacio</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-cobalt tracking-tight">
            {gallery.title}
          </h2>
          <p className="text-base sm:text-lg text-brand-cobalt/75">
            {gallery.subtitle}
          </p>
        </Reveal>

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 sm:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {gallery.images.map((img, idx) => (
            <Reveal
              key={img.id}
              delay={idx * 100}
              className="flex-none w-[80vw] sm:w-auto snap-center"
            >
              <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-brand-ice border border-brand-cobalt/10 shadow-sm hover:shadow-xl hover:shadow-brand-cobalt/15 transition-all duration-300">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-cobalt/90 via-brand-ocean/20 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-xs font-semibold text-white tracking-wide">
                    {img.caption}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="text-center text-xs text-brand-ocean/70 mt-2 sm:hidden">
          ← Desliza para ver más fotos →
        </p>

        <div className="mt-8 text-center flex items-center justify-center gap-2 text-xs sm:text-sm text-brand-cobalt/75">
          <MapPin className="w-4 h-4 text-brand-teal" />
          <span>
            Ubicados en zona accesible con estacionamiento en Zapopan, Jalisco.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
