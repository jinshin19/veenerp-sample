"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is veenERP customizable to fit our specific workflows?",
    a: "Absolutely. veenERP is built on a flexible, open architecture. You can customize forms, add custom fields, create workflow automation rules, and even build custom modules — all without touching core code.",
  },
  {
    q: "Does it support managing multiple companies or branches?",
    a: "Yes. veenERP has native multi-company support. You can manage multiple legal entities with separate books of accounts, shared supplier/customer databases, and consolidated group-level reporting — all from one login.",
  },
  {
    q: "Is there both a cloud and a self-hosted option?",
    a: "veenERP offers both. Our cloud hosting is managed, secure, and fully maintained. For businesses with data sovereignty requirements, we also offer an on-premise / VPS self-hosted option with full admin control.",
  },
  {
    q: "How secure is veenERP?",
    a: "Security is foundational. We use role-based access control (RBAC), end-to-end encryption in transit, daily encrypted backups, and two-factor authentication. Our cloud infrastructure is hosted on enterprise-grade VPS with 99.9% uptime SLAs.",
  },
  {
    q: "How long does implementation and setup take?",
    a: "Most businesses are live within 1–2 weeks for standard modules. Complex enterprise setups with custom configurations typically take 4–6 weeks. Our team provides dedicated onboarding, training, and go-live support.",
  },
  {
    q: "What kind of support do you provide after launch?",
    a: "All plans include access to documentation, community forums, and email support. Growth and Enterprise plans include priority support, a dedicated success manager, and guaranteed response SLAs.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-[#f8f8fc]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-semibold text-[#5b5ef4] bg-[#eeeeff] border-0">
            FAQ
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Common questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === i ? "border-[#5b5ef4]/30 shadow-sm" : "border-border/60"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className={`text-sm font-semibold transition-colors ${open === i ? "text-[#5b5ef4]" : "text-foreground group-hover:text-[#5b5ef4]"}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground flex-shrink-0 ml-4 transition-transform duration-200 ${open === i ? "rotate-180 text-[#5b5ef4]" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-56" : "max-h-0"}`}
              >
                <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
