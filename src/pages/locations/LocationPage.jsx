import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Clock, MessageCircle, ChevronRight, AlertCircle } from 'lucide-react';
import SEO from '../../seo/SEO';
import { locationsData } from '../../data/locationsData';
import { businessDetails } from '../../config/businessDetails';

export default function LocationPage() {
  const { slug } = useParams();
  const location = slug ? locationsData.find(l => l.slug === slug) : locationsData[0];

  if (!location) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center py-32 px-6">
        <AlertCircle size={48} className="text-rose-brand mb-4" />
        <h2 className="font-heading text-2xl font-bold text-plum-brand mb-2">Location Not Found</h2>
        <Link to="/contact" className="text-rose-brand hover:underline text-sm">Contact Us</Link>
      </div>
    );
  }

  return (
    <div className="bg-bgLight">
      <SEO
        title={location.title}
        description={`${location.description} Visit Sarvamangal IVF at ${location.address}.`}
        keywords={['IVF centre Ahmedabad', 'IVF clinic Shyamal', 'fertility clinic Ahmedabad', 'Sarvamangal IVF location']}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3 px-6">
        <nav className="max-w-7xl mx-auto text-xs text-mutedText flex items-center space-x-2">
          <Link to="/" className="hover:text-rose-brand">Home</Link>
          <ChevronRight size={12} />
          <Link to="/locations" className="hover:text-rose-brand">Locations</Link>
          <ChevronRight size={12} />
          <span className="text-darkText font-medium">{location.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-gradient-warm py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-rose-brand uppercase tracking-wider">Clinic Location</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-plum-brand">{location.title}</h1>
          <p className="text-xs md:text-sm text-mutedText max-w-xl mx-auto">{location.description}</p>
        </div>
      </section>

      {/* Location Info + Map */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-rose-brand/5 space-y-5">
              <h2 className="font-heading text-xl font-bold text-plum-brand">{location.name}</h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-rose-brand flex-shrink-0 mt-0.5" />
                  <span className="text-mutedText">{location.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-rose-brand flex-shrink-0" />
                  <a href={businessDetails.phoneLink} className="text-mutedText hover:text-rose-brand">{location.phone}</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={18} className="text-rose-brand flex-shrink-0" />
                  <span className="text-mutedText">{location.hours}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-2 space-y-2">
                <h3 className="font-semibold text-xs text-plum-brand uppercase tracking-wider">Location Highlights</h3>
                <ul className="space-y-1">
                  {location.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-mutedText flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-rose-brand rounded-full flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-2">
                <a href={location.directionsUrl} target="_blank" rel="noopener noreferrer"
                  className="bg-rose-brand text-white text-xs font-semibold py-3 rounded-full text-center hover:bg-plum-brand transition-colors">
                  Get Directions
                </a>
                <a href={businessDetails.phoneLink}
                  className="bg-white border border-rose-brand text-rose-brand text-xs font-semibold py-3 rounded-full text-center hover:bg-rose-brand hover:text-white transition-colors flex items-center justify-center space-x-2">
                  <Phone size={14} />
                  <span>Call Now</span>
                </a>
                <a href={businessDetails.whatsappLink} target="_blank" rel="noopener noreferrer"
                  className="bg-[#25D366] text-white text-xs font-semibold py-3 rounded-full text-center hover:bg-[#128C7E] transition-colors flex items-center justify-center space-x-2">
                  <MessageCircle size={14} className="fill-current" />
                  <span>WhatsApp</span>
                </a>
                <Link to="/appointment"
                  className="bg-plum-brand text-white text-xs font-semibold py-3 rounded-full text-center hover:bg-rose-brand transition-colors">
                  Book Appointment
                </Link>
              </div>
            </div>

            {/* Other Locations link */}
            <div className="space-y-2">
              {locationsData.filter(l => l.slug !== location.slug).map((l, i) => (
                <Link key={i} to={`/locations/${l.slug}`}
                  className="block bg-white rounded-2xl p-4 shadow-soft border border-gray-100 hover:border-rose-brand/20 text-xs font-semibold text-plum-brand hover:text-rose-brand transition-all">
                  View: {l.name} →
                </Link>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-premium border border-gray-100 h-[450px]">
            <iframe
              title={`${location.name} map`}
              src={location.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
