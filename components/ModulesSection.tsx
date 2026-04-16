"use client";

import {
  Calculator, ShoppingBag, Factory, ShoppingCart, FolderKanban,
  Building2, CheckSquare, TrendingUp, Users, Package, Headphones,
  BookOpen, CreditCard, UserCheck, PieChart, LifeBuoy
} from "lucide-react";

const coreModules = [
  { icon: Calculator, label: "Accounting", desc: "Finances, reporting & compliance", color: "#4f46e5", bg: "bg-indigo-50" },
  { icon: ShoppingBag, label: "Procurement", desc: "Purchasing & supplier management", color: "#059669", bg: "bg-emerald-50" },
  { icon: Factory, label: "Manufacturing", desc: "Plan and optimize production", color: "#dc2626", bg: "bg-red-50" },
  { icon: ShoppingCart, label: "Point of Sale", desc: "Fast, reliable in-store transactions", color: "#d97706", bg: "bg-amber-50" },
  { icon: FolderKanban, label: "Projects", desc: "Tasks, timelines & collaboration", color: "#7c3aed", bg: "bg-violet-50" },
  { icon: Building2, label: "Assets", desc: "Track and maintain company assets", color: "#0891b2", bg: "bg-cyan-50" },
  { icon: CheckSquare, label: "Quality", desc: "Product & process quality control", color: "#65a30d", bg: "bg-lime-50" },
  { icon: TrendingUp, label: "Sales", desc: "Pipelines, orders & customer lifecycle", color: "#ea580c", bg: "bg-orange-50" },
  { icon: Users, label: "CRM", desc: "Customer relationships & interactions", color: "#db2777", bg: "bg-pink-50" },
  { icon: Package, label: "Stock", desc: "Real-time inventory & warehouse", color: "#0d9488", bg: "bg-teal-50" },
  { icon: Headphones, label: "Support", desc: "Customer ticketing & resolution", color: "#4f46e5", bg: "bg-indigo-50" },
];

const extendedModules = [
  { icon: BookOpen, label: "Learning", desc: "Training and knowledge management", color: "#7c3aed", bg: "bg-violet-50" },
  { icon: CreditCard, label: "Lending", desc: "Financial and loan management", color: "#0284c7", bg: "bg-sky-50" },
  { icon: UserCheck, label: "Frappe HR", desc: "Payroll, attendance, HR workflows", color: "#9333ea", bg: "bg-purple-50" },
  { icon: PieChart, label: "Insights", desc: "Analytics & business intelligence", color: "#4f46e5", bg: "bg-indigo-50" },
  { icon: LifeBuoy, label: "Helpdesk", desc: "Customer support workflows", color: "#059669", bg: "bg-emerald-50" },
];

function ModuleCard({ icon: Icon, label, desc, color, bg }: { icon: React.ElementType; label: string; desc: string; color: string; bg: string }) {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 p-4 shadow-sm card-hover cursor-default">
      <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200`}>
        <Icon className="w-[1.1rem] h-[1.1rem]" style={{ color }} />
      </div>
      <h3 className="text-sm font-semibold text-slate-800 mb-1">{label}</h3>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function ModulesSection() {
  return (
    <section id="features" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide">
            ERP Capabilities
          </div>
          <h2 className="text-[2rem] sm:text-[2.25rem] font-bold text-slate-900 tracking-tight">
            A module for every part
            <br className="hidden sm:block" /> of your business
          </h2>
          <p className="text-[0.9375rem] text-slate-500 max-w-xl mx-auto leading-relaxed">
            From core operations to extended apps — all integrated, all connected, all in one place.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest whitespace-nowrap">Core Modules</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {coreModules.map((m) => <ModuleCard key={m.label} {...m} />)}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest whitespace-nowrap">Extended Apps</span>
              <div className="flex-1 h-px bg-slate-200" />
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
