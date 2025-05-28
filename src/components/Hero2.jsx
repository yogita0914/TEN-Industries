import React from "react";
import { motion } from "framer-motion";
import { Factory, Handshake, Wrench } from "lucide-react"; 

export function Hero2() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#e0f2f1] to-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Factory className="w-12 h-12 mb-4 text-[#0a9396]" />
              <h3 className="text-4xl font-extrabold mb-2 text-[#005f73]">
                250+
              </h3>
              <p className="text-lg text-[#005f73] font-medium">
                Industries Empowered
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Handshake className="w-12 h-12 mb-4 text-[#0a9396]" />
              <h3 className="text-4xl font-extrabold mb-2 text-[#005f73]">
                400+
              </h3>
              <p className="text-lg text-[#005f73] font-medium">
                Strategic Partnerships
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <Wrench className="w-12 h-12 mb-4 text-[#0a9396]" />
              <h3 className="text-4xl font-extrabold mb-2 text-[#005f73]">
                300+
              </h3>
              <p className="text-lg text-[#005f73] font-medium">
                Engineers & Technologists
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
