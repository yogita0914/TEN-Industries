import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaRocket, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Opportunities() {
  return (
    <div className="relative min-h-screen  bg-gradient-to-b from-[#e0f2f1] to-[#ffffff]">
      <div className="absolute inset-0 bg-[url('/textures/metal-grid.svg')] opacity-10 pointer-events-none" />

      <div className="relative z-10 py-20 px-6 max-w-7xl mx-auto space-y-24">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-[#005f73]">
            Explore{" "}
            <span className="text-gray-700">
              Advanced Industrial Opportunities
            </span>
          </h1>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Drive innovation in manufacturing, automation, and technology with
            TEN-Industries’ incubation, expert mentorship, and resource access.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-[#005f73] mb-8 text-center">
            What You’ll Gain
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-b from-[#e0f2f1] to-[#ffffff] rounded-xl p-6 shadow-md"
            >
              <FaUserTie className="text-4xl text-[#005f73] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#005f73]">
                Expert Mentorship
              </h3>
              <p className="text-gray-700 text-sm">
                Collaborate with industry veterans specializing in industrial
                engineering, IoT, and smart manufacturing.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-gradient-to-b from-[#e0f2f1] to-[#ffffff] rounded-xl p-6 shadow-md"
            >
              <FaRocket className="text-4xl text-[#005f73] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#005f73]">
                Strategic Partnerships
              </h3>
              <p className="text-gray-700 text-sm">
                Connect with industrial investors, technology partners, and
                accelerator programs focused on scalable industrial solutions.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-gradient-to-b from-[#e0f2f1] to-[#ffffff] rounded-xl p-6 shadow-md"
            >
              <FaTools className="text-4xl text-[#005f73] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-[#005f73]">
                Industrial Infrastructure
              </h3>
              <p className="text-gray-700 text-sm">
                Access state-of-the-art workshops, prototyping labs, software
                tools, and compliance resources.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold text-[#005f73] mb-4">
            <span className="text-gray-700">Industrial</span> Incubation Impact
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Over 150+ industrial startups accelerated and 700+ professionals
            trained in cutting-edge manufacturing, automation, and Industry 4.0
            technologies. TEN-Industries empowers innovation with tailored
            mentorship, robust resources, and a global collaborative network.
          </p>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} className="text-center">
          <h3 className="text-2xl text-[#005f73] font-bold mb-4">
            Ready to Power the Future?
          </h3>
          <Link to="/contact">
            <button className="bg-gradient-to-r from-[#005f73] to-[#0a9396] text-white cursor-pointer hover:from-blue-700 hover:to-teal-800 px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
              Apply for Industrial Incubation
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <p className="text-sm text-gray-700">
            For inquiries, email us at{" "}
            <a
              href="mailto:info@entrepreneurshipnetwork.net"
              className="underline text-blue-400 hover:text-purple-300"
            >
              click me 
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
