import { Clock, DollarSign, Shield, CalendarCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { company } from "@/config/company.config";

const reasonIcons = [DollarSign, Clock, Shield, CalendarCheck];

const WhyUs = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20"
          >
            <Zap className="w-3 h-3 text-secondary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">{company.whyUs.sectionLabel}</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground text-center">
            {company.whyUs.heading} <br /><span className="text-secondary italic">{company.whyUs.headingItalic}</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">{company.whyUs.subtext}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {company.whyUs.reasons.map((r, i) => {
            const Icon = reasonIcons[i % reasonIcons.length];
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-card/40 backdrop-blur-sm border border-foreground/5 rounded-[2.5rem] p-10 hover:bg-card/80 hover:border-secondary/20 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-[1.5rem] bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-background transition-colors duration-500">
                  <Icon className="w-8 h-8 text-secondary group-hover:text-inherit" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-4 leading-tight uppercase tracking-tight">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium opacity-80">{r.desc}</p>

                <div className="absolute top-6 right-6 text-[10px] font-black text-secondary/20 group-hover:text-secondary/40 transition-colors">
                  {r.highlight}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
