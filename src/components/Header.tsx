import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-[40px] z-40 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logo} alt="4S Plumbing" className="h-10 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:7733533050"
            className="md:hidden flex items-center gap-1.5 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition"
          >
            <Phone className="w-4 h-4" /> Call
          </a>
          <button
            onClick={() => scrollTo("#contact")}
            className="hidden md:flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-bold hover:brightness-110 transition shadow-lg shadow-secondary/25"
          >
            Book Now
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4 animate-fade-in">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left py-3 text-base font-semibold text-foreground/80 hover:text-foreground border-b border-border/50"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
