import HomeDashboard from "./pages/HomeDashboard";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  BillTracker,
  Wallet,
  Chatbot,
  Marketplace,
  Community,
  Settings,
  LandingPage,
} from "./pages";
import { Header } from "./components";
import LightRays from "./components/LightRays";

export function App() {
  return (
    <>
      <Routes>
        {/* Landing page without header/dashboard layout */}
        <Route path="/" element={<LandingPage />} />

        {/* Dashboard routes with header and constrained layout */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <main className="relative min-h-screen bg-black text-white overflow-hidden pt-28">
                {/* BACKGROUND CONTAINER 
                  This div holds all background effects (glassmorphism, rays, glows)
                  and is placed at z-0, behind the content.
                */}
                <div className="absolute inset-0 z-0">
                  {/* Glassmorphic vertical rectangles (Copied from Hero.tsx) */}
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute rounded-xl bg-glass-bg/4 border border-glass-border/5 backdrop-blur-3xl"
                      style={{
                        width: "336px",
                        height: "900px",
                        top: 0,
                        left: `${i * 25}%`,
                        WebkitMaskImage:
                          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                        maskImage:
                          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "100% 100%",
                        maskSize: "100% 100%",
                      }}
                    />
                  ))}

                  {/* LightRays (Copied from Hero.tsx) */}
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
                    className="custom-rays absolute inset-0 z-10" // z-10 to be on top of glass rects
                  />

                  {/* Original Background glows (Moved inside) */}
                  <div className="absolute inset-0"></div>
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"></div>
                </div>

                {/* CONTENT CONTAINER
                  This div holds the actual page content (routes)
                  and is placed at z-10 to be on top of the background.
                */}
                <div className="relative z-10 p-6 max-w-7xl mx-auto">
                  <Routes>
                    <Route path="/dashboard" element={<HomeDashboard />} />
                    <Route path="/billtracker" element={<BillTracker />} />
                    <Route path="/chatbot" element={<Chatbot />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </div>
              </main>
            </>
          }
        />
      </Routes>
    </>
  );
}