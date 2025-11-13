import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ConnectButton, darkTheme, useActiveWallet } from "thirdweb/react";
import { client } from "../../client";
import { FiSettings, FiMenu, FiX } from "react-icons/fi";
import { FaWallet } from "react-icons/fa";
import sinag from "../../sinag.svg";
import { motion, AnimatePresence } from "framer-motion";
import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

export default function Header() {
  const wallet = useActiveWallet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Community", to: "/community" },
    { label: "Bill Tracker", to: "/billtracker" },
    { label: "Rewards", to: "/marketplace" },
  ];


  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg border-b border-white/5">
        <div className="flex items-center justify-between px-6 sm:px-10 py-4 max-w-7xl mx-auto">
          {/* Left: Logo */}
          <div className="flex items-center gap-2 text-white">
            <img
              src={sinag}
              alt="Sinag Logo"
              className="w-7 h-7 object-contain"
            />
            <span className="text-xl font-semibold tracking-tight">Sinag</span>
          </div>

          {/* Center: Desktop Navbar */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex flex-1 justify-center ml-10 sm:ml-16"
          >
            <ul className="relative flex flex-wrap justify-center gap-x-3 sm:gap-x-6 items-center">
              {navItems.map((nav) => (
                <li key={nav.label} className="whitespace-nowrap">
                  <NavLink
                    to={nav.to}
                    end={nav.to === "/dashboard"}
                    className={({ isActive }) =>
                      `relative inline-flex items-center justify-center py-2 rounded-full text-[14px] tracking-[-0.28px] font-normal transition-colors duration-300 px-4 ${
                        isActive ? "text-white" : "text-white/80 hover:text-white"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {nav.label}
                        {isActive && (
                          <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                            style={{ borderRadius: 9999 }}
                            transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Panel */}
          <div className="flex items-center gap-3 sm:gap-4 text-white">
            {/* Desktop Icons */}
            <NavLink
              to="/wallet"
              className="hidden md:flex p-2 rounded-full bg-white/5 hover:bg-white/10 transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <FaWallet size={18} />
            </NavLink>
            <NavLink
              to="/settings"
              className="hidden md:flex p-2 rounded-full bg-white/5 hover:bg-white/10 transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <FiSettings size={18} />
            </NavLink>

            {/* Connect Wallet Button */}
            <div className="inline-flex items-center justify-center rounded-[50px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[inset_0_2px_12px_rgba(255,255,255,0.04)] p-0.5">
              <ConnectButton
                client={client}
                theme={darkTheme({
                  colors: {
                    primaryButtonText: "hsl(0, 100%, 99%)",
                    primaryButtonBg: "hsla(0, 0%, 0%, 0.00)",
                    secondaryButtonHoverBg: "hsl(228, 2%, 28%)",
                  },
                })}
                connectButton={{
                  label: "Connect Wallet",
                }}
              />
            </div>

            {/* Hamburger Menu Button (Mobile & Tablet) */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Hamburger Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-black/90 backdrop-blur-xl border-l border-white/10 z-50 lg:hidden shadow-2xl"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
                  aria-label="Close menu"
                >
                  <FiX size={24} className="text-white" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="px-6 py-4">
                <ul className="space-y-2">
                  {navItems.map((nav) => (
                    <li key={nav.label}>
                      <NavLink
                        to={nav.to}
                        end={nav.to === "/dashboard"}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `block py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 ${
                            isActive
                              ? "bg-white/10 text-white border border-white/10"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`
                        }
                      >
                        {nav.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Menu Footer - Icons */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                <div className="flex gap-3">
                  <NavLink
                    to="/wallet"
                    onClick={closeMenu}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 text-white"
                  >
                    <FaWallet size={18} />
                    <span className="text-sm font-medium">Wallet</span>
                  </NavLink>
                  <NavLink
                    to="/settings"
                    onClick={closeMenu}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 text-white"
                  >
                    <FiSettings size={18} />
                    <span className="text-sm font-medium">Settings</span>
                  </NavLink>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}