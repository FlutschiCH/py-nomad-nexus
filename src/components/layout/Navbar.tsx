import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="bg-emerald-950/10 border-emerald-900/20 backdrop-blur-lg w-full max-w-7xl px-6 py-3 rounded-3xl flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rotate-45" />
          </div>
          <span className="text-white tracking-tight font-semibold text-xl">
            Nexus
          </span>
        </div>

        {/* Navigation Links - AI will likely add more here */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            About
          </a>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Button
            variant="glass"
            className="hidden sm:flex border-none hover:bg-transparent"
          >
            Log in
          </Button>
          <Button variant="primary">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};
