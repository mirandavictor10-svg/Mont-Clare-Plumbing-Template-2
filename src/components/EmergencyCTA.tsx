import { Phone } from "lucide-react";
import { useFadeUp } from "@/hooks/useFadeUp";

const EmergencyCTA = () => {
  const ref = useFadeUp();

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-navy-light relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.15),transparent_70%)]" />
      <div className="max-w-3xl mx-auto text-center relative z-10 fade-up">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-4">
          Plumbing Emergency? Don't Wait.
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 font-medium">
          Our team is standing by right now. Call and we'll be there within the hour.
        </p>
        <a
          href="tel:7733533050"
          className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-xl text-xl font-bold hover:brightness-110 transition shadow-xl shadow-accent/30"
        >
          <Phone className="w-6 h-6" />
          Call Now — (773) 353-3050
        </a>
      </div>
    </section>
  );
};

export default EmergencyCTA;
