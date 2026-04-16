"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <div className="w-7 h-7 rounded-lg bg-[#5b5ef4] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <Zap className="w-3.5 h-3.5 text-white fill-white" />
            </div>
            <span className="text-[0.95rem] font-bold tracking-tight">
              veen<span className="text-[#5b5ef4]">ERP</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-3.5 py-1.5 text-[0.8125rem] font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 rounded-md hover:bg-black/[0.04]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#tour")}
              className="text-[0.8125rem] font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              Sign In
            </button>
            <Button
              onClick={() => scrollTo("#tour")}
              size="sm"
              className="bg-[#5b5ef4] hover:bg-[#4547d4] text-white rounded-lg px-4 h-8 text-[0.8125rem] font-semibold shadow-none transition-all duration-150 hover:shadow-md hover:shadow-[#5b5ef4]/20"
            >
              Book a Demo
            </Button>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:bg-black/[0.04] hover:text-foreground transition-colors"
            >
              <Menu className="h-4.5 w-4.5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-0">
              <div className="flex flex-col h-full p-5 gap-6">
                <a href="#" className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#5b5ef4] flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5 text-white fill-white" />
                  </div>
                  <span className="text-sm font-bold">
                    veen<span className="text-[#5b5ef4]">ERP</span>
                  </span>
                </a>
                <nav className="flex flex-col gap-0.5">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollTo(link.href)}
                      className="text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-black/[0.04] rounded-md transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
                <Button
                  onClick={() => scrollTo("#tour")}
                  className="w-full bg-[#5b5ef4] hover:bg-[#4547d4] text-white rounded-lg text-sm font-semibold"
                >
                  Book a Demo
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
