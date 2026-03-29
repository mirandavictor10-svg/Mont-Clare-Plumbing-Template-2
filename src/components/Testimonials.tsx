import { Star, Quote, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

const reviews = [
  { name: "Nicole M.", location: "ORD DISTRICT", text: "Responsive follow-up, professional service, flexible scheduling. Highly recommend!" },
  { name: "Kevin F.", location: "DOWNTOWN HUB", text: "Excellent service and honest dealing, going well beyond expectations." },
  { name: "Mustafa S.", location: "WEST RADIUS", text: "Best plumbing service in Chicago with competitive pricing." },
  { name: "Cyndi S.", location: "NORTH SECTOR", text: "Responsive owner involvement, skilled workforce, great management." },
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

const Testimonials = () => {
  return (
    <section id="reviews" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Premium ambient light bleeds */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-secondary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Service Logs</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 leading-[0.9] drop-shadow-sm">
            Field <br /><span className="text-secondary italic">Intelligence.</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reviews.map((r, i) => (
            <motion.div
              variants={itemVariants}
              key={r.name}
              className="bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] p-10 relative group hover:border-secondary/30 hover:shadow-[0_20px_40px_rgba(59,130,246,0.08)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-between"
            >
              {/* Luminous dynamic background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Quote className="w-12 h-12 text-slate-900/5 absolute top-6 right-6 group-hover:text-secondary group-hover:opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex gap-1.5 mb-8">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-secondary text-secondary drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:fill-emerald-400 group-hover:text-emerald-400 transition-colors duration-500" />
                  ))}
                </div>
                <p className="text-xs font-bold text-slate-700 leading-relaxed uppercase tracking-widest mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                  "{r.text}"
                </p>
              </div>

              <div className="relative z-10 mt-auto">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-950">{r.name}</p>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-secondary mt-1">{r.location}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400/60 group cursor-default">
            Aggregate Satisfaction Score: <span className="text-secondary/80 group-hover:text-emerald-500 transition-colors">98.4%</span> // All Systems Optimal
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

