// src/components/ui/CallButton.jsx
import React from "react";
import { Phone } from "lucide-react";
import { psychologistData } from "../../data/content";

export const CallButton = () => {
  const { bookingConfig } = psychologistData;

  return (
    <a
      href={`tel:+${bookingConfig.whatsappContact}`}
      aria-label="Llamar por teléfono"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 bg-brand-ocean hover:bg-brand-cobalt text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-brand-cobalt/40 transition-all duration-300 transform hover:scale-105 active:scale-95 group cursor-pointer border border-white/20"
    >
      <div className="relative flex items-center justify-center">
        <Phone className="w-5 h-5 text-white" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-emerald"></span>
        </span>
      </div>

      <span className="hidden sm:inline-block font-semibold text-xs tracking-wide">
        Llamar al consultorio
      </span>
    </a>
  );
};

export default CallButton;
