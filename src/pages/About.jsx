import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, HeartHandshake, Eye, Award } from 'lucide-react';
import SEO from '../seo/SEO';
import { businessDetails } from '../config/businessDetails';
import consultationSuiteImg from '../assets/consultation_suite.png';

export default function About() {
  const values = [
    {
      icon: <HeartHandshake className="text-rose-brand" size={24} />,
      title: "Compassionate Support",
      description: "We understand the emotional weight of fertility challenges. We are here to listen first and support always."
    },
    {
      icon: <ShieldCheck className="text-rose-brand" size={24} />,
      title: "Absolute Privacy",
      description: "All patient consultations, diagnostic testing, and cycles are held with strict confidentiality."
    },
    {
      icon: <Award className="text-rose-brand" size={24} />,
      title: "Clinical Excellence",
      description: "Utilising modern embryology lab standards, clean procedure suites, and experienced care protocols."
    }
  ];

  return (
    <div className="bg-bgLight">
      <SEO 
        title="About Our Fertility Clinic" 
        description="Learn about Sarvamangal IVF, our mission to support families, and our private, homely clinic environment in Ahmedabad."
      />

      {/* Header Banner */}
      <section className="bg-gradient-warm py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-rose-brand uppercase tracking-wider">Our Center</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-plum-brand">
            About Sarvamangal IVF
          </h1>
          <p className="text-xs md:text-sm text-mutedText leading-relaxed max-w-xl mx-auto">
            A fertility, maternity, and family care clinic dedicated to supporting patients from their first consultation through monitoring and success.
          </p>
        </div>
      </section>

      {/* Philosophy Split Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 rounded-3xl aspect-square flex flex-col justify-end p-8 text-white relative overflow-hidden shadow-premium group">
            <img 
              src={consultationSuiteImg} 
              alt="Sarvamangal IVF Consultation Suite" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum-brand/90 via-plum-brand/35 to-transparent z-10" />
            <div className="relative z-20 space-y-3 text-left">
              <span className="text-xs font-bold tracking-widest text-peach-brand uppercase">Our Philosophy</span>
              <p className="font-heading text-xl leading-relaxed italic text-white/90">
                "We do not promise quick miracles; we commit to professional diagnostics, supportive paths, and clinical integrity."
              </p>
              <div className="text-[10px] text-white/60">— Care Coordination Team</div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-plum-brand">
              Compassionate Fertility Care That Feels Like Home
            </h2>
            <p className="text-xs text-mutedText leading-relaxed">
              At Sarvamangal IVF, we believe that medical professionalism is only half of the journey. The other half lies in patient comfort, reassurance, and hope. We have structured our center to be a warm, homely space where couples feel respected, unhurried, and fully informed.
            </p>
            <p className="text-xs text-mutedText leading-relaxed">
              Our clinic coordinates female and male fertility evaluations, advanced IVF/IUI/ICSI laboratory procedures, egg preservation, and supportive infertility counseling under one unified roof in Ahmedabad. We maintain transparent pricing and custom guidance, ensuring you know exactly what to expect.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs font-semibold text-plum-brand">
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-rose-brand" />
                <span>State-of-the-Art Laboratory</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-rose-brand" />
                <span>Male & Female Diagnostics</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-rose-brand" />
                <span>Homelike Private Consultation Rooms</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-rose-brand" />
                <span>Counselling Support Integrated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Card Grid */}
      <section className="py-20 px-6 bg-bgLight">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-rose-brand uppercase tracking-wider">Our Standards</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-plum-brand">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 border border-rose-brand/5 shadow-soft hover:shadow-premium transition-all text-left space-y-3">
                <div className="bg-blush-brand p-3 rounded-2xl w-fit">
                  {v.icon}
                </div>
                <h3 className="font-heading font-semibold text-base text-plum-brand">{v.title}</h3>
                <p className="text-xs text-mutedText leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 px-6 bg-[#FFF9F5]/40 border-t border-[#F5C6B3]/10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-heading text-2xl font-bold text-plum-brand">
            Have Questions About Fertility Care?
          </h2>
          <p className="text-xs text-mutedText max-w-xl mx-auto">
            Book a private session with our coordinator to walk through options, timelines, and simple support guidelines.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/appointment"
              className="bg-rose-brand text-white font-semibold px-6 py-3 rounded-full text-xs hover:bg-plum-brand transition-colors"
            >
              Book Consultation
            </Link>
            <Link
              to="/contact"
              className="bg-white text-darkText border border-gray-200 hover:border-rose-brand font-semibold px-6 py-3 rounded-full text-xs transition-colors"
            >
              Contact Clinic
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
