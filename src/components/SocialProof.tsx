import { Star, Shield, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { company } from "@/config/company.config";

const trustIcons = [Star, Shield, Award, CheckCircle2];

const SocialProof = () => {
  return (
    <section className="bg-foreground py-16 border-y border-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-12 lg:gap-8 mb-10">
          {company.trustBadges.map((p, i) => {
            const Icon = trustIcons[i % trustIcons.length];
            return (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 group"
              >
                <div className="bg-background/10 p-3 rounded-2xl group-hover:bg-secondary/20 transition-colors">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-background font-black text-sm uppercase tracking-widest">{p.label}</h4>
                  <p className="text-background/40 text-[10px] font-bold uppercase tracking-[0.2em]">{p.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust badges row — BBB, discounts, WGN */}
        <div className="pt-10 border-t border-background/5">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* As Seen On */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 bg-background/5 px-5 py-2.5 rounded-full border border-background/10"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-background/50">As Seen On</span>
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-background">{company.socialProof.asSeenOn}</span>
            </motion.div>

            {company.socialProof.generalBadges.map((badge) => (
              <span
                key={badge}
                className="text-[10px] font-black uppercase tracking-[0.15em] text-background/30 bg-background/5 px-5 py-2.5 rounded-full border border-background/5"
              >
                {badge}
              </span>
            ))}

            {/* Discount badges */}
            {company.socialProof.discountBadges.map((badge) => (
              <span
                key={badge}
                className="text-[10px] font-black uppercase tracking-[0.15em] text-emerald-400 bg-emerald-400/10 px-5 py-2.5 rounded-full border border-emerald-400/20"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
