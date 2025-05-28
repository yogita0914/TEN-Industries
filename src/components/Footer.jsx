import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export function Footer({ menuItems = [] }) {
  return (
    <footer className="bg-gradient-to-r from-[#005f73] to-[#0a9396] text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h4 className="text-xl font-semibold mb-4">TEN-Industries</h4>
            <p className="text-gray-300 leading-relaxed">
              TEN-Industries is at the forefront of industrial innovation,
              delivering smart automation, IoT solutions, and digital
              transformation services that empower businesses to optimize
              operations and accelerate growth.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    aria-label={`Visit ${item.title}`}
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <motion.div
              className="text-gray-300 space-y-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mt-4 flex space-x-6 text-2xl">
                <a
                  href="mailto:info@entrepreneurshipnetwork.net"
                  aria-label="Email"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  <FaEnvelope />
                </a>
                <a
                  href="https://www.linkedin.com/company/the-entrepreneurship-network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="mt-10 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
