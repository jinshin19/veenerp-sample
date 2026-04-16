"use client";

import { Check, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "49",
    period: "per user / month",
    description: "For small teams taking their first ERP step.",
    features: ["Up to 5 users", "Accounting & Invoicing", "Basic CRM", "Inventory management", "Standard reports", "Email support"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "99",
    period: "per user / month",
    description: "The complete toolkit for scaling operations.",
    features: ["Up to 50 users", "All core ERP modules", "HR & Payroll", "Manufacturing & POS", "Advanced analytics", "Secure VPS storage", "Multi-company support", "Priority support + SLA"],
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: null,
    period: "tailored to your organization",
    description: "Full-scale ERP for complex, large organizations.",
    features: ["Unlimited users", "All modules + extensions", "Custom integrations", "On-premise or cloud", "Dedicated success manager", "Custom SLA & uptime", "White-labeling", "Security & compliance audit"],
    cta: "Talk to Sales",
    highlighted: false,
  },
];

export default function PricingSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-padding bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-10">
          <p className="section-label mb-3">Pricing</p>
          <h2 className="text-[1.875rem] sm:text-[2.125rem] font-bold text-slate-900 tracking-tight">Simple, transparent pricing</h2>
          <p className="text-[0.9375rem] text-slate-500 mt-2">No hidden fees. No lock-in. Start small and grow on the same platform.</p>
        </div>

        <div className="grid lg:grid-cols-3 border border-slate-200 bg-slate-200 gap-px">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col ${plan.highlighted ? "bg-emerald-700" : "bg-white"}`}
            >
              {plan.badge && (
                <div className={`absolute top-0 right-0 px-3 py-1 text-[10px] font-bold tracking-wider uppercase ${plan.highlighted ? "bg-emerald-500 text-white" : "bg-emerald-600 text-white"}`}>
                  {plan.badge}
                </div>
              )}

              <div className="p-7 pb-5 border-b border-slate-200/30">
                <p className={`text-[10px] font-semibold uppercase tracking-widest mb-4 ${plan.highlighted ? "text-emerald-200" : "text-slate-400"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  {plan.price ? (
                    <>
                      <span className={`text-sm font-medium ${plan.highlighted ? "text-emerald-200" : "text-slate-400"}`}>$</span>
                      <span className={`text-[2.75rem] font-extrabold tracking-tight leading-none ${plan.highlighted ? "text-white" : "text-slate-900"}`}>{plan.price}</span>
                    </>
                  ) : (
                    <span className={`text-[2rem] font-extrabold tracking-tight leading-none ${plan.highlighted ? "text-white" : "text-slate-900"}`}>Custom</span>
                  )}
                </div>
                <p className={`text-xs mt-1.5 mb-4 ${plan.highlighted ? "text-emerald-200" : "text-slate-400"}`}>{plan.period}</p>
                <p className={`text-sm leading-relaxed ${plan.highlighted ? "text-emerald-100" : "text-slate-500"}`}>{plan.description}</p>
              </div>

              <div className="px-7 py-5 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <Check className={`w-3.5 h-3.5 shrink-0 ${plan.highlighted ? "text-emerald-300" : "text-emerald-600"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-emerald-100" : "text-slate-600"}`}>{f}</span>
                  </div>
                ))}
              </div>

              <div className="px-7 pb-7">
                <button
                  onClick={() => scrollTo("#tour")}
                  className={`w-full py-2.5 font-semibold text-sm transition-colors duration-150 flex items-center justify-center gap-2 group rounded-sm ${
                    plan.highlighted
                      ? "bg-white text-emerald-700 hover:bg-emerald-50"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2.5 text-sm text-slate-500">
          <Zap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          All plans include a <strong className="text-slate-700 font-semibold">14-day free trial</strong> — no credit card required.
        </div>
      </div>
    </section>
  );
}
