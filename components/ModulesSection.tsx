"use client";

import {
  Calculator, ShoppingBag, Factory, ShoppingCart, FolderKanban, Building2,
  CheckSquare, TrendingUp, Users, Package, Headphones,
  BookOpen, CreditCard, UserCheck, PieChart, LifeBuoy
} from "lucide-react";

const coreModules = [
  { icon: Calculator, label: "Accounting", desc: "Finances, reporting & compliance", color: "#059669", bg: "bg-emerald-50" },
  { icon: ShoppingBag, label: "Procurement", desc: "Purchasing & supplier management", color: "#0d9488", bg: "bg-teal-50" },
  { icon: Factory, label: "Manufacturing", desc: "Plan and optimize production", color: "#dc2626", bg: "bg-red-50" },
  { icon: ShoppingCart, label: "Point of Sale", desc: "Fast, reliable in-store transactions", color: "#d97706", bg: "bg-amber-50" },
  { icon: FolderKanban, label: "Projects", desc: "Tasks, timelines & collaboration", color: "#7c3aed", bg: "bg-violet-50" },
  { icon: Building2, label: "Assets", desc: "Track and maintain company assets", color: "#0891b2", bg: "bg-cyan-50" },
  { icon: CheckSquare, label: "Quality", desc: "Product & process quality control", color: "#16a34a", bg: "bg-green-50" },
  { icon: TrendingUp, label: "Sales", desc: "Pipelines, orders & customer lifecycle", color: "#ea580c", bg: "bg-orange-50" },
  { icon: Users, label: "CRM", desc: "Customer relationships & interactions", color: "#db2777", bg: "bg-pink-50" },
  { icon: Package, label: "Stock", desc: "Real-time inventory & warehouse", color: "#0d9488", bg: "bg-teal-50" },
  { icon: Headphones, label: "Support", desc: "Customer ticketing & resolution", color: "#059669", bg: "bg-emerald-50" },
];

const extendedModules = [
  { icon: BookOpen, label: "Learning", desc: "Training and knowledge management", color: "#7c3aed", bg: "bg-violet-50" },
  { icon: CreditCard, label: "Lending", desc: "Financial and loan management", color: "#0284c7", bg: "bg-sky-50" },
  { icon: UserCheck, label: "Frappe HR", desc: "Payroll, attendance, HR workflows", color: "#9333ea", bg: "bg-purple-50" },
  { icon: PieChart, label: "Insights", desc: "Analytics & business intelligence", color: "#059669", bg: "bg-emerald-50" },
  { icon: LifeBuoy, label: "Helpdesk", desc: "Customer support workflows", color: "#0d9488", bg: "bg-teal-50" },
];

function ModuleCard({ icon: Icon, label, desc, color, bg }: { icon: React.ElementType; label: string; desc: string; color: string; bg: string }) {
  return (
    <div className="group bg-white border border-slate-200 p-4 card-hover cursor-default">
      <div className={`w-8 h-8 rounded-sm ${bg} flex items-center justify-center mb-3`}>
        <Icon className="w-4 h-4" style={{ color }} />
      </div>
      <h3 className="text-sm font-semibold text-slate-800 mb-1">{label}</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function ModulesSection() {
  return (
    <section id="features" className="section-padding bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-10">
          <p className="section-label mb-3">ERP Capabilities</p>
          <h2 className="text-[1.875rem] sm:text-[2.125rem] font-bold text-slate-900 tracking-tight">
            A module for every part of your business
          </h2>
          <p className="text-[0.9375rem] text-slate-500 mt-2 max-w-xl leading-relaxed">
            From core operations to extended apps — all integrated, all connected, all in one place.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest whitespace-nowrap">Core Modules</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-px bg-slate-200 border border-slate-200">
              {coreModules.map((m) => <ModuleCard key={m.label} {...m} />)}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest whitespace-nowrap">Extended Apps</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-slate-200 border border-slate-200">
              {extendedModules.map((m) => <ModuleCard key={m.label} {...m} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
