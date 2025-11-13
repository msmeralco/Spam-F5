import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-glass-border/10">
      <div className="absolute inset-0 bg-sinag-dark" />
      
      <div className="relative z-10 container mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-sinag-orange-start" />
            <span className="text-xl font-bold text-sinag-text">Sinag</span>
          </div>
          
          <p className="text-sinag-text-muted/60 max-w-md mb-6">
            Empowering every Filipino to light up a sustainable tomorrow.
          </p>

          <Button 
            variant="outline" 
            className="border-glass-border/20 bg-glass-bg/5 text-sinag-text hover:bg-glass-bg/10"
          >
            Shine with Sinag
          </Button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-glass-border/10 text-sm text-sinag-text-muted/40">
          <p>Copyright ©2025</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span>All rights reserved</span>
            <span>Sinag</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
