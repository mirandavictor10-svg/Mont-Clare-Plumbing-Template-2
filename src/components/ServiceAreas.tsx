import { MapPin, Zap, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const zones = [
  {
    label: "Chicago — North",
    areas: ["Irving Park", "Portage Park", "Jefferson Park", "Lincoln Park", "Lakeview", "Lincoln Square", "Albany Park", "Rogers Park", "Edgewater", "Norwood Park", "Forest Glen"],
  },
  {
    label: "Chicago — West",
    areas: ["Belmont Cragin", "Dunning", "Montclare", "Hermosa", "Logan Square", "Wicker Park", "Humboldt Park", "Austin", "Garfield Park"],
  },
  {
    label: "Chicago — South & Central",
    areas: ["Loop", "South Loop", "West Loop", "Near North Side", "Pilsen", "Bridgeport", "Hyde Park", "Bronzeville", "Chinatown", "Brighton Park"],
  },
  {
    label: "Suburbs",
    areas: ["Elmwood Park", "River Grove", "Franklin Park", "Schiller Park", "Norridge", "Harwood Heights", "Clearing", "Garfield Ridge"],
  },
];

// All neighborhood dot positions in SVG viewBox (0–100 coordinate space)
// x = left%, y = top% — matches CSS position of floating labels exactly
const allDots = [
  { name: "Lincoln Park",  x: 68, y: 22 },
  { name: "Loop",          x: 72, y: 55 },
  { name: "Irving Park",   x: 25, y: 35 },
  { name: "Elmwood Park",  x: 15, y: 52 },
  { name: "O'Hare",        x: 30, y: 18 },
  { name: "Hyde Park",     x: 65, y: 72 },
  { name: "Norridge",      x: 75, y: 38 },
  { name: "Portage Park",  x: 28, y: 68 },
  { name: "Wicker Park",   x: 20, y: 45 },
  { name: "Lakeview",      x: 62, y: 28 },
  { name: "Bridgeport",    x: 57, y: 64 },
];

// Three beams, each cycling through a different subset of destinations
const beamGroups = [
  [allDots[0], allDots[3], allDots[5], allDots[10]], // Lincoln Park → Elmwood Park → Hyde Park → Bridgeport
  [allDots[1], allDots[4], allDots[6], allDots[8]],  // Loop → O'Hare → Norridge → Wicker Park
  [allDots[2], allDots[7], allDots[9]],              // Irving Park → Portage Park → Lakeview
];

const ANIM_MS = 2200;
const GAP_MS  = 900;

type Dot = { name: string; x: number; y: number };

function DispatchBeam({ dests, initialDelay }: { dests: Dot[]; initialDelay: number }) {
  const [idx, setIdx]       = useState(0);
  const [cycle, setCycle]   = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), initialDelay);
    return () => clearTimeout(t);
  }, [initialDelay]);

  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => {
      setIdx(i => (i + 1) % dests.length);
      setCycle(c => c + 1);
    }, ANIM_MS + GAP_MS);
    return () => clearTimeout(t);
  }, [cycle, started, dests.length]);

  if (!started) return null;

  const dest = dests[idx];

  return (
    <>
      {/* Traveling beam line */}
      <motion.line
        key={`line-${cycle}`}
        x1={50} y1={50}
        x2={dest.x} y2={dest.y}
        stroke="rgba(96,165,250,0.75)"
        strokeWidth="0.45"
        strokeLinecap="round"
        filter="url(#beamGlow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 1, 1, 1],
          opacity:    [0, 0.9, 0.9, 0],
        }}
        transition={{
          duration: ANIM_MS / 1000,
          times: [0, 0.45, 0.82, 1],
          ease: "easeOut",
        }}
      />
      {/* Arrival pulse dot */}
      <motion.circle
        key={`dot-${cycle}`}
        cx={dest.x} cy={dest.y} r={1.8}
        fill="rgba(96,165,250,0.9)"
        filter="url(#beamGlow)"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale:   [0, 1.2, 0.8, 0.8, 0],
          opacity: [0, 1,   0.7, 0.7, 0],
        }}
        transition={{
          duration: ANIM_MS / 1000,
          times: [0, 0.45, 0.55, 0.82, 1],
          ease: "easeOut",
        }}
      />
    </>
  );
}

const ServiceAreas = () => {
  return (
    <section className="py-28 bg-foreground relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.05)_20px,rgba(255,255,255,0.05)_40px)]" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-1.5 rounded-full border border-secondary/20">
            <Zap className="w-3.5 h-3.5 text-secondary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Service Coverage</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-background leading-none">
            Areas We <br /><span className="text-secondary italic">Serve.</span>
          </h2>
          <p className="text-xl text-background/40 font-medium max-w-xl mx-auto leading-relaxed">
            Serving all of Chicago and surrounding suburbs — over 50 neighborhoods within a 45-mile radius.
          </p>
        </motion.div>

        {/* Split layout: Map + Areas */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Styled Map Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* Concentric radius rings */}
              <div className="absolute inset-0 rounded-full border border-secondary/10" />
              <div className="absolute inset-[15%] rounded-full border border-secondary/15" />
              <div className="absolute inset-[30%] rounded-full border border-secondary/20" />
              <div className="absolute inset-[45%] rounded-full border border-secondary/30 bg-secondary/5" />

              {/* SVG overlay — dispatch beam lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 100 100"
              >
                <defs>
                  <filter id="beamGlow" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="1.2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <DispatchBeam dests={beamGroups[0]} initialDelay={300} />
                <DispatchBeam dests={beamGroups[1]} initialDelay={1200} />
                <DispatchBeam dests={beamGroups[2]} initialDelay={2100} />
              </svg>

              {/* Pulsing center pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="relative">
                  <span className="absolute inline-flex h-8 w-8 rounded-full bg-secondary/40 animate-ping" />
                  <div className="relative w-8 h-8 rounded-full bg-secondary flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="mt-3 bg-background/10 backdrop-blur-md border border-background/20 px-4 py-2 rounded-xl">
                  <p className="text-[10px] font-black text-white uppercase tracking-[0.15em] whitespace-nowrap">4S Plumbing HQ</p>
                  <p className="text-[9px] font-bold text-background/40 text-center">Chicago, IL 60634</p>
                </div>
              </div>

              {/* Radius labels */}
              <div className="absolute top-[14%] left-1/2 -translate-x-1/2">
                <span className="text-[9px] font-bold text-secondary/40 uppercase tracking-widest">45 mi</span>
              </div>
              <div className="absolute top-[29%] left-1/2 -translate-x-1/2">
                <span className="text-[9px] font-bold text-secondary/50 uppercase tracking-widest">30 mi</span>
              </div>
              <div className="absolute top-[44%] left-1/2 -translate-x-1/2">
                <span className="text-[9px] font-bold text-secondary/60 uppercase tracking-widest">15 mi</span>
              </div>

              {/* Floating neighborhood labels */}
              {[
                { name: "Lincoln Park",  top: "22%", left: "68%" },
                { name: "Loop",          top: "55%", left: "72%" },
                { name: "Irving Park",   top: "35%", left: "25%" },
                { name: "Elmwood Park",  top: "52%", left: "15%" },
                { name: "O'Hare",        top: "18%", left: "30%" },
                { name: "Hyde Park",     top: "72%", left: "65%" },
                { name: "Norridge",      top: "38%", left: "75%" },
                { name: "Portage Park",  top: "68%", left: "28%" },
                { name: "Wicker Park",   top: "45%", left: "20%" },
                { name: "Lakeview",      top: "28%", left: "62%" },
                { name: "Bridgeport",    top: "64%", left: "57%" },
              ].map((n, i) => (
                <motion.div
                  key={n.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className="absolute z-10"
                  style={{ top: n.top, left: n.left }}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
                    <span className="text-[9px] font-bold text-background/40 uppercase tracking-wider whitespace-nowrap">{n.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Grouped neighborhoods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {zones.map((zone, zi) => (
              <motion.div
                key={zone.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: zi * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary">{zone.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {zone.areas.map((area) => (
                    <span
                      key={area}
                      className="text-[11px] font-bold text-background/50 bg-background/5 border border-background/8 px-3.5 py-2 rounded-xl hover:bg-secondary/10 hover:text-secondary hover:border-secondary/20 transition-all cursor-default"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <div className="pt-6 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="tel:7733533050"
                className="inline-flex items-center gap-3 bg-secondary text-white px-6 py-3.5 rounded-2xl text-xs font-black uppercase tracking-[0.15em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-secondary/30"
              >
                <Phone className="w-4 h-4" />
                Call to Confirm Your Area
              </a>
              <p className="text-xs text-background/30 font-medium self-center">
                50+ neighborhoods covered
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
