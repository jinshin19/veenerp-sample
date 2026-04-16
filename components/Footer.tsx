"use client";

import { Zap, MessageSquare, Globe, Code2, Play } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Modules", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Documentation", "API Reference", "Tutorials", "Community", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "Cookies", "GDPR"],
};

const socials = [
  { icon: MessageSquare, href: "#", label: "Twitter / X" },
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: Code2, href: "#", label: "GitHub" },
  { icon: Play, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="py-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-sm shadow-indigo-900">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-[1rem] font-bold text-white">
                veen<span className="text-indigo-400">ERP</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-[220px]">
              The all-in-one ERP platform built for modern businesses. Streamline operations, automate workflows, and grow without limits.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors duration-150"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-500 hover:text-slate-300 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-500 hover:text-slate-200 transition-colors duration-150">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} veenERP. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-slate-600">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
