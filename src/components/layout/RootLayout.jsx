import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../Footer';
import Navbar from '../Navbar';

const RootLayout = () => {
  return (
    
    <div className="bg-[#F9F9FB] dark:bg-[#0B0C10] text-zinc-800 dark:text-[#F4F4F6] min-h-screen flex flex-col selection:bg-zinc-200 dark:selection:bg-zinc-700 selection:text-zinc-900 dark:selection:text-white font-sans antialiased overflow-x-hidden relative">
      
      <Navbar />
      
      <main className="flex-grow pt-[65px] relative z-10 w-full flex flex-col">
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
