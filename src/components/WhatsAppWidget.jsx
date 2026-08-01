import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const whatsappNumbers = [
  { label: 'Primary Telephony', number: '2348175225016', name: '+234 817 522 5016' },
  { label: 'Secondary Telephony', number: '2349110451187', name: '+234 911 045 1187' },
];

const WhatsAppWidget = () => {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  return (
    <div className="fixed top-[calc(100vh-88px)] right-6 z-50 flex flex-col items-end gap-3 font-sans selection:bg-emerald-200 dark:selection:bg-emerald-800">
      <AnimatePresence>
        {isWhatsAppOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl rounded-2xl p-4 w-64 flex flex-col gap-2.5 backdrop-blur-md"
          >
            <div className="border-b border-zinc-100 dark:border-zinc-800 pb-2 mb-1">
              <h4 className="text-[10px] font-mono uppercase tracking-wider text-[var(--g)]">
                Instant Channel Select
              </h4>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                Pick a representative line:
              </p>
            </div>

            {whatsappNumbers.map((account, index) => (
              <motion.a
                key={index}
                href={`https://wa.me{account.number}?text=Hello,%20I'm%20reaching%20out%20from%20your%20website.`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800/60 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:bg-emerald-50/20 dark:hover:bg-emerald-950/10 transition group"
              >
                <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  <FaWhatsapp className="text-base" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-mono tracking-tight leading-none mb-1">
                    {account.label}
                  </span>
                  <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors font-mono tracking-tight">
                    {account.name}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-4 text-white rounded-full shadow-lg flex items-center justify-center transition-colors ${isWhatsAppOpen
          ? 'bg-zinc-800 dark:bg-zinc-200 !text-white dark:!text-black'
          : 'bg-[#25D366] hover:bg-emerald-500'
        }`}
        title="Chat with us"
      >
        <motion.div
          animate={{ rotate: isWhatsAppOpen ? 135 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <FaWhatsapp className="text-2xl" />
        </motion.div>
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;
