"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "49",
    period: "per user / month",
    description: "Perfect for small teams getting started with ERP.",
    features: [
      "Up to 5 users",
      "Accounting & Invoicing",
      "Basic CRM",
      "Inventory management",
      "Standard reports",
      "Email support",
    ],
    cta: "Get Started",
    highlighted: false,
    badge: null,
  },
  {
    name: "Growth",
    price: "99",
    period: "per user / month",
    description: "Everything growing businesses need to operate at scale.",
    features: [
      "Up to 50 users",
      "All core ERP modules",
      "HR & Payroll system",
      "Manufacturing & POS",
      "Advanced analytics",
      "Secure VPS storage",
      "Multi-company support",
      "Priority support + SLA",
    ],
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored to your needs",
    description: "Full-scale ERP for large organizations and enterprises.",
    features: [
      "Unlimited users",
      "All modules + extensions",
      "Custom integrations",
      "On-premise or cloud",
      "Dedicated success manager",
      "Custom SLA & uptime",
      "White-labeling",
      "Security audit & compliance",
    ],
    cta: "Talk to Sales",
    highlighted: false,
    badge: null,
  },
];

export default function PricingSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-semibold text-[#5b5ef4] bg-[#eeeeff] border-0">
            Pricing
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees, no lock-in. Start small and grow on the same platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-200 ${
                plan.highlighted
                  ? "bg-[#5b5ef4] border-[#5b5ef4] shadow-2xl shadow-[#5b5ef4]/30 scale-105 z-10"
                  : "bg-white border-border/60 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 px-4 py-1.5 bg-white text-[#5b5ef4] text-xs font-bold rounded-full shadow-md border border-[#5b5ef4]/20">
                    <Star className="w-3 h-3 fill-[#5b5ef4]" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-sm font-semibold mb-1 ${plan.highlighted ? "text-white/80" : "text-muted-foreground"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  {plan.price !== "Custom" ? (
                    <>
                      <span className={`text-sm font-semibold ${plan.highlighted ? "text-white/80" : "text-muted-foreground"}`}>$</span>
                      <span className={`text-5xl font-bold tracking-tight ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                        {plan.price}
                      </span>
                    </>
                  ) : (
                    <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                      Custom
                    </span>
                  )}
                </div>
                <p className={`text-xs ${plan.highlighted ? "text-white/70" : "text-muted-foreground"}`}>{plan.period}</p>
                <p className={`text-sm mt-3 leading-relaxed ${plan.highlighted ? "text-white/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.highlighted ? "bg-white/20" : "bg-[#eeeeff]"}`}>
                      <Check className={`w-3 h-3 ${plan.highlighted ? "text-white" : "text-[#5b5ef4]"}`} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? "text-white/90" : "text-muted-foreground"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => scrollTo("#tour")}
                className={`w-full rounded-xl h-11 font-semibold text-sm transition-all group ${
                  plan.highlighted
                    ? "bg-white text-[#5b5ef4] hover:bg-white/90"
                    : "bg-[#5b5ef4] text-white hover:bg-[#3f42d9]"
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#f8f8fc] rounded-2xl border border-border/60">
            <Zap className="w-4 h-4 text-[#5b5ef4]" />
            <span className="text-sm text-muted-foreground">
              All plans include a <strong className="text-foreground">14-day free trial</strong> — no credit card required.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
