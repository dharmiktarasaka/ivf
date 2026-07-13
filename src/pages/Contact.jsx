import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin, Clock, Calendar } from 'lucide-react';
import SEO from '../seo/SEO';
import ContactForm from '../components/forms/ContactForm';
import { businessDetails } from '../config/businessDetails';

export default function Contact() {
  return (
    <div className="bg-bgLight">
      <SEO
        title="Contact Sarvamangal IVF"
        description="Get in touch with Sarvamangal IVF. Call, WhatsApp, email, or visit our clinic at Shyamal Cross Road, Ahmedabad. Open daily until 8:00 PM."
      />

      {/* Hero */}
      <section className="bg-gradient-warm py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-rose-brand uppercase tracking-wider">Get in Touch</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-plum-brand">Contact Sarvamangal IVF</h1>
          <p className="text-xs md:text-sm text-mutedText max-w-xl mx-auto">
            We are here to listen and help. Reach us by phone, WhatsApp, email, or by visiting our clinic. All enquiries are handled with complete confidentiality.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 px-6 md:px-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href={businessDetails.phoneLink}
            className="bg-bgLight rounded-2xl p-5 text-center hover:border-rose-brand border border-gray-100 hover:shadow-soft transition-all space-y-2">
            <div className="bg-blush-brand p-3 rounded-full w-fit mx-auto"><Phone size={20} className="text-rose-brand" /></div>
            <h3 className="font-semibold text-xs text-plum-brand">Call Us</h3>
            <p className="text-[10px] text-mutedText">{businessDetails.phone}</p>
          </a>
          <a href={businessDetails.whatsappLink} target="_blank" rel="noopener noreferrer"
            className="bg-bgLight rounded-2xl p-5 text-center hover:border-rose-brand border border-gray-100 hover:shadow-soft transition-all space-y-2">
            <div className="bg-[#25D366]/10 p-3 rounded-full w-fit mx-auto"><MessageCircle size={20} className="text-[#25D366]" /></div>
            <h3 className="font-semibold text-xs text-plum-brand">WhatsApp</h3>
            <p className="text-[10px] text-mutedText">Confidential Chat</p>
          </a>
          <a href={businessDetails.emailLink}
            className="bg-bgLight rounded-2xl p-5 text-center hover:border-rose-brand border border-gray-100 hover:shadow-soft transition-all space-y-2">
            <div className="bg-lavender-brand/30 p-3 rounded-full w-fit mx-auto"><Mail size={20} className="text-plum-brand" /></div>
            <h3 className="font-semibold text-xs text-plum-brand">Email</h3>
            <p className="text-[10px] text-mutedText">{businessDetails.email}</p>
          </a>
          <Link to="/appointment"
            className="bg-blush-brand rounded-2xl p-5 text-center hover:bg-rose-brand/10 border border-rose-brand/10 hover:shadow-soft transition-all space-y-2">
            <div className="bg-rose-brand p-3 rounded-full w-fit mx-auto"><Calendar size={20} className="text-white" /></div>
            <h3 className="font-semibold text-xs text-plum-brand">Book Appointment</h3>
            <p className="text-[10px] text-mutedText">Online form</p>
          </Link>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="font-heading text-2xl font-bold text-plum-brand mb-8">Send a Confidential Message</h2>
            <ContactForm />
          </div>

          {/* Info + Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Clinic Details */}
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-rose-brand/5 space-y-5">
              <h3 className="font-heading font-bold text-plum-brand text-lg">Clinic Details</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-rose-brand flex-shrink-0 mt-0.5" />
                  <span className="text-mutedText leading-relaxed">{businessDetails.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={18} className="text-rose-brand flex-shrink-0" />
                  <span className="text-mutedText">{businessDetails.openingHours}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-rose-brand flex-shrink-0" />
                  <a href={businessDetails.phoneLink} className="text-mutedText hover:text-rose-brand">{businessDetails.phone}</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-rose-brand flex-shrink-0" />
                  <a href={businessDetails.emailLink} className="text-mutedText hover:text-rose-brand">{businessDetails.email}</a>
                </div>
              </div>
              <div className="pt-2 space-y-2">
                <a href={businessDetails.mapsLink} target="_blank" rel="noopener noreferrer"
                  className="block text-center bg-rose-brand text-white text-xs font-semibold py-3 rounded-full hover:bg-plum-brand transition-colors">
                  Get Directions
                </a>
                <Link to="/callback"
                  className="block text-center bg-bgLight border border-gray-200 text-darkText text-xs font-semibold py-3 rounded-full hover:border-rose-brand transition-colors">
                  Request Confidential Callback
                </Link>
              </div>
            </div>

            {/* Mini Map */}
            <div className="rounded-3xl overflow-hidden shadow-soft border border-gray-100 h-56">
              <iframe
                title="Sarvamangal IVF Contact Location"
                src={businessDetails.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
