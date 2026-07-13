import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, Heart } from 'lucide-react';
import { businessDetails } from '../config/businessDetails';

export default function Footer() {
  return (
    <footer className="bg-plum-brand text-[#FFF9F5]/90 pt-16 pb-24 md:pb-12 px-6 md:px-12 border-t border-rose-brand/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-white/10 p-2 rounded-xl flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8 10C8 8.9 8.9 8 10 8H14C15.1 8 16 8.9 16 10C16 11.1 15.1 12 14 12C12.9 12 12 12.9 12 14C12 15.1 11.1 16 10 16C8.9 16 8 15.1 8 14V10Z" fill="currentColor" className="text-white"/>
              </svg>
            </div>
            <div>
              <span className="font-heading text-lg font-bold tracking-tight text-white block">
                {businessDetails.name}
              </span>
              <span className="text-[9px] text-[#F5C6B3] tracking-widest block uppercase font-sans">
                Fertility & Maternity Care
              </span>
            </div>
          </Link>
          <p className="text-xs text-[#FFF9F5]/70 leading-relaxed font-sans">
            Compassionate reproductive medicine, custom fertility paths, and high-quality lab technologies designed to support your family dream.
          </p>
          <div className="flex space-x-3 pt-2">
            <a 
              href={businessDetails.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
            <a 
              href={businessDetails.phoneLink} 
              className="bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors text-white"
              aria-label="Call"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>

        {/* Treatments Section */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4 text-sm tracking-wide border-b border-white/10 pb-2">
            Fertility Treatments
          </h4>
          <ul className="space-y-2 text-xs font-sans">
            <li>
              <Link to="/treatments/ivf" className="hover:text-rose-brand transition-colors text-[#FFF9F5]/80">IVF Treatment</Link>
            </li>
            <li>
              <Link to="/treatments/icsi" className="hover:text-rose-brand transition-colors text-[#FFF9F5]/80">ICSI Treatment</Link>
            </li>
            <li>
              <Link to="/treatments/iui" className="hover:text-rose-brand transition-colors text-[#FFF9F5]/80">IUI Treatment</Link>
            </li>
            <li>
              <Link to="/treatments/egg-freezing" className="hover:text-rose-brand transition-colors text-[#FFF9F5]/80">Egg Freezing</Link>
            </li>
            <li>
              <Link to="/treatments/fet" className="hover:text-rose-brand transition-colors text-[#FFF9F5]/80">Frozen Embryo Transfer (FET)</Link>
            </li>
            <li>
              <Link to="/treatments/fertility-testing" className="hover:text-rose-brand transition-colors text-[#FFF9F5]/80">Fertility Testing</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="font-heading font-semibold text-white mb-4 text-sm tracking-wide border-b border-white/10 pb-2">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-xs font-sans">
            <li>
              <Link to="/about" className="hover:text-rose-brand transition-colors text-[#FFF9F5]/80">About Our Centre</Link>
            </li>
            <li>
              <Link to="/doctors" className="hover:text-rose-brand transition-colors text-[#FFF9F5]/80">Meet Our Specialists</Link>
            </li>
            <li>
              <Link to="/fertility-journey" className="hover:text-rose-brand transition-colors text-[#FFF9F5]/80">Fertility Journey Steps</Link>
            </li>
            <li>
              <Link to="/success-stories" className="hover:text-rose-brand transition-colors text-[#FFF9F5]/80">Patient Testimonials</Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-rose-brand transition-colors text-[#FFF9F5]/80">Guides & Comparisons</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-rose-brand transition-colors text-[#FFF9F5]/80">Contact & Locations</Link>
            </li>
            <li>
              <Link to="/crm" className="text-rose-brand hover:underline font-medium">CRM Demo &rarr;</Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-rose-brand hover:underline font-medium">Dashboard Demo &rarr;</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-white mb-4 text-sm tracking-wide border-b border-white/10 pb-2">
            Sarvamangal Clinic
          </h4>
          <ul className="space-y-3 text-xs font-sans">
            <li className="flex items-start space-x-2">
              <MapPin size={16} className="text-rose-brand flex-shrink-0 mt-0.5" />
              <a 
                href={businessDetails.mapsLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline text-[#FFF9F5]/80"
              >
                {businessDetails.address}
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={14} className="text-rose-brand flex-shrink-0" />
              <a href={businessDetails.phoneLink} className="hover:underline text-[#FFF9F5]/80">
                {businessDetails.phone}
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail size={14} className="text-rose-brand flex-shrink-0" />
              <a href={businessDetails.emailLink} className="hover:underline text-[#FFF9F5]/80">
                {businessDetails.email}
              </a>
            </li>
            <li className="flex items-center space-x-2 text-[#FFF9F5]/70">
              <Clock size={14} className="text-rose-brand flex-shrink-0" />
              <span>{businessDetails.openingHours}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Disclaimers & Copyright Section */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 mt-8 space-y-6 font-sans">
        <div className="bg-white/5 p-4 rounded-xl text-[11px] leading-relaxed text-[#FFF9F5]/60 border border-white/5">
          <p className="font-bold text-white mb-1 flex items-center">
            <Heart size={12} className="text-rose-brand mr-1" />
            Medical Safety & Transparency Disclaimer:
          </p>
          {businessDetails.disclaimer}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#FFF9F5]/50 space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            <Link to="/privacy" className="hover:underline hover:text-white transition-colors">Privacy Policy</Link>
          </div>
          {/* Required ownership footer text: DO NOT ALTER */}
          <div className="text-center md:text-right font-medium">
            <p>{businessDetails.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
