"use client";

import { Zap, BarChart2, Plug, Building2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    label: "Workflow Automation",
    color: "#d97706",
    bg: "bg-amber-50",
    badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
    points: ["Trigger-based workflow rules", "Auto-generate invoices & POs", "Scheduled reports & alerts", "Multi-step ERP approval flows"],
    badge: "Save 20+ hrs/week",
  },
  {
    icon: BarChart2,
    label: "Reporting & Analytics",
    color: "#059669",
    bg: "bg-emerald-50",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    points: ["Live financial dashboards", "Drag-and-drop report builder", "KPI tracking & threshold alerts", "Export to Excel or PDF"],
    badge: "99.9% data accuracy",
  },
  {
    icon: Plug,
    label: "Native Integrations",
    color: "#0d9488",
    bg: "bg-teal-50",
    badgeBg: "bg-teal-50 text-teal-700 border-teal-200",
    points: ["REST API & webhooks", "Payment gateway connections", "E-commerce platform sync", "Shipping & logistics partners"],
    badge: "50+ integrations",
  },
  {
    icon: Building2,
    label: "Multi-Company Support",
    color: "#16a34a",
    bg: "bg-green-50",
    badgeBg: "bg-green-50 text-green-700 border-green-200",
    points: ["Manage multiple legal entities", "Consolidated group reporting", "Shared master data pools", "Inter-company transactions"],
    badge: "Unlimited subsidiaries",
  },
];

export default function ExploreFeatures() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide">
            Platform Features
          </div>
          <h2 className="text-[2rem] sm:text-[2.25rem] font-bold text-slate-900 tracking-tight">
            Powerful features,
            <br className="hidden sm:block" /> built for scale
          </h2>
          <p className="text-[0.9375rem] text-slate-500 max-w-lg mx-auto leading-relaxed">
            Everything you need to automate, analyze, integrate, and grow — without compromising on simplicity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.label} className="group relative bg-white rounded-xl border border-slate-200 p-5 shadow-sm card-hover overflow-hidden">
                <div
                  className="absolute inset-x-0 top-0 h-[3px] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: f.color }}
                />
                <div className={`w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200`}>
                  <Icon className="w-5 h-5" style={{ color: f.color }} />
                </div>
                <h3 className="text-[0.9375rem] font-semibold text-slate-900 mb-3">{f.label}</h3>
                <ul className="space-y-2 mb-4">
                  {f.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 rounded-full mt-[5px] shrink-0" style={{ background: f.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <span className={`inline-flex text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${f.badgeBg}`}>
                  {f.badge}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
