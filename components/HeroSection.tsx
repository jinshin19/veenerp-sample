"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, TrendingUp, Clock, BarChart3 } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(91,94,244,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_60%,rgba(167,139,250,0.08),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5b5ef4]/30 to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-[8%] w-64 h-64 rounded-full bg-[#5b5ef4]/5 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-24 left-[5%] w-48 h-48 rounded-full bg-purple-300/10 blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-[#5b5ef4]/4 blur-2xl animate-float" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eeeeff] border border-[#5b5ef4]/20 text-[#5b5ef4] text-xs font-semibold tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5b5ef4] animate-pulse" />
              All-in-One ERP Platform
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold text-foreground leading-[1.08] tracking-tight">
                Run your entire
                <br />
                business on{" "}
                <span className="text-gradient">one platform</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                veenERP unifies accounting, CRM, manufacturing, HR, and more into a single powerful platform. Automate workflows, gain real-time insights, and scale without limits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => scrollTo("#tour")}
                size="lg"
                className="bg-[#5b5ef4] hover:bg-[#3f42d9] text-white rounded-xl h-12 px-7 text-base font-semibold shadow-lg shadow-[#5b5ef4]/25 transition-all hover:shadow-xl hover:shadow-[#5b5ef4]/30 hover:-translate-y-0.5 group"
              >
                Book a Free Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={() => scrollTo("#modules")}
                variant="ghost"
                size="lg"
                className="rounded-xl h-12 px-7 text-base font-semibold text-foreground hover:bg-secondary group gap-2"
              >
                <span className="w-8 h-8 rounded-full bg-[#5b5ef4]/10 flex items-center justify-center group-hover:bg-[#5b5ef4]/20 transition-colors">
                  <Play className="w-3 h-3 text-[#5b5ef4] fill-[#5b5ef4] ml-0.5" />
                </span>
                Watch Tour
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-2">
              {[
                { icon: TrendingUp, value: "3×", label: "Faster operations" },
                { icon: Clock, value: "80%", label: "Less manual work" },
                { icon: BarChart3, value: "500+", label: "Businesses worldwide" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#eeeeff] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#5b5ef4]" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-foreground leading-none">{value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#5b5ef4]/15 via-purple-400/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-2xl shadow-2xl border border-border/60 overflow-hidden">
                <div className="bg-[#0e0e14] px-5 py-3.5 flex items-center gap-2.5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-[#1a1a2e] rounded-md h-6 flex items-center px-3">
                    <span className="text-[10px] text-gray-500">app.veenerp.com/dashboard</span>
                  </div>
                </div>

                <div className="bg-[#f8f8fc] p-5 space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Total Revenue", value: "$284,500", color: "text-green-600", bg: "bg-green-50", change: "+12.5%" },
                      { label: "Active Orders", value: "1,284", color: "text-[#5b5ef4]", bg: "bg-[#eeeeff]", change: "+8.2%" },
                      { label: "Open Invoices", value: "47", color: "text-orange-600", bg: "bg-orange-50", change: "-3.1%" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white rounded-xl p-3.5 border border-border/50 shadow-sm">
                        <p className="text-[10px] text-muted-foreground font-medium">{stat.label}</p>
                        <p className={`text-base font-bold mt-1 ${stat.color}`}>{stat.value}</p>
                        <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-md ${stat.bg} ${stat.color}`}>{stat.change}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white rounded-xl border border-border/50 shadow-sm p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-foreground">Revenue Overview</span>
                      <Badge variant="secondary" className="text-[10px] rounded-lg">Last 7 days</Badge>
                    </div>
                    <div className="flex items-end gap-1.5 h-16">
                      {[40, 65, 55, 80, 70, 90, 85].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end">
                          <div
                            className="w-full rounded-sm transition-all"
                            style={{
                              height: `${h}%`,
                              background: i === 5 ? "#5b5ef4" : `rgba(91,94,244,${0.15 + i * 0.05})`,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                        <span key={d} className="text-[9px] text-muted-foreground flex-1 text-center">{d}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-border/50 shadow-sm p-4">
                    <p className="text-xs font-semibold text-foreground mb-3">Recent Activity</p>
                    <div className="space-y-2.5">
                      {[
                        { dot: "bg-green-500", text: "Invoice #INV-2847 paid", time: "2m ago" },
                        { dot: "bg-blue-500", text: "New PO from Supplier Co.", time: "18m ago" },
                        { dot: "bg-[#5b5ef4]", text: "Payroll processed — March", time: "1h ago" },
                      ].map((row, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className={`w-1.5 h-1.5 rounded-full ${row.dot}`} />
                            <span className="text-[11px] text-foreground">{row.text}</span>
                          </div>
                          <span className="text-[10px] text-muted-foreground">{row.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg border border-border/50 p-3 flex items-center gap-2.5 animate-float">
                <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground">Monthly Growth</p>
                  <p className="text-sm font-bold text-green-600">+24.8%</p>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg border border-border/50 p-3 flex items-center gap-2.5 animate-float-delayed">
                <div className="w-8 h-8 rounded-lg bg-[#eeeeff] flex items-center justify-center text-lg">⚡</div>
                <div>
                  <p className="text-[10px] text-muted-foreground">Automation Active</p>
                  <p className="text-sm font-bold text-[#5b5ef4]">14 workflows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
