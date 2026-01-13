import Link from "next/link";

const footerLinks = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#teacher-training", label: "Teacher Training" },
    { href: "/services#leadership", label: "Leadership Development" },
    { href: "/services#advisory", label: "Advisory Services" },
    { href: "/services#recruitment", label: "Teacher Recruitment" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-blue-light rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 28 28" className="w-6 h-6" fill="white">
                  <path d="M14 2L6 10H10V18H18V10H22L14 2Z" />
                  <path d="M6 20V26H22V20H18V22H10V20H6Z" opacity="0.7" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-white leading-tight">British Education</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Consultants</div>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Advancing British Education Excellence Worldwide. We empower schools, teachers, and leaders to deliver world-class education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-sm mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold uppercase tracking-wider text-sm mb-6">Contact</h4>
            <ul className="space-y-3 text-slate-400">
              <li>info@britisheducationconsultants.com</li>
              <li>+254 XXX XXX XXX</li>
              <li>Serving Africa, Middle East & Asia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} British Education Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

