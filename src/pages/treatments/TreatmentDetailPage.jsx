import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, AlertCircle, Plus, Minus, MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../seo/SEO';
import { treatmentsData } from '../../data/treatmentsData';
import { businessDetails } from '../../config/businessDetails';

export default function TreatmentDetailPage() {
  const { slug } = useParams();
  const treatment = treatmentsData.find(t => t.slug === slug);
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  if (!treatment) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center py-32 px-6">
        <AlertCircle size={48} className="text-rose-brand mb-4" />
        <h2 className="font-heading text-2xl font-bold text-plum-brand mb-2">Treatment Not Found</h2>
        <p className="text-sm text-mutedText mb-6">The treatment page you are looking for does not exist.</p>
        <Link to="/treatments" className="bg-rose-brand text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-plum-brand transition-colors">
          View All Treatments
        </Link>
      </div>
    );
  }

  const relatedTreatments = treatmentsData.filter(t => treatment.related?.includes(t.slug)).slice(0, 3);

  return (
    <div className="bg-bgLight">
      <SEO
        title={treatment.tagline}
        description={treatment.shortDescription}
        keywords={[`${treatment.name} Ahmedabad`, `${treatment.name} Sarvamangal IVF`, 'fertility treatment Ahmedabad']}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3 px-6 md:px-12">
        <nav className="max-w-7xl mx-auto text-xs text-mutedText flex items-center space-x-2">
          <Link to="/" className="hover:text-rose-brand">Home</Link>
          <ChevronRight size={12} />
          <Link to="/treatments" className="hover:text-rose-brand">Treatments</Link>
          <ChevronRight size={12} />
          <span className="text-darkText font-medium">{treatment.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="bg-gradient-warm py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-rose-brand uppercase tracking-wider">Treatment Guide</span>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-plum-brand leading-tight">{treatment.tagline}</h1>
            <p className="text-sm text-mutedText leading-relaxed max-w-xl">{treatment.shortDescription}</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link to="/appointment" className="bg-rose-brand text-white font-semibold px-6 py-3 rounded-full hover:bg-plum-brand transition-colors text-xs text-center">
                Book Consultation
              </Link>
              <a href={businessDetails.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#128C7E] transition-colors text-xs text-center flex items-center justify-center space-x-1.5">
                <MessageCircle size={14} className="fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 bg-gradient-rose-plum rounded-3xl aspect-[4/3] flex items-center justify-center text-white font-heading text-2xl font-bold shadow-premium text-center p-6">
            {treatment.name}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">

          {/* What is it */}
          <section className="bg-white rounded-3xl p-8 shadow-soft border border-rose-brand/5">
            <h2 className="font-heading text-xl font-bold text-plum-brand mb-4">What is {treatment.name}?</h2>
            <p className="text-sm text-mutedText leading-relaxed">{treatment.definition}</p>
          </section>

          {/* Who Considers */}
          <section className="bg-white rounded-3xl p-8 shadow-soft border border-rose-brand/5">
            <h2 className="font-heading text-xl font-bold text-plum-brand mb-4">Who May Consider This Treatment?</h2>
            <ul className="space-y-2">
              {treatment.whoConsiders.map((item, i) => (
                <li key={i} className="flex items-start space-x-2 text-sm text-mutedText">
                  <CheckCircle2 size={16} className="text-rose-brand flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Why Recommended */}
          <section className="bg-blush-brand/30 rounded-3xl p-8 border border-rose-brand/10">
            <h2 className="font-heading text-xl font-bold text-plum-brand mb-3">Why This Treatment May Be Recommended</h2>
            <p className="text-sm text-mutedText leading-relaxed">{treatment.whyRecommended}</p>
          </section>

          {/* Treatment Steps */}
          {treatment.steps?.length > 0 && (
            <section className="bg-white rounded-3xl p-8 shadow-soft border border-rose-brand/5">
              <h2 className="font-heading text-xl font-bold text-plum-brand mb-6">General Treatment Process</h2>
              <div className="space-y-6">
                {treatment.steps.map((step, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-rose-brand text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-plum-brand text-sm">{step.title}</h3>
                      <p className="text-xs text-mutedText mt-1 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Preparation */}
          {treatment.preparation?.length > 0 && (
            <section className="bg-white rounded-3xl p-8 shadow-soft border border-rose-brand/5">
              <h2 className="font-heading text-xl font-bold text-plum-brand mb-4">Preparation Guidance</h2>
              <ul className="space-y-2">
                {treatment.preparation.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-mutedText">
                    <CheckCircle2 size={16} className="text-sage-brand flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Questions to Ask */}
          {treatment.questionsToAsk?.length > 0 && (
            <section className="bg-lavender-brand/20 rounded-3xl p-8 border border-lavender-brand/30">
              <h2 className="font-heading text-xl font-bold text-plum-brand mb-4">Questions to Ask During Consultation</h2>
              <ul className="space-y-2">
                {treatment.questionsToAsk.map((q, i) => (
                  <li key={i} className="text-sm text-mutedText flex items-start space-x-2">
                    <span className="text-rose-brand font-bold">Q.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Limitations */}
          <section className="bg-amber-50 rounded-3xl p-8 border border-amber-200">
            <div className="flex items-start space-x-3">
              <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="font-heading text-lg font-bold text-amber-900 mb-2">Possible Limitations to Know</h2>
                <p className="text-sm text-amber-900/80 leading-relaxed">{treatment.limitations}</p>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="bg-white rounded-3xl p-8 shadow-soft border border-rose-brand/5">
            <h2 className="font-heading text-xl font-bold text-plum-brand mb-3">Treatment Timeline Overview</h2>
            <p className="text-sm text-mutedText leading-relaxed">{treatment.timeline}</p>
          </section>

          {/* FAQs */}
          {treatment.faqs?.length > 0 && (
            <section className="bg-white rounded-3xl p-8 shadow-soft border border-rose-brand/5">
              <h2 className="font-heading text-xl font-bold text-plum-brand mb-6">Common Patient Questions</h2>
              <div className="space-y-3">
                {treatment.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-bgLight rounded-2xl overflow-hidden border border-gray-100">
                    <button
                      onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                      className="w-full p-4 text-left font-semibold text-sm text-plum-brand flex justify-between items-center hover:text-rose-brand transition-colors cursor-pointer focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      {openFaqIdx === idx ? <Minus size={14} /> : <Plus size={14} />}
                    </button>
                    <AnimatePresence>
                      {openFaqIdx === idx && (
                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                          <p className="px-4 pb-4 text-xs text-mutedText leading-relaxed border-t border-gray-100 pt-3">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Medical Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900">
            <strong>Medical Disclaimer:</strong> Information on this page is for general awareness only and does not constitute individual medical advice. Treatment suitability must be confirmed by a qualified fertility specialist through personal evaluation.
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Quick CTA */}
          <div className="bg-gradient-rose-plum rounded-3xl p-6 text-white space-y-4 sticky top-28">
            <h3 className="font-heading font-bold text-lg">Ready to Discuss {treatment.name}?</h3>
            <p className="text-xs text-white/80">Book a private, no-pressure consultation with our fertility specialists.</p>
            <Link to="/appointment" className="block bg-white text-rose-brand font-semibold text-xs py-3 rounded-full text-center hover:bg-[#FFF9F5] transition-colors">
              Book Appointment
            </Link>
            <a href={businessDetails.phoneLink} className="flex items-center justify-center space-x-2 text-white/80 hover:text-white text-xs font-medium">
              <Phone size={14} />
              <span>Call: {businessDetails.phone}</span>
            </a>
            <Link to="/callback" className="block text-center text-white/70 hover:text-white text-xs underline">
              Request Confidential Callback
            </Link>
          </div>

          {/* Related Treatments */}
          {relatedTreatments.length > 0 && (
            <div className="bg-white rounded-3xl p-6 shadow-soft border border-rose-brand/5 space-y-4">
              <h3 className="font-heading font-bold text-plum-brand text-base">Related Treatments</h3>
              <ul className="space-y-3">
                {relatedTreatments.map((rt, i) => (
                  <li key={i}>
                    <Link to={`/treatments/${rt.slug}`} className="flex items-center space-x-2 text-xs text-darkText hover:text-rose-brand group">
                      <ChevronRight size={14} className="text-rose-brand" />
                      <span className="group-hover:underline">{rt.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
