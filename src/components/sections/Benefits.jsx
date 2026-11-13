// src/components/sections/Benefits.jsx
import React from "react";
import { Brain, Heart, Compass, Sparkles, CheckCircle2 } from "lucide-react";
import { psychologistData } from "../../data/content";
import { Reveal } from "../ui/Reveal";

const iconMap = {
  Brain,
  Heart,
  Compass,
  Sparkles,
};

export const Benefits = () => {
  const { benefits } = psychologistData;

  return (
    <section className="py-16 md:py-24 bg-brand-mist relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-ice px-3.5 py-1.5 rounded-full">
            ¿En qué te puedo acompañar?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-cobalt tracking-tight">
            Áreas de atención y enfoque terapéutico
          </h2>
          <p className="text-base sm:text-lg text-brand-cobalt/75 leading-relaxed">
            Trabajamos con estrategias basadas en evidencia científica para
            ayudarte a encontrar soluciones reales y duraderas.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Brain;

            return (
              <Reveal key={item.id} delay={idx * 100} className="flex">
                <div className="bg-white p-8 rounded-2xl border border-brand-cobalt/10 shadow-sm hover:shadow-xl hover:shadow-brand-ocean/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group w-full">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-ice text-brand-teal flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-brand-teal group-hover:to-brand-emerald group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-brand-cobalt mb-3 group-hover:text-brand-ocean transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-cobalt/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-ice flex items-center gap-2 text-xs font-semibold text-brand-forest">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Atención personalizada</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
