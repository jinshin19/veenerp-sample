"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Language } from "@/lib/i18n/translations";

export default function Navbar() {
  const { lang, setLang, t, languages } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const currentLang = languages.find((l) => l.code === lang) ?? languages[0];

  const navLinks = [
    { label: t.nav.modules, href: "#modules" },
    { label: t.nav.features, href: "#features" },
    { label: t.nav.testimonials, href: "#testimonials" },
    { label: t.nav.faq, href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 group" aria-label="veenERP home">
            <div className="relative w-8 h-8 shrink-0">
              {/* Geometric logo mark similar to ongila */}
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="16" cy="16" r="16" fill="#EFF6FF"/>
                <path d="M16 6L22 11L22 21L16 26L10 21L10 11L16 6Z" fill="#3B82F6" opacity="0.9"/>
                <path d="M16 10L20 13.5V20.5L16 24L12 20.5V13.5L16 10Z" fill="#1D4ED8"/>
                <circle cx="16" cy="16" r="3" fill="white"/>
              </svg>
            </div>
            <span className="text-[1.0625rem] font-bold tracking-tight text-slate-900">
              veen<span className="text-blue-500">ERP</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-[0.9375rem] font-medium text-slate-600 hover:text-slate-900 transition-colors duration-150 rounded-lg hover:bg-slate-50"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side: lang + login */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language switcher */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[0.875rem] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-150"
                aria-label="Select language"
                aria-expanded={langOpen}
              >
                <span className="inline-flex items-center justify-center w-6 h-4 bg-blue-100 text-blue-700 text-[10px] font-bold rounded tracking-wide shrink-0">
                  {currentLang.countryCode}
                </span>
                <span>{currentLang.label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                    langOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {langOpen && (
                <div className="absolute top-full right-0 mt-2 py-1.5 w-48 bg-white rounded-xl shadow-lg border border-slate-200 z-50 overflow-hidden">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code as Language);
                        setLangOpen(false);
                      }}
                      className={`lang-item w-full text-left ${lang === l.code ? "active" : ""}`}
                    >
                      <span className={`inline-flex items-center justify-center w-6 h-4 text-[10px] font-bold rounded tracking-wide shrink-0 ${
                        lang === l.code ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-600"
                      }`}>
                        {l.countryCode}
                      </span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Log in button */}
            <button
              onClick={() => scrollTo("#cta")}
              className="px-5 py-2 text-[0.875rem] font-semibold text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 rounded-xl transition-all duration-150"
            >
              {t.nav.login}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-slate-100 px-5 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="w-full text-left px-4 py-3 text-[0.9375rem] font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors"
            >
              {link.label}
            </button>
          ))}
          {/* Language options in mobile */}
          <div className="pt-3 border-t border-slate-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-4 mb-2">Language</p>
            <div className="flex flex-wrap gap-2 px-4">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code as Language)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                    lang === l.code
                      ? "bg-blue-50 border-blue-200 text-blue-700"
                      : "border-slate-200 text-slate-600 hover:border-slate-300"
                  }`}
                >
                  <span className={`inline-flex items-center justify-center w-6 h-4 text-[10px] font-bold rounded tracking-wide shrink-0 ${
                    lang === l.code ? "bg-blue-500 text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    {l.countryCode}
                  </span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="pt-3">
            <button
              onClick={() => scrollTo("#cta")}
              className="w-full py-3 text-[0.9375rem] font-semibold text-slate-700 border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors"
            >
              {t.nav.login}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
