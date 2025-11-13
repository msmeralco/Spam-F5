import React from "react";
import { NavLink } from "react-router-dom";
import { ConnectButton, darkTheme, useActiveWallet } from "thirdweb/react";
import { client } from "../../client";
import { FiSettings } from "react-icons/fi";
import { FaWallet } from "react-icons/fa";
import sinag from "../../sinag.svg";

export default function Header() {
  const wallet = useActiveWallet();

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg border-b border-white/5">
      <div className="flex items-center justify-between px-6 sm:px-10 py-4 max-w-7xl mx-auto">
        {/* 🔆 Left: Title */}
         <div className="flex items-center gap-2 text-white">
          <img
            src={sinag}
            alt="Sinag Logo"
            className="w-7 h-7 object-contain" // ✅ Adjust size as needed
          />
          <span className="text-xl font-semibold tracking-tight">Sinag</span>
        </div>

        {/* 🧭 Center: Navbar (shifted slightly right) */}
        <nav
          aria-label="Main navigation"
          className="flex flex-1 justify-center ml-10 sm:ml-16"
        >
          <ul className="flex flex-wrap justify-center gap-x-3 sm:gap-x-6 items-center">
            {[
              { label: "Dashboard", to: "/dashboard" },
              { label: "Community", to: "/community" },
              { label: "Bill Tracker", to: "/billtracker" },
              { label: "Marketplace", to: "/marketplace" },
            ].map((nav) => (
              <li key={nav.label} className="whitespace-nowrap">
                <NavLink
                  to={nav.to}
                  end={nav.to === "/dashboard"}
                  className={({ isActive }) =>
                    `inline-flex items-center justify-center py-2 rounded-full text-[14px] tracking-[-0.28px] font-normal transition ${
                      isActive
                        ? "bg-white/10 border border-white/10 text-white px-4"
                        : "text-white/80 px-3 hover:text-white"
                    }`
                  }
                >
                  {nav.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/*Right Panel */}
        <div className="flex items-center gap-3 sm:gap-4 text-white">
          <NavLink to="/wallet" 
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
            <FaWallet size={18} />
          </NavLink>

          <NavLink
            to="/settings"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
          >
            <FiSettings size={18} />
          </NavLink>
          
          <ConnectButton
            client={client}
            theme={darkTheme({
              colors: {
                primaryButtonText: "hsl(0, 100%, 99%)",
                primaryButtonBg: "hsl(0, 0%, 11%)",
                secondaryButtonHoverBg: "hsl(228, 2%, 28%)",
              },
            })}
            connectButton={{
            label: "Connect Wallet",
            }}
           />
        </div>  
      </div>
    </header>
  );
}
