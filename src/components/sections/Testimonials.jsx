// src/components/sections/Testimonials.jsx
import React from "react";
import { Star, Quote } from "lucide-react";
import { psychologistData } from "../../data/content";
import { Reveal } from "../ui/Reveal";

export const Testimonials = () => {
  const { testimonials } = psychologistData;

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-ice px-3.5 py-1.5 rounded-full">
            Prueba Social y Experiencias
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-cobalt tracking-tight">
            Historias de acompañamiento y cambio
          </h2>
          <p className="text-base sm:text-lg text-brand-cobalt/75">
            Lo que dicen quienes han iniciado su proceso terapéutico.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Reveal key={t.id} delay={idx * 120} className="flex">
              <div className="bg-brand-mist/60 hover:bg-white p-8 rounded-3xl border border-brand-cobalt/10 shadow-sm hover:shadow-xl hover:shadow-brand-ocean/10 transition-all duration-300 flex flex-col justify-between relative w-full group">
                <Quote className="w-10 h-10 text-brand-teal/15 absolute top-6 right-6 -z-0 group-hover:text-brand-teal/25 transition-colors" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>

                  <p className="text-sm text-brand-cobalt/85 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-teal/15 relative z-10">
                  <p className="font-bold text-brand-cobalt text-sm">
                    {t.author}
                  </p>
                  <p className="text-xs text-brand-ocean font-medium">
                    {t.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
