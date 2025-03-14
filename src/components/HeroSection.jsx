import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "../assets/images/hero.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-black">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        className="z-10 text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-neon-green"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Idah Abubakar Rex
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Full Stack Web Developer crafting high-speed, visually stunning &
          innovative solutions.
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link to="/contact">
            <button className="px-6 py-3 bg-neon-green text-black font-bold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              Contact Now
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
