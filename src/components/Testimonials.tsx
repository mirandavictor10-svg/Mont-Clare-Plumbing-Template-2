import { Star, Quote } from "lucide-react";
import { motion, Variants } from "framer-motion";

const reviews = [
  {
    name: "Nicole M.",
    location: "Irving Park",
    text: "William and team reached back out to me and made sure my original issue was taken care of and then some! Joseph that came was professional, courteous and made sure all my questions were answered. They were prompt and had very flexible scheduling!",
  },
  {
    name: "Kevin F.",
    location: "Lincoln Park",
    text: "Excellent service and honest dealing, going well beyond expectations. Our plumber Tim was not only professional but an all-around nice guy who was happy to answer questions and look at other plumbing and leak issues around the house.",
  },
  {
    name: "Mustafa S.",
    location: "Portage Park",
    text: "I have been dealing with 4S Plumbing for a few years — every time they provide excellent service that makes me come back. Marcus is so professional, he diagnosed the issue and fixed it quickly with very competitive pricing. The best plumbing service in Chicago.",
  },
  {
    name: "Cyndi S.",
    location: "Norridge",
    text: "This company is quite unique and special. Not only are they fairly priced, flexible, and reliable — the owner Bill actually calls customers back himself. You don't have to go through layers of people to get something done. Highly valued!",
  },
  {
    name: "Charles M.",
    location: "Belmont Cragin",
    text: "Their communication was exceptional, and Clint arrived within an hour to assess the issue. He was knowledgeable, polite, and used a camera to show me exactly what the problem was. Transparent and professional from start to finish.",
  },
  {
    name: "Dan F.",
    location: "Dunning",
    text: "Our new water heater is working great. We upgraded from 40 to 50 gallons and Paul did an amazing job fitting the bigger tank into a small space. Quick turnaround and fair pricing. Highly recommend 4S for water heater work.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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
            <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">4.9★ on Google</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-950 leading-[0.9] drop-shadow-sm">
            What Our Customers <br /><span className="text-secondary italic">Are Saying.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((r) => (
            <motion.div
              variants={itemVariants}
              key={r.name}
              className="bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] p-10 relative group hover:border-secondary/30 hover:shadow-[0_20px_40px_rgba(59,130,246,0.08)] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-between"
            >
              {/* Luminous dynamic background */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <Quote className="w-12 h-12 text-slate-900/5 absolute top-6 right-6 group-hover:text-secondary group-hover:opacity-10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex gap-1.5 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]" />
                  ))}
                </div>
                <p className="text-sm font-medium text-slate-600 leading-relaxed mb-8 group-hover:text-slate-700 transition-colors">
                  "{r.text}"
                </p>
              </div>

              <div className="relative z-10 mt-auto">
                <p className="text-sm font-black text-slate-950">{r.name}</p>
                <p className="text-xs font-bold text-secondary mt-1">{r.location}</p>
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
          <p className="text-xs font-bold text-slate-400 flex items-center justify-center gap-2">
            <span className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}</span>
            Rated 4.9/5 across 120+ verified Google reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
