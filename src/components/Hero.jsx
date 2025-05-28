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
    <header className="bg-gradient-to-b from-gray-100 via-[#e0f2f1] to-[#ffffff] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Driving <span className="text-[#005f73]">Industrial Growth</span>,
          <br /> Empowering{" "}
          <span className="text-[#0a9396]">Innovative Solutions</span>
        </motion.h1>

        <motion.p
          className="text-xl mt-6 max-w-3xl mx-auto text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TEN-Industries bridges enterprises and innovation — enabling
          industries to scale smarter with advanced technologies, partnerships,
          and tailored business solutions.
        </motion.p>

        <motion.p
          className="text-lg mt-4 max-w-2xl mx-auto text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We provide industrial acceleration programs, expert consulting,
          strategic B2B connections, and access to capital and manufacturing
          infrastructure.
        </motion.p>

        <motion.button
          className="mt-10 bg-gradient-to-r from-[#005f73] to-[#0a9396] text-white px-8 py-3 cursor-pointer rounded-full font-semibold text-lg shadow-md hover:bg-[#00787b] transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/opportunities")}
        >
          Discover Industrial Solutions
        </motion.button>
      </div>
    </header>
  );
}
