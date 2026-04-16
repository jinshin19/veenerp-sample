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
    <section id="tour" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 p-8 lg:p-12 flex flex-col justify-between gap-8">
              <div className="space-y-5">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-indigo-100 text-xs font-semibold border border-white/15">
                  Product Tour
                </div>
                <div>
                  <h2 className="text-2xl sm:text-[1.75rem] font-bold text-white leading-[1.2] tracking-tight">
                    See veenERP in action.
                    <br />
                    Book a free 30-min demo.
                  </h2>
                  <p className="text-sm text-indigo-200 leading-relaxed mt-3 max-w-xs">
                    One of our ERP specialists will walk you through the exact modules relevant to your business. No pressure, no jargon.
                  </p>
                </div>

                <ul className="space-y-3">
                  {[
                    "Personalized walkthrough of your modules",
                    "Live Q&A with an implementation expert",
                    "Custom onboarding plan for your team",
                    "No sales pressure — just real answers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
                      <span className="text-sm text-indigo-100 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["A", "B", "C", "D"].map((l, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                        {l}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-indigo-200">
                    <strong className="text-white font-semibold">500+</strong> businesses onboarded this year
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: Shield, label: "SOC 2 aligned" },
                    { icon: Clock, label: "24hr response" },
                    { icon: Users, label: "Dedicated CSM" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="bg-white/8 rounded-lg p-2.5 text-center border border-white/10">
                      <Icon className="w-3.5 h-3.5 text-indigo-200 mx-auto mb-1" />
                      <p className="text-[10px] text-indigo-200 font-medium">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 lg:p-10 flex items-center">
              {submitted ? (
                <div className="w-full text-center space-y-4 py-8">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Demo Booked!</h3>
                    <p className="text-sm text-slate-500 mt-2 max-w-xs mx-auto leading-relaxed">
                      We&apos;ll reach out within 24 hours to confirm your session and prepare accordingly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Book a Free Demo</h3>
                    <p className="text-sm text-slate-500 mt-1">Fill in your details and we&apos;ll reach out within 24 hours.</p>
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
                          className="h-10 rounded-lg border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus-visible:ring-indigo-500/30 focus-visible:border-indigo-400"
                        />
                      </div>
                    ))}

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Primary ERP Need</label>
                      <Select onValueChange={(val) => setForm({ ...form, need: val })}>
                        <SelectTrigger id="erp-need" className="h-10 rounded-lg border-slate-200 text-sm">
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
                    className="w-full h-10 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 text-white rounded-lg font-semibold text-sm shadow-md shadow-indigo-100 hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-2 group"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Book My Free Demo
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center">No commitment required. Your data is always safe with us.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
