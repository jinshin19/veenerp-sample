"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  CheckSquare, Users, UserCog, DollarSign, FileText, Package, BookOpen,
  ChevronUp, ChevronDown, Clock, Search, Bell, Plus, Filter,
  BarChart2, TrendingUp, ArrowUpRight, Circle,
} from "lucide-react";

const moduleTabKeys = [
  "taskManagement",
  "crm",
  "hrManagement",
  "finance",
  "contracts",
  "warehouse",
  "lms",
] as const;

type ModuleKey = typeof moduleTabKeys[number];

const moduleIcons: Record<ModuleKey, React.ElementType> = {
  taskManagement: CheckSquare,
  crm: Users,
  hrManagement: UserCog,
  finance: DollarSign,
  contracts: FileText,
  warehouse: Package,
  lms: BookOpen,
};

// Dashboard mock data per module
const dashboardContent: Record<ModuleKey, {
  title: string;
  barData: number[];
  listItems: { name: string; value: string; up: boolean }[];
  stats: { label: string; value: string; change: string; up: boolean }[];
  accentColor: string;
}> = {
  taskManagement: {
    title: "Planning / Tasks",
    accentColor: "#3b82f6",
    stats: [
      { label: "Total Tasks", value: "93", change: "+12", up: true },
      { label: "Today", value: "22", change: "+3", up: true },
      { label: "Overdue", value: "18", change: "+2", up: false },
    ],
    barData: [45, 60, 38, 72, 55, 88, 64],
    listItems: [
      { name: "Design system update", value: "Due today", up: true },
      { name: "Client proposal Q2", value: "Overdue", up: false },
      { name: "Integration testing", value: "In Progress", up: true },
    ],
  },
  crm: {
    title: "CRM / Analytics",
    accentColor: "#06b6d4",
    stats: [
      { label: "New Deals", value: "38", change: "+5", up: true },
      { label: "Pipeline", value: "$2.4M", change: "+18%", up: true },
      { label: "Closed", value: "14", change: "+2", up: true },
    ],
    barData: [30, 48, 55, 70, 62, 80, 74],
    listItems: [
      { name: "Acme Corp — Renewal", value: "$120,000", up: true },
      { name: "GlobalTrade — New", value: "$85,000", up: true },
      { name: "Brightline — At Risk", value: "$45,000", up: false },
    ],
  },
  hrManagement: {
    title: "HR Management",
    accentColor: "#f43f5e",
    stats: [
      { label: "Employees", value: "248", change: "+12", up: true },
      { label: "Attendance", value: "97.2%", change: "+0.5%", up: true },
      { label: "Pending", value: "14", change: "+2", up: false },
    ],
    barData: [80, 85, 82, 90, 88, 94, 91],
    listItems: [
      { name: "John Smith — Leave Request", value: "Pending", up: false },
      { name: "Product Team — Review", value: "Scheduled", up: true },
      { name: "Payroll — April", value: "Processed", up: true },
    ],
  },
  finance: {
    title: "Finance",
    accentColor: "#10b981",
    stats: [
      { label: "Revenue", value: "$284k", change: "+12.5%", up: true },
      { label: "Expenses", value: "$91k", change: "-4.2%", up: true },
      { label: "Invoices", value: "47 open", change: "+3", up: false },
    ],
    barData: [60, 75, 55, 88, 72, 95, 80],
    listItems: [
      { name: "Invoice #INV-2847", value: "$12,400", up: true },
      { name: "Office Lease — April", value: "$8,200", up: false },
      { name: "Net Profit — Q1", value: "$193,300", up: true },
    ],
  },
  contracts: {
    title: "Contracts",
    accentColor: "#8b5cf6",
    stats: [
      { label: "Active", value: "64", change: "+4", up: true },
      { label: "Expiring", value: "8", change: "+1", up: false },
      { label: "Draft", value: "12", change: "-2", up: true },
    ],
    barData: [40, 55, 48, 65, 58, 72, 68],
    listItems: [
      { name: "Supplier MSA — Renewal", value: "Expiring 15 days", up: false },
      { name: "SaaS License — TechCo", value: "Active", up: true },
      { name: "Consulting Retainer", value: "Signed", up: true },
    ],
  },
  warehouse: {
    title: "Warehouse",
    accentColor: "#f59e0b",
    stats: [
      { label: "SKUs", value: "1,204", change: "+48", up: true },
      { label: "Low Stock", value: "23", change: "+5", up: false },
      { label: "Shipments", value: "38", change: "+12", up: true },
    ],
    barData: [55, 65, 70, 60, 80, 75, 85],
    listItems: [
      { name: "SKU-4412 — Reorder", value: "Critical", up: false },
      { name: "Inbound Shipment #842", value: "Arriving today", up: true },
      { name: "Q2 Stock Audit", value: "Scheduled", up: true },
    ],
  },
  lms: {
    title: "Learning Management",
    accentColor: "#ec4899",
    stats: [
      { label: "Courses", value: "24", change: "+3", up: true },
      { label: "Enrolled", value: "186", change: "+22", up: true },
      { label: "Completed", value: "68%", change: "+5%", up: true },
    ],
    barData: [50, 60, 68, 72, 78, 82, 88],
    listItems: [
      { name: "ERP Fundamentals", value: "92% complete", up: true },
      { name: "Finance Basics", value: "74% complete", up: true },
      { name: "HR Compliance 2024", value: "48% complete", up: false },
    ],
  },
};

export default function HeroSection() {
  const { t } = useLanguage();
  const [activeModule, setActiveModule] = useState<ModuleKey>("taskManagement");

  const scrollToCta = () => {
    document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
  };

  const content = dashboardContent[activeModule];

  return (
    <section className="relative overflow-hidden hero-bg pt-[68px]">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Centered headline + subtitle + CTA */}
        <div className="text-center pt-16 pb-12 sm:pt-20 sm:pb-14">
          <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.75rem] font-black text-slate-900 leading-[1.1] tracking-[-0.03em] max-w-3xl mx-auto">
            {t.hero.headline}
          </h1>
          <p className="mt-6 text-[1.0625rem] text-slate-500 leading-relaxed max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="mt-8">
            <button
              onClick={scrollToCta}
              className="btn-primary text-[0.9375rem] px-8 py-3.5"
            >
              {t.hero.cta}
            </button>
          </div>
        </div>

        {/* Module tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap pb-5">
          {moduleTabKeys.map((key) => {
            const Icon = moduleIcons[key];
            return (
              <button
                key={key}
                onClick={() => setActiveModule(key)}
                className={`tab-pill ${activeModule === key ? "active" : ""}`}
              >
                <Icon
                  className="w-3.5 h-3.5 mr-1"
                  style={{ color: activeModule === key ? content.accentColor : "#94a3b8" }}
                />
                {t.moduleTabs[key]}
              </button>
            );
          })}
        </div>

        {/* Dashboard preview frame */}
        <div className="relative pb-0 max-w-5xl mx-auto">
          <div className="dashboard-frame bg-white">
            {/* Browser chrome bar */}
            <div className="bg-[#1e293b] px-4 py-2.5 flex items-center gap-3">
              <div className="flex gap-1.5 shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 bg-[#334155] rounded-md h-6 flex items-center px-3 max-w-xs mx-auto">
                <span className="text-[10px] text-slate-400 font-mono truncate">
                  app.veenerp.com/{activeModule}
                </span>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Search className="w-3.5 h-3.5 text-slate-500" />
                <Bell className="w-3.5 h-3.5 text-slate-500" />
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-[9px] text-white font-bold">VS</span>
                </div>
              </div>
            </div>

            {/* App layout */}
            <div className="flex" style={{ minHeight: 340 }}>
              {/* Sidebar */}
              <div className="hidden sm:flex flex-col w-44 bg-[#f8fafc] border-r border-slate-200 shrink-0">
                <div className="p-3 border-b border-slate-200">
                  <div className="flex items-center gap-2 px-2 py-1.5">
                    <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center">
                      <span className="text-[8px] text-white font-bold">V</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-700">veenERP</span>
                  </div>
                </div>
                <nav className="p-2 flex flex-col gap-0.5">
                  {[
                    { Icon: CheckSquare, label: "Tasks", active: activeModule === "taskManagement" },
                    { Icon: Users, label: "CRM", active: activeModule === "crm" },
                    { Icon: UserCog, label: "HR", active: activeModule === "hrManagement" },
                    { Icon: DollarSign, label: "Finance", active: activeModule === "finance" },
                    { Icon: FileText, label: "Contracts", active: activeModule === "contracts" },
                    { Icon: Package, label: "Warehouse", active: activeModule === "warehouse" },
                    { Icon: BookOpen, label: "LMS", active: activeModule === "lms" },
                  ].map(({ Icon, label, active }) => (
                    <div
                      key={label}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] font-medium transition-colors ${
                        active ? "bg-blue-50 text-blue-700" : "text-slate-500"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: active ? content.accentColor : "#94a3b8" }} />
                      {label}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Main content */}
              <div className="flex-1 bg-[#f8fafc] overflow-hidden">
                {/* Top bar */}
                <div className="bg-white border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-800">{content.title}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-[10px] text-slate-400">
                      <Clock className="w-3 h-3" />
                      <span>4h 15m</span>
                    </div>
                    <button className="flex items-center gap-1 px-2 py-1 bg-blue-500 text-white text-[10px] font-semibold rounded-md">
                      <Plus className="w-3 h-3" />
                      Add
                    </button>
                  </div>
                </div>

                {/* Filter bar */}
                <div className="px-4 py-2 bg-white border-b border-slate-100 flex items-center gap-2">
                  {content.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 rounded-md border border-slate-200"
                    >
                      <span className="text-[10px] text-slate-500">{stat.label}</span>
                      <span className="text-[10px] font-bold" style={{ color: content.accentColor }}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                  <div className="ml-auto flex items-center gap-1 text-[10px] text-slate-400">
                    <Filter className="w-3 h-3" />
                    Filter
                  </div>
                </div>

                {/* Content grid */}
                <div className="p-4 grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {/* Chart + items */}
                  <div className="sm:col-span-3 space-y-3">
                    {/* Mini bar chart */}
                    <div className="bg-white rounded-lg border border-slate-200 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-slate-700">Performance Overview</span>
                        <span className="text-[10px] text-slate-400">Last 7 days</span>
                      </div>
                      <div className="flex items-end gap-1.5" style={{ height: 60 }}>
                        {content.barData.map((h, i) => (
                          <div key={i} className="flex-1 relative" style={{ height: 60 }}>
                            <div
                              className="absolute bottom-0 left-0 right-0 rounded-sm transition-all duration-500"
                              style={{
                                height: `${h}%`,
                                background: i === content.barData.length - 2
                                  ? content.accentColor
                                  : `${content.accentColor}55`,
                              }}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-2">
                        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                          <span key={i} className="text-[9px] text-slate-400 flex-1 text-center">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* List items */}
                    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                      {content.listItems.map((item, i) => (
                        <div
                          key={i}
                          className={`flex items-center justify-between px-4 py-2.5 ${
                            i < content.listItems.length - 1 ? "border-b border-slate-100" : ""
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: item.up ? content.accentColor : "#ef4444" }}
                            />
                            <span className="text-xs font-medium text-slate-700">{item.name}</span>
                          </div>
                          <span
                            className="text-[10px] font-semibold px-1.5 py-0.5 rounded"
                            style={{
                              background: item.up ? `${content.accentColor}15` : "#fef2f2",
                              color: item.up ? content.accentColor : "#dc2626",
                            }}
                          >
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats cards */}
                  <div className="sm:col-span-2 grid grid-cols-1 gap-3 content-start">
                    {content.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white rounded-lg border border-slate-200 p-3.5"
                      >
                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                          {stat.label}
                        </p>
                        <div className="flex items-end justify-between">
                          <p className="text-xl font-bold" style={{ color: content.accentColor }}>
                            {stat.value}
                          </p>
                          <span
                            className={`flex items-center gap-0.5 text-[10px] font-semibold ${
                              stat.up ? "text-emerald-600" : "text-red-500"
                            }`}
                          >
                            {stat.up ? (
                              <ArrowUpRight className="w-3 h-3" />
                            ) : (
                              <ChevronDown className="w-3 h-3" />
                            )}
                            {stat.change}
                          </span>
                        </div>
                      </div>
                    ))}
                    {/* Live indicator */}
                    <div
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border"
                      style={{
                        background: `${content.accentColor}10`,
                        borderColor: `${content.accentColor}30`,
                      }}
                    >
                      <Circle
                        className="w-2 h-2 fill-current animate-pulse"
                        style={{ color: content.accentColor }}
                      />
                      <span className="text-[10px] font-medium" style={{ color: content.accentColor }}>
                        Live · updated 30s ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/80 to-transparent pointer-events-none rounded-b-2xl" />
        </div>
      </div>
    </section>
  );
}
