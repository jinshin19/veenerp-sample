"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Tour", href: "#tour" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav border-b border-slate-200/60 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shadow-sm shadow-emerald-200">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="text-[1rem] font-bold tracking-tight text-slate-900">
              veen<span className="text-emerald-600">ERP</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-150 rounded-lg"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollTo("#tour")}
              className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors duration-150"
            >
              Sign In
            </button>
            <button
              onClick={() => scrollTo("#tour")}
              className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg shadow-sm shadow-emerald-200 transition-all duration-150 hover:shadow-md"
            >
              Book a Demo
            </button>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-0 border-slate-200">
              <div className="flex flex-col h-full p-5 gap-6">
                <a href="#" className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white fill-white" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">
                    veen<span className="text-emerald-600">ERP</span>
                  </span>
                </a>
                <nav className="flex flex-col gap-0.5">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className="text-left px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
                <button
                  onClick={() => scrollTo("#tour")}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Book a Demo
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
