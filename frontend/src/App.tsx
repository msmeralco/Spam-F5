
import HomeDashboard from "./pages/HomeDashboard";
import { Route, Routes, Navigate } from "react-router-dom";
import { BillTracker, Wallet, Chatbot, Marketplace, Community, Settings } from "./pages";
import { Header } from "./components";


export function App() {
	return (
		<>
			<Header />
		<main className="relative min-h-screen bg-black text-white overflow-hidden pt-28">
			{/* 🔶 Background glow */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#FE9126]/25 via-[#050505]/25 to-transparent blur-1xl"></div>
      		<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-radial from-[#ff8a00]/25 to-transparent blur-[200px] rounded-full"></div>
			<div className="relative z-10 p-6 max-w-7xl mx-auto">
				<Routes>
					<Route path="/dashboard" element={<HomeDashboard />} />
					<Route path="/billtracker" element={<BillTracker />} />
					<Route path="/chatbot" element={<Chatbot />} />
					<Route path="/wallet" element={<Wallet />} />
					<Route path="/marketplace" element={<Marketplace />} />
					<Route path="/community" element={<Community />} />
					<Route path="/settings" element={<Settings />} />
					{/* default redirect from root to dashboard */}
					<Route path="/" element={<Navigate to="/dashboard" replace />} />
				</Routes>
			</div>
		</main>
		</>
	);
}


