"use client";

import { useState } from "react";
import { Calculator, ShoppingCart, Users, Factory, Briefcase, Activity } from "lucide-react";

const modules = [
  {
    id: "accounting",
    label: "Accounting",
    icon: Calculator,
    color: "#059669",
    bgClass: "bg-emerald-50",
    description: "Full double-entry accounting with automated reconciliation, real-time P&L, and compliance reporting.",
    stats: [{ label: "Invoices", value: "2,847" }, { label: "Reconciled", value: "99.8%" }, { label: "Reports", value: "24" }],
    chart: [60, 75, 55, 88, 72, 95, 80, 91],
    items: [
      { name: "Revenue", amount: "$284,500", trend: "+12.5%", up: true },
      { name: "Expenses", amount: "$91,200", trend: "-4.2%", up: false },
      { name: "Net Profit", amount: "$193,300", trend: "+18.7%", up: true },
    ],
  },
  {
    id: "pos",
    label: "Point of Sale",
    icon: ShoppingCart,
    color: "#0d9488",
    bgClass: "bg-teal-50",
    description: "Lightning-fast POS for retail, restaurants, and multi-location stores with full offline support.",
    stats: [{ label: "Txn/Day", value: "1,204" }, { label: "Avg. Ticket", value: "$48.50" }, { label: "Locations", value: "8" }],
    chart: [40, 55, 80, 70, 90, 85, 78, 95],
    items: [
      { name: "Gross Sales", amount: "$18,420", trend: "+9.1%", up: true },
      { name: "Refunds", amount: "$320", trend: "+2.0%", up: false },
      { name: "Net Sales", amount: "$18,100", trend: "+9.4%", up: true },
    ],
  },
  {
    id: "crm",
    label: "CRM",
    icon: Users,
    color: "#d97706",
    bgClass: "bg-amber-50",
    description: "Manage your entire sales pipeline, nurture leads, and close deals faster with AI-assisted scoring.",
    stats: [{ label: "Active Leads", value: "384" }, { label: "Win Rate", value: "38%" }, { label: "Avg. Cycle", value: "21d" }],
    chart: [30, 50, 45, 70, 65, 80, 75, 90],
    items: [
      { name: "Pipeline Value", amount: "$1.2M", trend: "+22.3%", up: true },
      { name: "Deals Won", amount: "47", trend: "+15.0%", up: true },
      { name: "Deals Lost", amount: "12", trend: "+8.3%", up: false },
    ],
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    icon: Factory,
    color: "#dc2626",
    bgClass: "bg-red-50",
    description: "End-to-end production planning, BOM management, work orders, and quality control in one place.",
    stats: [{ label: "Work Orders", value: "142" }, { label: "On-Time", value: "94%" }, { label: "Efficiency", value: "+31%" }],
    chart: [70, 65, 80, 75, 88, 82, 90, 87],
    items: [
      { name: "Planned Output", amount: "5,000 units", trend: "+5.0%", up: true },
      { name: "Actual Output", amount: "4,820 units", trend: "+3.6%", up: true },
      { name: "Defect Rate", amount: "0.8%", trend: "-0.3%", up: false },
    ],
  },
  {
    id: "hr",
    label: "HR & Payroll",
    icon: Briefcase,
    color: "#7c3aed",
    bgClass: "bg-violet-50",
    description: "Complete HR management including payroll, attendance tracking, recruitment, and performance reviews.",
    stats: [{ label: "Employees", value: "248" }, { label: "Attendance", value: "97.2%" }, { label: "Payroll", value: "Auto" }],
    chart: [85, 88, 90, 87, 92, 89, 94, 91],
    items: [
      { name: "Headcount", amount: "248 staff", trend: "+12", up: true },
      { name: "Leave Requests", amount: "14 pending", trend: "+2", up: false },
      { name: "Payroll Cost", amount: "$184,500", trend: "+3.2%", up: false },
    ],
  },
];

export default function DashboardPreview() {
  const [active, setActive] = useState(modules[0]);

  return (
    <section id="modules" className="section-padding bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-10">
          <p className="section-label mb-3">Interactive Preview</p>
          <h2 className="text-[1.875rem] sm:text-[2.125rem] font-bold text-slate-900 tracking-tight">Every module, one platform</h2>
          <p className="text-[0.9375rem] text-slate-500 mt-2 max-w-lg leading-relaxed">
            Explore how veenERP handles your core business operations — all connected, all real-time.
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6 border-b border-slate-200 pb-0">
          {modules.map((mod) => {
            const Icon = mod.icon;
            const isActive = active.id === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActive(mod)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-all duration-150 ${
                  isActive
                    ? "border-emerald-600 text-emerald-700 bg-transparent"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: isActive ? mod.color : "#94a3b8" }} />
                {mod.label}
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2 bg-white border border-slate-200 p-6 space-y-5">
            <div>
              <div className={`w-9 h-9 rounded ${active.bgClass} flex items-center justify-center mb-4`}>
                {(() => { const Icon = active.icon; return <Icon className="w-4 h-4" style={{ color: active.color }} />; })()}
              </div>
              <h3 className="text-[0.9375rem] font-bold text-slate-900 mb-2">{active.label} Module</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{active.description}</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {active.stats.map((s) => (
                <div key={s.label} className="bg-slate-50 border border-slate-200 p-3">
                  <p className="text-sm font-bold text-slate-900">{s.value}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">Key Capabilities</p>
              <div className="space-y-2">
                {["Live data sync", "Automated workflows", "Custom reporting", "Role-based access"].map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <div className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white border border-slate-200 overflow-hidden">
            <div className="bg-slate-900 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-[10px] text-slate-500 ml-1 font-mono tracking-wide">{active.label} — Live View</span>
            </div>
            <div className="p-4 space-y-3 bg-slate-50">
              <div className="bg-white border border-slate-200 p-4">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3">Performance — Last 8 Periods</p>
                <div className="flex items-end gap-1.5" style={{ height: 80 }}>
                  {active.chart.map((h, i) => {
                    const isHighlight = i === active.chart.length - 2;
                    return (
                      <div key={i} className="flex-1 relative" style={{ height: 80 }}>
                        <div
                          className="absolute bottom-0 left-0 right-0 rounded-sm transition-all duration-500"
                          style={{ height: `${h}%`, background: isHighlight ? active.color : `${active.color}55` }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-1.5">
                {active.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between px-4 py-2.5 bg-white border border-slate-200">
                    <div className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 shrink-0" style={{ background: active.color }} />
                      <span className="text-sm font-medium text-slate-700">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-slate-900 tabular-nums">{item.amount}</span>
                      <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-sm ${item.up ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`}>
                        {item.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 border border-emerald-200">
                <Activity className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="text-xs font-medium text-emerald-700">Live data — syncing every 30 seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
