import { useFadeUp } from "@/hooks/useFadeUp";

const About = () => {
  const ref = useFadeUp();

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto text-center fade-up">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
          Meet the Team Behind 4S Plumbing
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Led by William V. Taylor III, our team of 25+ certified professionals has spent over a decade
          serving Chicago with honesty, fairness, and expert craftsmanship. From Master Plumbers to HVAC
          technicians, every member of our crew is licensed, trained, and committed to getting the job done right.
        </p>

        <div className="grid grid-cols-3 gap-8 mt-14 max-w-lg mx-auto">
          <div>
            <div className="text-4xl font-bold text-secondary">10+</div>
            <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary">100+</div>
            <div className="text-sm text-muted-foreground mt-1">Projects Done</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-secondary">25+</div>
            <div className="text-sm text-muted-foreground mt-1">Certified Plumbers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
