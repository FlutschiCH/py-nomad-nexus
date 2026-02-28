import React from "react";
// Use the @ alias to point directly to the src folder
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Features } from "@/components/layout/Features";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="min-h-screen bg-[#050805]">
      <Navbar />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  );
}

export default App;
