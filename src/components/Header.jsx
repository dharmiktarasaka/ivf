import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageCircle, Star, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { businessDetails } from '../config/businessDetails';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page transition
  useEffect(() => {
    setIsOpen(false);
    setShowMegaMenu(false);
    setMobileTreatmentsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Doctors", path: "/doctors" },
    { name: "Fertility Journey", path: "/fertility-journey" },
    { name: "Success Stories", path: "/success-stories" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" }
  ];

  const treatments = [
    { name: "IVF Treatment", path: "/treatments/ivf" },
    { name: "ICSI Treatment", path: "/treatments/icsi" },
    { name: "IUI Treatment", path: "/treatments/iui" },
    { name: "Egg Freezing", path: "/treatments/egg-freezing" },
    { name: "Egg Donation", path: "/treatments/egg-donation" },
    { name: "Frozen Embryo Transfer", path: "/treatments/fet" },
    { name: "Fertility Testing", path: "/treatments/fertility-testing" },
    { name: "Female Infertility", path: "/treatments/female-infertility" },
    { name: "Male Infertility", path: "/treatments/male-infertility" },
    { name: "Laparoscopy & Hysteroscopy", path: "/treatments/laparoscopy-hysteroscopy" },
    { name: "Infertility Counselling", path: "/treatments/infertility-counselling" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Bar Info (Hidden on mobile) */}
      <div className="bg-bgLight border-b border-rose-brand/5 text-[12px] py-1.5 px-4 hidden md:flex justify-between items-center text-mutedText">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Star size={14} className="fill-[#F5A623] text-[#F5A623]" />
            <span className="font-semibold text-darkText">{businessDetails.rating.toFixed(1)} Rating</span>
            <span>({businessDetails.reviewsCount} Google Reviews)</span>
          </div>
          <span>•</span>
          <span>{businessDetails.openingHours}</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href={businessDetails.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:text-rose-brand transition-colors">
            <MessageCircle size={14} className="text-[#25D366] fill-[#25D366]/20" />
            <span>Confidential WhatsApp Support</span>
          </a>
          <span>•</span>
          <a href={businessDetails.phoneLink} className="flex items-center space-x-1 hover:text-rose-brand font-medium text-darkText transition-colors">
            <Phone size={14} className="text-rose-brand" />
            <span>Call: {businessDetails.phone}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-rose-brand/5'
          : 'bg-transparent'
      }`}>
        {/* Elegant Placeholder Logo */}
        <Link to="/" className="flex items-center space-x-2.5 group">
          <div className="bg-gradient-rose-plum p-2.5 rounded-2xl flex items-center justify-center shadow-md">
            {/* Elegant Circular Letter "S" logo with flower/mother curve representation */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8 10C8 8.9 8.9 8 10 8H14C15.1 8 16 8.9 16 10C16 11.1 15.1 12 14 12C12.9 12 12 12.9 12 14C12 15.1 11.1 16 10 16C8.9 16 8 15.1 8 14V10Z" fill="currentColor" className="text-[#FFF9F5]"/>
              <path d="M12 2C13.5 6 15 8 18 10C15 12 13.5 14 12 22C10.5 14 9 12 6 10C9 8 10.5 6 12 2Z" fill="currentColor" className="text-[#F5C6B3] opacity-80" />
            </svg>
          </div>
          <div>
            <span className="font-heading text-lg md:text-xl font-bold tracking-tight text-plum-brand block leading-none">
              {businessDetails.name}
            </span>
            <span className="text-[10px] text-mutedText tracking-wider block font-sans">
              Fertility, Maternity & Family Care
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-rose-brand' : 'text-darkText hover:text-rose-brand'}`}>
            Home
          </Link>
          <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-rose-brand' : 'text-darkText hover:text-rose-brand'}`}>
            About
          </Link>

          {/* Treatments Trigger (Mega Menu) */}
          <div 
            className="relative"
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <button className={`text-sm font-medium flex items-center space-x-1 transition-colors ${
              location.pathname.startsWith('/treatments') ? 'text-rose-brand' : 'text-darkText hover:text-rose-brand'
            }`}>
              <span>Treatments</span>
              <ChevronDown size={14} className={`transform transition-transform ${showMegaMenu ? 'rotate-180' : ''}`} />
            </button>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {showMegaMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-[600px] bg-white rounded-2xl shadow-premium border border-rose-brand/5 p-6 grid grid-cols-2 gap-4"
                >
                  <div className="col-span-2 border-b border-gray-100 pb-2 mb-2">
                    <h4 className="font-heading font-semibold text-rose-brand text-sm">Our Treatments & Programs</h4>
                    <p className="text-xs text-mutedText">Compassionate fertility clinical services tailored to your family goals</p>
                  </div>
                  {treatments.map((t, idx) => (
                    <Link
                      key={idx}
                      to={t.path}
                      className={`text-xs p-2 rounded-xl transition-all hover:bg-blush-brand hover:text-rose-brand font-medium ${
                        isActive(t.path) ? 'text-rose-brand bg-blush-brand/50' : 'text-darkText'
                      }`}
                    >
                      {t.name}
                    </Link>
                  ))}
                  <div className="col-span-2 bg-[#FFF9F5] p-3 rounded-xl border border-[#F5C6B3]/20 flex justify-between items-center mt-2">
                    <span className="text-[11px] text-mutedText">Confused about options? Start here.</span>
                    <Link to="/fertility-journey" className="text-xs font-semibold text-rose-brand hover:underline">
                      View Fertility Journey &rarr;
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/doctors" className={`text-sm font-medium transition-colors ${isActive('/doctors') ? 'text-rose-brand' : 'text-darkText hover:text-rose-brand'}`}>
            Doctors
          </Link>
          <Link to="/fertility-journey" className={`text-sm font-medium transition-colors ${isActive('/fertility-journey') ? 'text-rose-brand' : 'text-darkText hover:text-rose-brand'}`}>
            Journey
          </Link>
          <Link to="/success-stories" className={`text-sm font-medium transition-colors ${isActive('/success-stories') ? 'text-rose-brand' : 'text-darkText hover:text-rose-brand'}`}>
            Success Stories
          </Link>
          <Link to="/resources" className={`text-sm font-medium transition-colors ${isActive('/resources') ? 'text-rose-brand' : 'text-darkText hover:text-rose-brand'}`}>
            Resources
          </Link>
          <Link to="/contact" className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-rose-brand' : 'text-darkText hover:text-rose-brand'}`}>
            Contact
          </Link>

          {/* Book Appointment CTA */}
          <Link
            to="/appointment"
            className="bg-rose-brand text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-md hover:bg-plum-brand transition-colors flex items-center space-x-1.5 cursor-pointer"
          >
            <Calendar size={14} />
            <span>Book Appointment</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-plum-brand focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
            className="fixed top-[73px] md:top-[103px] right-0 bottom-0 left-0 bg-white z-40 overflow-y-auto px-6 py-8 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className={`block text-lg font-medium border-b border-gray-100 pb-3 transition-colors ${
                    isActive(link.path) ? 'text-rose-brand font-semibold' : 'text-darkText'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile treatments expandable section */}
              <div>
                <button
                  onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                  className="w-full flex justify-between items-center text-lg font-medium border-b border-gray-100 pb-3 text-darkText focus:outline-none cursor-pointer"
                >
                  <span>Treatments</span>
                  <ChevronDown size={20} className={`transform transition-transform ${mobileTreatmentsOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileTreatmentsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 pr-2 bg-bgLight/50 mt-2 rounded-xl grid grid-cols-1 gap-2.5 py-3"
                    >
                      {treatments.map((t, idx) => (
                        <Link
                          key={idx}
                          to={t.path}
                          className="text-sm font-medium text-darkText/80 py-1 hover:text-rose-brand transition-colors"
                        >
                          {t.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Call Actions */}
            <div className="space-y-3 mt-8">
              <a
                href={businessDetails.phoneLink}
                className="w-full bg-white border border-rose-brand text-rose-brand font-semibold py-3 rounded-full flex items-center justify-center space-x-2 text-sm shadow-sm"
              >
                <Phone size={16} />
                <span>Call Center: {businessDetails.phone}</span>
              </a>
              <a
                href={businessDetails.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white font-semibold py-3 rounded-full flex items-center justify-center space-x-2 text-sm shadow-sm hover:bg-[#128C7E]"
              >
                <MessageCircle size={16} className="fill-current" />
                <span>WhatsApp Consult</span>
              </a>
              <Link
                to="/appointment"
                className="w-full bg-rose-brand text-white font-semibold py-3 rounded-full flex items-center justify-center space-x-2 text-sm shadow-md text-center hover:bg-plum-brand"
              >
                <Calendar size={16} />
                <span>Book Appointment</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
