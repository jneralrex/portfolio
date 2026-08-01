import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa6";

export const ThemeToggle = ({theme, toggleTheme}) => {
 const [themeState, setThemeState] = useState(() => {
    return theme || document.documentElement.getAttribute('data-theme') || localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    if (theme) {
      setThemeState(theme);
    }
  }, [theme]);

  const handleToggleTheme = () => {
    const newTheme = themeState === 'dark' ? 'light' : 'dark';
    setThemeState(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    if (toggleTheme) {
      toggleTheme();
    }
  };

  return (
    <motion.button
       onClick={handleToggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors shadow-sm"
      aria-label="Toggle structural theme state"
    >
      {themeState === 'dark' ? <FaSun className="text-sm text-amber-400" /> : <FaMoon className="text-sm text-zinc-600" />}
    </motion.button>
  );
};
