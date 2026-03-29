import { useState, useEffect } from "react";
import { Phone, Menu, X, Zap } from "lucide-react";
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
      {/* Top Banner URgency */}
      <div className="bg-foreground text-background py-2 text-center text-[10px] font-black uppercase tracking-[0.3em] z-50 relative">
        <div className="flex items-center justify-center gap-2">
          <Zap className="w-3 h-3 text-secondary animate-pulse" />
          <span>Priority Industrial Dispatch — Average Response: 47 Min</span>
        </div>
      </div>

      <header 
        className={`sticky top-0 z-40 transition-all duration-300 border-b ${
          scrolled 
            ? "bg-background/95 backdrop-blur-xl border-foreground/10 py-2 shadow-xl" 
            : "bg-transparent border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          <a 
            href="#" 
            className="flex items-center gap-2 group transition-transform hover:scale-105" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative">
              <img src={logo} alt="4S Plumbing" className="h-20 w-auto relative z-10" />
              <div className="absolute -inset-2 bg-secondary/5 rounded-full blur-xl group-hover:bg-secondary/10 transition-colors" />
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/60 hover:text-secondary transition-all relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="tel:7733533050"
              className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-secondary hover:text-background transition-all shadow-lg active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" /> 
              <span className="hidden sm:inline">Dispatch: </span>
              (773) 353-3050
            </a>
            
            <button 
              onClick={() => setOpen(!open)} 
              className="lg:hidden p-2 text-foreground active:scale-90 transition-transform"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "circOut" }}
              className="lg:hidden bg-background border-t border-foreground/5 px-6 overflow-hidden"
            >
              <div className="py-8 space-y-6">
                {navLinks.map((l, i) => (
                  <motion.button
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    key={l.href}
                    onClick={() => scrollTo(l.href)}
                    className="block w-full text-left text-2xl font-black uppercase tracking-tighter text-foreground/80 hover:text-secondary transition-colors"
                  >
                    {l.label}
                  </motion.button>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6 border-t border-foreground/5"
                >
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-4">Emergency Support</p>
                  <a href="tel:7733533050" className="text-3xl font-black text-secondary tracking-tighter">(773) 353-3050</a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
