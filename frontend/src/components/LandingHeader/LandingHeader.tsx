import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ConnectButton, darkTheme, useActiveWallet } from "thirdweb/react";
import { client } from "../../client";
import { FiMenu, FiX } from "react-icons/fi";
import sinag from "../../sinag.svg";
import { motion, AnimatePresence } from "framer-motion";
import { isAddress } from "thirdweb/utils";

export default function LandingHeader() {
  const wallet = useActiveWallet();
  const address = wallet?.getAccount()?.address;
  const isConnected = address && isAddress(address);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", action: () => scrollToSection("hero") },
    { label: "Features", action: () => scrollToSection("features") },
    { label: "Contact", action: () => scrollToSection("footer") },
  ];


  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg border-b border-white/5">
        <div className="flex items-center justify-between px-6 sm:px-10 py-4 max-w-7xl mx-auto">
          {/* Left: Logo */}
          <NavLink to='/' className="flex items-center gap-2 text-white">
            <img
              src={sinag}
              alt="Sinag Logo"
              className="w-7 h-7 object-contain"
            />
            <span className="text-xl font-semibold tracking-tight">Sinag</span>
          </NavLink>

          {/* Center: Desktop Navbar */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex flex-1 justify-center ml-10 sm:ml-16"
          >
            <ul className="relative flex flex-wrap justify-center gap-x-3 sm:gap-x-6 items-center">
              {navItems.map((nav) => (
                <li key={nav.label} className="whitespace-nowrap">
                  <button
                    onClick={nav.action}
                    className="relative inline-flex items-center justify-center py-2 rounded-full text-[14px] tracking-[-0.28px] font-normal transition-colors duration-300 px-4 text-white/80 hover:text-white"
                  >
                    {nav.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Panel */}
          <div className="flex items-center gap-3 sm:gap-4 text-white">
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
                      <button
                        onClick={nav.action}
                        className="block w-full text-left py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 text-white/70 hover:text-white hover:bg-white/5"
                      >
                        {nav.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Menu Footer - Connect Button */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                <div className="inline-flex w-full items-center justify-center rounded-[50px] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[inset_0_2px_12px_rgba(255,255,255,0.04)] p-0.5">
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
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}