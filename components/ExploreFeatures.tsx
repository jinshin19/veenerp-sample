"use client";

import { Badge } from "@/components/ui/badge";
import { Zap, BarChart2, Plug, Building2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    label: "Automation",
    color: "#f59e0b",
    bg: "bg-amber-50",
    points: [
      "Trigger-based workflow rules",
      "Auto-generate invoices & POs",
      "Scheduled reports & alerts",
      "Multi-step approval flows",
    ],
    highlight: "Save 20+ hours per week",
    highlightBg: "bg-amber-50",
    highlightColor: "text-amber-600",
  },
  {
    icon: BarChart2,
    label: "Reporting & Analytics",
    color: "#5b5ef4",
    bg: "bg-[#eeeeff]",
    points: [
      "Live financial dashboards",
      "Custom report builder",
      "KPI tracking & alerts",
      "Export to Excel / PDF",
    ],
    highlight: "99.9% data accuracy",
    highlightBg: "bg-[#eeeeff]",
    highlightColor: "text-[#5b5ef4]",
  },
  {
    icon: Plug,
    label: "Integrations",
    color: "#10b981",
    bg: "bg-emerald-50",
    points: [
      "REST API & webhooks",
      "Payment gateways",
      "E-commerce platforms",
      "Shipping & logistics",
    ],
    highlight: "50+ native integrations",
    highlightBg: "bg-emerald-50",
    highlightColor: "text-emerald-600",
  },
  {
    icon: Building2,
    label: "Multi-Company",
    color: "#8b5cf6",
    bg: "bg-violet-50",
    points: [
      "Manage multiple entities",
      "Consolidated reporting",
      "Shared master data",
      "Inter-company transactions",
    ],
    highlight: "Unlimited subsidiaries",
    highlightBg: "bg-violet-50",
    highlightColor: "text-violet-600",
  },
];

export default function ExploreFeatures() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <Badge className="rounded-full px-3 py-1 text-[0.7rem] font-semibold text-[#5b5ef4] bg-[#eeeeff] border-0 shadow-none">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-[2.25rem] font-bold text-foreground tracking-tight">
            Powerful features,
            <br className="hidden sm:block" /> built for scale
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Everything you need to automate, analyze, integrate, and grow — without compromising on simplicity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.label}
                className="group relative bg-white rounded-2xl border border-border/60 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                <div
                  className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: f.color }}
                />
                <div className={`w-9 h-9 rounded-xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200`}>
                  <Icon className="w-4 h-4" style={{ color: f.color }} />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-3">{f.label}</h3>
                <ul className="space-y-2 mb-4">
                  {f.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full mt-1.5 shrink-0" style={{ background: f.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <span className={`inline-flex text-[10px] font-semibold px-2.5 py-1 rounded-lg ${f.highlightBg} ${f.highlightColor}`}>
                  {f.highlight}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
