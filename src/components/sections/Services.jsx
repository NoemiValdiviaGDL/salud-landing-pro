// src/components/sections/Services.jsx
import React from "react";
import {
  Clock,
  Video,
  MapPin,
  Check,
  Calendar,
  Users,
  User,
} from "lucide-react";
import { psychologistData } from "../../data/content";

export const Services = ({ onBookingClick }) => {
  const { services } = psychologistData;

  return (
    <section id="services" className="py-16 md:py-24 bg-brand-sand/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-sage-dark">
            Servicios y Modalidades
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
            Elige el formato que mejor se adapte a ti
          </p>
          <p className="text-base sm:text-lg text-brand-navy/75">
            Transparencia total en precios y duración de cada sesión. Sin plazos
            forzosos.
          </p>
        </div>

        {/* Grilla de Tarjetas de Precios/Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative bg-white rounded-3xl p-8 shadow-sm border transition-all duration-300 flex flex-col justify-between ${
                service.popular
                  ? "border-brand-sage ring-2 ring-brand-sage/20 shadow-md"
                  : "border-brand-navy/10"
              }`}
            >
              {/* Badge de "Más Solicitado" */}
              {service.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-sage text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
                  Opción Más Solicitada
                </div>
              )}

              <div>
                {/* Cabecera del Servicio */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-sand flex items-center justify-center text-brand-navy">
                    {service.id === "individual" ? (
                      <User className="w-5 h-5" />
                    ) : (
                      <Users className="w-5 h-5" />
                    )}
                  </div>
                  <span className="text-xs font-medium bg-brand-sand text-brand-navy px-3 py-1 rounded-full">
                    {service.forWho}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-brand-navy mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-brand-navy/75 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Precio y Duración */}
                <div className="bg-brand-warm p-4 rounded-2xl mb-6 flex items-baseline justify-between border border-brand-navy/5">
                  <div>
                    <span className="text-3xl font-extrabold text-brand-navy">
                      {service.price}
                    </span>
                    <span className="text-xs text-brand-navy/60 font-medium">
                      {" "}
                      / sesión
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-navy/75">
                    <Clock className="w-4 h-4 text-brand-sage" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Lista de Beneficios del Servicio */}
                <ul className="space-y-3 mb-8 text-sm text-brand-navy/80">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-brand-sage shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón de Acción */}
              <button
                onClick={onBookingClick}
                className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  service.popular
                    ? "bg-brand-terracotta hover:bg-brand-terracotta-hover text-white shadow-md shadow-brand-terracotta/20"
                    : "bg-brand-navy hover:bg-brand-navy-light text-white"
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Cita</span>
              </button>
            </div>
          ))}
        </div>

        {/* Nota sobre Modalidades */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-6 text-sm text-brand-navy/70">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-brand-sage" />
            <span>Sesiones por Google Meet / Zoom</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-sage" />
            <span>Consultorio en Zapopan, Jal.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
