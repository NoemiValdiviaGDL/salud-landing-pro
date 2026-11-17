// src/components/sections/Credentials.jsx
import React, { useState } from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  Building2,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";
import { psychologistData } from "../../data/content";
import { Reveal } from "../ui/Reveal";

const categoryConfig = {
  academica: {
    icon: GraduationCap,
    badgeBg: "bg-brand-cobalt/10 text-brand-cobalt border-brand-cobalt/20",
  },
  certificacion: {
    icon: Award,
    badgeBg: "bg-brand-emerald/10 text-brand-emerald border-brand-emerald/20",
  },
  curso: {
    icon: BookOpen,
    badgeBg: "bg-brand-teal/10 text-brand-teal border-brand-teal/20",
  },
};

const filterTabs = [
  { id: "todos", label: "Todos" },
  { id: "academica", label: "Formación Académica" },
  { id: "certificacion", label: "Certificaciones" },
  { id: "curso", label: "Cursos y Talleres" },
];

export const Credentials = () => {
  const { credentialsSection } = psychologistData;
  const [activeFilter, setActiveFilter] = useState("todos");

  if (!credentialsSection) return null;

  const filteredItems =
    activeFilter === "todos"
      ? credentialsSection.items
      : credentialsSection.items.filter(
          (item) => item.category === activeFilter,
        );

  return (
    <section
      id="credentials"
      className="py-16 md:py-24 bg-brand-mist relative border-t border-brand-cobalt/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <Reveal className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-ice px-3.5 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4" />
            <span>{credentialsSection.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-cobalt tracking-tight">
            {credentialsSection.title}
          </h2>
          <p className="text-base sm:text-lg text-brand-cobalt/75 leading-relaxed">
            {credentialsSection.subtitle}
          </p>
        </Reveal>

        {/* Pestañas de Filtro */}
        <Reveal
          delay={100}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-brand-cobalt text-white shadow-md shadow-brand-cobalt/20"
                    : "bg-white text-brand-cobalt/75 hover:text-brand-cobalt hover:bg-brand-ice/70 border border-brand-cobalt/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </Reveal>

        {/* Grilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const config =
              categoryConfig[item.category] || categoryConfig.certificacion;
            const IconComponent = config.icon;

            return (
              <Reveal key={item.id} delay={idx * 70} className="flex">
                <div className="bg-white rounded-2xl p-6 border border-brand-cobalt/10 shadow-sm hover:shadow-xl hover:shadow-brand-ocean/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between w-full group">
                  <div>
                    {/* Cabecera de la tarjeta: Badge de categoría + Año */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${config.badgeBg}`}
                      >
                        <IconComponent className="w-3.5 h-3.5" />
                        <span>{item.categoryLabel}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-brand-ocean bg-brand-mist px-2.5 py-1 rounded-md">
                        <CalendarCheck className="w-3.5 h-3.5 text-brand-teal" />
                        {item.year}
                      </span>
                    </div>

                    {/* Título del estudio */}
                    <h3 className="text-lg font-bold text-brand-cobalt mb-2 group-hover:text-brand-ocean transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Enfoque práctico para el paciente */}
                    {item.focus && (
                      <p className="text-xs sm:text-sm text-brand-cobalt/75 leading-relaxed mb-4">
                        {item.focus}
                      </p>
                    )}
                  </div>

                  {/* Institución avaladora */}
                  <div className="pt-3.5 border-t border-brand-ice flex items-center gap-2 text-xs font-semibold text-brand-teal">
                    <Building2 className="w-4 h-4 shrink-0 text-brand-emerald" />
                    <span className="truncate">{item.institution}</span>
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

export default Credentials;
