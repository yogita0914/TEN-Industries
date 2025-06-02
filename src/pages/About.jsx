import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <section className="relative py-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-100 mb-4">
              About <span className="text-[#38bdf8]">TEN-Industries</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              TEN-Industries is a cutting-edge platform dedicated to driving
              innovation in industrial technology. We specialize in empowering
              manufacturers, engineers, and innovators to accelerate industrial
              transformation through smart solutions, advanced resources, and a
              collaborative ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-700 border-gray-500/20 rounded-lg shadow-lg p-8 text-center shadow-blue-200"
            >
              <h2 className="text-3xl font-bold text-[#38bdf8] mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-200">
                We envision an industrial world empowered by innovative
                technologies and sustainable practices that redefine
                manufacturing efficiency and product excellence.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-700 border-gray-500/20 rounded-lg shadow-lg p-8 text-center shadow-blue-200"
            >
              <h2 className="text-3xl font-bold text-[#38bdf8] mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-200 mb-6">
                TEN-Industries provides cutting-edge industrial tools, expert
                guidance, and a collaborative network to enable manufacturers
                and innovators to transform ideas into scalable, high-impact
                industrial solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-[#38bdf8] mb-4">
              Why Choose TEN-Industries?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              We deliver comprehensive industrial innovation solutions —
              combining technology, expertise, and community to accelerate
              growth and operational excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Advanced Technology",
                description:
                  "Leverage state-of-the-art industrial automation, IoT, and AI solutions tailored for modern manufacturing.",
              },
              {
                name: "Industry Expertise",
                description:
                  "Access a network of seasoned engineers, technologists, and consultants with deep industrial knowledge.",
              },
              {
                name: "Collaborative Ecosystem",
                description:
                  "Join an ecosystem of innovators, manufacturers, and investors driving next-gen industrial breakthroughs.",
              },
            ].map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] rounded-lg p-6 text-center shadow-lg border border-[#38bdf8]"
              >
                <h3 className="text-xl font-bold text-[#38bdf8] mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-200">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-100 mb-4">
              Shaping the Future of{" "}
              <span className="text-[#38bdf8]">Industrial Innovation</span>
            </h2>
            <p className="text-lg text-gray-200 mb-6 max-w-3xl mx-auto">
              At TEN-Industries, we are committed to pioneering technological
              advancement and sustainability in industry. Our growing community
              and resources are designed to accelerate industrial transformation
              worldwide.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-600 transition-colors duration-300"
            >
              <a
                href="https://calendly.com/techten/book-a-demo-session"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
