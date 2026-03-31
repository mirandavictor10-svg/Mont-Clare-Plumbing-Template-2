import { Wrench, Droplets, Flame, Camera, GaugeCircle, Snowflake, Wind, ShowerHead, ArrowRight, Zap, Waves } from "lucide-react";
import { motion, Variants } from "framer-motion";

const services = [
  { icon: Wrench, title: "Emergency Plumbing", badge: "24/7 — No Overtime", desc: "On-call 24/7/365 with a guaranteed 45-minute response — nights, weekends, and holidays. No overtime charges.", image: "/images/services/emergency-services.png" },
  { icon: Droplets, title: "Drain Cleaning", badge: "Same-Day Service", desc: "We clear stubborn blockages in sinks, showers, tubs, and main sewer lines using power rodding and hydro-jetting.", image: "/images/services/drain-cleaning.png" },
  { icon: Flame, title: "Water Heaters", badge: "Bradford White", desc: "We repair and install traditional tanks, power vent, and tankless systems. Same-day diagnosis, transparent pricing.", image: "/images/services/water-heater.png" },
  { icon: Camera, title: "Sewer Line Repair", badge: "Video Inspection", desc: "We deploy camera inspections to find the problem fast, then repair or replace the line — often in a single visit.", image: "/images/services/sewer-video-inspection.png" },
  { icon: GaugeCircle, title: "Gas Line Services", badge: "Licensed & Certified", desc: "Our licensed technicians handle gas line repairs, installations, and leak detection safely and up to code.", image: "/images/services/gas-line-repair.png" },
  { icon: Waves, title: "Flood Control", badge: "Basin Installation", desc: "Protect your basement from flooding with professional flood control systems, catch basins, and sump pump installations.", image: "/images/services/flood-control.png" },
  { icon: Snowflake, title: "Winterization", badge: "Prevent Costly Damage", desc: "We winterize your plumbing system and safely thaw frozen lines before they burst and flood your home.", image: "/images/services/pump-repair.png" },
  { icon: Wind, title: "HVAC & Climate", badge: "Year-Round Comfort", desc: "From furnace repairs to AC installations, we keep your home comfortable in every season with reliable, certified service.", image: "/images/services/hvac.png" },
  { icon: ShowerHead, title: "Fixtures & Remodels", badge: "Residential & Commercial", desc: "Toilets, faucets, garbage disposals, sinks, showers — we install and repair all fixtures for homes and businesses.", image: "/images/services/shower-repair.png" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 mb-4 drop-shadow-sm">What We Fix</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            From midnight emergencies to weekend remodels — residential and commercial. If water runs through it, we handle it.
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
              className="group relative bg-white/70 backdrop-blur-2xl border border-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)] hover:-translate-y-2 hover:border-secondary/40 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col"
            >
              {/* Service image */}
              <div className="h-48 overflow-hidden bg-slate-100">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Badge overlay */}
                <span className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-[0.15em] text-white bg-secondary/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
                  {s.badge}
                </span>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-500 group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-sm">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black text-slate-950 leading-tight uppercase tracking-tight">{s.title}</h3>
                </div>

                <p className="text-sm text-slate-500 mb-6 leading-relaxed font-medium flex-1">{s.desc}</p>

                <div className="flex items-center gap-3 text-secondary text-xs font-black uppercase tracking-widest group-hover:gap-5 transition-all duration-500">
                  Get a Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
