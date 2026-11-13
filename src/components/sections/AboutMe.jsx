// src/components/sections/AboutMe.jsx
import React from "react";
import { Award, GraduationCap } from "lucide-react";
import { psychologistData } from "../../data/content";
import { Reveal } from "../ui/Reveal";

export const AboutMe = () => {
  const { about, profile } = psychologistData;

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Imagen lateral */}
          <Reveal className="lg:col-span-5 relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-lg shadow-brand-cobalt/10 border border-brand-cobalt/10 group">
              <img
                src={profile.photoAbout}
                alt={profile.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4 bg-brand-mist p-4 rounded-2xl border border-brand-teal/20 shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-brand-teal/15 flex items-center justify-center text-brand-teal shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-cobalt">
                  {profile.license}
                </p>
                <p className="text-xs text-brand-ocean">
                  Cédula y Registro Profesional Vigente
                </p>
              </div>
            </div>
          </Reveal>

          {/* Texto de presentación */}
          <Reveal delay={150} className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-ice px-3.5 py-1.5 rounded-full">
              Perfil Profesional
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-brand-cobalt tracking-tight">
              {about.title}
            </h2>

            <div className="space-y-4 text-brand-cobalt/80 leading-relaxed text-base">
              {about.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Credenciales */}
            <div className="pt-5 border-t border-brand-cobalt/10 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-ocean">
                Formación y Certificaciones
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-brand-cobalt/85">
                {about.credentials.map((cred, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-brand-emerald shrink-0" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
