"use client";

import { Badge } from "@/components/ui/badge";
import { Layers, Zap, BarChart2, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Centralized Operations",
    description:
      "Eliminate data silos. Every department — finance, sales, HR, warehouse — works from a single source of truth, reducing errors and improving collaboration.",
    color: "#5b5ef4",
    bg: "bg-[#eeeeff]",
  },
  {
    icon: Zap,
    title: "Automate Everything",
    description:
      "From invoice generation to payroll runs and reorder alerts — veenERP automates repetitive tasks so your team can focus on what matters.",
    color: "#f59e0b",
    bg: "bg-amber-50",
  },
  {
    icon: BarChart2,
    title: "Real-Time Insights",
    description:
      "Make decisions with confidence. Dashboards, reports, and KPIs update instantly across all modules — no waiting, no guesswork.",
    color: "#10b981",
    bg: "bg-emerald-50",
  },
  {
    icon: Rocket,
    title: "Built to Scale",
    description:
      "Whether you have 5 employees or 5,000, veenERP grows with you. Add modules, companies, and users without changing your core system.",
    color: "#8b5cf6",
    bg: "bg-violet-50",
  },
];

export default function WhyVeenERP() {
  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-semibold text-[#5b5ef4] bg-[#eeeeff] border-0">
              Why veenERP
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1]">
              Stop managing chaos.
              <br />
              <span className="text-gradient">Start running smart.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most businesses lose hours every week reconciling data across disconnected tools. veenERP replaces the patchwork with one unified platform that works the way you do.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: "Tools replaced", value: "12+" },
                { label: "Time saved / week", value: "20 hrs" },
                { label: "Data accuracy", value: "99.9%" },
                { label: "Setup time", value: "< 2 weeks" },
              ].map((s) => (
                <div key={s.label} className="bg-[#f8f8fc] rounded-xl p-4 border border-border/50">
                  <p className="text-2xl font-bold text-[#5b5ef4]">{s.value}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className="bg-white rounded-2xl border border-border/60 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className={`w-11 h-11 rounded-xl ${r.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" style={{ color: r.color }} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
