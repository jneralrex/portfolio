import React, { useLayoutEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Footer from '../Footer';
import Navbar from '../Navbar';
import WhatsAppWidget from '../WhatsAppWidget';

const RootLayout = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  return (
    
    <div className="backdrop-blur-xl text-zinc-800 dark:text-[#F4F4F6] min-h-screen flex flex-col selection:bg-zinc-200 dark:selection:bg-zinc-700 selection:text-zinc-900 dark:selection:text-white font-sans antialiased overflow-x-hidden relative">
      
      <Navbar />
      
      <main className="flex-grow pt-[65px] relative z-10 w-full flex flex-col">
        <Outlet /> 
      </main>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default RootLayout;
