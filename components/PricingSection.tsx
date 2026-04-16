"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "49",
    period: "per user / month",
    description: "For small teams getting started with ERP.",
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
    description: "Everything growing businesses need to scale.",
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
    description: "Full-scale ERP for large organizations.",
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
        <div className="text-center space-y-3 mb-12">
          <Badge className="rounded-full px-3 py-1 text-[0.7rem] font-semibold text-[#5b5ef4] bg-[#eeeeff] border-0 shadow-none">
            Pricing
          </Badge>
          <h2 className="text-3xl sm:text-[2.25rem] font-bold text-foreground tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            No hidden fees, no lock-in. Start small and grow on the same platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border flex flex-col transition-all duration-200 ${
                plan.highlighted
                  ? "bg-[#5b5ef4] border-[#5b5ef4] shadow-xl shadow-[#5b5ef4]/25 lg:scale-[1.02] z-10 p-7"
                  : "bg-white border-border/60 shadow-sm hover:shadow-md p-6"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 px-3 py-1 bg-white text-[#5b5ef4] text-[10px] font-bold rounded-full shadow-md border border-[#5b5ef4]/15">
                    <Star className="w-2.5 h-2.5 fill-[#5b5ef4]" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-xs font-semibold mb-2 ${plan.highlighted ? "text-white/70" : "text-muted-foreground"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-0.5 mb-1">
                  {plan.price !== "Custom" ? (
                    <>
                      <span className={`text-sm font-medium ${plan.highlighted ? "text-white/70" : "text-muted-foreground"}`}>$</span>
                      <span className={`text-4xl font-bold tracking-tight ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                        {plan.price}
                      </span>
                    </>
                  ) : (
                    <span className={`text-3xl font-bold ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                      Custom
                    </span>
                  )}
                </div>
                <p className={`text-[10px] ${plan.highlighted ? "text-white/60" : "text-muted-foreground"}`}>{plan.period}</p>
                <p className={`text-xs mt-2.5 leading-relaxed ${plan.highlighted ? "text-white/75" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlighted ? "bg-white/15" : "bg-[#eeeeff]"}`}>
                      <Check className={`w-2.5 h-2.5 ${plan.highlighted ? "text-white" : "text-[#5b5ef4]"}`} />
                    </div>
                    <span className={`text-xs leading-relaxed ${plan.highlighted ? "text-white/85" : "text-muted-foreground"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => scrollTo("#tour")}
                className={`w-full rounded-xl h-9 font-semibold text-xs transition-all duration-150 group ${
                  plan.highlighted
                    ? "bg-white text-[#5b5ef4] hover:bg-white/92 shadow-none"
                    : "bg-[#5b5ef4] text-white hover:bg-[#4547d4] shadow-none hover:shadow-md hover:shadow-[#5b5ef4]/20"
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#f7f7fb] rounded-xl border border-border/50">
            <Zap className="w-3.5 h-3.5 text-[#5b5ef4]" />
            <span className="text-xs text-muted-foreground">
              All plans include a <strong className="text-foreground font-semibold">14-day free trial</strong> — no credit card required.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
