import { Phone, Zap } from "lucide-react";
import { company } from "@/config/company.config";

const EmergencyBar = () => (
  <div className="bg-foreground text-background py-3 px-6 text-[10px] font-black uppercase tracking-[0.3em] z-[60] relative">
    <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5 bg-secondary px-2.5 py-1 rounded text-background animate-pulse">
          <Zap className="w-3 h-3 fill-current" />
          <span>LIVE</span>
        </div>
        <span className="opacity-60">24/7 Emergency Service — Average Response: {company.emergencyBar.responseTime}</span>
      </div>

      <a
        href={`tel:${company.phoneRaw}`}
        className="hidden sm:flex items-center gap-2 text-secondary hover:text-background hover:bg-secondary px-4 py-1 rounded-full transition-all border border-secondary/20 group"
      >
        <Phone className="w-3 h-3 group-hover:animate-bounce" />
        <span className="text-background/80 group-hover:text-background">Call: {company.phone}</span>
      </a>
    </div>
  </div>
);

export default EmergencyBar;
