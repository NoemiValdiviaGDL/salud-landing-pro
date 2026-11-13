// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Calendar, HeartHandshake, Menu, X } from "lucide-react";
import { psychologistData } from "../../data/content";

export const Navbar = ({ onBookingClick }) => {
  const { profile } = psychologistData;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "Sobre Mí" },
    { href: "#services", label: "Servicios" },
    { href: "#gallery", label: "Instalaciones" },
    { href: "#faq", label: "Preguntas Frecuentes" },
  ];

  // Cierra el menú automáticamente si la pantalla pasa a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Bloquea el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileBooking = () => {
    setIsMobileMenuOpen(false);
    onBookingClick();
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-brand-cobalt/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Nombre */}
        <a
          href="#"
          onClick={handleLinkClick}
          className="flex items-center gap-3 group z-50"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal to-brand-emerald flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-brand-cobalt text-base sm:text-lg block leading-tight">
              {profile.name}
            </span>
            <span className="text-xs font-medium text-brand-teal block">
              Psicología Clínica
            </span>
          </div>
        </a>

        {/* Navegación Desktop */}
        <div className="hidden md:flex items-center gap-7">
          <nav className="flex items-center gap-6 text-sm font-medium text-brand-cobalt/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 hover:text-brand-emerald transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-emerald hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={onBookingClick}
            className="px-5 py-2.5 rounded-xl bg-brand-emerald hover:bg-brand-emerald-hover text-white text-sm font-semibold flex items-center gap-2 shadow-md shadow-brand-emerald/20 hover:shadow-lg hover:shadow-brand-emerald/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer transition-all duration-200"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Cita</span>
          </button>
        </div>

        {/* Controles Móviles (CTA compacto + Botón Hamburguesa) */}
        <div className="flex items-center gap-2.5 md:hidden z-50">
          <button
            onClick={onBookingClick}
            className="px-3.5 py-2 rounded-xl bg-brand-emerald hover:bg-brand-emerald-hover text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm shadow-brand-emerald/20 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
            className="p-2.5 rounded-xl bg-brand-ice/70 hover:bg-brand-ice text-brand-cobalt border border-brand-cobalt/10 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-brand-cobalt" />
            ) : (
              <Menu className="w-5 h-5 text-brand-cobalt" />
            )}
          </button>
        </div>
      </div>

      {/* Overlay oscuro detrás del menú móvil */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 top-20 bg-brand-cobalt/40 backdrop-blur-xs md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel Desplegable Móvil */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-white border-b border-brand-cobalt/10 shadow-2xl transition-all duration-300 ease-out origin-top ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-6 flex flex-col space-y-2">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 40}ms` : "0ms",
              }}
              className={`px-4 py-3.5 rounded-xl text-base font-semibold text-brand-cobalt hover:text-brand-emerald hover:bg-brand-mist transition-all flex items-center justify-between ${
                isMobileMenuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-2"
              }`}
            >
              <span>{link.label}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/40" />
            </a>
          ))}

          <div className="pt-4 mt-2 border-t border-brand-ice">
            <button
              onClick={handleMobileBooking}
              className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-brand-teal to-brand-emerald hover:from-brand-ocean hover:to-brand-emerald-hover text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-brand-emerald/20 active:scale-[0.99] transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta Ahora</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
