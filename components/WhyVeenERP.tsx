"use client";

import { Layers, Zap, BarChart2, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Layers,
    title: "Centralized Operations",
    description: "Eliminate data silos. Every department — finance, sales, HR, warehouse — works from a single source of truth, reducing errors and improving collaboration.",
    color: "#059669",
    bgClass: "bg-emerald-50",
  },
  {
    icon: Zap,
    title: "Automate Everything",
    description: "From invoice generation to payroll and reorder alerts — veenERP automates repetitive tasks so your team can focus on what moves the business forward.",
    color: "#d97706",
    bgClass: "bg-amber-50",
  },
  {
    icon: BarChart2,
    title: "Real-Time Insights",
    description: "Dashboards, reports, and KPIs update instantly across all modules — no waiting, no guesswork, no reconciling spreadsheets at end of month.",
    color: "#0d9488",
    bgClass: "bg-teal-50",
  },
  {
    icon: Rocket,
    title: "Built to Scale",
    description: "Whether you have 5 employees or 5,000, veenERP grows with you. Add modules, companies, and users without changing your core system.",
    color: "#16a34a",
    bgClass: "bg-green-50",
  },
];

const stats = [
  { value: "12+", label: "Tools replaced" },
  { value: "20 hrs", label: "Saved per week" },
  { value: "99.9%", label: "Data accuracy" },
  { value: "< 2 wks", label: "Setup time" },
];

export default function WhyVeenERP() {
  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <div className="space-y-8">
            <div className="space-y-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-4">
                Why veenERP
              </div>
              <h2 className="text-[2rem] sm:text-[2.25rem] font-bold text-slate-900 tracking-tight leading-[1.15]">
                Stop managing chaos.
                <br />
                <span className="text-gradient">Start running smart.</span>
              </h2>
              <p className="text-[0.9375rem] text-slate-500 leading-relaxed max-w-md pt-2">
                Most businesses lose hours every week reconciling data across disconnected tools. veenERP replaces the patchwork with one unified platform that works the way your business does.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <p className="text-2xl font-extrabold text-emerald-600 tracking-tight">{s.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm card-hover">
                  <div className={`w-10 h-10 rounded-xl ${r.bgClass} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5" style={{ color: r.color }} />
                  </div>
                  <h3 className="text-[0.9375rem] font-semibold text-slate-900 mb-2">{r.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{r.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
