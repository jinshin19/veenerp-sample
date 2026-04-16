"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const erpNeeds = [
  "Accounting & Finance",
  "Point of Sale (POS)",
  "CRM & Sales",
  "Manufacturing",
  "HR & Payroll",
  "Inventory & Warehouse",
  "Projects & Tasks",
  "Full ERP Suite",
  "Other",
];

const perks = [
  "Personalized walkthrough of your modules",
  "Live Q&A with an ERP implementation expert",
  "Custom onboarding plan for your team",
  "No sales pressure — just real answers",
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#4e51e8] via-[#5b5ef4] to-[#7c5ef4] rounded-2xl overflow-hidden shadow-xl shadow-[#5b5ef4]/20">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
              <Badge className="w-fit rounded-full px-3 py-1 text-[0.7rem] font-semibold bg-white/15 text-white border-white/15 shadow-none hover:bg-white/15">
                Product Tour
              </Badge>
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-[1.2]">
                  See veenERP
                  <br />in action
                </h2>
                <p className="text-sm text-white/70 leading-relaxed max-w-xs">
                  Book a personalized 30-minute demo with one of our ERP specialists tailored to your exact business needs.
                </p>
              </div>

              <ul className="space-y-2.5">
                {perks.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                    <span className="text-xs text-white/75 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 pt-1">
                <div className="flex -space-x-2">
                  {["A", "B", "C", "D"].map((l, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full bg-white/20 border-2 border-[#5b5ef4] flex items-center justify-center text-[9px] font-bold text-white"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/60">
                  <strong className="text-white/90 font-semibold">500+</strong> businesses onboarded this year
                </p>
              </div>
            </div>

            <div className="bg-white/96 m-2 rounded-xl p-8 lg:p-10 flex items-center">
              {submitted ? (
                <div className="w-full text-center space-y-3 py-6">
                  <div className="w-12 h-12 rounded-full bg-[#eeeeff] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6 text-[#5b5ef4]" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Demo Booked!</h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">
                    We&apos;ll reach out within 24 hours to confirm your session. Check your email for details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground">Book a Demo</h3>
                    <p className="text-xs text-muted-foreground">Fill in your details and we&apos;ll reach out within 24 hours.</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { id: "name", label: "Full Name", placeholder: "John Smith", type: "text", key: "name" as const },
                      { id: "email", label: "Work Email", placeholder: "john@company.com", type: "email", key: "email" as const },
                      { id: "company", label: "Company Name", placeholder: "Acme Corp", type: "text", key: "company" as const },
                    ].map((field) => (
                      <div key={field.id} className="space-y-1.5">
                        <label htmlFor={field.id} className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                          {field.label}
                        </label>
                        <Input
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          required
                          value={form[field.key]}
                          onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                          className="h-9 rounded-lg border-border/60 text-sm focus-visible:ring-[#5b5ef4]/30 focus-visible:border-[#5b5ef4]"
                        />
                      </div>
                    ))}

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                        ERP Needs
                      </label>
                      <Select onValueChange={(val) => setForm({ ...form, need: val })}>
                        <SelectTrigger id="erp-need" className="h-9 rounded-lg border-border/60 text-sm">
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

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-9 bg-[#5b5ef4] hover:bg-[#4547d4] text-white rounded-lg font-semibold text-sm shadow-md shadow-[#5b5ef4]/20 hover:shadow-lg transition-all duration-150 group"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Book My Free Demo
                        <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-[10px] text-muted-foreground">
                    No commitment required. Your data is safe with us.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
