import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect'; // Correct import

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white flex items-center justify-center overflow-hidden py-20" id="hero-section">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center gap-16">

        {/* Left Side - Circular Image with Glow Shadow */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="rounded-full overflow-hidden shadow-[0_0_60px_rgba(99,102,241,0.4)] p-2 border-4 border-indigo-600">
            <img
              src="/imghero.png" // Ensure the path is correct
              alt="Developer"
              className="w-72 h-72 object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-white">
            <Typewriter
              options={{
                strings: ['Hi, My name is Aditya Kumar', 'Crafting Beautiful Digital Experiences'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-lg mb-8 text-gray-300">
            I'm a passionate web developer, creating seamless and interactive web experiences.
          </p>
          <a
            href="#projects"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
