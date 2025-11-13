import Hero from "../../components/Hero";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import { Header } from "@/components";
import { useEffect } from "react";

const LandingPage: React.FC = () => {
    useEffect(() => {
      document.title = "Welcome | Sinag";
    }, []);

    return (
    <div className="min-h-screen bg-black">
      <Header/>
      <Hero />
    </div>
  );
};

export default LandingPage;