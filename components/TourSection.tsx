"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle, Loader2, Shield, Clock, Users } from "lucide-react";

const erpNeeds = [
  "Accounting & Finance", "Point of Sale (POS)", "CRM & Sales",
  "Manufacturing", "HR & Payroll", "Inventory & Warehouse",
  "Projects & Tasks", "Full ERP Suite", "Other",
];

export default function TourSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", need: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <section id="tour" className="section-padding bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="border border-slate-200 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="bg-[#0c1923] p-8 lg:p-12 flex flex-col justify-between gap-8">
              <div className="space-y-6">
                <div>
                  <p className="section-label text-emerald-500 mb-3">Product Tour</p>
                  <h2 className="text-2xl sm:text-[1.75rem] font-bold text-white leading-[1.2] tracking-tight">
                    See veenERP in action.
                    <br />Book a free 30-min demo.
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed mt-3 max-w-xs">
                    One of our ERP specialists will walk you through the exact modules relevant to your business. No pressure, no jargon — just clear answers.
                  </p>
                </div>

                <ul className="space-y-3">
                  {[
                    "Personalized walkthrough of your modules",
                    "Live Q&A with an implementation expert",
                    "Custom onboarding plan for your team",
                    "No sales pressure — just real answers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-[7px]" />
                      <span className="text-sm text-slate-400 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 border-t border-slate-700 pt-6">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Shield, label: "SOC 2 Aligned" },
                    { icon: Clock, label: "24hr Response" },
                    { icon: Users, label: "Dedicated CSM" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="text-center border border-slate-700 p-3">
                      <Icon className="w-4 h-4 text-emerald-500 mx-auto mb-1.5" />
                      <p className="text-[10px] text-slate-500 font-medium">{label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-600">
                  <strong className="text-slate-400 font-semibold">500+</strong> businesses onboarded this year
                </p>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 flex items-center">
              {submitted ? (
                <div className="w-full text-center space-y-4 py-8">
                  <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Demo Confirmed</h3>
                    <p className="text-sm text-slate-500 mt-2 max-w-xs mx-auto leading-relaxed">
                      We&apos;ll reach out within 24 hours to confirm your session and prepare accordingly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full space-y-5">
                  <div className="border-b border-slate-200 pb-4 mb-5">
                    <h3 className="text-lg font-bold text-slate-900">Book a Free Demo</h3>
                    <p className="text-sm text-slate-500 mt-1">We&apos;ll reach out within 24 hours to confirm your session.</p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { id: "name", label: "Full Name", placeholder: "John Smith", type: "text", key: "name" as const },
                      { id: "email", label: "Work Email", placeholder: "john@company.com", type: "email", key: "email" as const },
                      { id: "company", label: "Company Name", placeholder: "Acme Corporation", type: "text", key: "company" as const },
                    ].map((field) => (
                      <div key={field.id} className="space-y-1.5">
                        <label htmlFor={field.id} className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                          {field.label}
                        </label>
                        <Input
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          required
                          value={form[field.key]}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          className="h-10 rounded-sm border-slate-300 text-sm text-slate-800 placeholder:text-slate-400 focus-visible:ring-emerald-500/25 focus-visible:border-emerald-500"
                        />
                      </div>
                    ))}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Primary ERP Need</label>
                      <Select onValueChange={(val) => setForm({ ...form, need: val })}>
                        <SelectTrigger id="erp-need" className="h-10 rounded-sm border-slate-300 text-sm">
                          <SelectValue placeholder="Select your primary need" />
                        </SelectTrigger>
                        <SelectContent>
                          {erpNeeds.map((n) => (
                            <SelectItem key={n} value={n} className="text-sm">{n}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white rounded-sm font-semibold text-sm transition-colors duration-150 flex items-center justify-center gap-2 group"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>Book My Free Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></>
                    )}
                  </button>
                  <p className="text-xs text-slate-400 text-center">No commitment required. Your data is secure with us.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
