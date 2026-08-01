import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
 
  return (
    <header className="fixed top-0 left-0 w-full bg-[#F9F9FB]/60 dark:bg-[#0B0C10]/60 backdrop-blur-xl border-b border-zinc-200/60 dark:border-zinc-800/50 py-4 px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center z-50">
      <Link to="/" className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white hover:opacity-80 transition">
        Idah Abubakar
      </Link>
      <nav className="flex items-center gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
        <Link to="/projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Projects</Link>
        <Link to="/about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</Link>
        <Link to="/contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Contact</Link>
      
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
