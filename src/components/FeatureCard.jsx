import React from "react";
import { motion } from "framer-motion";

export function FeatureCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white overflow-hidden shadow-md rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
    >
      <div className="p-6">
        <motion.div className="flex items-center space-x-4">
          <motion.div
            className="p-3 bg-gradient-to-r from-[#0a9396] to-[#3a86ff] text-white rounded-lg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {item.icon}
          </motion.div>
          <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
        </motion.div>
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>
        <motion.button
          className="mt-6 w-full bg-gradient-to-r from-[#0a9396] to-[#3a86ff] text-white py-2 px-4 rounded-md shadow hover:shadow-lg transition-all duration-300 text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => window.open(item.url, "_blank")}
        >
          Explore Solutions
        </motion.button>
      </div>
    </motion.div>
  );
}
