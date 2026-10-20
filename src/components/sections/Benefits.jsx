// src/components/sections/Benefits.jsx
import React from "react";
import { Brain, Heart, Compass, Sparkles, CheckCircle2 } from "lucide-react";
import { psychologistData } from "../../data/content";

// Mapeo dinámico de íconos desde el string de data
const iconMap = {
  Brain,
  Heart,
  Compass,
  Sparkles,
};

export const Benefits = () => {
  const { benefits } = psychologistData;

  return (
    <section className="py-16 md:py-24 bg-brand-warm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-sage-dark">
            ¿En qué te puedo acompañar?
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
            Áreas de atención y enfoque terapéutico
          </p>
          <p className="text-base sm:text-lg text-brand-navy/75 leading-relaxed">
            Trabajamos con estrategias basadas en evidencia científica para
            ayudarte a encontrar soluciones reales y duraderas.
          </p>
        </div>

        {/* Grilla de Tarjetas de Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item) => {
            const IconComponent = iconMap[item.icon] || Brain;

            return (
              <div
                key={item.id}
                className="bg-white p-8 rounded-2xl border border-brand-navy/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Ícono de la tarjeta */}
                  <div className="w-12 h-12 rounded-xl bg-brand-sage-light text-brand-sage-dark flex items-center justify-center mb-6 group-hover:bg-brand-sage group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Título y Descripción */}
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-navy/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-sand flex items-center gap-2 text-xs font-semibold text-brand-sage-dark">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Atención personalizada</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
