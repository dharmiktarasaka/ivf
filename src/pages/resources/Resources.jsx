import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight } from 'lucide-react';
import SEO from '../../seo/SEO';
import { resourcesData } from '../../data/resourcesData';

export default function Resources() {
  return (
    <div className="bg-bgLight">
      <SEO
        title="Fertility Resources & Guides"
        description="Educational guides on IVF, IUI, ICSI, egg freezing and when to see a fertility specialist. Helpful resources from Sarvamangal IVF Ahmedabad."
      />

      {/* Hero */}
      <section className="bg-gradient-warm py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-rose-brand uppercase tracking-wider">Patient Education</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-plum-brand">Fertility Resources & Guides</h1>
          <p className="text-xs md:text-sm text-mutedText max-w-xl mx-auto">
            Plain-language articles designed to answer common questions and help you feel informed and confident.
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourcesData.map((resource, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 shadow-soft border border-rose-brand/5 hover:shadow-premium transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-rose-brand uppercase bg-blush-brand px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                  <div className="flex items-center space-x-1 text-[10px] text-mutedText">
                    <Clock size={11} />
                    <span>{resource.readTime}</span>
                  </div>
                </div>
                <h2 className="font-heading font-semibold text-lg text-plum-brand leading-snug">{resource.title}</h2>
                <p className="text-xs text-mutedText leading-relaxed">{resource.summary}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <Link
                  to={`/resources/${resource.slug}`}
                  className="flex items-center space-x-1 text-xs font-bold text-rose-brand hover:underline"
                >
                  <span>Read Full Guide</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900">
          <strong>General Information Notice:</strong> All resource content is for general educational purposes only. Consult a qualified fertility specialist at Sarvamangal IVF for individual guidance.
        </div>
      </div>
    </div>
  );
}
