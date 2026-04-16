"use client";

import { Zap, BarChart2, Plug, Building2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    label: "Workflow Automation",
    color: "#d97706",
    bg: "bg-amber-50",
    badgeColor: "text-amber-700 bg-amber-50 border-amber-200",
    points: ["Trigger-based workflow rules", "Auto-generate invoices & POs", "Scheduled reports & alerts", "Multi-step approval flows"],
    badge: "Save 20+ hrs/week",
  },
  {
    icon: BarChart2,
    label: "Reporting & Analytics",
    color: "#059669",
    bg: "bg-emerald-50",
    badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    points: ["Live financial dashboards", "Drag-and-drop report builder", "KPI tracking & threshold alerts", "Export to Excel or PDF"],
    badge: "99.9% data accuracy",
  },
  {
    icon: Plug,
    label: "Native Integrations",
    color: "#0d9488",
    bg: "bg-teal-50",
    badgeColor: "text-teal-700 bg-teal-50 border-teal-200",
    points: ["REST API & webhooks", "Payment gateway connections", "E-commerce platform sync", "Shipping & logistics"],
    badge: "50+ integrations",
  },
  {
    icon: Building2,
    label: "Multi-Company Support",
    color: "#16a34a",
    bg: "bg-green-50",
    badgeColor: "text-green-700 bg-green-50 border-green-200",
    points: ["Manage multiple legal entities", "Consolidated group reporting", "Shared master data", "Inter-company transactions"],
    badge: "Unlimited subsidiaries",
  },
];

export default function ExploreFeatures() {
  return (
    <section className="section-padding bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-10">
          <p className="section-label mb-3">Platform Features</p>
          <h2 className="text-[1.875rem] sm:text-[2.125rem] font-bold text-slate-900 tracking-tight">
            Powerful features, built for scale
          </h2>
          <p className="text-[0.9375rem] text-slate-500 mt-2 max-w-lg leading-relaxed">
            Automate, analyze, integrate, and grow — without compromising on simplicity or control.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.label} className="group bg-white p-6 card-hover relative overflow-hidden">
                <div
                  className="absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: f.color }}
                />
                <div className={`w-9 h-9 rounded-sm ${f.bg} flex items-center justify-center mb-5`}>
                  <Icon className="w-4 h-4" style={{ color: f.color }} />
                </div>
                <h3 className="text-[0.9375rem] font-semibold text-slate-900 mb-3">{f.label}</h3>
                <ul className="space-y-2 mb-5">
                  {f.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-slate-500">
                      <div className="w-1 h-1 rounded-full mt-[7px] shrink-0" style={{ background: f.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <span className={`inline-flex text-[10px] font-semibold tracking-wide px-2 py-1 border rounded-sm ${f.badgeColor}`}>
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
