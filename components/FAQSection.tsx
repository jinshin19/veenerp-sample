"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is veenERP customizable to fit our specific workflows?",
    a: "Absolutely. veenERP is built on a flexible, open architecture. Customize forms, add fields, create workflow automation rules, and build custom modules — all without modifying core code.",
  },
  {
    q: "Does it support managing multiple companies or branches?",
    a: "Yes. veenERP has native multi-company support. Manage multiple legal entities with separate accounts, shared supplier/customer databases, and consolidated group-level reporting from one login.",
  },
  {
    q: "Is there a cloud-hosted and a self-hosted option?",
    a: "Both are available. Managed cloud hosting is secure and fully maintained by our team. For data sovereignty requirements, we offer a self-hosted option with full admin control over your VPS or private infrastructure.",
  },
  {
    q: "How secure is veenERP?",
    a: "Security is foundational. We implement role-based access control, end-to-end encryption in transit, daily encrypted backups, and two-factor authentication. Our cloud infrastructure follows SOC 2-aligned security practices with 99.9% uptime SLAs.",
  },
  {
    q: "How long does implementation typically take?",
    a: "Most businesses go live within 1–2 weeks for standard module configurations. Complex setups with custom workflows typically take 4–6 weeks. Our team provides dedicated onboarding and go-live support throughout.",
  },
  {
    q: "What support is included after go-live?",
    a: "All plans include documentation and email support. Growth and Enterprise plans add priority support, a dedicated success manager, and guaranteed SLA response times.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="mb-10">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="text-[1.875rem] sm:text-[2.125rem] font-bold text-slate-900 tracking-tight">Common questions</h2>
          <p className="text-[0.9375rem] text-slate-500 mt-2">Everything you need to know before getting started.</p>
        </div>

        <div className="border border-slate-200 divide-y divide-slate-200">
          {faqs.map((faq, i) => (
            <div key={i} className={`transition-colors duration-150 ${open === i ? "bg-slate-50" : "bg-white"}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between px-5 py-4 text-left gap-6 group"
              >
                <span className={`text-[0.9375rem] font-medium leading-snug transition-colors duration-150 ${
                  open === i ? "text-emerald-700" : "text-slate-800"
                }`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 mt-0.5 transition-transform duration-200 ${
                    open === i ? "rotate-180 text-emerald-600" : "text-slate-400"
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
