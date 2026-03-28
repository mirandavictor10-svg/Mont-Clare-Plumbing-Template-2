import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16 px-4">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
      <div>
        <img src={logo} alt="4S Plumbing" className="h-12 w-auto brightness-0 invert mb-4" />
        <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
          Chicago's trusted 24/7 plumbing experts. Licensed, insured, and committed to honest service since 2014.
        </p>
      </div>

      <div>
        <h4 className="font-body font-bold text-lg mb-4">Quick Links</h4>
        <div className="space-y-2">
          {["Services", "About", "Reviews", "Contact"].map((l) => (
            <button
              key={l}
              onClick={() => document.querySelector(`#${l.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
              className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-body font-bold text-lg mb-4">Contact</h4>
        <div className="space-y-3 text-sm">
          <a href="tel:7733533050" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Phone className="w-4 h-4" /> (773) 353-3050
          </a>
          <a href="tel:3124206081" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Phone className="w-4 h-4" /> (312) 420-6081
          </a>
          <a href="mailto:4splumbing@gmail.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            <Mail className="w-4 h-4" /> 4splumbing@gmail.com
          </a>
          <div className="flex items-center gap-2 text-primary-foreground/70">
            <MapPin className="w-4 h-4 flex-shrink-0" /> 6807 W. Irving Park Rd., Chicago, IL 60634
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
      © 2026 4S Plumbing Companies, Inc. All rights reserved. Licensed & Insured.
    </div>
  </footer>
);

export default Footer;
