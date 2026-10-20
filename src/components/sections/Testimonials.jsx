// src/components/sections/Testimonials.jsx
import React from "react";
import { Star, Quote } from "lucide-react";
import { psychologistData } from "../../data/content";

export const Testimonials = () => {
  const { testimonials } = psychologistData;

  return (
    <section className="py-16 md:py-24 bg-brand-warm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-sage-dark">
            Prueba Social y Experiencias
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
            Historias de acompañamiento y cambio
          </p>
          <p className="text-base sm:text-lg text-brand-navy/75">
            Lo que dicen quienes han iniciado su proceso terapéutico.
          </p>
        </div>

        {/* Grilla de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-3xl border border-brand-navy/10 shadow-sm flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-brand-sage-light absolute top-6 right-6 -z-0 opacity-80" />

              <div className="relative z-10 space-y-4">
                {/* Estrellas */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                <p className="text-sm text-brand-navy/80 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-sand relative z-10">
                <p className="font-bold text-brand-navy text-sm">{t.author}</p>
                <p className="text-xs text-brand-navy/60 font-medium">
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
