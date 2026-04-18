"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const copyright = t.footer.copyright.replace("{year}", String(year));

  const navLinks = [
    { label: t.footer.links.modules, href: "#modules" },
    { label: t.footer.links.features, href: "#features" },
    { label: t.footer.links.testimonials, href: "#testimonials" },
    { label: t.footer.links.faq, href: "#faq" },
    { label: t.footer.links.privacy, href: "#" },
  ];

  const scrollTo = (href: string) => {
    if (href === "#") return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main footer content */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-12 border-b border-slate-800">
          {/* Brand column */}
          <div className="space-y-5 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 group" aria-label="veenERP home">
              <div className="relative w-8 h-8 shrink-0">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="16" cy="16" r="16" fill="#1e3a5f"/>
                  <path d="M16 6L22 11L22 21L16 26L10 21L10 11L16 6Z" fill="#3B82F6" opacity="0.9"/>
                  <path d="M16 10L20 13.5V20.5L16 24L12 20.5V13.5L16 10Z" fill="#60a5fa"/>
                  <circle cx="16" cy="16" r="3" fill="white"/>
                </svg>
              </div>
              <span className="text-[1.0625rem] font-bold text-white tracking-tight">
                veen<span className="text-blue-400">ERP</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-[240px]">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {t.footer.navHeading}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-150 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {t.footer.contactHeading}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${t.footer.phone}`}
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors duration-150"
                >
                  <Phone className="w-4 h-4 shrink-0 text-blue-400" />
                  {t.footer.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t.footer.email}`}
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors duration-150"
                >
                  <Mail className="w-4 h-4 shrink-0 text-blue-400" />
                  {t.footer.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-slate-400">
                  <MapPin className="w-4 h-4 shrink-0 text-blue-400 mt-0.5" />
                  {t.footer.address}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">{copyright}</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-slate-500">{t.footer.systemsOperational}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
