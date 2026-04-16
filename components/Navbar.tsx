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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled ? "nav-border shadow-none" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 shrink-0 group">
            <div className="w-7 h-7 rounded bg-emerald-600 flex items-center justify-center shrink-0 transition-opacity duration-150 group-hover:opacity-80">
              <Zap className="w-3.5 h-3.5 text-white fill-white" />
            </div>
            <span className="text-[0.9375rem] font-bold tracking-tight text-slate-900">
              veen<span className="text-emerald-600">ERP</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors duration-150"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#tour")}
              className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors duration-150"
            >
              Sign In
            </button>
            <button
              onClick={() => scrollTo("#tour")}
              className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded transition-colors duration-150"
            >
              Book a Demo
            </button>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="md:hidden inline-flex items-center justify-center w-9 h-9 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-60 p-0">
              <div className="flex flex-col h-full p-5 gap-5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded bg-emerald-600 flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5 text-white fill-white" />
                  </div>
                  <span className="text-sm font-bold text-slate-900">veen<span className="text-emerald-600">ERP</span></span>
                </div>
                <nav className="flex flex-col gap-0.5">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className="text-left px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
                <button
                  onClick={() => scrollTo("#tour")}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded transition-colors"
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
