"use client";

import { Badge } from "@/components/ui/badge";
import {
  Calculator, ShoppingBag, Factory, ShoppingCart, FolderKanban,
  Building2, CheckSquare, TrendingUp, Users, Package, Headphones,
  BookOpen, CreditCard, UserCheck, PieChart, LifeBuoy
} from "lucide-react";

const coreModules = [
  { icon: Calculator, label: "Accounting", desc: "Manage finances, reporting, and compliance in one place", color: "#5b5ef4", bg: "bg-[#eeeeff]" },
  { icon: ShoppingBag, label: "Procurement", desc: "Streamline purchasing and supplier management", color: "#10b981", bg: "bg-emerald-50" },
  { icon: Factory, label: "Manufacturing", desc: "Plan, track, and optimize production workflows", color: "#ef4444", bg: "bg-red-50" },
  { icon: ShoppingCart, label: "Point of Sale", desc: "Fast, reliable retail and in-store transactions", color: "#f59e0b", bg: "bg-amber-50" },
  { icon: FolderKanban, label: "Projects", desc: "Manage tasks, timelines, and team collaboration", color: "#8b5cf6", bg: "bg-violet-50" },
  { icon: Building2, label: "Assets", desc: "Track and maintain company assets lifecycle", color: "#06b6d4", bg: "bg-cyan-50" },
  { icon: CheckSquare, label: "Quality", desc: "Ensure product and process quality control", color: "#84cc16", bg: "bg-lime-50" },
  { icon: TrendingUp, label: "Sales", desc: "Manage pipelines, orders, and customer lifecycle", color: "#f97316", bg: "bg-orange-50" },
  { icon: Users, label: "CRM", desc: "Centralize customer relationships and interactions", color: "#ec4899", bg: "bg-pink-50" },
  { icon: Package, label: "Stock", desc: "Real-time inventory tracking and warehouse management", color: "#14b8a6", bg: "bg-teal-50" },
  { icon: Headphones, label: "Support", desc: "Handle customer issues with ticketing system", color: "#6366f1", bg: "bg-indigo-50" },
];

const extendedModules = [
  { icon: BookOpen, label: "Learning", desc: "Internal training and knowledge management", color: "#a855f7", bg: "bg-purple-50" },
  { icon: CreditCard, label: "Lending", desc: "Financial and loan management tools", color: "#0ea5e9", bg: "bg-sky-50" },
  { icon: UserCheck, label: "Frappe HR", desc: "Employee management, payroll, attendance", color: "#8b5cf6", bg: "bg-violet-50" },
  { icon: PieChart, label: "Insights", desc: "Analytics dashboards and business intelligence", color: "#5b5ef4", bg: "bg-[#eeeeff]" },
  { icon: LifeBuoy, label: "Helpdesk", desc: "Customer support and service workflows", color: "#10b981", bg: "bg-emerald-50" },
];

function ModuleCard({ icon: Icon, label, desc, color, bg }: { icon: React.ElementType; label: string; desc: string; color: string; bg: string }) {
  return (
    <div className="group bg-white rounded-2xl border border-border/60 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default">
      <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform`}>
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <h3 className="text-sm font-bold text-foreground mb-1.5">{label}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

export default function ModulesSection() {
  return (
    <section id="features" className="section-padding bg-[#f8f8fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-semibold text-[#5b5ef4] bg-[#eeeeff] border-0">
            ERP Capabilities
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            A module for every
            <br />
            part of your business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From core operations to extended apps — all integrated, all connected, all in one place.
          </p>
        </div>

        <div className="space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Core ERP Modules</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {coreModules.map((m) => (
                <ModuleCard key={m.label} {...m} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Extended Apps</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {extendedModules.map((m) => (
                <ModuleCard key={m.label} {...m} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
