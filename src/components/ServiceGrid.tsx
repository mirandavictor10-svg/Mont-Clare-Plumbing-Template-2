import { Wrench, Droplets, Flame, Camera, GaugeCircle, Snowflake, Wind, ArrowRight, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  { icon: Wrench, title: "Emergency Plumbing", badge: "24/7 — No Overtime", desc: "Flooding doesn't wait. Neither do we. On-call 24/7/365 with a guaranteed 45-minute response — nights, weekends, and holidays. No overtime charges." },
  { icon: Droplets, title: "Drain Cleaning", badge: "Same-Day Service", desc: "Slow drain? Standing water? We clear stubborn blockages in sinks, showers, tubs, and main sewer lines. Most clogs cleared in one visit." },
  { icon: Flame, title: "Water Heaters", badge: "All Major Brands", desc: "Cold shower this morning? We repair and install all major brands — traditional tanks and tankless systems. Same-day diagnosis, transparent pricing." },
  { icon: Camera, title: "Sewer Line Repair", badge: "Camera Inspection", desc: "Sewer backup or gas smell? We deploy camera inspections to find the problem fast, then repair or replace the line — often in a single visit." },
  { icon: GaugeCircle, title: "Gas Line Services", badge: "Licensed & Certified", desc: "Gas leak concerns? Our licensed technicians handle gas line repairs, installations, and leak detection safely and up to code." },
  { icon: Snowflake, title: "Winterization", badge: "Prevent Costly Damage", desc: "Frozen pipes can burst and flood your home. We winterize your plumbing system and thaw frozen lines before disaster strikes." },
  { icon: Wind, title: "HVAC & Climate", badge: "Year-Round Comfort", desc: "From furnace repairs to AC installations, we keep your home comfortable in every season with reliable, certified service." },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, type: "spring", bounce: 0.4 } },
};

const ServiceGrid = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-slate-100 relative overflow-hidden font-sans">
      
      {/* Premium ambient light bleeds */}
      <div className="absolute top-1/4 -left-64 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full shadow-sm border border-secondary/20">
            <Zap className="w-3.5 h-3.5 text-secondary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Industrial Grade Solutions</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 mb-4 drop-shadow-sm">What We Fix</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            From midnight emergencies to weekend remodels — if water runs through it, we handle it.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((s) => (
            <motion.div
              variants={itemVariants}
              key={s.title}
              onClick={scrollToContact}
              className="group relative bg-white/70 backdrop-blur-2xl border border-white p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)] hover:-translate-y-2 hover:border-secondary/40 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between"
            >
              {/* Luminous dynamic background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex items-center justify-between mb-10">
                <div className="p-4 rounded-2xl bg-slate-100 text-slate-500 group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                  <s.icon className="w-8 h-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-secondary bg-white px-3 py-1.5 rounded-lg border border-secondary/20 shadow-sm">
                  {s.badge}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-black text-slate-950 mb-4 leading-tight uppercase tracking-tight">{s.title}</h3>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed font-medium">{s.desc}</p>
                
                <div className="flex items-center gap-3 text-secondary text-xs font-black uppercase tracking-widest group-hover:gap-5 transition-all duration-500">
                  Commence Dispatch <ArrowRight className="w-4 h-4 group-hover:animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceGrid;

