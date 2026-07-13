import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { AlertCircle, ChevronRight, Clock } from 'lucide-react';
import SEO from '../../seo/SEO';
import { resourcesData } from '../../data/resourcesData';

export default function ResourceDetailPage() {
  const { slug } = useParams();
  const resource = resourcesData.find(r => r.slug === slug);

  if (!resource) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center py-32 px-6">
        <AlertCircle size={48} className="text-rose-brand mb-4" />
        <h2 className="font-heading text-2xl font-bold text-plum-brand mb-2">Article Not Found</h2>
        <Link to="/resources" className="text-rose-brand hover:underline text-sm">← Back to Resources</Link>
      </div>
    );
  }

  // Convert markdown-style content to basic readable paragraphs
  const renderContent = (content) => {
    const lines = content.trim().split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return null;
      if (trimmed.startsWith('# ')) return <h1 key={idx} className="font-heading text-2xl font-bold text-plum-brand mt-8 mb-3">{trimmed.slice(2)}</h1>;
      if (trimmed.startsWith('## ')) return <h2 key={idx} className="font-heading text-xl font-semibold text-plum-brand mt-6 mb-2">{trimmed.slice(3)}</h2>;
      if (trimmed.startsWith('*   ')) return <li key={idx} className="text-sm text-mutedText ml-4 list-disc leading-relaxed">{trimmed.slice(4)}</li>;
      return <p key={idx} className="text-sm text-mutedText leading-relaxed mb-3">{trimmed}</p>;
    }).filter(Boolean);
  };

  return (
    <div className="bg-bgLight">
      <SEO title={resource.title} description={resource.summary} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3 px-6">
        <nav className="max-w-4xl mx-auto text-xs text-mutedText flex items-center space-x-2">
          <Link to="/" className="hover:text-rose-brand">Home</Link>
          <ChevronRight size={12} />
          <Link to="/resources" className="hover:text-rose-brand">Resources</Link>
          <ChevronRight size={12} />
          <span className="text-darkText font-medium">{resource.title}</span>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        {/* Meta */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <span className="text-[10px] font-bold text-rose-brand uppercase bg-blush-brand px-3 py-1 rounded-full">{resource.category}</span>
            <div className="flex items-center space-x-1 text-[10px] text-mutedText">
              <Clock size={11} />
              <span>{resource.readTime}</span>
            </div>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-plum-brand">{resource.title}</h1>
          <p className="text-sm text-mutedText leading-relaxed">{resource.summary}</p>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-3xl p-8 shadow-soft border border-rose-brand/5">
          <ul className="list-disc pl-2 space-y-1">
            {renderContent(resource.content)}
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900">
          <strong>Notice:</strong> Information in this article is for general awareness only. Always consult a qualified fertility specialist for personalized medical guidance.
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/appointment" className="inline-block bg-rose-brand text-white font-semibold px-8 py-3 rounded-full hover:bg-plum-brand transition-colors text-sm">
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
