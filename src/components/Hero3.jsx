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
    <section className="py-20 bg-gradient-to-b from-[#e0f2f1] to-[#ffffff] text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Transform Your <span className="text-[#0a9396]">Industry</span> with{" "}
            <span className="text-[#0a9396]">TEN-Industries</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join a robust ecosystem of innovators, engineers, and corporate
            leaders. Elevate your operations with advanced infrastructure,
            expert consultation, and strategic industrial partnerships.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#0a9396] to-[#3a86ff] text-white px-8 py-3 cursor-pointer rounded-full font-semibold text-lg shadow-md transition-colors duration-300"
              onClick={scrollToFeatureCards}
            >
              Collaborate with TEN
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
