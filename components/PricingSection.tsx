"use client";

import { Check, Star, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "49",
    period: "per user / month",
    description: "Perfect for small teams getting started with ERP.",
    features: ["Up to 5 users", "Accounting & Invoicing", "Basic CRM", "Inventory management", "Standard reports", "Email support"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "99",
    period: "per user / month",
    description: "Everything growing businesses need to operate at scale.",
    features: ["Up to 50 users", "All core ERP modules", "HR & Payroll system", "Manufacturing & POS", "Advanced analytics", "Secure VPS storage", "Multi-company support", "Priority support + SLA"],
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: null,
    period: "tailored to your needs",
    description: "Full-scale ERP for large organizations and enterprises.",
    features: ["Unlimited users", "All modules + extensions", "Custom integrations", "On-premise or cloud", "Dedicated success manager", "Custom SLA & uptime", "White-labeling", "Security audit & compliance"],
    cta: "Talk to Sales",
    highlighted: false,
  },
];

export default function PricingSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide">
            Pricing
          </div>
          <h2 className="text-[2rem] sm:text-[2.25rem] font-bold text-slate-900 tracking-tight">Simple, transparent pricing</h2>
          <p className="text-[0.9375rem] text-slate-500 max-w-md mx-auto">
            No hidden fees, no lock-in. Start small and grow on the same platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border flex flex-col transition-all duration-200 ${
                plan.highlighted
                  ? "bg-emerald-600 border-emerald-500 shadow-xl shadow-emerald-200/50 lg:-mt-2 lg:-mb-2 z-10"
                  : "bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 inset-x-0 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-emerald-700 text-[11px] font-bold rounded-full shadow-md border border-emerald-100">
                    <Star className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-7 pb-5">
                <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${plan.highlighted ? "text-emerald-200" : "text-slate-400"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  {plan.price ? (
                    <>
                      <span className={`text-sm font-medium ${plan.highlighted ? "text-emerald-200" : "text-slate-400"}`}>$</span>
                      <span className={`text-[2.5rem] font-extrabold tracking-tight ${plan.highlighted ? "text-white" : "text-slate-900"}`}>{plan.price}</span>
                    </>
                  ) : (
                    <span className={`text-[2rem] font-extrabold tracking-tight ${plan.highlighted ? "text-white" : "text-slate-900"}`}>Custom</span>
                  )}
                </div>
                <p className={`text-xs mb-3 ${plan.highlighted ? "text-emerald-200" : "text-slate-400"}`}>{plan.period}</p>
                <p className={`text-sm leading-relaxed ${plan.highlighted ? "text-emerald-100" : "text-slate-500"}`}>{plan.description}</p>
              </div>

              <div className="px-7 pb-5 flex-1">
                <div className={`h-px mb-5 ${plan.highlighted ? "bg-emerald-500" : "bg-slate-100"}`} />
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${plan.highlighted ? "bg-emerald-500" : "bg-emerald-50"}`}>
                        <Check className={`w-2.5 h-2.5 ${plan.highlighted ? "text-white" : "text-emerald-600"}`} />
                      </div>
                      <span className={`text-sm ${plan.highlighted ? "text-emerald-100" : "text-slate-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="px-7 pb-7">
                <button
                  onClick={() => scrollTo("#tour")}
                  className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-150 flex items-center justify-center gap-2 group ${
                    plan.highlighted
                      ? "bg-white text-emerald-700 hover:bg-emerald-50 shadow-sm"
                      : "bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm shadow-emerald-100"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-500">
            <Zap className="w-4 h-4 text-emerald-500" />
            All plans include a <strong className="text-slate-700 font-semibold">14-day free trial</strong> — no credit card required.
          </div>
        </div>
      </div>
    </section>
  );
}
