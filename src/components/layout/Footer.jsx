// src/components/layout/Footer.jsx
import React from "react";
import { HeartHandshake, MapPin, ShieldCheck } from "lucide-react";
import { psychologistData } from "../../data/content";
import { LazyMap } from "../ui/LazyMap";

export const Footer = () => {
  const { profile } = psychologistData;

  return (
    <footer className="bg-gradient-to-b from-brand-cobalt to-[#081C59] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Columna 1: Identidad y Confidencialidad (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-white/10 text-brand-ice">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg tracking-tight">
                  {profile.name}
                </span>
              </div>
              <p className="text-xs text-white/75 leading-relaxed">
                {profile.tagline}
              </p>
              <p className="inline-block text-xs font-mono bg-white/10 text-brand-ice px-3 py-1 rounded-md">
                {profile.license}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-white/70">
              <div className="flex items-center gap-2 text-white font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#4FD1C5]" />
                <span>Confidencialidad</span>
              </div>
              <p className="leading-relaxed">
                Toda la información tratada en las sesiones y formularios de
                contacto está protegida bajo secreto profesional y el aviso de
                privacidad correspondiente.
              </p>
            </div>
          </div>

          {/* Columna 2: Ubicación + Mapa Rápido (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h4 className="font-bold text-sm text-white uppercase tracking-wider">
                Ubicación del Consultorio
              </h4>
              <div className="flex items-center gap-2 text-xs text-white/85">
                <MapPin className="w-4 h-4 text-[#4FD1C5] shrink-0" />
                <span>{profile.location}</span>
              </div>
            </div>

            <LazyMap
              embedUrl={profile.mapEmbedUrl}
              externalUrl={profile.mapExternalUrl}
              address={profile.location}
            />
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {profile.name}. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
