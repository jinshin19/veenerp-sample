"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Clock, BarChart3 } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-14">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-5%,rgba(91,94,244,0.09),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_35%_at_85%_55%,rgba(139,92,246,0.06),transparent)]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-28 right-[6%] w-72 h-72 rounded-full bg-[#5b5ef4]/[0.04] blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-[4%] w-52 h-52 rounded-full bg-violet-300/[0.07] blur-3xl animate-float-delayed" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#eeeeff] border border-[#5b5ef4]/15 text-[#5b5ef4] text-[0.7rem] font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5b5ef4] animate-pulse" />
              All-in-One ERP Platform
            </div>

            <div className="space-y-4">
              <h1 className="text-[2.75rem] sm:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-[1.1] tracking-[-0.03em]">
                Run your entire
                <br />
                business on{" "}
                <span className="text-gradient">one platform</span>
              </h1>
              <p className="text-base sm:text-[1.0625rem] text-muted-foreground leading-relaxed max-w-lg">
                veenERP unifies accounting, CRM, manufacturing, HR, and more into a single platform. Automate workflows, gain real-time insights, and scale without limits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <Button
                onClick={() => scrollTo("#tour")}
                className="bg-[#5b5ef4] hover:bg-[#4547d4] text-white rounded-xl h-10 px-6 text-sm font-semibold shadow-md shadow-[#5b5ef4]/20 transition-all duration-200 hover:shadow-lg hover:shadow-[#5b5ef4]/25 hover:-translate-y-px group"
              >
                Book a Free Demo
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Button>
              <Button
                onClick={() => scrollTo("#modules")}
                variant="ghost"
                className="rounded-xl h-10 px-5 text-sm font-semibold text-foreground hover:bg-black/[0.04] group gap-2"
              >
                <span className="w-7 h-7 rounded-full bg-[#5b5ef4]/10 flex items-center justify-center group-hover:bg-[#5b5ef4]/15 transition-colors">
                  <Play className="w-2.5 h-2.5 text-[#5b5ef4] fill-[#5b5ef4] ml-0.5" />
                </span>
                Watch Tour
              </Button>
            </div>

            <div className="flex items-center gap-5 pt-1">
              {[
                { icon: TrendingUp, value: "3×", label: "Faster operations" },
                { icon: Clock, value: "80%", label: "Less manual work" },
                { icon: BarChart3, value: "500+", label: "Businesses" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#eeeeff] flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-[#5b5ef4]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground leading-none">{value}</div>
                    <div className="text-[0.7rem] text-muted-foreground mt-0.5">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div className="absolute -inset-6 bg-gradient-to-br from-[#5b5ef4]/10 via-violet-300/5 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-white rounded-2xl shadow-xl shadow-black/[0.08] border border-border/70 overflow-hidden">
              <div className="bg-[#111118] px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 bg-white/8 rounded-md h-5 flex items-center px-2.5">
                  <span className="text-[9px] text-white/35 font-mono">app.veenerp.com/dashboard</span>
                </div>
              </div>

              <div className="bg-[#f7f7fb] p-4 space-y-3">
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { label: "Revenue", value: "$284.5k", color: "text-emerald-600", bg: "bg-emerald-50", change: "+12.5%" },
                    { label: "Orders", value: "1,284", color: "text-[#5b5ef4]", bg: "bg-[#eeeeff]", change: "+8.2%" },
                    { label: "Invoices", value: "47", color: "text-amber-600", bg: "bg-amber-50", change: "-3.1%" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl p-3 border border-border/40 shadow-sm">
                      <p className="text-[9px] text-muted-foreground font-medium uppercase tracking-wide">{stat.label}</p>
                      <p className={`text-sm font-bold mt-1 ${stat.color}`}>{stat.value}</p>
                      <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-md inline-block mt-0.5 ${stat.bg} ${stat.color}`}>{stat.change}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-xl border border-border/40 shadow-sm p-3.5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[0.7rem] font-semibold text-foreground">Revenue Overview</span>
                    <span className="text-[9px] text-muted-foreground px-2 py-0.5 bg-secondary rounded-md border border-border/50">Last 7 days</span>
                  </div>
                  <div className="flex items-end gap-1" style={{ height: 56 }}>
                    {[40, 65, 52, 80, 68, 92, 84].map((h, i) => (
                      <div key={i} className="flex-1 relative" style={{ height: 56 }}>
                        <div
                          className="absolute bottom-0 left-0 right-0 rounded-t"
                          style={{
                            height: `${h}%`,
                            background: i === 5 ? "#5b5ef4" : i >= 4 ? "#9ea0f8" : "#c4c5fb",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-1.5">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                      <span key={i} className="text-[8px] text-muted-foreground flex-1 text-center">{d}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-border/40 shadow-sm p-3.5">
                  <p className="text-[0.7rem] font-semibold text-foreground mb-2.5">Recent Activity</p>
                  <div className="space-y-2">
                    {[
                      { dot: "bg-emerald-500", text: "Invoice #INV-2847 paid", time: "2m ago" },
                      { dot: "bg-blue-500", text: "New PO from Supplier Co.", time: "18m ago" },
                      { dot: "bg-[#5b5ef4]", text: "Payroll processed — March", time: "1h ago" },
                    ].map((row, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${row.dot} shrink-0`} />
                          <span className="text-[10px] text-foreground">{row.text}</span>
                        </div>
                        <span className="text-[9px] text-muted-foreground shrink-0 ml-2">{row.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 bg-white rounded-xl shadow-lg shadow-black/[0.08] border border-border/60 px-3 py-2.5 flex items-center gap-2 animate-float">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <div>
                <p className="text-[9px] text-muted-foreground">Monthly Growth</p>
                <p className="text-xs font-bold text-emerald-600">+24.8%</p>
              </div>
            </div>

            <div className="absolute -top-3 -left-3 bg-white rounded-xl shadow-lg shadow-black/[0.08] border border-border/60 px-3 py-2.5 flex items-center gap-2 animate-float-delayed">
              <div className="w-7 h-7 rounded-lg bg-[#eeeeff] flex items-center justify-center text-sm">⚡</div>
              <div>
                <p className="text-[9px] text-muted-foreground">Automation Active</p>
                <p className="text-xs font-bold text-[#5b5ef4]">14 workflows</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
