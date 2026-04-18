"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ProblemsSection() {
  const { t } = useLanguage();

  return (
    <section id="problems" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">{t.problems.sectionLabel}</p>
          <h2 className="text-[1.875rem] sm:text-[2.375rem] font-bold text-slate-900 tracking-tight leading-[1.2] max-w-2xl mx-auto">
            {t.problems.heading}
          </h2>
          <p className="text-[0.9375rem] text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
            {t.problems.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {t.problems.items.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-slate-200 rounded-2xl p-8 pt-10 overflow-hidden card-hover"
            >
              {/* Large decorative number */}
              <span
                className="problem-number select-none"
                aria-hidden="true"
              >
                {index + 1}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-[1.0625rem] font-bold text-slate-900 mb-3 leading-snug">
                  {item.heading}
                </h3>
                <p className="text-[0.9375rem] text-slate-500 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
