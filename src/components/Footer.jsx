import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export function Footer({ menuItems = [] }) {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h4 className="text-2xl font-extrabold mb-5 text-cyan-400">
              TEN-Industries
            </h4>
            <p className="leading-relaxed text-gray-400">
              TEN-Industries is at the forefront of industrial innovation,
              delivering smart automation, IoT solutions, and digital
              transformation services that empower businesses to optimize
              operations and accelerate growth.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-extrabold mb-5 text-cyan-400">
              Quick Links
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.12 }}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 underline-offset-4 hover:underline"
                    aria-label={`Visit ${item.title}`}
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-extrabold mb-5 text-cyan-400">
              Contact Us
            </h4>
            <motion.div
              className="space-y-3 text-gray-400"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex space-x-8 text-3xl">
                <a
                  href="mailto:info@entrepreneurshipnetwork.net"
                  aria-label="Email"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  <FaEnvelope />
                </a>
                <a
                  href="https://www.linkedin.com/company/the-entrepreneurship-network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p>
            &copy; {new Date().getFullYear()} TEN-Industries. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
