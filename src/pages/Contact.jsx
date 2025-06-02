import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "f4a1814b-741b-4320-996e-6cc50d711831");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <section className="relative py-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-200 mb-4">
              Contact <span className="text-[#22d3ee]">TEN-Industries</span>
            </h1>
            <p className="text-lg text-gray-200">
              Reach out to us for partnerships, industrial solutions, or any
              inquiries. We're here to support your innovation journey.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border-gray-600/30 rounded-lg shadow-lg p-8 text-center border border-gray-200"
            >
              <h2 className="text-3xl font-bold text-gray-200 mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-[#22d3ee] mb-6">
                Whether you have questions, project ideas, or partnership
                proposals — we’re just a message away. Let’s build a sustainable
                industrial future together.
              </p>

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 text-gray-200"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 text-gray-200"
                  />
                  <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-400 text-gray-200"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-200 transition-colors duration-300"
                >
                  Submit Form
                </motion.button>
              </form>

              <span className="block mt-4 text-blue-700">{result}</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Contact TEN-Industries"
                className="object-cover w-full h-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
        <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-200 mb-4">
              Join the{" "}
              <span className="text-[#22d3ee]">TEN-Industries Network</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Let’s collaborate and drive industrial innovation, sustainability,
              and growth together.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-200 transition-colors duration-300"
            >
              <a
                href="https://calendly.com/ten-industries/book-a-demo-session"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Us
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
