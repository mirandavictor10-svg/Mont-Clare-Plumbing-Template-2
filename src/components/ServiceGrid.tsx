import { Wrench, Droplets, Flame, Camera, GaugeCircle, Snowflake, ArrowRight } from "lucide-react";
import { useFadeUp } from "@/hooks/useFadeUp";

const services = [
  { icon: Wrench, title: "Emergency Plumbing", badge: "24/7", desc: "Burst pipe at 2 AM? We're already on the way. Response in under 60 minutes." },
  { icon: Droplets, title: "Drain Cleaning", badge: "Same-Day", desc: "Slow drains, clogged sinks, main sewer line blockages — cleared fast." },
  { icon: Flame, title: "Water Heaters", badge: "All Brands", desc: "Repair and installation for traditional and tankless units. All major brands." },
  { icon: Camera, title: "Sewer & Video Inspection", badge: "Advanced Tech", desc: "HD camera inspections, hydro-jetting, main line repair, and PDP compliance." },
  { icon: GaugeCircle, title: "Gas Lines", badge: "Licensed", desc: "Gas leak detection, line repair, and new installations by licensed pros." },
  { icon: Snowflake, title: "Frozen & Burst Pipes", badge: "Emergency", desc: "Chicago winters are brutal. Fast thawing and emergency pipe repair." },
];

const ServiceGrid = () => {
  const ref = useFadeUp();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">What We Fix</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Full-service plumbing, sewer, and HVAC for homes and businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="fade-up relative group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={scrollToContact}
            >
              <span className="absolute top-4 right-4 bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">
                {s.badge}
              </span>
              <s.icon className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-body font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
              <span className="inline-flex items-center gap-1 text-secondary text-sm font-semibold group-hover:gap-2 transition-all">
                Book This Service <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
