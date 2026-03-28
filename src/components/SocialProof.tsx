import { Star, Shield } from "lucide-react";
import { useFadeUp } from "@/hooks/useFadeUp";

const SocialProof = () => {
  const ref = useFadeUp();

  return (
    <section className="bg-section-alt py-10 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 fade-up">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <div className="text-sm font-semibold text-foreground">
            <span className="text-lg font-bold">4.9</span> on Google
          </div>
        </div>

        <div className="h-8 w-px bg-border hidden md:block" />

        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-success" />
          <span className="text-sm font-semibold">HomeAdvisor Screened & Approved</span>
        </div>

        <div className="h-8 w-px bg-border hidden md:block" />

        <p className="text-sm italic text-muted-foreground text-center max-w-xs">
          "Best plumbing service in Chicago. Competitive pricing."
          <span className="block mt-1 font-semibold not-italic text-foreground">— Mustafa S.</span>
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
