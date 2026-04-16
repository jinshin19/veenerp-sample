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
    <footer className="bg-[#0e0e14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#5b5ef4] flex items-center justify-center">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-lg font-bold">
                veen<span className="text-[#7c7ff6]">ERP</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              The all-in-one ERP platform built for modern businesses. Streamline operations, automate workflows, and grow without limits.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#5b5ef4]/30 flex items-center justify-center transition-colors group"
                >
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} veenERP. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-gray-600">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
