// src/components/sections/BookingSection.jsx
import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import {
  X,
  Calendar as CalendarIcon,
  ShieldCheck,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { psychologistData } from "../../data/content";

export const BookingSection = ({ isOpen, onClose }) => {
  const { bookingConfig } = psychologistData;

  useEffect(() => {
    if (isOpen) {
      (async function () {
        const cal = await getCalApi();
        cal("ui", {
          theme: "light",
          styles: {
            branding: {
              brandColor: "#0C8269",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      })();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-cobalt/65 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-brand-cobalt/15 overflow-hidden flex flex-col z-10 animate-scaleUp">
        {/* Cabecera */}
        <div className="flex items-center justify-between p-6 border-b border-brand-ice bg-brand-mist">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-teal/15 text-brand-teal flex items-center justify-center">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-brand-cobalt text-lg leading-tight">
                {bookingConfig.title}
              </h3>
              <p className="text-xs text-brand-ocean">
                Selecciona la fecha y hora que mejor te acomode
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-brand-ice text-brand-cobalt/60 hover:text-brand-cobalt transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cal.com Embed */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-grow">
          <Cal
            calLink="https://cal.com/noemi-valdivia-garcia-etbevl/terapia-picologica"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "650px",
              overflow: "scroll",
            }}
            config={{ layout: "month_view", theme: "light" }}
          />
        </div>

        {/* Pie de Garantías */}
        <div className="p-4 bg-brand-mist border-t border-brand-cobalt/10 grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs text-brand-cobalt/80">
          <div className="flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-forest shrink-0" />
            <span>Confirmación inmediata por Google Meet</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-teal shrink-0" />
            <span>Sincronización con Google Calendar</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-ocean shrink-0" />
            <span>Recordatorios automáticos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
