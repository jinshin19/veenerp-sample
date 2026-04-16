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
  },
  {
    icon: Building2,
    label: "Multi-Company",
    color: "#8b5cf6",
    bg: "bg-violet-50",
    points: [
      "Manage multiple entities",
      "Consolidated reporting",
      "Shared supplier & customer base",
      "Inter-company transactions",
    ],
    highlight: "Unlimited subsidiaries",
  },
];

export default function ExploreFeatures() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-semibold text-[#5b5ef4] bg-[#eeeeff] border-0">
            Platform Features
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Powerful features,
            <br />
            built for scale
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to automate, analyze, integrate, and grow — without compromising on simplicity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.label}
                className="group relative bg-white rounded-2xl border border-border/60 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: f.color }} />

                <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" style={{ color: f.color }} />
                </div>

                <h3 className="text-base font-bold text-foreground mb-4">{f.label}</h3>

                <ul className="space-y-2.5 mb-5">
                  {f.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: f.color }}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div
                  className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold"
                  style={{ background: `${f.color}18`, color: f.color }}
                >
                  {f.highlight}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
