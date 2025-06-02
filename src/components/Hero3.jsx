import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Hero3({ featureCardRef }) {
  const scrollToFeatureCards = () => {
    const offset = 80;
    const elementPosition = featureCardRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-sm">
            Transform Your <span className="text-[#3b82f6]">Industry</span> with{" "}
            <span className="text-[#22d3ee]">TEN-Industries</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join a robust ecosystem of innovators, engineers, and corporate
            leaders. Elevate your operations with advanced infrastructure,
            expert consultation, and strategic industrial partnerships.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToFeatureCards}
              className="bg-white/10 border border-white/10 backdrop-blur-md text-cyan-300 px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Collaborate with TEN
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
