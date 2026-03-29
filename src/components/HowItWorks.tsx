import { PhoneCall, Truck, CheckCircle2, Zap } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { num: "01", icon: PhoneCall, title: "You Call. We Answer.", desc: "Reach a real person — not a call center. We give you an upfront flat-rate quote on the spot. No hidden fees. No guesswork." },
  { num: "02", icon: Truck, title: "We Show Up in 45 Min", desc: "A licensed, uniformed technician pulls up within 45 minutes — day or night, weekends and holidays included." },
  { num: "03", icon: CheckCircle2, title: "Fixed Right. Guaranteed.", desc: "We fix it right the first time, clean up after ourselves, and back every job with a 100% satisfaction guarantee." },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full">
            <Zap className="w-3 h-3 text-secondary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Operational Protocol</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-none">
            Fixed in 3 <br /><span className="text-secondary italic">Simple Steps.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            No runaround. No waiting days. Here's exactly what happens when you call.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-[2.25rem] left-[10%] right-[10%] h-px bg-foreground/5 z-0" />

          {steps.map((s, i) => (
            <motion.div 
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center group relative z-10"
            >
              <div className="w-20 h-20 rounded-[1.5rem] bg-foreground text-background flex items-center justify-center mx-auto mb-8 text-2xl font-black shadow-2xl group-hover:bg-secondary group-hover:text-background transition-all duration-500 relative">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary text-background text-[10px] flex items-center justify-center border-4 border-background leading-none">
                  {s.num}
                </div>
                <s.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tight text-foreground mb-4">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-medium max-w-[240px] mx-auto opacity-60 leading-relaxed uppercase tracking-widest">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
