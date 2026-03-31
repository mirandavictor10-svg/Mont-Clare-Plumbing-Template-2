import { Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

const team = [
  { name: "William \"Bill\" Taylor III", title: "Owner & Founder", photo: "/images/team/bill-taylor.jpg", highlight: true },
  { name: "Todd Menegon", title: "Master 055 Plumber / Project Foreman", photo: "/images/team/todd-menegon.png" },
  { name: "Ryan Brown", title: "Master 055 Plumber", photo: "/images/team/ryan-brown.png" },
  { name: "Dominic Costantino", title: "Plumbing Supervisor", photo: "/images/team/dominic-costantino.jpg" },
  { name: "Eric Kronenbitter", title: "Plumber / Sewer Supervisor", photo: "/images/team/eric-kronenbitter.png" },
  { name: "Joseph O'Neal", title: "Plumbing Field Supervisor", photo: "/images/team/joseph-oneal.png" },
  { name: "Tim Morano", title: "Plumber / Carpenter", photo: "/images/team/tim-morano.png" },
  { name: "Paul Carrasquillo", title: "Plumber", photo: "/images/team/paul-carrasquillo.png" },
  { name: "Joseph Lundgren", title: "Plumber / Drain Specialist", photo: "/images/team/joseph-lundgren.png" },
  { name: "Raymond Reyes", title: "HVAC Technician", photo: "/images/team/raymond-reyes.png" },
  { name: "Ahmad Al-Awawdeh", title: "Plumbing Supervisor", photo: "/images/team/ahmad-al-awawdeh.png" },
  { name: "John Love", title: "Plumber / Sewer Specialist", photo: "/images/team/john-love.png" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring", bounce: 0.3 } },
};

const Team = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

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
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">24+ Strong</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[0.9] drop-shadow-sm">
            Meet the <br /><span className="text-secondary italic">Team.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Licensed, background-checked, and trained to treat your home like their own. These are the faces behind every 4S service call.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className={`group relative rounded-[2rem] overflow-hidden bg-white border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] ${
                member.highlight
                  ? "border-secondary/30 shadow-[0_8px_30px_rgba(59,130,246,0.08)]"
                  : "border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-secondary/30"
              }`}
            >
              {/* Photo */}
              <div className="aspect-square overflow-hidden bg-slate-100">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="text-sm font-black text-slate-950 leading-tight">{member.name}</p>
                <p className="text-[11px] font-bold text-secondary mt-1 leading-snug">{member.title}</p>
              </div>

              {/* Owner badge */}
              {member.highlight && (
                <div className="absolute top-4 right-4 bg-secondary text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg">
                  Owner
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 text-sm text-muted-foreground font-medium"
        >
          Plus 12 more certified technicians, apprentices, and support staff serving Chicago daily.
        </motion.p>
      </div>
    </section>
  );
};

export default Team;
