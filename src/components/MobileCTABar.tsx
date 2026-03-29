import { Phone, MapPin } from "lucide-react";

const MobileCTABar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden flex p-4 gap-3 bg-gradient-to-t from-background via-background/95 to-transparent backdrop-blur-sm">
    <a
      href="tel:7733533050"
      className="flex-1 flex items-center justify-center gap-3 bg-secondary text-background py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl shadow-secondary/40"
    >
      <Phone className="w-4 h-4" /> 
      Call Now
    </a>
    <button
      onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
      className="flex-1 flex items-center justify-center gap-3 bg-foreground text-background py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] shadow-2xl"
    >
      <MapPin className="w-4 h-4" /> 
      Free Estimate
    </button>
  </div>
);

export default MobileCTABar;
