import React from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa6";
import { useTheme } from "../context/ThemeContext";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors shadow-sm"
      aria-label="Toggle structural theme state"
    >
      {isDark ? <FaSun className="text-sm text-amber-400" /> : <FaMoon className="text-sm text-zinc-600" />}
    </motion.button>
  );
};
