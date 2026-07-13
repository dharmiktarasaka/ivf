import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, AlertCircle } from 'lucide-react';
import SEO from '../seo/SEO';
import { doctorsData } from '../data/doctorsData';
import doctorLeadImg from '../assets/doctor_lead.png';
import doctorEmbryologistImg from '../assets/doctor_embryologist.png';
import doctorCounsellorImg from '../assets/doctor_counsellor.png';

const getDoctorImage = (role) => {
  if (role.toLowerCase().includes('lead') || role.toLowerCase().includes('director')) {
    return doctorLeadImg;
  }
  if (role.toLowerCase().includes('embryologist')) {
    return doctorEmbryologistImg;
  }
  if (role.toLowerCase().includes('counsellor')) {
    return doctorCounsellorImg;
  }
  return null;
};

const DoctorCard = ({ member, badge }) => (
  <div className="bg-white rounded-3xl p-6 shadow-soft border border-rose-brand/5 space-y-4 hover:shadow-premium transition-all">
    <div className="rounded-2xl aspect-[4/3] flex items-center justify-center text-white text-xl font-bold font-heading relative overflow-hidden bg-gradient-rose-plum shadow-inner">
      {getDoctorImage(member.role) ? (
        <img 
          src={getDoctorImage(member.role)} 
          alt={member.name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <span className="relative z-10 px-4 text-center text-sm">{member.imagePlaceholder}</span>
      )}
    </div>
    <div>
      <div className="flex items-center space-x-2 mb-1">
        <h3 className="font-heading font-bold text-plum-brand text-lg">{member.name}</h3>
        {badge && <span className="text-[9px] bg-blush-brand text-rose-brand font-bold px-2 py-0.5 rounded-full uppercase">{badge}</span>}
      </div>
      <p className="text-xs text-rose-brand font-semibold">{member.role}</p>
      <p className="text-[11px] text-mutedText mt-0.5">{member.specialty}</p>
    </div>
    <p className="text-xs text-mutedText leading-relaxed">{member.intro}</p>
    <Link to="/appointment" className="inline-block text-xs font-semibold text-rose-brand hover:underline mt-2">
      Book Consultation →
    </Link>
  </div>
);

export default function Doctors() {
  const allMembers = [
    ...doctorsData.embryologyTeam,
    ...doctorsData.nursingSupport,
    ...doctorsData.counsellingSupport,
    ...doctorsData.patientCoordination
  ];

  return (
    <div className="bg-bgLight">
      <SEO
        title="Our Fertility Doctors & Care Team"
        description="Meet the qualified, compassionate clinical team at Sarvamangal IVF. Fertility specialists, embryologists, counsellors and nurses dedicated to your care."
      />

      {/* Hero Banner */}
      <section className="bg-gradient-warm py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-rose-brand uppercase tracking-wider">Our Specialists</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-plum-brand">
            Meet Your Fertility Care Team
          </h1>
          <p className="text-xs md:text-sm text-mutedText leading-relaxed max-w-xl mx-auto">
            Our clinical team is built around compassion, expertise, and patient-first values. Below are placeholder profiles — verified details will be updated.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start space-x-3 text-xs text-amber-900">
          <AlertCircle size={18} className="flex-shrink-0 text-amber-600 mt-0.5" />
          <p>
            <strong>Data Source Notice:</strong> All clinical profiles below are illustrative placeholders for website demonstration purposes. Doctor names, qualifications, and photographs must be replaced with verified, accurate information provided directly by Sarvamangal IVF. Do not infer qualifications from placeholder data.
          </p>
        </div>
      </div>

      {/* Lead Specialist */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-plum-brand mb-8">Lead Fertility Specialist</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl p-8 border border-rose-brand/5 shadow-soft">
            <div className="lg:col-span-4 rounded-2xl aspect-square flex items-center justify-center text-white text-2xl font-bold font-heading shadow-premium relative overflow-hidden bg-gradient-rose-plum">
              <img 
                src={doctorLeadImg} 
                alt={doctorsData.leadSpecialist.name} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-8 space-y-4">
              <div>
                <h3 className="font-heading text-2xl font-bold text-plum-brand">{doctorsData.leadSpecialist.name}</h3>
                <p className="text-sm text-rose-brand font-semibold mt-0.5">{doctorsData.leadSpecialist.role}</p>
                <p className="text-xs text-mutedText italic mt-0.5">{doctorsData.leadSpecialist.qualificationPlaceholder}</p>
              </div>
              <p className="text-sm text-mutedText leading-relaxed">{doctorsData.leadSpecialist.intro}</p>
              <div className="flex items-center space-x-2 text-xs text-mutedText font-semibold">
                <CheckCircle2 size={14} className="text-rose-brand" />
                <span>Specialization: {doctorsData.leadSpecialist.specialty}</span>
              </div>
              <Link to="/appointment" className="inline-block bg-rose-brand text-white text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-plum-brand transition-colors">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of Team */}
      <section className="pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-10">
          <h2 className="font-heading text-2xl font-bold text-plum-brand">Supporting Clinical Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allMembers.map((m, i) => (
              <DoctorCard key={i} member={m} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
