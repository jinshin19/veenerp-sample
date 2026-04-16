"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is veenERP customizable to fit our specific workflows?",
    a: "Absolutely. veenERP is built on a flexible, open architecture. You can customize forms, add custom fields, create workflow automation rules, and build custom modules — all without touching core code.",
  },
  {
    q: "Does it support managing multiple companies or branches?",
    a: "Yes. veenERP has native multi-company support. Manage multiple legal entities with separate books of accounts, shared supplier and customer databases, and consolidated group-level reporting from one login.",
  },
  {
    q: "Is there a cloud and a self-hosted option?",
    a: "Both are available. Our managed cloud hosting is secure and fully maintained for you. For businesses with data sovereignty requirements, we offer a self-hosted option with full admin control over your VPS or private cloud.",
  },
  {
    q: "How secure is veenERP?",
    a: "Security is foundational. We use role-based access control, end-to-end encryption in transit, daily encrypted backups, and two-factor authentication. Our cloud infrastructure runs with 99.9% uptime SLAs and SOC 2-aligned practices.",
  },
  {
    q: "How long does implementation and setup take?",
    a: "Most businesses go live within 1–2 weeks for standard modules. Complex setups with custom configurations typically take 4–6 weeks. Our team provides dedicated onboarding, training, and go-live support throughout.",
  },
  {
    q: "What support is included after launch?",
    a: "All plans include documentation access and email support. Growth and Enterprise plans include priority support, a dedicated success manager, and guaranteed SLA response times.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-slate-50">
      <div className="max-w-2xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide">
            FAQ
          </div>
          <h2 className="text-[2rem] sm:text-[2.25rem] font-bold text-slate-900 tracking-tight">Common questions</h2>
          <p className="text-[0.9375rem] text-slate-500">Everything you need to know before getting started.</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                open === i ? "border-indigo-200 shadow-sm" : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between px-5 py-4 text-left gap-4 group"
              >
                <span className={`text-[0.9375rem] font-medium leading-snug transition-colors duration-150 ${
                  open === i ? "text-indigo-600" : "text-slate-800 group-hover:text-indigo-600"
                }`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 mt-0.5 transition-all duration-200 ${
                    open === i ? "rotate-180 text-indigo-500" : "text-slate-400"
                  }`}
                />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
