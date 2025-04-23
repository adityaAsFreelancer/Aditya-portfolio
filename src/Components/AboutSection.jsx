import React from 'react';
import { FaLaptopCode, FaUserCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-6" id="abouts">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Content Area */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Text Content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Hello! I'm a creative and detail-oriented web developer who loves building beautiful, functional websites.
              With a passion for frontend development and a problem-solving mindset, I aim to deliver clean and efficient code.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 text-gray-200">
              <div className="flex items-center gap-3">
                <FaLaptopCode className="text-indigo-400 text-3xl" />
                <span className="text-lg">Frontend Specialist</span>
              </div>
              <div className="flex items-center gap-3">
                <FaUserCheck className="text-green-400 text-3xl" />
                <span className="text-lg">Problem Solver</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="/myimg.JPG"
              alt="About Illustration"
              className="w-full max-w-sm h-auto rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
