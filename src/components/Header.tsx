import { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowUpRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`sticky top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
          scrolled
            ? "bg-white/98 backdrop-blur-xl border-slate-200 shadow-md py-2"
            : "bg-white border-slate-100 py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          
          {/* Logo Group */}
          <a 
            href="#" 
            className="flex items-center gap-3 group relative" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div className="absolute -inset-4 bg-secondary/0 rounded-full blur-2xl transition-all duration-500 group-hover:bg-secondary/20" />
            <motion.img 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              src={logo} 
              alt="4S Plumbing" 
              className="h-[120px] w-auto relative z-10 transition-all" 
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                onClick={() => scrollTo(l.href)}
                className="text-xs font-black uppercase tracking-[0.25em] text-slate-500 hover:text-slate-900 transition-colors relative group py-2"
              >
                {l.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
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
              href="tel:7733533050"
              className="group relative hidden sm:flex items-center gap-2 bg-slate-900 border border-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-secondary hover:border-secondary transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-full bg-secondary/0 group-hover:bg-secondary/10 blur-md transition-all duration-300" />
              <Phone className="w-3.5 h-3.5 relative z-10 group-hover:animate-pulse" /> 
              <span className="relative z-10 flex items-center gap-2">
                (773) 353-3050 <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
            
            <button 
              onClick={() => setOpen(!open)} 
              className="lg:hidden relative p-2 text-slate-900 bg-slate-100 border border-slate-200 rounded-full active:scale-95 transition-all"
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
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // smooth cinematic spring
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
                    <Zap className="w-3 h-3" /> Emergency Dispatch
                  </p>
                  <a href="tel:7733533050" className="text-3xl font-black text-white tracking-tighter">(773) 353-3050</a>
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
