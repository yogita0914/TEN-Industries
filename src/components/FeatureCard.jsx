import React from "react";
import { motion } from "framer-motion";

export function FeatureCard({ item, index, dark }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5, boxShadow: "0 0 15px 3px #0a9396" }}
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        dark
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border-cyan-600/30 shadow-md hover:shadow-cyan-600"
          : "bg-white border-gray-200 shadow-md hover:shadow-2xl"
      }`}
    >
      <div className="p-6">
        <motion.div className="flex items-center space-x-4">
          <motion.div
            className={`p-3 rounded-lg ${
              dark
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                : "bg-gradient-to-r from-[#0a9396] to-[#3a86ff] text-white"
            }`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {item.icon}
          </motion.div>
          <h3
            className={`text-xl font-semibold ${
              dark ? "text-white" : "text-gray-800"
            }`}
          >
            {item.title}
          </h3>
        </motion.div>

        <p
          className={`mt-4 text-sm leading-relaxed ${
            dark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {item.description}
        </p>

        <motion.button
          className={`mt-6 w-full py-2 px-4 rounded-md font-semibold text-sm shadow transition-all duration-300 ${
            dark
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-cyan-500/70"
              : "bg-gradient-to-r from-[#0a9396] to-[#3a86ff] text-white hover:shadow-lg"
          }`}
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
