import { useState, useEffect } from "react";
import { Phone, CalendarCheck, Star, Shield, Clock, DollarSign, Zap, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const trustBadges = [
  { icon: Star, label: "Flat-Rate Pricing" },
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Clock, label: "24/7 Emergency" },
  { icon: DollarSign, label: "No Overtime Charges" },
];

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

      {/* Full-Screen Video Background — plays unobstructed */}
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

      {/* Bottom gradient only — video stays visible, content readable on scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hasScrolled ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute inset-x-0 bottom-0 h-2/3 z-10 pointer-events-none bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"
      />

      {/* Hero Content — slides up on scroll */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: hasScrolled ? 1 : 0, y: hasScrolled ? 0 : 40 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 relative z-20 w-full font-sans flex flex-col items-center xl:items-start text-center xl:text-left mt-28 lg:mt-16"
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-white mb-8 font-black drop-shadow-2xl">
            Chicago's Most <br className="hidden xl:block" />
            <span className="text-secondary italic">Trusted</span> Plumber.
          </h1>

          <p className="text-xl sm:text-2xl text-slate-200 mb-10 max-w-2xl leading-relaxed font-medium drop-shadow-lg mx-auto xl:mx-0">
            Burst pipe at 2 AM? We'll be there in 45 minutes — guaranteed. Upfront flat-rate pricing, no overtime charges, no surprise fees. Rated 4.9★ across 120+ Google reviews.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4 mb-16">
            <a
              href="tel:7733533050"
              className="group flex flex-1 w-full sm:flex-none sm:w-auto items-center justify-center gap-3 bg-secondary text-secondary-foreground px-8 py-5 rounded-2xl text-lg font-black hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-secondary/40 border border-secondary/50"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Call Now — (773) 353-3050
            </a>
            <button
              onClick={scrollToContact}
              className="flex flex-1 w-full sm:flex-none sm:w-auto items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-white/20 hover:border-white/40 transition-all shadow-xl"
            >
              <CalendarCheck className="w-5 h-5" /> Get a Free Estimate
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center xl:justify-start gap-3">
            {trustBadges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 bg-slate-900/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 shadow-lg"
              >
                <b.icon className="w-3.5 h-3.5 text-secondary" />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
