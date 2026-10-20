// src/components/sections/BookingSection.jsx
import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import {
  Calendar as CalendarIcon,
  ShieldCheck,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { psychologistData } from "../../data/content";

export const BookingSection = () => {
  const { bookingConfig, profile } = psychologistData;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: {
          branding: {
            brandColor: "#5B8266", // Verde Salvia de tu paleta
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="booking" className="py-16 md:py-24 bg-brand-warm relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-sage-dark bg-brand-sage-light px-3.5 py-1.5 rounded-full">
            <CalendarIcon className="w-4 h-4" />
            <span>Disponibilidad en Tiempo Real</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
            {bookingConfig.title}
          </h2>
          <p className="text-base text-brand-navy/75">
            Selecciona la modalidad, el día y la hora. La cita se agendará y
            sincronizará directamente en Google Calendar.
          </p>
        </div>

        {/* Tarjeta contenedora del Calendario */}
        <div className="bg-white rounded-3xl p-2 sm:p-6 shadow-sm border border-brand-navy/10 overflow-hidden">
          {/* Widget interactivo de Cal.com */}
          <Cal
            calLink="https://cal.com/noemi-valdivia-garcia-etbevl/terapia-picologica" // 👈 Cambiar por el link real de Cal.com del cliente
            style={{
              width: "100%",
              height: "100%",
              minHeight: "650px",
              overflow: "scroll",
            }}
            config={{ layout: "month_view", theme: "light" }}
          />
        </div>

        {/* Garantías debajo del calendario */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs text-brand-navy/70">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-sage" />
            <span>Confirmación e invitación de Google Meet inmediata</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-sage" />
            <span>Sincronización anti-traslapes con Google Calendar</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-brand-sage" />
            <span>Recordatorios automáticos a tu correo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
