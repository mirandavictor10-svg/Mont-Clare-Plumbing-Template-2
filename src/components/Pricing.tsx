import { Check, Zap, Star } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { company } from "@/config/company.config";

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

const Pricing = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

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
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Maintenance Plans</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 leading-[0.9] drop-shadow-sm">
            Plans That <br /><span className="text-secondary italic">Protect.</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Prevent costly emergencies with a monthly maintenance plan. All plans include priority scheduling and flat-rate pricing.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {company.pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative rounded-[2.5rem] p-10 flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                plan.highlighted
                  ? "bg-foreground text-background shadow-2xl shadow-foreground/20 border-2 border-secondary/30"
                  : "bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:border-secondary/30"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-[9px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <Star className="w-3 h-3 fill-white" /> Most Popular
                </div>
              )}

              <div className="mb-8">
                <p className={`text-xs font-black uppercase tracking-[0.2em] mb-3 ${plan.highlighted ? "text-secondary" : "text-secondary"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-black tracking-tighter ${plan.highlighted ? "text-background" : "text-slate-950"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm font-bold ${plan.highlighted ? "text-background/40" : "text-slate-400"}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-secondary" : "text-secondary"}`} />
                    <span className={`text-sm font-medium ${plan.highlighted ? "text-background/70" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 rounded-2xl text-sm font-black uppercase tracking-[0.15em] transition-all duration-300 active:scale-[0.98] ${
                  plan.highlighted
                    ? "bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/30"
                    : "bg-foreground text-background hover:bg-secondary shadow-lg"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-sm text-muted-foreground font-medium"
        >
          All plans are month-to-month. No contracts. Cancel anytime.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
