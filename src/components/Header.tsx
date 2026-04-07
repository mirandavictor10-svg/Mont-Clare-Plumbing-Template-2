import { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowUpRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { company } from "@/config/company.config";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // hero is dark by default

  useEffect(() => {
    const detect = () => {
      const sections = document.querySelectorAll("[data-header-theme]");
      let theme = "dark";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 60 && rect.bottom > 60) {
          theme = section.getAttribute("data-header-theme") ?? "dark";
        }
      });
      setIsDark(theme === "dark");
    };
    detect();
    window.addEventListener("scroll", detect, { passive: true });
    return () => window.removeEventListener("scroll", detect);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 inset-x-0 z-50 border-b border-transparent py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

          {/* Logo */}
          <a
            href="#"
            className={`flex items-center gap-3 group relative px-3 py-1 rounded-2xl backdrop-blur-md transition-all duration-300 ${
              isDark ? "bg-white/10 border border-white/20" : "bg-black/8 border border-black/10"
            }`}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              src={logo}
              alt={company.shortName}
              className="h-10 w-auto relative z-10 rounded-lg bg-white px-3 py-2 shadow-sm ring-1 ring-black/10 transition-all duration-500"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-3">
            {navLinks.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                onClick={() => scrollTo(l.href)}
                className={`text-xs font-black uppercase tracking-[0.25em] transition-all duration-300 px-4 py-2 rounded-full backdrop-blur-md ${
                  isDark
                    ? "text-white bg-white/10 hover:bg-white/25 border border-white/20"
                    : "text-slate-700 bg-black/8 hover:bg-black/15 border border-black/10"
                }`}
              >
                {l.label}
              </motion.button>
            ))}
          </nav>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <a
              href={`tel:${company.phoneRaw}`}
              className={`group relative hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 backdrop-blur-md ${
                isDark
                  ? "bg-white/10 border border-white/30 text-white hover:bg-white/25"
                  : "bg-slate-900 border border-slate-900 text-white hover:bg-secondary hover:border-secondary"
              }`}
            >
              <Phone className="w-3.5 h-3.5 relative z-10" />
              <span className="relative z-10 flex items-center gap-2">
                {company.phone} <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </span>
            </a>

            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden relative p-2 rounded-full active:scale-95 transition-all backdrop-blur-md ${
                isDark
                  ? "text-white bg-white/10 border border-white/30"
                  : "text-slate-900 bg-black/8 border border-black/10"
              }`}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-3xl border-b border-white/10 overflow-hidden shadow-2xl"
            >
              <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
                {navLinks.map((l, i) => (
                  <motion.button
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    key={l.href}
                    onClick={() => scrollTo(l.href)}
                    className="flex justify-between items-center w-full text-left text-2xl font-black uppercase tracking-tighter text-white/80 hover:text-secondary transition-colors border-b border-white/5 pb-4"
                  >
                    {l.label}
                    <ArrowUpRight className="w-5 h-5 opacity-30" />
                  </motion.button>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 p-6 bg-secondary/10 border border-secondary/20 rounded-2xl flex flex-col items-center justify-center text-center"
                >
                  <p className="text-[10px] uppercase font-bold text-secondary tracking-widest mb-2 flex items-center gap-2">
                    <Zap className="w-3 h-3" /> 24/7 Emergency Line
                  </p>
                  <a href={`tel:${company.phoneRaw}`} className="text-3xl font-black text-white tracking-tighter">{company.phone}</a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
