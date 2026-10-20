// src/components/sections/Hero.jsx
import React from "react";
import { ShieldCheck, Calendar, CheckCircle2, Star, Clock } from "lucide-react";
import { psychologistData } from "../../data/content";

export const Hero = ({ onBookingClick }) => {
  const { hero, profile } = psychologistData;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-brand-sand/50 to-brand-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Copys Persuasivos + CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full bg-brand-sage-light text-brand-sage-dark font-medium text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>{hero.badge}</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-navy leading-[1.15]">
              {hero.title}
            </h1>

            {/* Subtítulo / Descripción */}
            <p className="text-lg text-brand-navy/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>

            {/* Botones de Acción / CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <button
                onClick={onBookingClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta-hover text-white font-semibold text-base shadow-lg shadow-brand-terracotta/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>{hero.ctaPrimary}</span>
              </button>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-brand-sand/60 text-brand-navy font-semibold text-base border border-brand-navy/15 transition-all"
              >
                <span>{hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Garantías de Confianza */}
            <div className="pt-4 border-t border-brand-navy/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-brand-navy/70">
              {hero.guarantees.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center lg:justify-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-sage shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Visual + Imagen del Profesional */}
          <div className="lg:col-span-5 relative">
            {/* Fondo decorativo de color suave */}
            <div className="absolute inset-0 bg-brand-sage/10 rounded-3xl transform rotate-2 scale-105 -z-10 blur-sm" />

            <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-xl border border-brand-navy/5">
              {/* Contenedor de Fotografía */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-sand">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover object-center"
                />

                {/* Badge Flotante 1: Experiencia */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-white/40 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-sage-light flex items-center justify-center text-brand-sage-dark shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-sage-dark">
                      Experiencia Comprobada
                    </p>
                    <p className="text-xs text-brand-navy/80 font-medium leading-tight">
                      {profile.experienceYears}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pie de tarjeta con Datos de Cédula y Calificación */}
              <div className="mt-4 px-2 pb-2 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-brand-navy text-lg leading-tight">
                    {profile.name}
                  </h2>
                  <p className="text-xs text-brand-navy/60 font-mono mt-0.5">
                    {profile.license}
                  </p>
                </div>

                <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/60">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-bold text-amber-900">4.8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
