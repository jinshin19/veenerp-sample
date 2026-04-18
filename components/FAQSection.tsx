"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FAQSection() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-slate-50">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <p className="section-label mb-3">{t.faq.sectionLabel}</p>
          <h2 className="text-[1.875rem] sm:text-[2.375rem] font-bold text-slate-900 tracking-tight">
            {t.faq.heading}
          </h2>
          <p className="text-[0.9375rem] text-slate-500 mt-4 leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 ${
                open === i ? "shadow-sm" : ""
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between px-6 py-5 text-left gap-4 group"
                aria-expanded={open === i}
              >
                <span
                  className={`text-[0.9375rem] font-semibold leading-snug transition-colors duration-150 ${
                    open === i ? "text-blue-600" : "text-slate-800"
                  }`}
                >
                  {faq.q}
                </span>
                <div
                  className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center transition-all duration-200 ${
                    open === i
                      ? "bg-blue-500 text-white"
                      : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                  }`}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-[0.9375rem] text-slate-500 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
