import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6'; 

const Footer = () => {
  return (

    <footer className="w-full bg-[#000044] dark:bg-[#0a0c14] py-12 px-6 md:px-12 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <p className="text-zinc-500 dark:text-zinc-600 text-xs font-mono">
          &copy; {new Date().getFullYear()} Idah Abubakar Rex. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <span className="text-[11px] font-mono tracking-wider uppercase text-orange-600 dark:text-orange-500">
            Connect Engine
          </span>

          <div className="flex gap-5 text-lg text-zinc-400 dark:text-zinc-500">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile Pipeline"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="LinkedIn Network Node"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
