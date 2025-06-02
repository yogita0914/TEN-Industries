import React, { useRef } from "react";
import { Hero } from "../components/Hero";
import { Hero2 } from "../components/Hero2";
import { Hero3 } from "../components/Hero3";
import { Hero4 } from "../components/Hero4";
import FeatureCardsList from "../components/FeatureCardsList";

export function Home() {
  const featureCardRef = useRef(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <Hero featureCardRef={featureCardRef} />
      <Hero2 />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeatureCardsList featureCardRef={featureCardRef} />
      </main>

      <Hero4 />

      <Hero3 featureCardRef={featureCardRef} />
    </div>
  );
}

export default Home;
