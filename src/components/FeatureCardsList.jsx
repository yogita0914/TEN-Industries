import React, { useState } from "react";
import { FeatureCard } from "./FeatureCard";
import { menuItems } from "../data/MenuItems";

function FeatureCardsList({ featureCardRef }) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? menuItems : menuItems.slice(0, 6);

  return (
    <div ref={featureCardRef} className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Discover TEN-Industries Capabilities
        </h2>
        <p className="mt-2 text-gray-600">
          Explore innovative solutions driving digital transformation across
          industries.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((item, index) => (
          <FeatureCard key={index} item={item} index={index} />
        ))}
      </div>

      {menuItems.length > 6 && !showAll && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-gradient-to-r from-[#0a9396] to-[#3a86ff] text-white cursor-pointer py-2 px-8 rounded-full shadow hover:shadow-xl transition-all duration-300 text-sm tracking-wide uppercase"
          >
            Explore All Features
          </button>
        </div>
      )}
    </div>
  );
}

export default FeatureCardsList;
