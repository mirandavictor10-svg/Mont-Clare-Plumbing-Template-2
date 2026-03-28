import { Star, Quote } from "lucide-react";
import { useFadeUp } from "@/hooks/useFadeUp";

const reviews = [
  { name: "Nicole M.", text: "Responsive follow-up, professional service, flexible scheduling. Highly recommend!" },
  { name: "Kevin F.", text: "Excellent service and honest dealing, going well beyond expectations." },
  { name: "Mustafa S.", text: "Best plumbing service in Chicago with competitive pricing." },
  { name: "Cyndi S.", text: "Responsive owner involvement, skilled workforce, great management." },
];

const Testimonials = () => {
  const ref = useFadeUp();

  return (
    <section id="reviews" className="section-padding bg-section-alt" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground text-center mb-14 fade-up">
          What Our Customers Say
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="fade-up bg-card border border-border rounded-2xl p-6 relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-secondary/20 absolute top-4 right-4" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed">"{r.text}"</p>
              <p className="font-bold text-sm text-foreground">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
