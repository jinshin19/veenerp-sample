"use client";

import { Zap, Globe, MessageCircle, Code2, Play } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Modules", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Documentation", "API Reference", "Tutorials", "Community", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "Cookies", "GDPR"],
};

const socials = [
  { icon: MessageCircle, href: "#", label: "Twitter / X" },
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: Code2, href: "#", label: "GitHub" },
  { icon: Play, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d12] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#5b5ef4] flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white fill-white" />
              </div>
              <span className="text-sm font-bold">
                veen<span className="text-[#7c7ff6]">ERP</span>
              </span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed max-w-[220px]">
              The all-in-one ERP platform built for modern businesses. Streamline operations, automate workflows, and grow without limits.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/10 flex items-center justify-center transition-colors duration-150 group"
                >
                  <Icon className="w-3.5 h-3.5 text-white/40 group-hover:text-white/80 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-3">
              <h4 className="text-[0.65rem] font-semibold text-white/35 uppercase tracking-widest">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-white/40 hover:text-white/75 transition-colors duration-150">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-white/25">
            © {new Date().getFullYear()} veenERP. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] text-white/25">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
