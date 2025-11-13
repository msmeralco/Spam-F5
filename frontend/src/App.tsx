import HomeDashboard from "./pages/HomeDashboard";
import { Route, Routes, Navigate } from "react-router-dom";
import { BillTracker, Wallet, Chatbot, Marketplace, Community, Settings, LandingPage } from "./pages";
import { Header } from "./components";
import LightRays from "./components/LightRays";

export function App() {
    return (
        <>
            <Routes>
                {/* Landing page without header/dashboard layout */}
                <Route path="/" element={<LandingPage />} />
                
                {/* Dashboard routes with header and constrained layout */}
                <Route path="/*" element={
                    <>
                        <Header />
                        <main className="relative min-h-screen bg-black text-white overflow-hidden pt-28">
                            {/* Background Light Rays */}
                            <div className="absolute inset-0 z-0 pointer-events-none">
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
                                    className="custom-rays absolute inset-0"
                                />
                            </div>
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
                } />
            </Routes>
        </>
    );
}


