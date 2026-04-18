"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Translations } from "@/lib/i18n/translations";
import {
  CheckSquare, Users, UserCog, DollarSign, FileText, Package, BookOpen,
  ArrowRight, TrendingUp, BarChart2, Layers, Check, Clock, Star,
  ChevronRight, Circle, Activity, Briefcase,
} from "lucide-react";

interface ModuleConfig {
  key: keyof Translations["features"];
  icon: React.ElementType;
  accentColor: string;
  bgClass: string;
  labelColor: string;
  sectionBg: string;
  reverse?: boolean;
  mockContent: React.ReactNode;
}

// Mock dashboard UI for each module
function TaskMock({ color }: { color: string }) {
  const tasks = [
    { label: "Update project roadmap", status: "In Progress", priority: "High" },
    { label: "Design review with client", status: "Done", priority: "Medium" },
    { label: "API integration test", status: "In Progress", priority: "High" },
    { label: "Deploy to staging", status: "Todo", priority: "Low" },
  ];
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-lg">
      <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-700">Planning / Tasks</span>
        <div className="flex gap-2">
          <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">All 93</span>
          <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">Today 22</span>
          <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded-full">Overdue 18</span>
        </div>
      </div>
      <div className="divide-y divide-slate-100">
        {tasks.map((task, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-2.5">
            <div className="flex items-center gap-2.5">
              <div className={`w-1.5 h-1.5 rounded-full ${task.status === "Done" ? "bg-emerald-400" : task.status === "In Progress" ? "bg-blue-400" : "bg-slate-300"}`} />
              <span className={`text-xs font-medium ${task.status === "Done" ? "line-through text-slate-400" : "text-slate-700"}`}>
                {task.label}
              </span>
            </div>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
              task.priority === "High" ? "bg-red-50 text-red-600" :
              task.priority === "Medium" ? "bg-amber-50 text-amber-600" :
              "bg-slate-50 text-slate-500"
            }`}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CRMMock({ color }: { color: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-lg">
      <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-700">Funnel Stages Report</span>
        <span className="text-[10px] text-slate-400">Q1 2024</span>
      </div>
      <div className="p-4 space-y-3">
        {[
          { label: "New Deals", value: "38 transactions", pct: 100, amount: "$2,435,529" },
          { label: "Qualified", value: "24 transactions", pct: 63, amount: "$1,540,200" },
          { label: "Proposal", value: "15 transactions", pct: 39, amount: "$980,450" },
          { label: "Closed Won", value: "8 transactions", pct: 21, amount: "$432,100" },
        ].map((stage, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-medium text-slate-600">{stage.label}</span>
              <span className="text-[11px] font-bold text-slate-800">{stage.amount}</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${stage.pct}%`, background: color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HRMock({ color }: { color: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-lg">
      <div className="px-4 py-3 border-b border-slate-200">
        <span className="text-xs font-semibold text-slate-700">Organizational Structure</span>
      </div>
      <div className="p-4 grid grid-cols-2 gap-2.5">
        {[
          { code: "001", name: "Design & Construction Co.", dept: "Administrative Dept.", role: "Owner" },
          { code: "002", name: "Financial Department", dept: "F Dept head: A. Sidorov", role: "Dept Head" },
          { code: "003", name: "Technical Department", dept: "Supervisor: F. Muminov", role: "Supervisor" },
          { code: "004", name: "Sales & Marketing", dept: "Head: M. Johnson", role: "Manager" },
        ].map((dept, i) => (
          <div key={i} className="border border-slate-200 rounded-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[9px] text-slate-400 font-medium">Code: {dept.code}</span>
              <span className="text-[9px]" style={{ color }}>●</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-800 leading-tight mb-1">{dept.name}</p>
            <p className="text-[10px] text-slate-500">{dept.dept}</p>
            <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded mt-1.5 inline-block" style={{ background: `${color}15`, color }}>
              {dept.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FinanceMock({ color }: { color: string }) {
  const bars = [60, 75, 55, 88, 72, 95, 80];
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-lg">
      <div className="px-4 py-3 border-b border-slate-200 flex justify-between items-center">
        <span className="text-xs font-semibold text-slate-700">Financial Overview</span>
        <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">+12.5%</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Revenue", value: "$284k" },
            { label: "Expenses", value: "$91k" },
            { label: "Profit", value: "$193k" },
          ].map((m) => (
            <div key={m.label} className="bg-slate-50 rounded-lg p-2.5">
              <p className="text-[9px] text-slate-400 font-medium uppercase">{m.label}</p>
              <p className="text-sm font-bold text-slate-800 mt-0.5">{m.value}</p>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-1.5 pt-1" style={{ height: 64 }}>
          {bars.map((h, i) => (
            <div key={i} className="flex-1 relative" style={{ height: 64 }}>
              <div
                className="absolute bottom-0 left-0 right-0 rounded-sm"
                style={{ height: `${h}%`, background: i === 5 ? color : `${color}55` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContractsMock({ color }: { color: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-lg">
      <div className="px-4 py-3 border-b border-slate-200">
        <span className="text-xs font-semibold text-slate-700">Active Contracts</span>
      </div>
      <div className="divide-y divide-slate-100">
        {[
          { name: "Supplier MSA — TechCorp", status: "Active", expires: "Nov 2024", value: "$48,000" },
          { name: "Service Retainer — GlobalCo", status: "Expiring", expires: "May 2024", value: "$12,500" },
          { name: "SaaS License — CloudBase", status: "Active", expires: "Dec 2024", value: "$9,200" },
          { name: "Consulting Agreement", status: "Draft", expires: "—", value: "$25,000" },
        ].map((c, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-2.5">
            <div>
              <p className="text-xs font-medium text-slate-700">{c.name}</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Expires: {c.expires}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-slate-800">{c.value}</p>
              <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded mt-0.5 inline-block ${
                c.status === "Active" ? "bg-emerald-50 text-emerald-700" :
                c.status === "Expiring" ? "bg-amber-50 text-amber-700" :
                "bg-slate-50 text-slate-500"
              }`}>
                {c.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WarehouseMock({ color }: { color: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-lg">
      <div className="px-4 py-3 border-b border-slate-200 flex justify-between items-center">
        <span className="text-xs font-semibold text-slate-700">Inventory Status</span>
        <span className="text-[10px] text-red-600 font-semibold">23 low stock</span>
      </div>
      <div className="p-4 space-y-2.5">
        {[
          { sku: "SKU-4412", name: "Office Chairs — Model A", qty: 3, total: 50, status: "Critical" },
          { sku: "SKU-2201", name: "Laptop Stands", qty: 12, total: 50, status: "Low" },
          { sku: "SKU-8844", name: "Monitor Arms", qty: 34, total: 50, status: "OK" },
          { sku: "SKU-3310", name: "Desk Dividers", qty: 28, total: 50, status: "OK" },
        ].map((item, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <div>
                <span className="text-[10px] text-slate-400 mr-2">{item.sku}</span>
                <span className="text-xs font-medium text-slate-700">{item.name}</span>
              </div>
              <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${
                item.status === "Critical" ? "bg-red-50 text-red-600" :
                item.status === "Low" ? "bg-amber-50 text-amber-600" :
                "bg-emerald-50 text-emerald-600"
              }`}>
                {item.status}
              </span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(item.qty / item.total) * 100}%`,
                  background: item.status === "Critical" ? "#ef4444" : item.status === "Low" ? "#f59e0b" : color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LMSMock({ color }: { color: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-lg">
      <div className="px-4 py-3 border-b border-slate-200">
        <span className="text-xs font-semibold text-slate-700">Learning Progress</span>
      </div>
      <div className="p-4 space-y-3">
        {[
          { name: "ERP Fundamentals", enrolled: 142, completed: 131, pct: 92 },
          { name: "Financial Reporting", enrolled: 88, completed: 65, pct: 74 },
          { name: "HR Compliance 2024", enrolled: 96, completed: 46, pct: 48 },
          { name: "Warehouse Operations", enrolled: 54, completed: 36, pct: 67 },
        ].map((course, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1 items-center">
              <span className="text-xs font-medium text-slate-700">{course.name}</span>
              <span className="text-[11px] font-bold" style={{ color }}>{course.pct}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${course.pct}%`, background: color }}
              />
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5">
              {course.completed}/{course.enrolled} enrolled completed
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const modules: ModuleConfig[] = [
  {
    key: "taskManagement",
    icon: CheckSquare,
    accentColor: "#3b82f6",
    bgClass: "bg-blue-500",
    labelColor: "text-blue-600",
    sectionBg: "section-bg-blue",
    mockContent: <TaskMock color="#3b82f6" />,
  },
  {
    key: "crm",
    icon: Users,
    accentColor: "#06b6d4",
    bgClass: "bg-cyan-500",
    labelColor: "text-cyan-600",
    sectionBg: "section-bg-teal",
    reverse: true,
    mockContent: <CRMMock color="#06b6d4" />,
  },
  {
    key: "hr",
    icon: UserCog,
    accentColor: "#f43f5e",
    bgClass: "bg-rose-500",
    labelColor: "text-rose-600",
    sectionBg: "section-bg-rose",
    mockContent: <HRMock color="#f43f5e" />,
  },
  {
    key: "finance",
    icon: DollarSign,
    accentColor: "#10b981",
    bgClass: "bg-emerald-500",
    labelColor: "text-emerald-600",
    sectionBg: "section-bg-mint",
    reverse: true,
    mockContent: <FinanceMock color="#10b981" />,
  },
  {
    key: "contracts",
    icon: FileText,
    accentColor: "#8b5cf6",
    bgClass: "bg-violet-500",
    labelColor: "text-violet-600",
    sectionBg: "section-bg-lavender",
    mockContent: <ContractsMock color="#8b5cf6" />,
  },
  {
    key: "warehouse",
    icon: Package,
    accentColor: "#f59e0b",
    bgClass: "bg-amber-500",
    labelColor: "text-amber-600",
    sectionBg: "section-bg-amber",
    reverse: true,
    mockContent: <WarehouseMock color="#f59e0b" />,
  },
  {
    key: "lms",
    icon: BookOpen,
    accentColor: "#ec4899",
    bgClass: "bg-pink-500",
    labelColor: "text-pink-600",
    sectionBg: "section-bg-lavender",
    mockContent: <LMSMock color="#ec4899" />,
  },
];

export default function ModuleFeaturesSection() {
  const { t } = useLanguage();

  return (
    <div id="features">
      {modules.map((mod, index) => {
        const Icon = mod.icon;
        const feat = t.features[mod.key];

        return (
          <section
            key={mod.key}
            className={`${mod.sectionBg} section-padding`}
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-8">
              <div
                className={`grid lg:grid-cols-2 gap-12 xl:gap-16 items-center ${
                  mod.reverse ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Text side */}
                <div className={mod.reverse ? "lg:[direction:ltr]" : ""}>
                  <p
                    className={`section-label-accent mb-4 ${mod.labelColor}`}
                    style={{ color: mod.accentColor }}
                  >
                    {feat.label}
                  </p>
                  <h2 className="text-[1.75rem] sm:text-[2.125rem] font-bold text-slate-900 tracking-tight leading-[1.2] mb-5">
                    {feat.heading}
                  </h2>
                  <p className="text-[0.9375rem] text-slate-600 leading-relaxed mb-7">
                    {feat.body}
                  </p>
                  <button
                    className="inline-flex items-center gap-2 font-semibold text-[0.9375rem] group transition-colors"
                    style={{ color: mod.accentColor }}
                    onClick={() => document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {feat.link}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Mock UI side */}
                <div className={`relative ${mod.reverse ? "lg:[direction:ltr]" : ""}`}>
                  {mod.mockContent}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
