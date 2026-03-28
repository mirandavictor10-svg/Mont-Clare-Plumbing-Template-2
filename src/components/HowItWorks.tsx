import { PhoneCall, Truck, ThumbsUp } from "lucide-react";
import { useFadeUp } from "@/hooks/useFadeUp";

const steps = [
  { num: "1", icon: PhoneCall, title: "Call or Book Online", desc: "Reach us 24/7 by phone or fill out our quick form." },
  { num: "2", icon: Truck, title: "We Show Up Fast", desc: "A licensed plumber arrives at your door — usually within the hour." },
  { num: "3", icon: ThumbsUp, title: "Problem Fixed. Guaranteed.", desc: "Transparent pricing. No surprises. Just quality work." },
];

const HowItWorks = () => {
  const ref = useFadeUp();

  return (
    <section className="section-padding bg-section-alt" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground text-center mb-14 fade-up">
          Getting Help Is Easy
        </h2>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-border" />

          {steps.map((s, i) => (
            <div key={s.num} className="fade-up text-center relative" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center mx-auto mb-5 text-2xl font-bold shadow-lg shadow-secondary/20 relative z-10">
                {s.num}
              </div>
              <s.icon className="w-8 h-8 text-foreground/60 mx-auto mb-3" />
              <h3 className="text-lg font-body font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
