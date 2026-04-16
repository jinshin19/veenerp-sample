"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is veenERP customizable to fit our specific workflows?",
    a: "Absolutely. veenERP is built on a flexible, open architecture. You can customize forms, add custom fields, create workflow automation rules, and build custom modules — all without touching core code.",
  },
  {
    q: "Does it support managing multiple companies or branches?",
    a: "Yes. veenERP has native multi-company support. Manage multiple legal entities with separate books of accounts, shared supplier and customer databases, and consolidated group-level reporting — all from one login.",
  },
  {
    q: "Is there both a cloud and a self-hosted option?",
    a: "Both are available. Our managed cloud hosting is secure and fully maintained. For businesses with data sovereignty requirements, we offer a self-hosted option with full admin control over your VPS.",
  },
  {
    q: "How secure is veenERP?",
    a: "Security is foundational. We use role-based access control, end-to-end encryption in transit, daily encrypted backups, and two-factor authentication. Our cloud infrastructure runs on enterprise-grade infrastructure with 99.9% uptime SLAs.",
  },
  {
    q: "How long does implementation and setup take?",
    a: "Most businesses go live within 1–2 weeks for standard modules. Complex enterprise setups with custom configurations typically take 4–6 weeks. Our team provides dedicated onboarding, training, and go-live support.",
  },
  {
    q: "What kind of support do you provide after launch?",
    a: "All plans include documentation and email support. Growth and Enterprise plans include priority support, a dedicated success manager, and guaranteed response SLAs.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-[#f7f7fb]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <Badge className="rounded-full px-3 py-1 text-[0.7rem] font-semibold text-[#5b5ef4] bg-[#eeeeff] border-0 shadow-none">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-[2.25rem] font-bold text-foreground tracking-tight">
            Common questions
          </h2>
          <p className="text-sm text-muted-foreground">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                open === i ? "border-[#5b5ef4]/20 shadow-sm" : "border-border/60"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left group gap-4"
              >
                <span className={`text-sm font-semibold transition-colors duration-150 leading-snug ${
                  open === i ? "text-[#5b5ef4]" : "text-foreground group-hover:text-[#5b5ef4]"
                }`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-all duration-200 ${
                    open === i ? "rotate-180 text-[#5b5ef4]" : "text-muted-foreground"
                  }`}
                />
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
