import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useFadeUp } from "@/hooks/useFadeUp";

const ContactForm = () => {
  const ref = useFadeUp();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Talk to a Real Person. Right Now.
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Call us directly or fill out the form and we'll call YOU within 15 minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 fade-up" style={{ transitionDelay: "150ms" }}>
          {/* Info side */}
          <div className="space-y-6">
            <div className="space-y-4">
              <a href="tel:7733533050" className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-bold">(773) 353-3050</div>
                  <div className="text-sm text-muted-foreground">(312) 420-6081</div>
                </div>
              </a>

              <a href="mailto:4splumbing@gmail.com" className="flex items-center gap-3 text-foreground hover:text-secondary transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div className="font-bold">4splumbing@gmail.com</div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-sm text-muted-foreground">6807 W. Irving Park Rd., Chicago, IL 60634</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-success">Open 24/7</div>
                  <div className="text-sm text-muted-foreground">Emergency services anytime</div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-border h-56 bg-muted flex items-center justify-center">
              <iframe
                title="4S Plumbing Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.123!2d-87.8!3d41.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU3JzAwLjAiTiA4N8KwNDgnMDAuMCJX!5e0!3m2!1sen!2sus!4v1600000000000"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form side */}
          <div className="bg-card border border-border rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-2xl font-body font-bold text-foreground mb-2">We Got Your Message!</h3>
                <p className="text-muted-foreground">A team member will call you within 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(773) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition">
                    <option>Emergency Plumbing</option>
                    <option>Drain Cleaning</option>
                    <option>Water Heater</option>
                    <option>Sewer & Inspection</option>
                    <option>Gas Line</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Brief Description (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what's going on..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground py-4 rounded-xl text-lg font-bold hover:brightness-110 transition shadow-lg shadow-secondary/25"
                >
                  Get My Free Quote
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  We respond within 15 minutes. No spam. No pressure.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
