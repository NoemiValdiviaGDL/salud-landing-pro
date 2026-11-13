// src/components/sections/Hero.jsx
import React from "react";
import { ShieldCheck, Calendar, CheckCircle2, Star, Clock } from "lucide-react";
import { psychologistData } from "../../data/content";
import { Reveal } from "../ui/Reveal";

export const Hero = ({ onBookingClick }) => {
  const { hero, profile } = psychologistData;

  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 bg-gradient-to-br from-brand-ice/70 via-brand-mist to-white">
      {/* Elementos decorativos sutiles de fondo */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 -left-24 w-80 h-80 bg-brand-emerald/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda */}
          <Reveal className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-4 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal font-semibold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>{hero.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-cobalt leading-[1.15]">
              {hero.title}
            </h1>

            <p className="text-lg text-brand-cobalt/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <button
                onClick={onBookingClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-brand-emerald hover:bg-brand-emerald-hover text-white font-semibold text-base shadow-lg shadow-brand-emerald/25 hover:shadow-xl hover:shadow-brand-emerald/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>{hero.ctaPrimary}</span>
              </button>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-brand-ice/60 text-brand-cobalt font-semibold text-base border border-brand-ocean/20 hover:border-brand-ocean/40 transition-all duration-300"
              >
                <span>{hero.ctaSecondary}</span>
              </a>
            </div>

            <div className="pt-5 border-t border-brand-cobalt/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-brand-cobalt/75">
              {hero.guarantees.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center lg:justify-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-forest shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Columna Derecha */}
          <Reveal delay={150} className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-ocean/20 to-brand-emerald/20 rounded-3xl transform rotate-2 scale-105 -z-10 blur-md" />

            <div className="relative bg-white p-3 sm:p-4 rounded-3xl shadow-xl shadow-brand-cobalt/10 border border-brand-cobalt/10 group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-ice">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-brand-teal/15 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-teal">
                      Experiencia Comprobada
                    </p>
                    <p className="text-xs text-brand-cobalt/85 font-medium leading-tight">
                      {profile.experienceYears}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 px-2 pb-2 flex items-center justify-between">
                <div>
                  <h2 className="font-bold text-brand-cobalt text-lg leading-tight">
                    {profile.name}
                  </h2>
                  <p className="text-xs text-brand-ocean font-mono mt-0.5">
                    {profile.license}
                  </p>
                </div>

                <div className="flex items-center gap-1 bg-brand-ice px-3 py-1.5 rounded-lg border border-brand-teal/20">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  <span className="text-xs font-bold text-brand-cobalt">
                    4.8
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
