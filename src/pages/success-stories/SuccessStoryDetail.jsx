import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { AlertCircle, ChevronRight } from 'lucide-react';
import SEO from '../../seo/SEO';
import { successStoriesData } from '../../data/successStoriesData';

export default function SuccessStoryDetail() {
  const { slug } = useParams();
  const story = successStoriesData.find(s => s.slug === slug);

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center py-32 px-6">
        <AlertCircle size={48} className="text-rose-brand mb-4" />
        <h2 className="font-heading text-2xl font-bold text-plum-brand mb-2">Story Not Found</h2>
        <Link to="/success-stories" className="text-rose-brand hover:underline text-sm">← Back to Stories</Link>
      </div>
    );
  }

  return (
    <div className="bg-bgLight">
      <SEO title={story.title} description={story.journeySummary} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3 px-6">
        <nav className="max-w-4xl mx-auto text-xs text-mutedText flex items-center space-x-2">
          <Link to="/" className="hover:text-rose-brand">Home</Link>
          <ChevronRight size={12} />
          <Link to="/success-stories" className="hover:text-rose-brand">Success Stories</Link>
          <ChevronRight size={12} />
          <span className="text-darkText font-medium">{story.title}</span>
        </nav>
      </div>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Disclaimer Banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 flex items-start space-x-3">
            <AlertCircle size={16} className="flex-shrink-0 text-amber-600 mt-0.5" />
            <span>{story.disclaimer}</span>
          </div>

          {/* Header */}
          <div className="space-y-3">
            <span className="inline-block bg-blush-brand text-rose-brand text-[10px] font-bold px-3 py-1 rounded-full uppercase">
              {story.treatmentType}
            </span>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-plum-brand">{story.title}</h1>
            <p className="text-xs text-mutedText">{story.author}</p>
          </div>

          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-rose-brand/5">
              <h3 className="font-heading font-bold text-plum-brand mb-2">The Challenge</h3>
              <p className="text-sm text-mutedText leading-relaxed">{story.challenge}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-rose-brand/5">
              <h3 className="font-heading font-bold text-plum-brand mb-2">The Journey</h3>
              <p className="text-sm text-mutedText leading-relaxed">{story.journeySummary}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft border border-rose-brand/5">
              <h3 className="font-heading font-bold text-plum-brand mb-2">Support Received</h3>
              <p className="text-sm text-mutedText leading-relaxed">{story.supportExperience}</p>
            </div>
            <div className="bg-blush-brand/40 rounded-2xl p-6 border border-rose-brand/10">
              <h3 className="font-heading font-bold text-rose-brand mb-2">The Outcome</h3>
              <p className="text-sm text-mutedText leading-relaxed">{story.outcome}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-6">
            <Link to="/appointment" className="inline-block bg-rose-brand text-white font-semibold px-8 py-3 rounded-full hover:bg-plum-brand transition-colors text-sm">
              Begin Your Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
