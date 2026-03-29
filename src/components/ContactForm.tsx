import { useState } from "react";
import { Phone, MapPin, Clock, Send, Zap } from "lucide-react";
import { motion } from "framer-motion";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please call (773) 353-3050 directly.");
      }
    } catch {
      setError("Connection issue. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Info side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
              >
                <Zap className="w-3.5 h-3.5 text-secondary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Free Estimate</span>
              </motion.div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none drop-shadow-lg">
                Get Your Free <br /><span className="text-secondary italic">Estimate.</span>
              </h2>
              <p className="text-xl text-slate-400 font-medium max-w-md leading-relaxed">
                We'll call you back within 15 minutes. Upfront pricing — no obligation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <motion.a 
                whileHover={{ x: 5, scale: 1.02 }}
                href="tel:7733533050" 
                className="group space-y-3 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-secondary/40 hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary text-white flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500">
                  <Phone className="w-6 h-6 group-hover:animate-pulse" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Main Office</h4>
                  <p className="text-xl font-black text-white group-hover:text-secondary transition-colors leading-tight">(773) 353-3050</p>
                </div>
              </motion.a>

              <motion.a 
                whileHover={{ x: 5, scale: 1.02 }}
                href="tel:3124206081" 
                className="group space-y-3 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center group-hover:bg-white/20 transition-all duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">After Hours</h4>
                  <p className="text-xl font-black text-white transition-colors leading-tight">(312) 420-6081</p>
                </div>
              </motion.a>

              <div className="group space-y-3 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Location</h4>
                  <p className="text-sm font-black text-slate-300 leading-snug">6807 W. Irving Park Rd.<br />Chicago, IL 60634</p>
                </div>
              </div>

              <div className="group space-y-3 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 animate-pulse">Status: Active</h4>
                  <p className="text-sm font-black text-slate-300 leading-snug mt-1">24/7/365 Service<br />All Holidays Included</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 lg:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            {/* Inner dynamic border glow */}
            <div className="absolute inset-0 border border-white/5 rounded-[3rem] pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-50" />

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 space-y-6"
              >
                <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <Send className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="text-4xl font-black tracking-tighter text-white uppercase drop-shadow-md">We're On It!</h3>
                <p className="text-secondary font-black uppercase text-xs tracking-[0.2em] bg-secondary/10 inline-block px-4 py-2 rounded-lg border border-secondary/20">
                  A 4S technician will call you back within 15 minutes.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 group-focus-within:text-white transition-colors">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="YOUR NAME"
                      className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest placeholder:text-white/20 focus:border-secondary focus:bg-white/10 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-3 group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 group-focus-within:text-white transition-colors">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(XXX) XXX-XXXX"
                      className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest placeholder:text-white/20 focus:border-secondary focus:bg-white/10 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all outline-none"
                    />
                  </div>
                </div>
                
                <div className="space-y-3 group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 group-focus-within:text-white transition-colors">Service Needed</label>
                  <select name="service" className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest focus:border-secondary focus:bg-white/10 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all outline-none appearance-none cursor-pointer">
                    <option className="bg-slate-900">What Do You Need Help With?</option>
                    <option className="bg-slate-900">Emergency — I Need Help Now</option>
                    <option className="bg-slate-900">Sewer & Drain Service</option>
                    <option className="bg-slate-900">Plumbing Repair</option>
                    <option className="bg-slate-900">HVAC Service</option>
                    <option className="bg-slate-900">Gas Line Service</option>
                  </select>
                </div>

                <div className="space-y-3 group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 group-focus-within:text-white transition-colors">Describe Your Issue</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="TELL US WHAT'S GOING ON..."
                    className="w-full px-6 py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-black uppercase tracking-widest placeholder:text-white/20 focus:border-secondary focus:bg-white/10 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all outline-none resize-none"
                  />
                </div>

                {error && (
                  <p className="text-[10px] text-red-400 font-black uppercase tracking-widest text-center bg-red-400/10 py-3 rounded-lg border border-red-400/20">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-secondary text-white py-6 rounded-2xl text-xs font-black uppercase tracking-[0.3em] hover:bg-white hover:text-slate-950 active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.4)] disabled:opacity-50 disabled:hover:bg-secondary disabled:hover:text-white group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {loading ? "SENDING..." : "Get My Free Estimate"} <Send className="w-4 h-4" />
                  </span>
                </button>
                
                <p className="text-[9px] text-slate-500 text-center font-black uppercase tracking-[0.2em]">
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

export default ContactForm;

