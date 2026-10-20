// src/components/sections/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { psychologistData } from "../../data/content";

export const FAQ = () => {
  const { faq } = psychologistData;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-brand-sand/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-sage-dark">
            Resuelve tus dudas
          </span>
          <h2 className="text-3xl font-bold text-brand-navy">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-4">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-brand-navy/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left font-semibold text-brand-navy flex justify-between items-center gap-4 cursor-pointer hover:bg-brand-sand/30"
                >
                  <span className="text-sm sm:text-base">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-sage shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-sm text-brand-navy/75 leading-relaxed border-t border-brand-sand/50">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
