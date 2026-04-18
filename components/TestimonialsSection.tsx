"use client";

import { Quote } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const avatarColors = ["#3b82f6", "#06b6d4", "#8b5cf6"];

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="section-padding bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">{t.testimonials.sectionLabel}</p>
          <h2 className="text-[1.875rem] sm:text-[2.375rem] font-bold text-slate-900 tracking-tight">
            {t.testimonials.heading}
          </h2>
          <p className="text-[0.9375rem] text-slate-500 mt-4 max-w-lg mx-auto leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <div key={i} className="testimonial-card flex flex-col">
              <Quote
                className="w-8 h-8 mb-4 shrink-0"
                style={{ color: avatarColors[i % avatarColors.length] }}
                aria-hidden="true"
              />
              <p className="text-[0.9375rem] text-slate-600 leading-relaxed flex-1 mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: avatarColors[i % avatarColors.length] }}
                >
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
