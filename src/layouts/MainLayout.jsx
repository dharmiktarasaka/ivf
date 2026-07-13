import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import LiveChatWidget from '../components/LiveChatWidget';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessDetails } from '../config/businessDetails';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-grow pt-[73px] md:pt-[103px]">
        {children}
      </main>

      {/* Floating Helpers */}
      <FloatingWhatsApp />
      <LiveChatWidget />

      {/* Mobile Bottom Action Bar (Fixed, only visible below md: 768px) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-rose-brand/10 shadow-lg grid grid-cols-3 z-40 py-2.5 pb-3">
        <a
          href={businessDetails.phoneLink}
          className="flex flex-col items-center justify-center text-darkText hover:text-rose-brand active:text-rose-brand transition-colors border-r border-gray-100"
        >
          <Phone size={18} className="text-rose-brand mb-1" />
          <span className="text-[10px] font-semibold tracking-wide font-sans">Call Us</span>
        </a>
        <a
          href={businessDetails.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-darkText hover:text-rose-brand active:text-rose-brand transition-colors border-r border-gray-100"
        >
          <MessageCircle size={18} className="text-[#25D366] fill-[#25D366]/10 mb-1" />
          <span className="text-[10px] font-semibold tracking-wide font-sans">WhatsApp</span>
        </a>
        <Link
          to="/appointment"
          className="flex flex-col items-center justify-center text-darkText hover:text-rose-brand active:text-rose-brand transition-colors"
        >
          <Calendar size={18} className="text-rose-brand mb-1" />
          <span className="text-[10px] font-semibold tracking-wide font-sans">Book Now</span>
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
