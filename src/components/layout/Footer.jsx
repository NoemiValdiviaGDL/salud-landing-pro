// src/components/layout/Footer.jsx
import React from "react";
import { HeartHandshake, MapPin, Phone, Mail } from "lucide-react";
import { psychologistData } from "../../data/content";

export const Footer = () => {
  const { profile } = psychologistData;

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-6 h-6 text-brand-sage-light" />
              <span className="font-bold text-lg">{profile.name}</span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              {profile.tagline}
            </p>
            <p className="text-xs font-mono text-brand-sage-light">
              {profile.license}
            </p>
          </div>

          {/* Columna 2: Ubicación */}
          <div className="space-y-3 text-xs text-white/80">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              Ubicación y Atención
            </h4>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-brand-sage-light shrink-0 mt-0.5" />
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Columna 3: Aviso de Privacidad */}
          <div className="space-y-3 text-xs text-white/70">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              Confidencialidad
            </h4>
            <p>
              Toda la información tratada en las sesiones y formularios de
              contacto está protegida bajo secreto profesional y el aviso de
              privacidad correspondiente.
            </p>
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
