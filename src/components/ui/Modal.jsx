// src/components/ui/BookingModal.jsx
import React, { useEffect } from "react";
import {
  X,
  Calendar as CalendarIcon,
  ShieldCheck,
  Clock,
  CheckCircle2,
} from "lucide-react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { psychologistData } from "../../data/content";

export const BookingModal = ({ isOpen, onClose }) => {
  const { bookingConfig } = psychologistData;

  useEffect(() => {
    if (isOpen) {
      (async function () {
        const cal = await getCalApi();
        cal("ui", {
          theme: "light",
          styles: {
            branding: {
              brandColor: "#5B8266",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      })();
    }
  }, [isOpen]);

  // Si el modal está cerrado, no renderiza nada
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/60 backdrop-blur-sm animate-fadeIn">
      {/* Fondo clickeable para cerrar */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Contenido del Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-brand-navy/10 overflow-hidden flex flex-col z-10 animate-scaleUp">
        {/* Cabecera del Modal con Botón de Cerrar */}
        <div className="flex items-center justify-between p-6 border-b border-brand-sand bg-brand-warm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-sage-light text-brand-sage-dark flex items-center justify-center">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-brand-navy text-lg leading-tight">
                {bookingConfig.title}
              </h3>
              <p className="text-xs text-brand-navy/60">
                Selecciona la fecha y hora que mejor te acomode
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-brand-sand text-brand-navy/60 hover:text-brand-navy transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Contenido Scrollable con Cal.com Embed */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-grow">
          <Cal
            calLink="alejandro-ramos/consulta" // 👈 Tu slug real de Cal.com
            style={{ width: "100%", height: "100%", minHeight: "550px" }}
            config={{ layout: "month_view", theme: "light" }}
          />
        </div>

        {/* Pie de Garantías */}
        <div className="p-4 bg-brand-sand/40 border-t border-brand-navy/5 grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs text-brand-navy/70">
          <div className="flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-sage shrink-0" />
            <span>Confirmación inmediata por Google Meet</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-sage shrink-0" />
            <span>Sincronización con Google Calendar</span>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-sage shrink-0" />
            <span>Recordatorios automáticos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
