import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { businessDetails } from '../config/businessDetails';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={businessDetails.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-24 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors items-center justify-center cursor-pointer group"
      aria-label="Contact us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle size={28} className="fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium">
        Confidential Chat
      </span>
    </motion.a>
  );
}
