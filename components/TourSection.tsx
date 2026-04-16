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

export default function TourSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", need: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="tour" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#5b5ef4] via-[#6366f1] to-[#8b5cf6] rounded-3xl overflow-hidden shadow-2xl shadow-[#5b5ef4]/30">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-14 flex flex-col justify-center space-y-6">
              <Badge className="w-fit rounded-full px-4 py-1.5 text-xs font-semibold bg-white/20 text-white border-white/20 hover:bg-white/20">
                Product Tour
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                See veenERP
                <br />
                in action
              </h2>
              <p className="text-lg text-white/75 leading-relaxed">
                Book a personalized 30-minute demo with one of our ERP specialists. We&apos;ll walk you through the exact modules relevant to your business.
              </p>

              <div className="space-y-3">
                {[
                  "Personalized walkthrough of your chosen modules",
                  "Live Q&A with an ERP implementation expert",
                  "Custom onboarding plan for your team",
                  "No sales pressure — just real answers",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/80 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  {["A", "B", "C", "D"].map((l, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-white/20 border-2 border-[#5b5ef4] flex items-center justify-center text-xs font-bold text-white"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/70">
                  <strong className="text-white">500+</strong> businesses onboarded this year
                </p>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-10 lg:p-14 flex items-center">
              {submitted ? (
                <div className="w-full text-center space-y-4 py-8">
                  <div className="w-16 h-16 rounded-full bg-[#eeeeff] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-[#5b5ef4]" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Demo Booked!</h3>
                  <p className="text-muted-foreground text-sm max-w-xs mx-auto leading-relaxed">
                    We&apos;ll reach out within 24 hours to confirm your session. Check your email for details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full space-y-5">
                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-bold text-foreground">Book a Demo</h3>
                    <p className="text-sm text-muted-foreground">Fill in your details and we&apos;ll reach out within 24 hours.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-foreground uppercase tracking-wide">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="h-11 rounded-xl border-border/60 focus:border-[#5b5ef4] focus:ring-[#5b5ef4]/20 text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-foreground uppercase tracking-wide">
                        Work Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="h-11 rounded-xl border-border/60 focus:border-[#5b5ef4] focus:ring-[#5b5ef4]/20 text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs font-semibold text-foreground uppercase tracking-wide">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        placeholder="Acme Corp"
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="h-11 rounded-xl border-border/60 focus:border-[#5b5ef4] focus:ring-[#5b5ef4]/20 text-sm"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground uppercase tracking-wide">
                        ERP Needs
                      </label>
                      <Select onValueChange={(val) => setForm({ ...form, need: val })} required>
                        <SelectTrigger id="erp-need" className="h-11 rounded-xl border-border/60 text-sm">
                          <SelectValue placeholder="Select your primary need" />
                        </SelectTrigger>
                        <SelectContent>
                          {erpNeeds.map((n) => (
                            <SelectItem key={n} value={n} className="text-sm">
                              {n}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 bg-[#5b5ef4] hover:bg-[#3f42d9] text-white rounded-xl font-semibold text-sm shadow-lg shadow-[#5b5ef4]/25 hover:shadow-xl transition-all group"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Book My Free Demo
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
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
