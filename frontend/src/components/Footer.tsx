import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import sinag from "../sinag.svg";

const Footer = () => {
  return (
    <footer id="footer" className="relative py-12 sm:py-16 px-4 sm:px-6 border-t border-glass-border/10 z-10">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 sm:mb-12 gap-8">
          {/* Left: Logo and Tagline */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <img
                src={sinag}
                alt="Sinag Logo"
                className="w-7 h-7 object-contain"
              />
              <span className="text-lg sm:text-xl font-bold text-sinag-text">Sinag</span>
            </div>
            <p className="text-xs sm:text-sm text-sinag-text-muted/60 max-w-xs sm:max-w-md">
              Empowering every Filipino to light up a sustainable tomorrow.
            </p>
          </div>

          {/* Right: Email and Phone */}
          <div className="flex flex-col gap-2">
            <p className="text-xs sm:text-sm text-sinag-text-muted/60">
              <span className="font-medium text-sinag-text">Email:</span> support@sinag.com
            </p>
            <p className="text-xs sm:text-sm text-sinag-text-muted/60">
              <span className="font-medium text-sinag-text">Phone:</span> +63 (2) 1234-5678
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 sm:pt-8 border-t border-glass-border/10 text-xs sm:text-sm text-sinag-text-muted/40">
          <p>Copyright ©2025</p>
          <div className="flex gap-4 sm:gap-8 text-center md:text-right">
            <span>All rights reserved</span>
            <span>Sinag</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
