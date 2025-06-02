import React from "react";
import { motion } from "framer-motion";

export function Hero4() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-10 md:p-14"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
              Impact Stories at{" "}
              <span className="text-[#3a86ff]">TEN-Industries</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how industry pioneers transformed operations, scaled
              innovation, and led future-ready strategies with TEN-Industries'
              support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                    "With TEN Education, TEN-Industries helped us refine workflows and boost productivity by 30%.",
                name: "Prince",
              },
              {
                quote:
                    "Our journey with TEN ART via TEN-Industries elevated our data infrastructure.",
                name: "Himanshu",
              },
              {
                quote:
                    "Partnering with TEN Health, TEN streamlined project pipelines and scaled impact.",
                name: "Mounika",
              },
              {
                quote:
                    "At TEN AI, TEN’s mentorship helped me lead automation teams efficiently.",
                name: "Anurag",
              },
              {
                quote:
                  "TEN-Industries enabled HR Consulting to implement future-ready HR practices.",
                name: "Yogita",
              },
              {
                quote:
                  "Thanks to TEN-Industries and TEN Blockchain, I stepped into a leadership role.",
                name: "Jay",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border-gray-600/30 shadow-md hover:shadow-gray-600 p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <p className="text-gray-200 italic mb-4">“{item.quote}”</p>
                <p className="font-semibold text-cyan-400">- {item.name}</p>
                <p className="text-sm text-gray-300">Chief of Staff</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
