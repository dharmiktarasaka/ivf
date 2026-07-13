import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../seo/SEO';
import TreatmentCard from '../../components/treatments/TreatmentCard';
import { treatmentsData } from '../../data/treatmentsData';

export default function TreatmentsOverview() {
  return (
    <div className="bg-bgLight">
      <SEO
        title="All Fertility Treatments"
        description="Explore the full range of IVF, IUI, ICSI, egg freezing, male infertility, and counselling services at Sarvamangal IVF in Ahmedabad."
        keywords={["IVF treatment Ahmedabad", "IUI treatment", "ICSI", "egg freezing Ahmedabad", "fertility treatments"]}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-warm py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-rose-brand uppercase tracking-wider">Comprehensive Care</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-plum-brand">
            Fertility Treatments & Services
          </h1>
          <p className="text-xs md:text-sm text-mutedText leading-relaxed max-w-xl mx-auto">
            From basic ovulation support to advanced IVF, we offer a complete continuum of reproductive care tailored to every couple's individual needs.
          </p>
        </div>
      </section>

      {/* All Treatment Cards */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatmentsData.map((t, idx) => (
            <TreatmentCard key={idx} treatment={t} />
          ))}
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-5 text-xs text-amber-900 leading-relaxed">
          <strong>Medical Disclaimer:</strong> This website provides general fertility information only. Treatment suitability depends entirely on individual medical evaluations conducted by a qualified fertility specialist. Sarvamangal IVF does not make guaranteed treatment outcome claims. Please consult our clinical team for personalized guidance.
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 px-6 text-center">
        <Link to="/appointment" className="inline-block bg-rose-brand text-white font-semibold px-8 py-3.5 rounded-full hover:bg-plum-brand transition-colors text-sm">
          Book a Confidential Consultation
        </Link>
      </section>
    </div>
  );
}
