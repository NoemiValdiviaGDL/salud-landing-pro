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
import { Reveal } from "../ui/Reveal";

export const Services = ({ onBookingClick }) => {
  const { services } = psychologistData;

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-ice px-3.5 py-1.5 rounded-full">
            Servicios y Modalidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-cobalt tracking-tight">
            Elige el formato que mejor se adapte a ti
          </h2>
          <p className="text-base sm:text-lg text-brand-cobalt/75">
            Transparencia total en precios y duración de cada sesión. Sin plazos
            forzosos.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {services.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 150} className="flex">
              <div
                className={`relative bg-white rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between w-full ${
                  service.popular
                    ? "border-2 border-brand-emerald ring-4 ring-brand-emerald/10 shadow-xl shadow-brand-emerald/10"
                    : "border border-brand-cobalt/15 shadow-sm hover:shadow-lg"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-teal to-brand-emerald text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                    Opción Más Solicitada
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-brand-ice flex items-center justify-center text-brand-ocean">
                      {service.id === "individual" ? (
                        <User className="w-5 h-5" />
                      ) : (
                        <Users className="w-5 h-5" />
                      )}
                    </div>
                    <span className="text-xs font-semibold bg-brand-ice text-brand-teal px-3.5 py-1 rounded-full">
                      {service.forWho}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-brand-cobalt mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-brand-cobalt/75 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="bg-brand-mist p-4 rounded-2xl mb-6 flex items-baseline justify-between border border-brand-teal/15">
                    <div>
                      <span className="text-3xl font-extrabold text-brand-cobalt">
                        {service.price}
                      </span>
                      <span className="text-xs text-brand-ocean font-medium">
                        {" "}
                        / sesión
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-teal">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 text-sm text-brand-cobalt/85">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand-forest shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onBookingClick}
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer transform active:scale-[0.99] ${
                    service.popular
                      ? "bg-brand-emerald hover:bg-brand-emerald-hover text-white shadow-md shadow-brand-emerald/25 hover:shadow-lg"
                      : "bg-brand-cobalt hover:bg-brand-cobalt-light text-white shadow-sm"
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Cita</span>
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={200}
          className="mt-12 text-center flex flex-wrap items-center justify-center gap-6 text-sm text-brand-cobalt/75"
        >
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-brand-teal" />
            <span>Sesiones por Google Meet / Zoom</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-teal" />
            <span>Consultorio en Zapopan, Jal.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
