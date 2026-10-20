// src/components/sections/AboutMe.jsx
import React from "react";
import { Award, GraduationCap, ShieldCheck } from "lucide-react";
import { psychologistData } from "../../data/content";

export const AboutMe = () => {
  const { about, profile } = psychologistData;

  return (
    <section id="about" className="py-16 md:py-24 bg-brand-sand/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Imagen lateral */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-lg border border-brand-navy/10">
              <img
                src={profile.photoAbout}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 bg-white p-4 rounded-2xl border border-brand-navy/10 shadow-sm flex items-center gap-3">
              <Award className="w-8 h-8 text-brand-sage shrink-0" />
              <div>
                <p className="text-xs font-bold text-brand-navy">
                  {profile.license}
                </p>
                <p className="text-xs text-brand-navy/60">
                  Cédula y Registro Profesional Vigente
                </p>
              </div>
            </div>
          </div>

          {/* Texto de presentación */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-sage-dark bg-brand-sage-light px-3.5 py-1.5 rounded-full">
              Perfil Profesional
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              {about.title}
            </h2>

            <div className="space-y-4 text-brand-navy/80 leading-relaxed text-base">
              {about.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Credenciales */}
            <div className="pt-4 border-t border-brand-navy/10 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-navy/70">
                Formación y Certificaciones
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-brand-navy/80">
                {about.credentials.map((cred, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-brand-sage shrink-0" />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
