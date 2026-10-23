// src/components/layout/Navbar.jsx
import React from "react";
import { Calendar, HeartHandshake } from "lucide-react";
import { psychologistData } from "../../data/content";

export const Navbar = ({ onBookingClick }) => {
  const { profile } = psychologistData;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-navy/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Nombre */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-brand-sage flex items-center justify-center text-white">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-brand-navy text-base sm:text-lg block leading-tight">
              {profile.name}
            </span>
            <span className="text-xs text-brand-navy/60 hidden sm:block">
              Psicología Clínica
            </span>
          </div>
        </a>

        {/* Links + CTA */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-navy/80">
            <a
              href="#about"
              className="hover:text-brand-sage transition-colors"
            >
              Sobre Mí
            </a>
            <a
              href="#services"
              className="hover:text-brand-sage transition-colors"
            >
              Servicios
            </a>
            <a
              href="#gallery"
              className="hover:text-brand-sage transition-colors"
            >
              Instalaciones
            </a>
          </nav>

          <button
            onClick={onBookingClick}
            className="px-5 py-2.5 rounded-xl bg-brand-terracotta hover:bg-brand-terracotta-hover text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm cursor-pointer transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Cita</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
