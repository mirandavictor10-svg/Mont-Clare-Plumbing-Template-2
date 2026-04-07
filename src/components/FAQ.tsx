import { useState } from "react";
import { ChevronDown, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/config/company.config";

const FAQItem = ({ faq, index }: { faq: { q: string; a: string }; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-foreground/5 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base sm:text-lg font-bold text-foreground pr-8 group-hover:text-secondary transition-colors">
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors"
        >
          <ChevronDown className="w-4 h-4 text-secondary" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground font-medium leading-relaxed pb-6 max-w-3xl">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-secondary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Common Questions</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.9] drop-shadow-sm">
            Frequently <br /><span className="text-secondary italic">Asked.</span>
          </h2>
        </motion.div>

        <div className="bg-card/40 backdrop-blur-sm border border-foreground/5 rounded-[2.5rem] px-8 sm:px-12 py-4">
          {company.faq.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-sm text-muted-foreground font-medium"
        >
          Have another question? Call us at{" "}
          <a href={`tel:${company.phoneRaw}`} className="text-secondary font-bold hover:underline">{company.phone}</a>
          {" "}or text{" "}
          <a href={`tel:${company.phoneAfterHoursRaw}`} className="text-secondary font-bold hover:underline">{company.phoneAfterHours}</a>
        </motion.p>
      </div>
    </section>
  );
};

export default FAQ;
