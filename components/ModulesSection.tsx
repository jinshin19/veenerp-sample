"use client";

import { Badge } from "@/components/ui/badge";
import {
  Calculator, ShoppingBag, Factory, ShoppingCart, FolderKanban,
  Building2, CheckSquare, TrendingUp, Users, Package, Headphones,
  BookOpen, CreditCard, UserCheck, PieChart, LifeBuoy
} from "lucide-react";

const coreModules = [
  { icon: Calculator, label: "Accounting", desc: "Finances, reporting, and compliance", color: "#5b5ef4", bg: "bg-[#eeeeff]" },
  { icon: ShoppingBag, label: "Procurement", desc: "Purchasing and supplier management", color: "#10b981", bg: "bg-emerald-50" },
  { icon: Factory, label: "Manufacturing", desc: "Plan and optimize production", color: "#ef4444", bg: "bg-red-50" },
  { icon: ShoppingCart, label: "Point of Sale", desc: "Fast, reliable in-store transactions", color: "#f59e0b", bg: "bg-amber-50" },
  { icon: FolderKanban, label: "Projects", desc: "Tasks, timelines, and collaboration", color: "#8b5cf6", bg: "bg-violet-50" },
  { icon: Building2, label: "Assets", desc: "Track and maintain company assets", color: "#06b6d4", bg: "bg-cyan-50" },
  { icon: CheckSquare, label: "Quality", desc: "Product and process quality control", color: "#84cc16", bg: "bg-lime-50" },
  { icon: TrendingUp, label: "Sales", desc: "Pipelines, orders, and customer lifecycle", color: "#f97316", bg: "bg-orange-50" },
  { icon: Users, label: "CRM", desc: "Customer relationships and interactions", color: "#ec4899", bg: "bg-pink-50" },
  { icon: Package, label: "Stock", desc: "Real-time inventory and warehouse", color: "#14b8a6", bg: "bg-teal-50" },
  { icon: Headphones, label: "Support", desc: "Customer ticketing and resolution", color: "#6366f1", bg: "bg-indigo-50" },
];

const extendedModules = [
  { icon: BookOpen, label: "Learning", desc: "Training and knowledge management", color: "#a855f7", bg: "bg-purple-50" },
  { icon: CreditCard, label: "Lending", desc: "Financial and loan management", color: "#0ea5e9", bg: "bg-sky-50" },
  { icon: UserCheck, label: "Frappe HR", desc: "Payroll, attendance, HR workflows", color: "#8b5cf6", bg: "bg-violet-50" },
  { icon: PieChart, label: "Insights", desc: "Analytics and business intelligence", color: "#5b5ef4", bg: "bg-[#eeeeff]" },
  { icon: LifeBuoy, label: "Helpdesk", desc: "Customer support workflows", color: "#10b981", bg: "bg-emerald-50" },
];

function ModuleCard({ icon: Icon, label, desc, color, bg }: { icon: React.ElementType; label: string; desc: string; color: string; bg: string }) {
  return (
    <div className="group bg-white rounded-xl border border-border/60 p-4 shadow-sm hover:shadow-md hover:-translate-y-px transition-all duration-200 cursor-default">
      <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200`}>
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <h3 className="text-xs font-bold text-foreground mb-1">{label}</h3>
      <p className="text-[10px] text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

export default function ModulesSection() {
  return (
    <section id="features" className="section-padding bg-[#f7f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <Badge className="rounded-full px-3 py-1 text-[0.7rem] font-semibold text-[#5b5ef4] bg-[#eeeeff] border-0 shadow-none">
            ERP Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-[2.25rem] font-bold text-foreground tracking-tight">
            A module for every
            <br className="hidden sm:block" /> part of your business
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From core operations to extended apps — all integrated, all connected, all in one place.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[0.65rem] font-semibold text-muted-foreground uppercase tracking-widest">Core ERP Modules</span>
              <div className="flex-1 h-px bg-border/60" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {coreModules.map((m) => <ModuleCard key={m.label} {...m} />)}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[0.65rem] font-semibold text-muted-foreground uppercase tracking-widest">Extended Apps</span>
              <div className="flex-1 h-px bg-border/60" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {extendedModules.map((m) => <ModuleCard key={m.label} {...m} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
