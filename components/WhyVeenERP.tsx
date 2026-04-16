"use client";

import { Layers, Zap, BarChart2, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Centralized Operations",
    description: "Every department works from a single source of truth. Eliminate data silos between finance, sales, HR, and warehouse.",
    color: "#059669",
    bgClass: "bg-emerald-50",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "From invoice generation to payroll and reorder alerts — automate repetitive tasks and free your team for higher-value work.",
    color: "#d97706",
    bgClass: "bg-amber-50",
  },
  {
    icon: BarChart2,
    title: "Real-Time Intelligence",
    description: "Dashboards and KPIs update instantly across all modules. Decisions backed by live data, not end-of-month reports.",
    color: "#0d9488",
    bgClass: "bg-teal-50",
  },
  {
    icon: Rocket,
    title: "Enterprise Scalability",
    description: "5 employees or 5,000 — veenERP adapts. Add users, modules, and companies without re-implementation.",
    color: "#16a34a",
    bgClass: "bg-green-50",
  },
];

const stats = [
  { value: "12+", label: "Tools replaced" },
  { value: "20 hrs", label: "Saved per week" },
  { value: "99.9%", label: "Data accuracy" },
  { value: "< 2 wks", label: "Implementation" },
];

export default function WhyVeenERP() {
  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-start">
          <div className="space-y-8 lg:sticky lg:top-24">
            <div>
              <p className="section-label mb-3">Why veenERP</p>
              <h2 className="text-[1.875rem] sm:text-[2.125rem] font-bold text-slate-900 tracking-tight leading-[1.15]">
                Stop managing chaos.
                <br />
                <span className="text-gradient">Start running smart.</span>
              </h2>
              <p className="text-[0.9375rem] text-slate-500 leading-relaxed mt-3 max-w-md">
                Most businesses lose hours every week reconciling data across disconnected tools. veenERP replaces the patchwork with one unified platform.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {stats.map((s) => (
                <div key={s.label} className="border border-slate-200 p-5 bg-white">
                  <p className="text-2xl font-extrabold text-emerald-600 tracking-tight leading-none">{s.value}</p>
                  <p className="text-sm text-slate-500 mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="group flex gap-5 p-6 border border-slate-200 bg-white card-hover">
                  <div className={`w-9 h-9 rounded ${r.bgClass} flex items-center justify-center shrink-0 mt-0.5`}>
                    <Icon className="w-4 h-4" style={{ color: r.color }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-semibold text-slate-400 tabular-nums">0{i + 1}</span>
                      <h3 className="text-[0.9375rem] font-semibold text-slate-900">{r.title}</h3>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{r.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
