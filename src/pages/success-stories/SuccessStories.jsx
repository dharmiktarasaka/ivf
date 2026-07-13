import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import SEO from '../../seo/SEO';
import { successStoriesData } from '../../data/successStoriesData';

export default function SuccessStories() {
  return (
    <div className="bg-bgLight">
      <SEO
        title="Patient Success Stories"
        description="Read fictional, demonstrative patient success stories from Sarvamangal IVF. These narratives showcase the types of care journeys supported at our clinic."
      />

      {/* Hero */}
      <section className="bg-gradient-warm py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-rose-brand uppercase tracking-wider">Stories of Hope</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-plum-brand">Patient Success Stories</h1>
          <p className="text-xs md:text-sm text-mutedText max-w-xl mx-auto">
            These are fictional, demonstrative patient journeys. They do not represent real patients or guarantee clinical outcomes.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start space-x-3 text-xs text-amber-900">
          <AlertCircle size={18} className="flex-shrink-0 text-amber-600 mt-0.5" />
          <p>
            All success stories below are fictional placeholders used for website demonstration only. They do not represent real patient identities, medical records, or guaranteed treatment outcomes. Results vary for every individual.
          </p>
        </div>
      </div>

      {/* Story Cards */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStoriesData.map((story, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 shadow-soft border border-rose-brand/5 hover:shadow-premium transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="inline-block bg-blush-brand text-rose-brand text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {story.treatmentType}
                </span>
                <h2 className="font-heading font-semibold text-lg text-plum-brand">{story.title}</h2>
                <div className="space-y-2 text-xs text-mutedText leading-relaxed">
                  <p><strong>Challenge:</strong> {story.challenge}</p>
                  <p><strong>Journey:</strong> {story.journeySummary}</p>
                  <p><strong>Support:</strong> {story.supportExperience}</p>
                  <p><strong>Outcome:</strong> {story.outcome}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6 space-y-3">
                <p className="text-[11px] text-mutedText italic">{story.author}</p>
                <div className="bg-bgLight rounded-xl p-3 text-[9px] text-mutedText/70 leading-relaxed">
                  {story.disclaimer}
                </div>
                <Link
                  to={`/success-stories/${story.slug}`}
                  className="text-xs font-semibold text-rose-brand hover:underline inline-flex items-center"
                >
                  Read Full Story →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-6 text-center">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-soft border border-rose-brand/5 space-y-4">
          <h2 className="font-heading text-2xl font-bold text-plum-brand">Begin Your Own Journey</h2>
          <p className="text-xs text-mutedText">Every story is different. Ours is tailored to you.</p>
          <Link to="/appointment" className="inline-block bg-rose-brand text-white font-semibold px-8 py-3 rounded-full hover:bg-plum-brand transition-colors text-xs">
            Book a Confidential Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
