import { Sparkles, FileText, PieChart, Crown, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import LightRays from './LightRays';
import { ConnectButton, darkTheme, useActiveWallet } from "thirdweb/react";
import { client } from "../client"
import { isAddress } from "thirdweb/utils";
import sinag from "../sinag.svg";
import Footer from "./Footer";

const features = [
  {
    icon: PieChart,
    title: "Real-Time Insights Preview",
    description: "Get instant visibility into your energy consumption and savings with live analytics.",
    detail: "See your own numbers live.",
  },
  {
    icon: Crown,
    title: "Rewards & Token System",
    description: "Earn tokens as you save energy and unlock exciting rewards.",
    detail: "Start earning tokens today.",
  },
  {
    icon: Users,
    title: "Community Impact Tracker",
    description: "Monitor how your actions contribute to a greener, more sustainable community.",
    detail: "Join households building a low-carbon future.",
  },
];

const Hero = () => {
  const wallet = useActiveWallet();
  const address = wallet?.getAccount()?.address;
  const isConnected = address && isAddress(address);

  return (
    <div className="relative bg-gradient-to-br from-sinag-dark via-sinag-dark">
      {/* Shared Background */}
      <div className="absolute inset-0 z-0">
        {/* Glassmorphic vertical rectangles */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute rounded-xl bg-glass-bg/4 border border-glass-border/5 backdrop-blur-3xl"
          style={{
            width: "336px",
            height: "900px",
            top: 0, 
            left: `${i * 25}%`,
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          }}
        />
      ))}

      <LightRays
        raysOrigin="top-center"
        raysColor="#FDA205"
        raysSpeed={1.5}
        lightSpread={1.3}
        rayLength={0.7}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays absolute inset-0 z-10"
      /> 

        {/* Radial Gradient Circle at top */}
        {/* <div
          className="absolute -top-[360px] left-1/2 -translate-x-1/2 w-[1440px] h-[720px] rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, #FDA205 0%, transparent 60%)" }}
        /> */}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen sm:min-h-[80vh] flex items-center justify-center overflow-hidden z-10 pt-10 sm:pt-24 pb-12 sm:pb-0">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          {/* Glassmorphic Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full backdrop-blur-md bg-glass-bg/5 border border-glass-border/5 mb-6 sm:mb-8 tracking-tight"
          style={{
            boxShadow: "inset 0 2px 12px rgba(255, 255, 255, 0.04)"
          }}
        >
          <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-[#FDA205]" />
          <span className="text-xs sm:text-sm text-[#B4AFA8] font-secondary">Light Up With Sinag</span>
        </div>

          {/* Heading */}
          <h1
            className="text-5xl sm:text-7xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent leading-tight tracking-tight"
            style={{
              backgroundImage: "linear-gradient(to bottom, #B4AFA8 0%, #E5E5E5 56%, #E5E5E5 75%, #FFFFFF 100%)",
            }}
          >
            Save Power, Earn Tokens,<br />
            Make An Impact with Sinag
          </h1>

          {/* Description */}
          <p className="font-secondary text-sm sm:text-base md:text-lg text-sinag-text-muted/70 mb-8 sm:mb-10 max-w-2xl sm:max-w-4xl mx-auto tracking-tight px-2 sm:px-0">
            Sinag helps you track your Meralco consumption, save electricity, and earn eco-rewards.
          </p>

          {/* CTA Button with Zap Icon and Connect Wallet */}
          {isConnected ? (
            <button className="h-10 sm:h-12 md:h-[45px] px-6 sm:px-8 bg-gradient-to-b from-sinag-orange-start to-sinag-orange-end hover:opacity-90 transition-opacity rounded-[50px] text-black font-medium text-sm sm:text-base shadow-lg shadow-sinag-orange-start/20 flex items-center justify-center gap-2 w-fit mx-auto">
              <Zap className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
              <span>Start With Sinag</span>
            </button>
          ) : (
            <div className="h-10 sm:h-12 md:h-[45px] px-6 sm:px-8 bg-gradient-to-b from-sinag-orange-start to-sinag-orange-end hover:opacity-90 transition-opacity rounded-[50px] text-black font-medium text-sm sm:text-base shadow-lg shadow-sinag-orange-start/20 flex items-center justify-center gap-2 w-fit mx-auto">
              <Zap className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
              <ConnectButton
                client={client}
                theme={darkTheme({
                  colors: {
                    primaryButtonText: "#000000",
                    primaryButtonBg: "transparent",
                    secondaryButtonHoverBg: "rgba(0, 0, 0, 0.1)",
                  },
                })}
                connectButton={{
                  label: "Start With Sinag",
                }}
              />
            </div>
          )}           
        </div>
      </section>

      {/* Features Section */}
    <section className="relative py-8 sm:py-16 lg:py-24 px-4 sm:px-6 z-10">
      {/* Right-side Light Rays */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 z-0 pointer-events-none h-full">
      </div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-t from-sinag-text via-sinag-text/70 to-sinag-text/80 bg-clip-text text-transparent leading-tight">
          Light up your world with<br className="hidden sm:inline" />
          <span className="block sm:inline"> Sinag's core features</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-auto sm:h-72 rounded-2xl backdrop-blur-md bg-glass-bg/4 border border-glass-border/5 p-6 sm:p-8 hover:bg-glass-bg/5 transition-all duration-300"
            >
              <div className="mb-4 sm:mb-6">
                <div className="inline-flex p-2 sm:p-3 rounded-lg">
                  <feature.icon className="w-5 sm:w-6 h-5 sm:h-6 text-sinag-orange-start" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-sinag-text mb-3 sm:mb-4 text-left">{feature.title}</h3>
              <p className="text-xs sm:text-sm font-secondary text-sinag-text-muted/60 mb-4 sm:mb-6 text-left line-clamp-3 sm:line-clamp-none">{feature.description}</p>
              <p className="text-xs sm:text-sm font-secondary text-sinag-text-muted/80 text-left">{feature.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  <Footer />
    </div>
  );
};

export default Hero;
