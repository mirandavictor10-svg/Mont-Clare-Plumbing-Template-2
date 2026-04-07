import { Phone, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { company } from "@/config/company.config";

const EmergencyCTA = () => {
  return (
    <section className="py-32 px-6 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.05)_20px,rgba(255,255,255,0.05)_40px)]" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full border border-secondary/20">
            <Zap className="w-4 h-4 text-secondary fill-secondary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">24/7 Emergency Service</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-background leading-none">
            Plumbing Emergency? <br /><span className="text-secondary italic">We're Already on the Way.</span>
          </h2>
          <p className="text-xl md:text-2xl text-background/50 font-medium max-w-2xl mx-auto leading-relaxed">
            Our trucks are stationed across {company.city}. Flat-rate pricing — same cost days, nights, weekends, and holidays. No overtime. Ever.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <a
            href={`tel:${company.phoneRaw}`}
            className="inline-flex items-center gap-6 bg-secondary text-background px-12 py-8 rounded-[2rem] text-2xl font-black uppercase tracking-tighter hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-secondary/40 group"
          >
            <Phone className="w-8 h-8 group-hover:rotate-12 transition-transform" />
            Call {company.phone}
          </a>
          <p className="text-sm font-bold text-background/40">
            Available 24/7 — No Overtime Charges — {company.stats.responseMin}-Minute Response
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyCTA;
