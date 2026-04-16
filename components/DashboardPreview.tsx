"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Calculator, ShoppingCart, Users, Factory, Briefcase, Package,
  Star, TrendingUp, Clock, Activity
} from "lucide-react";

const modules = [
  {
    id: "accounting",
    label: "Accounting",
    icon: Calculator,
    color: "#5b5ef4",
    bg: "bg-[#eeeeff]",
    description: "Full double-entry accounting with automated reconciliation, real-time P&L, and compliance reporting.",
    stats: [
      { label: "Invoices Processed", value: "2,847" },
      { label: "Reconciled", value: "99.8%" },
      { label: "Reports", value: "24" },
    ],
    preview: {
      title: "Financial Overview",
      chart: [60, 75, 55, 88, 72, 95, 80, 91],
      items: [
        { name: "Revenue", amount: "$284,500", trend: "+12.5%", up: true },
        { name: "Expenses", amount: "$91,200", trend: "-4.2%", up: false },
        { name: "Net Profit", amount: "$193,300", trend: "+18.7%", up: true },
      ],
    },
  },
  {
    id: "pos",
    label: "POS",
    icon: ShoppingCart,
    color: "#10b981",
    bg: "bg-emerald-50",
    description: "Lightning-fast point-of-sale for retail, restaurants, and multi-location stores with offline support.",
    stats: [
      { label: "Transactions/Day", value: "1,204" },
      { label: "Avg. Ticket", value: "$48.50" },
      { label: "Locations", value: "8" },
    ],
    preview: {
      title: "Today's Sales",
      chart: [40, 55, 80, 70, 90, 85, 78, 95],
      items: [
        { name: "Gross Sales", amount: "$18,420", trend: "+9.1%", up: true },
        { name: "Refunds", amount: "$320", trend: "-2.0%", up: false },
        { name: "Net Sales", amount: "$18,100", trend: "+9.4%", up: true },
      ],
    },
  },
  {
    id: "crm",
    label: "CRM",
    icon: Users,
    color: "#f59e0b",
    bg: "bg-amber-50",
    description: "Manage your entire sales pipeline, nurture leads, and close deals faster with AI-assisted insights.",
    stats: [
      { label: "Active Leads", value: "384" },
      { label: "Win Rate", value: "38%" },
      { label: "Avg. Cycle", value: "21 days" },
    ],
    preview: {
      title: "Pipeline Overview",
      chart: [30, 50, 45, 70, 65, 80, 75, 90],
      items: [
        { name: "Pipeline Value", amount: "$1.2M", trend: "+22.3%", up: true },
        { name: "Deals Won", amount: "47", trend: "+15.0%", up: true },
        { name: "Deals Lost", amount: "12", trend: "-8.3%", up: false },
      ],
    },
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    icon: Factory,
    color: "#ef4444",
    bg: "bg-red-50",
    description: "End-to-end production planning, BOM management, work orders, and quality control in one place.",
    stats: [
      { label: "Work Orders", value: "142" },
      { label: "On-Time Rate", value: "94%" },
      { label: "Efficiency", value: "+31%" },
    ],
    preview: {
      title: "Production Status",
      chart: [70, 65, 80, 75, 88, 82, 90, 87],
      items: [
        { name: "Planned Output", amount: "5,000 units", trend: "+5.0%", up: true },
        { name: "Actual Output", amount: "4,820 units", trend: "+3.6%", up: true },
        { name: "Defect Rate", amount: "0.8%", trend: "-0.3%", up: false },
      ],
    },
  },
  {
    id: "hr",
    label: "HR",
    icon: Briefcase,
    color: "#8b5cf6",
    bg: "bg-violet-50",
    description: "Complete human resources management including payroll, attendance, recruitment, and performance reviews.",
    stats: [
      { label: "Employees", value: "248" },
      { label: "Attendance", value: "97.2%" },
      { label: "Payroll", value: "Automated" },
    ],
    preview: {
      title: "HR Dashboard",
      chart: [85, 88, 90, 87, 92, 89, 94, 91],
      items: [
        { name: "Headcount", amount: "248 staff", trend: "+12", up: true },
        { name: "Leave Requests", amount: "14", trend: "+2", up: false },
        { name: "Payroll Cost", amount: "$184,500", trend: "+3.2%", up: false },
      ],
    },
  },
];

export default function DashboardPreview() {
  const [active, setActive] = useState(modules[0]);

  return (
    <section id="modules" className="section-padding bg-[#f8f8fc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-semibold text-[#5b5ef4] bg-[#eeeeff] border-0">
            Interactive Preview
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Every module, one platform
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore how veenERP handles your core business operations — all connected, all real-time.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {modules.map((mod) => {
            const Icon = mod.icon;
            const isActive = active.id === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActive(mod)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                  isActive
                    ? "bg-white border-[#5b5ef4]/30 text-[#5b5ef4] shadow-md shadow-[#5b5ef4]/10"
                    : "bg-white border-border text-muted-foreground hover:text-foreground hover:border-border/80 hover:shadow-sm"
                }`}
              >
                <span className={`w-6 h-6 rounded-md flex items-center justify-center ${isActive ? mod.bg : "bg-secondary"}`}>
                  <Icon className="w-3.5 h-3.5" style={{ color: isActive ? mod.color : undefined }} />
                </span>
                {mod.label}
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-5 gap-6 transition-all duration-300">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-border/60 shadow-sm p-6 space-y-6">
            <div>
              <div className={`w-12 h-12 rounded-xl ${active.bg} flex items-center justify-center mb-4`}>
                {(() => { const Icon = active.icon; return <Icon className="w-6 h-6" style={{ color: active.color }} />; })()}
              </div>
              <h3 className="text-xl font-bold text-foreground">{active.label} Module</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{active.description}</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {active.stats.map((stat) => (
                <div key={stat.label} className="bg-[#f8f8fc] rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {[
                "Real-time data sync",
                "Automated workflows",
                "Advanced reporting",
                "Role-based access",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <div className="w-4 h-4 rounded-full bg-[#eeeeff] flex items-center justify-center flex-shrink-0">
                    <Star className="w-2.5 h-2.5 text-[#5b5ef4] fill-[#5b5ef4]" />
                  </div>
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 bg-white rounded-2xl border border-border/60 shadow-sm overflow-hidden">
            <div className="bg-[#0e0e14] px-5 py-3 flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-gray-500 ml-1">{active.preview.title}</span>
            </div>

            <div className="p-5 space-y-4">
              <div className="bg-[#f8f8fc] rounded-xl p-4">
                <div className="flex items-end gap-1.5 h-24">
                  {active.preview.chart.map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end">
                      <div
                        className="w-full rounded-t-sm transition-all duration-500"
                        style={{
                          height: `${h}%`,
                          background: i === active.preview.chart.length - 2
                            ? active.color
                            : `${active.color}30`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                {active.preview.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-3.5 bg-[#f8f8fc] rounded-xl">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: active.color }}
                      />
                      <span className="text-sm font-medium text-foreground">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-foreground">{item.amount}</span>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-lg ${
                          item.up ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                        }`}
                      >
                        {item.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 p-3 bg-[#eeeeff] rounded-xl">
                <Activity className="w-4 h-4 text-[#5b5ef4]" />
                <span className="text-xs font-medium text-[#5b5ef4]">Live data — updated every 30 seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
