// src/components/sections/FAQ.jsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { psychologistData } from "../../data/content";
import { Reveal } from "../ui/Reveal";

export const FAQ = () => {
  const { faq } = psychologistData;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-brand-mist">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12 space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-ice px-3.5 py-1.5 rounded-full">
            Resuelve tus dudas
          </span>
          <h2 className="text-3xl font-bold text-brand-cobalt">
            Preguntas Frecuentes
          </h2>
        </Reveal>

        <div className="space-y-4">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 60}>
                <div
                  className={`bg-white rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-brand-teal/40 shadow-md shadow-brand-ocean/5"
                      : "border-brand-cobalt/10 hover:border-brand-teal/30"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left font-semibold text-brand-cobalt flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">
                      {item.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-brand-teal text-white"
                          : "bg-brand-ice text-brand-teal"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Acordeón fluido usando CSS grid-rows */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-5 pt-0 text-sm text-brand-cobalt/80 leading-relaxed border-t border-brand-ice">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
