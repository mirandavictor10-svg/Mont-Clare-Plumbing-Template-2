import { CheckCircle, Dot, ShieldCheck, Star, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { company } from "@/config/company.config";

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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-900/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-secondary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">{company.about.tagline}</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 leading-[0.9] drop-shadow-sm">
              {company.about.heading} <br /><span className="text-secondary italic">{company.about.headingItalic}</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6 text-xl text-slate-600 font-medium leading-relaxed max-w-lg">
              <p>
                {company.about.paragraph1.split(company.shortName)[0]}<span className="text-slate-950 font-black relative inline-block after:absolute after:bottom-1 after:left-0 after:w-full after:h-2 after:bg-secondary/20 after:-z-10">{company.shortName}</span>{company.about.paragraph1.split(company.shortName)[1]}
              </p>
              <p>
                {company.about.paragraph2}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid gap-3 sm:grid-cols-2">
              {company.about.credentials.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.22em] shadow-[0_18px_30px_-20px_rgba(15,23,42,0.35)]"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-secondary" />
                  {tag}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.article
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-[2.25rem] bg-slate-950 p-8 text-white shadow-[0_40px_80px_-38px_rgba(15,23,42,0.6)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.28),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_35%)]" />
              <div className="relative z-10 flex h-full flex-col justify-between gap-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-secondary/90">
                      Featured Proof
                    </p>
                    <div className="mt-4 text-7xl md:text-8xl font-black tracking-[-0.06em] tabular-nums">
                      {company.about.featuredProof.value}
                    </div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 p-4">
                    <ShieldCheck className="w-8 h-8 text-secondary" />
                  </div>
                </div>

                <div className="max-w-md space-y-3">
                  <p className="text-xs font-black uppercase tracking-[0.26em] text-white">
                    {company.about.featuredProof.label}
                  </p>
                  <p className="text-lg font-medium leading-relaxed text-white/72">
                    {company.about.featuredProof.description}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {company.about.featuredProof.chips.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/72"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>

            <div className="grid gap-6">
              {company.about.sideStats.map((stat, index) => (
                <motion.article
                  key={stat.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/85 p-6 shadow-[0_24px_50px_-30px_rgba(15,23,42,0.25)] backdrop-blur"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-secondary via-sky-300 to-transparent" />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-5xl font-black tracking-[-0.05em] text-slate-950 tabular-nums">
                        {stat.value}
                      </div>
                      <p className="mt-3 text-[11px] font-black uppercase tracking-[0.24em] text-slate-950">
                        {stat.label}
                      </p>
                    </div>
                    <div className="rounded-full bg-secondary/10 px-3 py-2 text-[9px] font-black uppercase tracking-[0.22em] text-secondary">
                      {stat.badge}
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600">
                    {stat.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <Star className="w-3.5 h-3.5 text-secondary" />
                    {stat.footer}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center gap-3 rounded-[2rem] border border-slate-200/70 bg-white/70 px-5 py-4 shadow-[0_24px_50px_-36px_rgba(15,23,42,0.25)]"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.26em] text-slate-950">
            Supporting Proof
          </span>
          {company.about.supportingProof.map((item) => (
            <div key={item} className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
              <Dot className="w-4 h-4 text-secondary" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
