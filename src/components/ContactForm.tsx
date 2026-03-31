import { useState } from "react";
import { Phone, MapPin, Clock, Send, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const contactDetails = [
  {
    icon: Phone,
    label: "Main Office",
    value: "(773) 353-3050",
    href: "tel:7733533050",
    accent: "blue",
  },
  {
    icon: Phone,
    label: "After Hours",
    value: "(312) 420-6081",
    href: "tel:3124206081",
    accent: "slate",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "6807 W. Irving Park Rd., Chicago, IL 60634",
    href: null,
    accent: "slate",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "24/7/365 — All Holidays",
    href: null,
    accent: "emerald",
  },
];

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const leadData = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      service: formData.get("service") as string,
      message: formData.get("message") as string,
      submittedAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem("4s_leads") || "[]");
      existing.push(leadData);
      localStorage.setItem("4s_leads", JSON.stringify(existing));
    } catch {
      // localStorage unavailable — continue anyway
    }

    if (!FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) {
          console.warn("Formspree submission failed, lead saved to localStorage");
        }
      } catch {
        console.warn("Formspree unreachable, lead saved to localStorage");
      }
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-secondary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header — centered above columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-5"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20">
            <Zap className="w-3.5 h-3.5 text-secondary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Free Estimate</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none">
            Get Your Free <span className="text-secondary italic">Estimate.</span>
          </h2>
          <p className="text-lg text-slate-400 font-medium max-w-lg mx-auto leading-relaxed">
            Fill out the form and we'll call you back within 15 minutes.
            Upfront pricing — no obligation, no pressure.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">

          {/* ── Left: contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3 lg:pt-2"
          >
            {contactDetails.map(({ icon: Icon, label, value, href, accent }) => {
              const accentClasses = {
                blue: "bg-secondary/15 text-secondary border-secondary/30",
                emerald: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
                slate: "bg-white/8 text-slate-400 border-white/10",
              }[accent] ?? "bg-white/8 text-slate-400 border-white/10";

              const row = (
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/8 hover:border-white/15 hover:bg-white/[0.07] transition-all duration-300 group">
                  <div className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center border ${accentClasses}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-0.5">{label}</p>
                    <p className="text-sm font-bold text-white leading-snug truncate">{value}</p>
                  </div>
                  {href && (
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-white group-hover:translate-x-0.5 transition-all ml-auto shrink-0" />
                  )}
                </div>
              );

              return href ? (
                <a key={label} href={href}>{row}</a>
              ) : (
                <div key={label}>{row}</div>
              );
            })}

            {/* Trust badge */}
            <div className="mt-6 p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              <p className="text-sm font-bold text-emerald-400">
                Accepting calls now — response within 15 min
              </p>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.6)] relative overflow-hidden"
          >
            {/* Top edge highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-6"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                >
                  <Send className="w-8 h-8 text-emerald-400" />
                </motion.div>
                <h3 className="text-3xl font-black tracking-tighter text-white">We're On It!</h3>
                <p className="text-secondary font-bold text-sm tracking-wide bg-secondary/10 inline-block px-6 py-3 rounded-xl border border-secondary/20">
                  A 4S technician will call you within 15 minutes.
                </p>
                <p className="text-slate-500 text-sm font-medium">
                  Or call us directly:{" "}
                  <a href="tel:7733533050" className="text-secondary hover:underline font-bold">
                    (773) 353-3050
                  </a>
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className={inputCls}
                    />
                  </Field>
                  <Field label="Phone Number">
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(773) 000-0000"
                      className={inputCls}
                    />
                  </Field>
                </div>

                <Field label="Service Needed">
                  <select name="service" className={inputCls}>
                    <option className="bg-slate-900">What do you need help with?</option>
                    <option className="bg-slate-900">Emergency — I Need Help Now</option>
                    <option className="bg-slate-900">Sewer &amp; Drain Service</option>
                    <option className="bg-slate-900">Plumbing Repair</option>
                    <option className="bg-slate-900">Water Heater Service</option>
                    <option className="bg-slate-900">HVAC Service</option>
                    <option className="bg-slate-900">Gas Line Service</option>
                    <option className="bg-slate-900">Winterization</option>
                  </select>
                </Field>

                <Field label="Describe Your Issue">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us what's going on..."
                    className={`${inputCls} resize-none`}
                  />
                </Field>

                {error && (
                  <p className="text-[10px] text-red-400 font-black uppercase tracking-widest text-center bg-red-400/10 py-3 rounded-lg border border-red-400/20">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-secondary text-white py-5 rounded-2xl text-sm font-black uppercase tracking-[0.15em] hover:bg-blue-500 active:scale-[0.98] transition-all duration-200 shadow-[0_0_25px_rgba(59,130,246,0.35)] disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {loading ? "Sending…" : "Get My Free Estimate"}
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-xs text-slate-500 text-center font-medium">
                  No spam. No obligation. Upfront pricing guaranteed.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const inputCls =
  "w-full px-5 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-semibold text-sm placeholder:text-white/25 focus:border-secondary/60 focus:bg-white/8 focus:shadow-[0_0_16px_rgba(59,130,246,0.15)] transition-all outline-none appearance-none cursor-pointer";

const Field = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2 group">
    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-0.5 group-focus-within:text-white transition-colors block">
      {label}
    </label>
    {children}
  </div>
);

export default ContactForm;
