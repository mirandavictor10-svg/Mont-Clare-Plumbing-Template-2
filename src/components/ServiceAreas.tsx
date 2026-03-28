import { MapPin } from "lucide-react";
import { useFadeUp } from "@/hooks/useFadeUp";

const areas = [
  "Irving Park", "Portage Park", "Dunning", "Belmont Cragin", "Montclare",
  "Elmwood Park", "River Grove", "Franklin Park", "Schiller Park",
  "Norridge", "Harwood Heights", "Greater Chicago Area",
];

const ServiceAreas = () => {
  const ref = useFadeUp();

  return (
    <section className="section-padding bg-section-alt" ref={ref}>
      <div className="max-w-5xl mx-auto text-center fade-up">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="w-6 h-6 text-secondary" />
          <h2 className="text-3xl sm:text-4xl text-foreground">Proudly Serving Chicago & Suburbs</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {areas.map((a) => (
            <span
              key={a}
              className="bg-card border border-border px-4 py-2 rounded-full text-sm font-medium text-foreground/80 hover:border-secondary/50 hover:text-secondary transition-colors"
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
