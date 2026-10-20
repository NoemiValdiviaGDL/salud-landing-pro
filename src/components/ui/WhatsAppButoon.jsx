// src/components/ui/WhatsAppButton.jsx
import React from "react";
import { MessageCircle } from "lucide-react";
import { psychologistData } from "../../data/content";

export const WhatsAppButton = () => {
  const { bookingConfig, profile } = psychologistData;

  // Mensaje predeterminado codificado para la URL
  const defaultMessage = encodeURIComponent(
    `Hola Lic. ${profile.name}, me gustaría recibir información sobre las consultas.`,
  );

  const whatsappUrl = `https://wa.me/${bookingConfig.whatsappContact}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 group cursor-pointer"
    >
      {/* Ícono con efecto de pulso */}
      <div className="relative flex items-center justify-center">
        <MessageCircle className="w-6 h-6 fill-white stroke-[#25D366]" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </div>

      {/* Texto visible en pantallas medianas/grandes */}
      <span className="hidden sm:inline-block font-semibold text-xs tracking-wide">
        ¿Dudas? Escríbeme por WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
