"use client";

import { useState } from "react";
import { CheckCircle, Loader2, Phone, Briefcase } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ phone: "", direction: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <section id="cta" className="section-padding bg-white border-t border-slate-200">
      <div className="max-w-xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="text-[1.875rem] sm:text-[2.375rem] font-bold text-slate-900 tracking-tight leading-tight mb-3">
          {t.cta.heading}
        </h2>
        <p className="text-[0.9375rem] text-slate-500 leading-relaxed mb-10">
          {t.cta.subtitle}
        </p>

        {submitted ? (
          <div className="space-y-4 py-8">
            <CheckCircle className="w-14 h-14 text-blue-500 mx-auto" />
            <div>
              <h3 className="text-xl font-bold text-slate-900">{t.cta.submittedHeading}</h3>
              <p className="text-[0.9375rem] text-slate-500 mt-2 leading-relaxed max-w-sm mx-auto">
                {t.cta.submittedBody}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Phone */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">
                {t.cta.phoneLabel}
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="tel"
                  placeholder={t.cta.phonePlaceholder}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl text-[0.9375rem] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Company direction */}
            <div className="space-y-1.5">
              <label className="block text-sm font-semibold text-slate-700">
                {t.cta.directionLabel}
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder={t.cta.directionPlaceholder}
                  value={form.direction}
                  onChange={(e) => setForm({ ...form, direction: e.target.value })}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl text-[0.9375rem] text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3.5 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                t.cta.submitButton
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
