import React, { useState } from "react";
import { FeatureCard } from "./FeatureCard";
import { menuItems } from "../data/MenuItems";

function FeatureCardsList({ featureCardRef }) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? menuItems : menuItems.slice(0, 6);

  return (
    <div
      ref={featureCardRef}
      className="w-full max-w-7xl mx-auto px-6 py-16"
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wide">
          Discover TEN-Industries Capabilities
        </h2>
        <p className="mt-3 text-lg text-gray-300 max-w-xl mx-auto">
          Explore innovative solutions driving digital transformation across industries.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleItems.map((item, index) => (
          <FeatureCard key={index} item={item} index={index} dark />
        ))}
      </div>

      {menuItems.length > 6 && !showAll && (
        <div className="flex justify-center mt-14">
          <button
            onClick={() => setShowAll(true)}
            className="px-10 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold tracking-wide uppercase shadow-lg hover:shadow-cyan-500/70 transition duration-300"
          >
            Explore All Features
          </button>
        </div>
      )}
    </div>
  );
}

export default FeatureCardsList;
