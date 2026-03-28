import { Clock, DollarSign, Shield, CalendarCheck } from "lucide-react";
import { useFadeUp } from "@/hooks/useFadeUp";

const reasons = [
  { icon: Clock, title: "Under 1 Hour Response", desc: "Most services within 60 minutes. Guaranteed within 24 hours." },
  { icon: DollarSign, title: "Honest, Upfront Pricing", desc: "No hidden fees. No overtime charges. You approve the price before we start." },
  { icon: Shield, title: "Master Licensed Plumbers", desc: "055 Master Licensed. HomeAdvisor screened and approved." },
  { icon: CalendarCheck, title: "24/7/365 Availability", desc: "Nights, weekends, holidays — we never close." },
];

const WhyUs = () => {
  const ref = useFadeUp();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground text-center mb-14 fade-up">
          Why Chicago Trusts 4S Plumbing
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="fade-up bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-lg font-body font-bold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
