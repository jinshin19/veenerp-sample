"use client";

import { ArrowRight, Play, TrendingUp, Clock, Users } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="absolute top-24 right-[8%] w-80 h-80 rounded-full bg-indigo-100/60 blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-16 left-[3%] w-56 h-56 rounded-full bg-violet-100/50 blur-3xl animate-float-delayed pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Enterprise Resource Planning
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-[1.1] tracking-[-0.03em]">
                Run your entire
                <br />
                business on{" "}
                <span className="text-gradient">one platform</span>
              </h1>
              <p className="text-base sm:text-[1.0625rem] text-slate-500 leading-relaxed max-w-lg">
                veenERP unifies accounting, CRM, manufacturing, HR, and more into a single platform. Automate workflows, gain real-time insights, and scale without limits.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("#tour")}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg shadow-md shadow-indigo-200 hover:shadow-lg hover:shadow-indigo-200 transition-all duration-200 hover:-translate-y-px group"
              >
                Book a Free Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("#modules")}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-200 group"
              >
                <span className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                  <Play className="w-2.5 h-2.5 text-indigo-600 fill-indigo-600 ml-0.5" />
                </span>
                Watch Tour
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-slate-100">
              {[
                { icon: TrendingUp, value: "3×", label: "Faster operations" },
                { icon: Clock, value: "80%", label: "Less manual work" },
                { icon: Users, value: "500+", label: "Businesses served" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 leading-tight">{value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-indigo-50 via-violet-50/50 to-transparent rounded-3xl blur-2xl" />

            <div className="relative rounded-2xl shadow-2xl shadow-slate-200 border border-slate-200/80 bg-white overflow-hidden">
              <div className="bg-slate-900 px-4 py-3 flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 bg-slate-800 rounded h-5 flex items-center px-3">
                  <span className="text-[10px] text-slate-500 font-mono">app.veenerp.com/dashboard</span>
                </div>
              </div>

              <div className="bg-slate-50 p-4 space-y-3">
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { label: "Revenue", value: "$284.5k", change: "+12.5%", up: true, accent: "text-emerald-600 bg-emerald-50" },
                    { label: "Orders", value: "1,284", change: "+8.2%", up: true, accent: "text-indigo-600 bg-indigo-50" },
                    { label: "Invoices", value: "47 open", change: "-3.1%", up: false, accent: "text-amber-600 bg-amber-50" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">{s.label}</p>
                      <p className="text-sm font-bold text-slate-800">{s.value}</p>
                      <span className={`text-[10px] font-semibold mt-1 px-1.5 py-0.5 rounded inline-block ${s.accent}`}>{s.change}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-3.5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-700">Revenue Overview</span>
                    <span className="text-[11px] text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">Last 7 days</span>
                  </div>
                  <div className="flex items-end gap-1.5" style={{ height: 52 }}>
                    {[38, 62, 48, 78, 64, 90, 72].map((h, i) => (
                      <div key={i} className="flex-1 relative" style={{ height: 52 }}>
                        <div
                          className="absolute bottom-0 left-0 right-0 rounded-t"
                          style={{
                            height: `${h}%`,
                            background: i === 5 ? "#4f46e5" : i >= 3 ? "#a5b4fc" : "#c7d2fe",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-1.5">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                      <span key={i} className="text-[9px] text-slate-400 flex-1 text-center">{d}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-3.5">
                  <p className="text-xs font-semibold text-slate-700 mb-2.5">Recent Activity</p>
                  <div className="space-y-2">
                    {[
                      { dot: "bg-emerald-400", text: "Invoice #INV-2847 paid", time: "2m ago" },
                      { dot: "bg-blue-400", text: "New PO from Supplier Co.", time: "18m ago" },
                      { dot: "bg-indigo-400", text: "Payroll processed — March", time: "1h ago" },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${r.dot}`} />
                          <span className="text-xs text-slate-600">{r.text}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0 ml-2">{r.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl border border-slate-100 shadow-lg px-3.5 py-2.5 flex items-center gap-2.5 animate-float">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium">Monthly Growth</p>
                <p className="text-sm font-bold text-emerald-600">+24.8%</p>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 bg-white rounded-xl border border-slate-100 shadow-lg px-3.5 py-2.5 flex items-center gap-2.5 animate-float-delayed">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
                <span className="text-sm">⚡</span>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-medium">Automation Active</p>
                <p className="text-sm font-bold text-indigo-600">14 workflows</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
