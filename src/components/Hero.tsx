import { Phone, CalendarCheck, Star, Shield, Clock, DollarSign } from "lucide-react";
import heroImg from "@/assets/hero-plumber.jpg";

const trustBadges = [
  { icon: Star, label: "HomeAdvisor Approved" },
  { icon: Shield, label: "Master Licensed" },
  { icon: Clock, label: "24/7 Emergency" },
  { icon: DollarSign, label: "Honest Pricing" },
];

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-background section-padding">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight text-foreground mb-6">
            Chicago's 24/7 Plumbing Experts — At Your Door in Under an Hour.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl font-medium">
            Licensed. Insured. Honest pricing. 10+ years and 100+ projects keeping Chicago homes safe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="tel:7733533050"
              className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition shadow-lg shadow-secondary/25"
            >
              <Phone className="w-5 h-5" /> Call Now — (773) 353-3050
            </a>
            <button
              onClick={scrollToContact}
              className="flex items-center justify-center gap-2 border-2 border-foreground/20 text-foreground px-8 py-4 rounded-xl text-lg font-bold hover:bg-foreground/5 transition"
            >
              <CalendarCheck className="w-5 h-5" /> Book Online
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {trustBadges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm font-semibold text-foreground/80"
              >
                <b.icon className="w-4 h-4 text-success" />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImg}
            alt="4S Plumbing team of certified professionals in Chicago"
            className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
            width={1024}
            height={1024}
          />
          <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-5 py-3 rounded-xl font-bold text-sm shadow-lg">
            ⚡ Average response: 47 min
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
