import Hero from "../../components/Hero";
import { LandingHeader } from "../../components";
import { useEffect } from "react";

const LandingPage: React.FC = () => {
  useEffect(() => {
    document.title = "Welcome | Sinag";
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden w-full">
      <LandingHeader />
      <Hero />
    </div>
  );
};

export default LandingPage;