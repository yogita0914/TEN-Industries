import React from "react";
import { motion } from "framer-motion";

export function Hero4() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
              Transformation Journeys at{" "}
              <span className="text-[#005f73]">TEN-Industries</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore real-world success stories from industry leaders and
              professionals who evolved with TEN-Industries through innovation,
              strategy, and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1 */}
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)",
              }}
              className="bg-gradient-to-b from-[#e0f2f1] to-[#ffffff] p-6 rounded-lg border border-blue-100"
            >
              <p className="text-gray-700 italic mb-4">
                "With <strong>ProMach Engineering</strong>, TEN-Industries
                helped us refine our manufacturing workflows and increase
                productivity by 30%."
              </p>
              <p className="font-semibold text-[#005f73]">- Prince</p>
              <p className="text-sm text-gray-500">Chief of Staff</p>
            </motion.div>

            {/* 2 */}
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)",
              }}
              className="bg-gradient-to-b from-[#e0f2f1] to-[#ffffff] p-6 rounded-lg border border-blue-100"
            >
              <p className="text-gray-700 italic mb-4">
                "Our journey with <strong>DataSys Analytics</strong> via
                TEN-Industries elevated our data infrastructure and boosted
                strategic decision-making."
              </p>
              <p className="font-semibold text-[#005f73]">- Himanshu</p>
              <p className="text-sm text-gray-500">Chief of Staff</p>
            </motion.div>

            {/* 3 */}
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)",
              }}
              className="bg-gradient-to-b from-[#e0f2f1] to-[#ffffff] p-6 rounded-lg border border-blue-100"
            >
              <p className="text-gray-700 italic mb-4">
                "Partnering with <strong>HealthTech Systems</strong>, TEN
                streamlined our project management pipelines and scaled clinical
                impact."
              </p>
              <p className="font-semibold text-[#005f73]">- Mounika</p>
              <p className="text-sm text-gray-500">Chief of Staff</p>
            </motion.div>

            {/* 4 */}
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)",
              }}
              className="bg-gradient-to-b from-[#e0f2f1] to-[#ffffff] p-6 rounded-lg border border-blue-100"
            >
              <p className="text-gray-700 italic mb-4">
                "At <strong>AutoNova Robotics</strong>, TEN’s mentorship
                equipped me to lead cross-functional teams toward automation
                excellence."
              </p>
              <p className="font-semibold text-[#005f73]">- Anurag</p>
              <p className="text-sm text-gray-500">Chief of Staff</p>
            </motion.div>

            {/* 5 */}
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)",
              }}
              className="bg-gradient-to-b from-[#e0f2f1] to-[#ffffff] p-6 rounded-lg border border-blue-100"
            >
              <p className="text-gray-700 italic mb-4">
                "TEN-Industries enabled <strong>HRFlow Consulting</strong> to
                implement future-ready HR practices and build leadership
                pipelines."
              </p>
              <p className="font-semibold text-[#005f73]">- Yogita</p>
              <p className="text-sm text-gray-500">Chief of Staff</p>
            </motion.div>

            {/* 6 */}
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)",
              }}
              className="bg-gradient-to-b from-[#e0f2f1] to-[#ffffff] p-6 rounded-lg border border-blue-100"
            >
              <p className="text-gray-700 italic mb-4">
                "Thanks to TEN-Industries and{" "}
                <strong>SkillForge Solutions</strong>, I transitioned into a
                leadership role while scaling learning and development impact."
              </p>
              <p className="font-semibold text-[#005f73]">- Jay</p>
              <p className="text-sm text-gray-500">Chief of Staff</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
