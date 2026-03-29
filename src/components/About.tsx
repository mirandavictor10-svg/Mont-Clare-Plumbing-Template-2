import { Award, CheckCircle, Users, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

const stats = [
  { label: "Years Strong", value: "10+", sub: "Years Experience" },
  { label: "Jobs Completed", value: "1,000+", sub: "Projects Finished" },
  { label: "Our Team", value: "25+", sub: "Certified Technicians" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-900/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-secondary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Family-Owned Since 2014</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 leading-[0.9] drop-shadow-sm">
              Your Price Is Your Price. <br /><span className="text-secondary italic">Period.</span>
            </motion.h2>
            
            <motion.div variants={itemVariants} className="space-y-6 text-xl text-slate-600 font-medium leading-relaxed max-w-lg">
              <p>
                Family-owned since 2014. We started <span className="text-slate-950 font-black relative inline-block after:absolute after:bottom-1 after:left-0 after:w-full after:h-2 after:bg-secondary/20 after:-z-10">4S Plumbing & Sewer</span> with a simple idea: Chicago homeowners deserve a plumber who shows up on time, tells the truth about what's broken, and charges a fair price.
              </p>
              <p>
                Every one of our 25+ technicians is background-checked, fully certified, and trained to treat your home with respect. We stand behind every job we do — no exceptions.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4">
              {["Licensed Master Plumbers", "OSHA Certified", "Bonded & Insured"].map((tag) => (
                <div key={tag} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200/60 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 shadow-sm hover:border-secondary/30 hover:shadow-md transition-all group">
                  <CheckCircle className="w-3.5 h-3.5 text-secondary group-hover:scale-110 transition-transform" />
                  {tag}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 50, rotateX: 15 }}
                whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.15, duration: 0.8, type: "spring", bounce: 0.4 }}
                className="bg-white/60 backdrop-blur-xl border border-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-1 hover:border-secondary/30 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Luminous hover flare */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-secondary/0 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute -top-4 -right-4 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                  <Award className="w-32 h-32" />
                </div>
                
                <div className="relative z-10 flex flex-col justify-center">
                  <div className="text-5xl font-black text-secondary tracking-tighter mb-2 drop-shadow-sm">{s.value}</div>
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-950 mb-1">{s.label}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500/70">{s.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
