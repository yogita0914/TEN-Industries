import React from "react";
import { motion } from "framer-motion";
import { Factory, Handshake, Wrench } from "lucide-react";

export function Hero2() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {[ 
            { icon: <Factory />, title: "250+", desc: "Industries Empowered" },
            { icon: <Handshake />, title: "400+", desc: "Strategic Partnerships" },
            { icon: <Wrench />, title: "300+", desc: "Engineers & Technologists" }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4 text-cyan-400">
                {React.cloneElement(item.icon, { className: "w-12 h-12" })}
              </div>
              <h3 className="text-4xl font-bold mb-2 text-cyan-300 drop-shadow-sm">
                {item.title}
              </h3>
              <p className="text-lg text-gray-300 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
