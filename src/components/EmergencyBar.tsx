import { Phone } from "lucide-react";

const EmergencyBar = () => (
  <div className="sticky top-0 z-50 bg-primary text-primary-foreground py-2 px-4 text-sm font-medium">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <span className="hidden sm:inline">24/7 Emergency Service — Chicago's Most Trusted Plumbers</span>
      <a
        href="tel:7733533050"
        className="flex items-center gap-2 hover:opacity-80 transition-opacity font-semibold ml-auto sm:ml-0"
      >
        <Phone className="w-4 h-4" />
        (773) 353-3050
      </a>
    </div>
  </div>
);

export default EmergencyBar;
