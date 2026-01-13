"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services#teacher-training", label: "Teacher Training" },
      { href: "/services#leadership", label: "Leadership Development" },
      { href: "/services#advisory", label: "Advisory Services" },
      { href: "/services#recruitment", label: "Teacher Recruitment" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 transition-all duration-300",
        isScrolled ? "top-2" : "top-4"
      )}
    >
      <div
        className={cn(
          "bg-white/90 backdrop-blur-xl rounded-full shadow-lg border border-white/20 transition-all duration-300",
          isScrolled && "shadow-xl"
        )}
      >
        <div className="flex items-center justify-between px-4 py-3 lg:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-blue-light rounded-xl flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <svg viewBox="0 0 28 28" className="w-6 h-6 relative z-10" fill="white">
                <path d="M14 2L6 10H10V18H18V10H22L14 2Z" />
                <path d="M6 20V26H22V20H18V22H10V20H6Z" opacity="0.7" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-brand-blue leading-tight">British Education</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Consultants</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-brand-blue text-white"
                      : "text-slate-600 hover:text-brand-blue hover:bg-slate-100"
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />}
                </Link>
                {item.children && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-2xl shadow-xl border p-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 rounded-xl text-sm text-slate-600 hover:text-brand-blue hover:bg-slate-100 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white rounded-2xl shadow-xl border p-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-center font-medium transition-colors",
                    pathname === item.href
                      ? "bg-brand-blue text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-1 ml-4 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 rounded-xl text-sm text-slate-500 hover:bg-slate-100 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 mt-2 border-t">
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Partner With Us
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

