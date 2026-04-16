"use client";

import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-white pt-16">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center py-20 lg:py-28">
          <div className="space-y-7">
            <div>
              <p className="section-label mb-4">Enterprise Resource Planning</p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3rem] font-extrabold text-slate-900 leading-[1.08] tracking-[-0.03em]">
                Run your entire
                <br />
                business on{" "}
                <span className="text-gradient">one platform</span>
              </h1>
            </div>

            <p className="text-[1rem] text-slate-500 leading-relaxed max-w-md">
              veenERP unifies accounting, CRM, manufacturing, HR, and more — all connected in real time. Eliminate the patchwork. Automate the grind. Scale with confidence.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <button
                onClick={() => scrollTo("#tour")}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded transition-colors duration-150 group"
              >
                Book a Free Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("#modules")}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded border border-slate-300 hover:border-slate-400 transition-colors duration-150"
              >
                Explore Modules
              </button>
            </div>

            <div className="pt-3 border-t border-slate-100 grid grid-cols-3 gap-4">
              {[
                { icon: TrendingUp, value: "3×", label: "Faster operations" },
                { icon: Clock, value: "80%", label: "Less manual work" },
                { icon: Users, value: "500+", label: "Businesses served" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="text-base font-bold text-slate-900 tracking-tight">{value}</span>
                  </div>
                  <span className="text-xs text-slate-400">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg border border-slate-200 shadow-xl overflow-hidden bg-white">
              <div className="bg-slate-900 px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 bg-slate-800 rounded h-5 flex items-center px-3">
                  <span className="text-[10px] text-slate-500 font-mono">app.veenerp.com/dashboard</span>
                </div>
              </div>

              <div className="bg-[#f8fafc] p-4 space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Revenue", value: "$284.5k", change: "+12.5%", pos: true },
                    { label: "Orders", value: "1,284", change: "+8.2%", pos: true },
                    { label: "Invoices", value: "47 open", change: "-3.1%", pos: false },
                  ].map((s) => (
                    <div key={s.label} className="bg-white rounded border border-slate-200 p-3">
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">{s.label}</p>
                      <p className="text-sm font-bold text-slate-800">{s.value}</p>
                      <span className={`mt-1 text-[10px] font-semibold inline-block ${s.pos ? "text-emerald-600" : "text-red-500"}`}>{s.change}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded border border-slate-200 p-3.5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-700">Revenue Overview</span>
                    <span className="text-[10px] text-slate-400 font-medium">Last 7 days</span>
                  </div>
                  <div className="flex items-end gap-1.5" style={{ height: 52 }}>
                    {[38, 62, 48, 78, 64, 90, 72].map((h, i) => (
                      <div key={i} className="flex-1 relative" style={{ height: 52 }}>
                        <div
                          className="absolute bottom-0 left-0 right-0 rounded-sm"
                          style={{ height: `${h}%`, background: i === 5 ? "#059669" : i >= 3 ? "#6ee7b7" : "#a7f3d0" }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                      <span key={i} className="text-[9px] text-slate-400 flex-1 text-center font-medium">{d}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded border border-slate-200 p-3.5">
                  <p className="text-xs font-semibold text-slate-700 mb-2.5">Recent Activity</p>
                  <div className="space-y-2">
                    {[
                      { dot: "bg-emerald-500", text: "Invoice #INV-2847 paid", time: "2m ago" },
                      { dot: "bg-teal-400", text: "New PO from Supplier Co.", time: "18m ago" },
                      { dot: "bg-emerald-400", text: "Payroll processed — March", time: "1h ago" },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${r.dot} shrink-0`} />
                          <span className="text-xs text-slate-600">{r.text}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 ml-3 shrink-0">{r.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 bg-white rounded border border-slate-200 shadow-md px-3 py-2.5 flex items-center gap-2.5">
              <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <p className="text-[9px] text-slate-400 font-medium uppercase tracking-wide">Monthly Growth</p>
                <p className="text-sm font-bold text-slate-900">+24.8%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 py-5 flex flex-wrap items-center gap-x-8 gap-y-2">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Trusted by teams at</p>
          {["Acme Industries", "TerraLogix", "PrimeTrade Co.", "NovoBuild", "StarkOps"].map((name) => (
            <span key={name} className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition-colors cursor-default">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
