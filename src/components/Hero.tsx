import { useState, useEffect } from "react";
import { Phone, CalendarCheck, Star, Shield, Clock, DollarSign, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/config/company.config";

const badgeIcons = [DollarSign, Shield, Clock, Star];

const Hero = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 30) setHasScrolled(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-slate-950 -mt-[120px]">

      {/* Full-Screen Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/videos/hero-placeholder.jpg"
        >
          <source src="/videos/hero-transition.mp4" type="video/mp4" />
        </video>
        {/* Persistent overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/30" />
      </div>

      {/* Scroll Indicator — pulses until user scrolls */}
      <AnimatePresence>
        {!hasScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
          >
            <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6 text-white/70" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content — visible immediately with cinematic entrance */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 relative z-20 w-full font-sans flex flex-col items-center xl:items-start text-center xl:text-left mt-32 lg:mt-28"
      >
        <div className="max-w-4xl">
          {/* Live availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="inline-flex items-center gap-2.5 bg-emerald-500/15 backdrop-blur-md border border-emerald-500/25 px-4 py-2 rounded-full mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-[11px] font-bold text-emerald-300 tracking-wide">Technicians Available Now</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-white mb-8 font-black drop-shadow-2xl"
          >
            {company.hero.headingLine1} <br className="hidden xl:block" />
            <span className="text-secondary italic">{company.hero.headingItalic}</span> {company.hero.headingLine2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
            className="text-xl sm:text-2xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-lg mx-auto xl:mx-0"
          >
            {company.hero.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 mb-16"
          >
            <a
              href={`tel:${company.phoneRaw}`}
              className="group flex flex-1 w-full sm:flex-none sm:w-auto items-center justify-center gap-3 bg-secondary text-secondary-foreground px-8 py-5 rounded-2xl text-lg font-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-secondary/40 border border-secondary/50"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Call Now — {company.phone}
            </a>
            <button
              onClick={scrollToContact}
              className="flex flex-1 w-full sm:flex-none sm:w-auto items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-white/20 hover:border-white/40 transition-all shadow-xl"
            >
              <CalendarCheck className="w-5 h-5" /> Get a Free Estimate
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center xl:justify-start gap-3"
          >
            {company.hero.badges.map((b, i) => {
              const Icon = badgeIcons[i % badgeIcons.length];
              return (
                <div
                  key={b.label}
                  className="flex items-center gap-2 bg-slate-900/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 shadow-lg"
                >
                  <Icon className="w-3.5 h-3.5 text-secondary" />
                  {b.label}
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
