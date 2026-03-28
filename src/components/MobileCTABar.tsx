import { Phone, ClipboardList } from "lucide-react";

const MobileCTABar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
    <a
      href="tel:7733533050"
      className="flex-1 flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-4 font-bold text-sm"
    >
      <Phone className="w-5 h-5" /> Call Now
    </a>
    <button
      onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
      className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground py-4 font-bold text-sm"
    >
      <ClipboardList className="w-5 h-5" /> Book Online
    </button>
  </div>
);

export default MobileCTABar;
