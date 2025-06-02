import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function Hero({ featureCardRef }) {
  const scrollToHero2 = () => {
    const offset = 80;
    const elementPosition = featureCardRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const navigate = useNavigate();

  return (
    <header className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 text-center backdrop-blur-md bg-white/5 rounded-xl shadow-xl border border-white/10">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Driving <span className="text-[#38bdf8] drop-shadow">Industrial Growth</span>,<br />
          Empowering <span className="text-[#22d3ee] drop-shadow">Innovative Solutions</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl mt-6 max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          TEN-Industries bridges enterprises and innovation — enabling industries
          to scale smarter with advanced technologies, partnerships, and tailored
          business solutions.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg mt-4 max-w-2xl mx-auto text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          We provide industrial acceleration programs, expert consulting,
          strategic B2B connections, and access to capital and manufacturing
          infrastructure.
        </motion.p>

        <motion.button
          className="mt-10 px-10 py-3 rounded-full font-semibold text-lg bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg hover:shadow-xl hover:from-cyan-400 hover:to-blue-500 transition duration-300 text-white ring-1 ring-cyan-400/50 backdrop-blur"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/opportunities")}
        >
          🚀 Discover Industrial Solutions
        </motion.button>
      </div>
    </header>
  );
}
