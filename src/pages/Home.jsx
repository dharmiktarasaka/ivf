import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, Heart, Shield, CheckCircle2, ChevronRight, MessageCircle, 
  Phone, HeartHandshake, Sparkles, Plus, Minus, ArrowRight, MapPin, 
  Award, Eye, X 
} from 'lucide-react';

import SEO from '../seo/SEO';
import { businessDetails } from '../config/businessDetails';
import { treatmentsData } from '../data/treatmentsData';
import { journeyData } from '../data/journeyData';
import { reviewsData } from '../data/reviewsData';
import { successStoriesData } from '../data/successStoriesData';
import { faqsData } from '../data/faqsData';
import { doctorsData } from '../data/doctorsData';
import TreatmentCard from '../components/treatments/TreatmentCard';
import QuickAppointmentCard from '../components/forms/QuickAppointmentCard';

// Asset Imports
import consultationSuiteImg from '../assets/consultation_suite.png';
import doctorLeadImg from '../assets/doctor_lead.png';
import doctorEmbryologistImg from '../assets/doctor_embryologist.png';
import doctorCounsellorImg from '../assets/doctor_counsellor.png';

// Framer Motion Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Home() {
  // Testimonials state
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);
  
  // Lightbox state
  const [activeLightboxImg, setActiveLightboxImg] = useState(null);

  // FAQ state
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  // Environment Gallery Images list
  const galleryImages = [
    { id: 1, label: "Warm Reception & Lounge", type: "Reception", color: "from-rose-100 to-peach-100", imgSrc: doctorCounsellorImg },
    { id: 2, label: "Private Consultation Suites", type: "Consultation", color: "from-lavender-100 to-blush-100", imgSrc: consultationSuiteImg },
    { id: 3, label: "Advanced Embryology Lab", type: "Laboratory", color: "from-sage-100 to-cream-100", imgSrc: doctorEmbryologistImg },
    { id: 4, label: "Patient Comfort Waiting Lounge", type: "Waiting Lounge", color: "from-blush-100 to-sage-100", imgSrc: consultationSuiteImg },
    { id: 5, label: "State-of-the-Art Treatment Rooms", type: "Treatment Room", color: "from-peach-100 to-lavender-100", imgSrc: consultationSuiteImg },
    { id: 6, label: "Supportive Nursing & Recovery", type: "Recovery Area", color: "from-rose-100 to-cream-100", imgSrc: consultationSuiteImg }
  ];

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Your Journey to Parenthood" 
        description="Sarvamangal IVF provides compassionate fertility, maternity, and IVF/IUI/ICSI treatments in Shyamal, Ahmedabad. Enjoy private, trustworthy care. Schedule a consultation."
        keywords={[
          "IVF centre in Ahmedabad", "IVF clinic in Shyamal", "Fertility specialist in Ahmedabad",
          "IVF treatment in Ahmedabad", "IUI treatment in Ahmedabad", "ICSI treatment in Ahmedabad",
          "Sarvamangal IVF Ahmedabad"
        ]}
        faqData={faqsData}
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-8 pb-16 bg-gradient-warm px-6 md:px-12">
        {/* Floating Organic Decorative Shapes */}
        <motion.div 
          animate={{ y: [0, -15, 0], scale: [1, 1.04, 1] }} 
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} 
          className="absolute top-1/4 left-10 w-48 h-48 bg-blush-brand/60 rounded-full blur-3xl pointer-events-none" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0], scale: [1, 0.96, 1] }} 
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }} 
          className="absolute bottom-10 right-20 w-72 h-72 bg-lavender-brand/30 rounded-full blur-3xl pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Hero Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-white/60 border border-rose-brand/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-rose-brand shadow-sm">
              <Sparkles size={14} />
              <span>Compassionate Care Meets Advanced Science</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-plum-brand leading-[1.1] tracking-tight">
              Your Journey to Parenthood <br/>
              <span className="text-rose-brand">Deserves Expert Care and Hope.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-sm md:text-base text-mutedText max-w-xl leading-relaxed">
              At Sarvamangal IVF, we couple state-of-the-art reproductive science with gentle, personalized guidance. We are here to support you at every single step of your family journey.
            </motion.p>

            {/* Trust Badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 py-2 text-xs font-medium text-darkText">
              <div className="flex items-center space-x-1">
                <Star size={14} className="fill-[#F5A623] text-[#F5A623]" />
                <span className="font-bold">5.0</span>
                <span>(462 Google Reviews)</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 size={14} className="text-rose-brand" />
                <span>Open Daily Until 8:00 PM</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="flex items-center space-x-1.5">
                <Shield size={14} className="text-rose-brand" />
                <span>100% Confidential Care</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/appointment"
                className="bg-rose-brand text-white font-semibold px-8 py-3.5 rounded-full shadow-md hover:bg-plum-brand transition-all text-center text-sm cursor-pointer"
              >
                Book a Confidential Consultation
              </Link>
              <Link
                to="/treatments"
                className="bg-white text-darkText border border-gray-200 hover:border-rose-brand font-semibold px-8 py-3.5 rounded-full shadow-sm text-center text-sm transition-all cursor-pointer"
              >
                Explore Treatments
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-2">
              <Link to="/contact" className="text-xs font-bold text-rose-brand hover:underline flex items-center space-x-1">
                <span>Talk to a Fertility Expert</span>
                <ArrowRight size={12} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Hero: Quick Callback Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 max-w-md mx-auto w-full"
          >
            <QuickAppointmentCard />
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="bg-plum-brand py-6 px-6 md:px-12 text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center gap-6 text-center text-xs md:text-sm font-medium">
          <div className="flex items-center space-x-2">
            <Star size={18} className="fill-[#F5A623] text-[#F5A623]" />
            <span>5.0 Rating (462 Verified Reviews)</span>
          </div>
          <div className="hidden sm:block text-white/20">|</div>
          <div className="flex items-center space-x-2">
            <Heart size={18} className="text-rose-brand" />
            <span>Compassionate Family Care</span>
          </div>
          <div className="hidden sm:block text-white/20">|</div>
          <div className="flex items-center space-x-2">
            <Shield size={18} className="text-rose-brand" />
            <span>Private & Confidential Consultations</span>
          </div>
        </div>
      </section>

      {/* 3. WELCOME SECTION */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left: Description & Benefits */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.span variants={fadeInUp} className="text-xs font-bold tracking-wider text-rose-brand uppercase block">Welcome to Sarvamangal IVF</motion.span>
            <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl font-bold text-plum-brand">
              Fertility Care That Feels Personal
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-sm text-mutedText leading-relaxed">
              At Sarvamangal IVF, we understand that facing fertility hurdles can feel emotionally overwhelming. We believe every couple’s story is unique and deserves detailed care, absolute privacy, and modern clinical expertise in a comfortable, supportive environment.
            </motion.p>

            {/* Benefit Grid */}
            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <motion.div variants={fadeInUp} className="flex items-start space-x-3">
                <div className="bg-blush-brand text-rose-brand p-2 rounded-xl mt-0.5">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-plum-brand">Individual Treatment Planning</h4>
                  <p className="text-xs text-mutedText mt-1">Customised cycles created for your health requirements.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start space-x-3">
                <div className="bg-blush-brand text-rose-brand p-2 rounded-xl mt-0.5">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-plum-brand">Supportive Clinical Team</h4>
                  <p className="text-xs text-mutedText mt-1">Experienced embryologists and nurses focused on your well-being.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start space-x-3">
                <div className="bg-blush-brand text-rose-brand p-2 rounded-xl mt-0.5">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-plum-brand">Clear Treatment Guidance</h4>
                  <p className="text-xs text-mutedText mt-1">Plain language explanations without complicated medical jargon.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start space-x-3">
                <div className="bg-blush-brand text-rose-brand p-2 rounded-xl mt-0.5">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-plum-brand">Comfortable & Homely Environment</h4>
                  <p className="text-xs text-mutedText mt-1">A welcoming clinic clinic created to ease stress and support hope.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Consultation Suite visual */}
          <motion.div variants={scaleIn} className="lg:col-span-5 rounded-3xl shadow-premium aspect-[4/5] relative flex flex-col justify-end overflow-hidden group">
            <img 
              src={consultationSuiteImg} 
              alt="Sarvamangal IVF Consultation Suite" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum-brand/90 via-plum-brand/30 to-transparent z-10" />
            <div className="p-8 relative z-20 text-white space-y-2">
              <span className="text-xs font-semibold text-peach-brand tracking-widest uppercase">Our Consultation Suite</span>
              <p className="font-heading text-lg font-medium text-white leading-snug">
                "We are here to support your steps towards parenthood with comfort and complete reassurance."
              </p>
              <div className="text-[10px] text-white/60">• Sarvamangal IVF Patient Care</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. TREATMENTS SECTION */}
      <section className="py-20 px-6 md:px-12 bg-bgLight">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto text-center space-y-4 mb-16"
        >
          <motion.span variants={fadeInUp} className="text-xs font-bold tracking-wider text-rose-brand uppercase block">Clinical Expertise</motion.span>
          <motion.h2 variants={fadeInUp} className="font-heading text-3xl md:text-4xl font-bold text-plum-brand">
            Fertility Treatments and Services
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-sm text-mutedText max-w-xl mx-auto">
            Explore our range of supportive, advanced reproductive treatments and diagnostics planned to give you the highest chance of success.
          </motion.p>
        </motion.div>

        {/* Treatment cards list (Showing top treatments, full list is in routing) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {treatmentsData.slice(0, 6).map((t, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <TreatmentCard treatment={t} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center pt-12">
          <Link
            to="/treatments"
            className="inline-flex items-center space-x-2 bg-rose-brand text-white font-semibold px-8 py-3.5 rounded-full hover:bg-plum-brand transition-colors text-sm"
          >
            <span>View All Treatments</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* 5. FERTILITY JOURNEY */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold tracking-wider text-rose-brand uppercase">Your Path Ahead</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-plum-brand">
            Understanding Your Fertility Journey
          </h2>
          <p className="text-sm text-mutedText max-w-xl mx-auto">
            From your first private discussion to treatment monitoring, here is how we walk together.
          </p>
        </div>

        {/* Visual Connected Timeline */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {journeyData.map((step, idx) => (
            <div key={idx} className="bg-bgLight rounded-2xl p-6 border border-gray-100 hover:border-rose-brand/20 transition-all text-left relative flex flex-col justify-between shadow-soft group">
              <div>
                <div className="w-8 h-8 rounded-full bg-rose-brand text-white flex items-center justify-center text-xs font-bold mb-4 shadow-sm">
                  {step.step}
                </div>
                <h4 className="font-heading font-semibold text-base text-plum-brand mb-2 group-hover:text-rose-brand transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-mutedText leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHY CHOOSE SARVAMANGAL IVF */}
      <section className="py-20 px-6 md:px-12 bg-[#FFF9F5]/40 border-y border-[#F5C6B3]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 space-y-4 text-left">
            <span className="text-xs font-bold tracking-wider text-rose-brand uppercase">The Sarvamangal Advantage</span>
            <h2 className="font-heading text-3xl font-bold text-plum-brand">Why Choose Our Centre?</h2>
            <p className="text-xs text-mutedText leading-relaxed">
              We know fertility care is a deeply emotional choice. Here are the core values we uphold to support you.
            </p>
            <div className="pt-2">
              <Link 
                to="/about"
                className="inline-flex items-center space-x-1 text-xs font-bold text-rose-brand hover:underline"
              >
                <span>Read Our Mission</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-5 shadow-soft border border-rose-brand/5 space-y-2">
              <h4 className="font-bold text-sm text-plum-brand">Personalized Fertility Care</h4>
              <p className="text-xs text-mutedText">We design specific plans aligned to your physical checkups.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-soft border border-rose-brand/5 space-y-2">
              <h4 className="font-bold text-sm text-plum-brand">Male & Female Fertility Support</h4>
              <p className="text-xs text-mutedText">Complete diagnostics for both partners in one private clinic.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-soft border border-rose-brand/5 space-y-2">
              <h4 className="font-bold text-sm text-plum-brand">Clear Communication</h4>
              <p className="text-xs text-mutedText">Complete clarity on timelines and processes without medical jargon.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-soft border border-rose-brand/5 space-y-2">
              <h4 className="font-bold text-sm text-plum-brand">Supportive Staff</h4>
              <p className="text-xs text-mutedText">Warm, supportive care team assisting you at each treatment turn.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-soft border border-rose-brand/5 space-y-2">
              <h4 className="font-bold text-sm text-plum-brand">Comfortable Environment</h4>
              <p className="text-xs text-mutedText">A peaceful clinic environment planned to eliminate anxiety.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-soft border border-rose-brand/5 space-y-2">
              <h4 className="font-bold text-sm text-plum-brand">Complete Guidance</h4>
              <p className="text-xs text-mutedText">Counselling, cycles, and monitoring combined seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TREATMENT EXPLAINER COMPILER */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-wider text-rose-brand uppercase">Treatment Explainer</span>
            <h2 className="font-heading text-3xl font-bold text-plum-brand">IVF vs IUI vs ICSI: A Quick Comparison</h2>
            <p className="text-xs text-mutedText max-w-lg mx-auto">
              A plain-language comparison to help you understand the primary differences.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-soft">
            <table className="w-full text-left border-collapse min-w-[600px] text-xs">
              <thead>
                <tr className="bg-plum-brand text-white font-heading">
                  <th className="p-4 font-semibold">Treatment</th>
                  <th className="p-4 font-semibold">What it Means</th>
                  <th className="p-4 font-semibold">Who Considers It</th>
                  <th className="p-4 font-semibold">Typical Consultation Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white text-darkText font-sans">
                <tr>
                  <td className="p-4 font-bold text-rose-brand">IUI (Intrauterine Insemination)</td>
                  <td className="p-4">Prepared sperm is placed directly inside the uterus.</td>
                  <td className="p-4">Mild male factor concerns, unexplained factors.</td>
                  <td className="p-4">Requires open fallopian tubes.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-rose-brand">IVF (In Vitro Fertilization)</td>
                  <td className="p-4">Eggs are retrieved and fertilized in a lab, then transferred.</td>
                  <td className="p-4">Blockage, advanced age, unexplained fertility.</td>
                  <td className="p-4">Ovarian reserves check, tubal checks.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-rose-brand">ICSI (Micro-fertilization)</td>
                  <td className="p-4">A single sperm is directly micro-injected into an egg.</td>
                  <td className="p-4">Severe male factor concerns, poor past IVF fertilization.</td>
                  <td className="p-4">Detailed semen analysis.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 p-4 rounded-xl text-center text-[10px] text-amber-800 leading-relaxed border border-amber-100 max-w-3xl mx-auto">
            <strong>Treatment Suitability Disclaimer:</strong> Treatment suitability depends entirely on individual medical evaluations. Consult a qualified fertility specialist for personalized clinical guidance.
          </div>
        </div>
      </section>

      {/* 8. DOCTOR AND CARE TEAM PREVIEW */}
      <section className="py-20 px-6 md:px-12 bg-bgLight">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-wider text-rose-brand uppercase">Clinical Experts</span>
            <h2 className="font-heading text-3xl font-bold text-plum-brand">Meet Your Fertility Care Team</h2>
            <p className="text-xs text-mutedText max-w-md mx-auto">
              Our specialists are placeholders representing our care staff.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {/* Lead specialist */}
            <div className="bg-white rounded-3xl p-6 shadow-soft border border-rose-brand/5 space-y-4">
              <div className="rounded-2xl aspect-square flex items-center justify-center text-white text-lg font-bold relative overflow-hidden bg-gradient-rose-plum shadow-inner">
                <img 
                  src={doctorLeadImg} 
                  alt={doctorsData.leadSpecialist.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-plum-brand text-lg">{doctorsData.leadSpecialist.name}</h4>
                <p className="text-xs text-rose-brand font-semibold">{doctorsData.leadSpecialist.role}</p>
                <p className="text-[11px] text-mutedText italic">{doctorsData.leadSpecialist.qualificationPlaceholder}</p>
              </div>
              <p className="text-xs text-mutedText leading-relaxed">
                {doctorsData.leadSpecialist.intro}
              </p>
              <Link
                to="/doctors"
                className="inline-flex items-center text-xs font-semibold text-rose-brand hover:underline"
              >
                <span>View Full Team Profile</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            {/* Embryologist 1 */}
            <div className="bg-white rounded-3xl p-6 shadow-soft border border-rose-brand/5 space-y-4">
              <div className="rounded-2xl aspect-square flex items-center justify-center text-white text-lg font-bold relative overflow-hidden bg-gradient-to-tr from-sage-brand to-blush-brand shadow-inner">
                <img 
                  src={doctorEmbryologistImg} 
                  alt={doctorsData.embryologyTeam[0].name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-plum-brand text-lg">{doctorsData.embryologyTeam[0].name}</h4>
                <p className="text-xs text-rose-brand font-semibold">{doctorsData.embryologyTeam[0].role}</p>
                <p className="text-[11px] text-mutedText italic">Embryology Specialist (Placeholder)</p>
              </div>
              <p className="text-xs text-mutedText leading-relaxed">
                {doctorsData.embryologyTeam[0].intro}
              </p>
              <Link
                to="/doctors"
                className="inline-flex items-center text-xs font-semibold text-rose-brand hover:underline"
              >
                <span>View Full Team Profile</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            {/* Counsellor */}
            <div className="bg-white rounded-3xl p-6 shadow-soft border border-rose-brand/5 space-y-4">
              <div className="rounded-2xl aspect-square flex items-center justify-center text-white text-lg font-bold relative overflow-hidden bg-gradient-to-tr from-lavender-brand to-peach-brand shadow-inner">
                <img 
                  src={doctorCounsellorImg} 
                  alt={doctorsData.counsellingSupport[0].name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-plum-brand text-lg">{doctorsData.counsellingSupport[0].name}</h4>
                <p className="text-xs text-rose-brand font-semibold">{doctorsData.counsellingSupport[0].role}</p>
                <p className="text-[11px] text-mutedText italic">Emotional Wellbeing Support (Placeholder)</p>
              </div>
              <p className="text-xs text-mutedText leading-relaxed">
                {doctorsData.counsellingSupport[0].intro}
              </p>
              <Link
                to="/doctors"
                className="inline-flex items-center text-xs font-semibold text-rose-brand hover:underline"
              >
                <span>View Full Team Profile</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PATIENT REVIEWS */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-wider text-rose-brand uppercase">Testimonials</span>
            <h2 className="font-heading text-3xl font-bold text-plum-brand">Patient Experiences</h2>
          </div>

          {/* Carousel Content */}
          <div className="relative bg-bgLight rounded-3xl p-8 md:p-12 border border-gray-100 shadow-soft min-h-[220px] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex justify-center space-x-1">
                {[...Array(reviewsData[activeReviewIdx].rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#F5A623] text-[#F5A623]" />
                ))}
              </div>
              <p className="font-heading text-lg md:text-xl text-darkText italic leading-relaxed">
                "{reviewsData[activeReviewIdx].quote}"
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200/50 mt-6 flex justify-between items-center">
              <div>
                <h4 className="font-bold text-xs text-plum-brand">{reviewsData[activeReviewIdx].author}</h4>
                <p className="text-[10px] text-mutedText">{reviewsData[activeReviewIdx].role}</p>
              </div>
              <span className="text-[10px] text-mutedText">{reviewsData[activeReviewIdx].date}</span>
            </div>

            {/* Carousel Buttons */}
            <div className="flex justify-center space-x-3 mt-6">
              <button 
                onClick={prevReview}
                className="p-2.5 rounded-full border border-gray-200 hover:border-rose-brand transition-colors text-darkText hover:text-rose-brand cursor-pointer"
                aria-label="Previous Review"
              >
                &larr;
              </button>
              <button 
                onClick={nextReview}
                className="p-2.5 rounded-full border border-gray-200 hover:border-rose-brand transition-colors text-darkText hover:text-rose-brand cursor-pointer"
                aria-label="Next Review"
              >
                &rarr;
              </button>
            </div>
          </div>

          <div className="bg-blush-brand/50 rounded-2xl p-4 inline-flex items-center space-x-3">
            <span className="font-heading font-bold text-rose-brand text-lg">Google Reviews Rating: 5.0</span>
            <span className="text-mutedText">Based on 462 patient reviews.</span>
          </div>
        </div>
      </section>

      {/* 10. EMOTIONAL SUPPORT */}
      <section className="py-20 px-6 md:px-12 bg-gradient-rose-plum text-white relative">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <Heart size={44} className="text-[#F5C6B3] mx-auto animate-pulse" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            You Do Not Have to Navigate This Journey Alone
          </h2>
          <p className="text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Fertility care involves emotional hurdles alongside clinical steps. We focus on providing private counselling, welcoming discussions, and clear data to help you feel supported every single day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              to="/appointment"
              className="bg-white text-plum-brand hover:bg-[#FFF9F5] font-semibold px-8 py-3.5 rounded-full shadow-md text-sm text-center"
            >
              Book Counselling
            </Link>
            <Link
              to="/callback"
              className="bg-transparent border border-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-full text-sm text-center text-white"
            >
              Request a Callback
            </Link>
          </div>
        </div>
      </section>

      {/* 11. SUCCESS STORIES PREVIEW */}
      <section className="py-20 px-6 md:px-12 bg-bgLight">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-wider text-rose-brand uppercase">Hope and Care</span>
            <h2 className="font-heading text-3xl font-bold text-plum-brand">Patient Success Stories</h2>
            <p className="text-xs text-mutedText max-w-md mx-auto">
              Please note: These stories are fictional demo placeholders to protect privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStoriesData.map((story, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 shadow-soft border border-rose-brand/5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-block bg-blush-brand text-rose-brand font-semibold text-[10px] px-3 py-1 rounded-full uppercase">
                    {story.treatmentType}
                  </div>
                  <h4 className="font-heading font-semibold text-base text-plum-brand leading-snug">
                    {story.title}
                  </h4>
                  <p className="text-xs text-mutedText leading-relaxed">
                    <strong>Challenge:</strong> {story.challenge}
                  </p>
                  <p className="text-xs text-mutedText leading-relaxed">
                    <strong>Journey:</strong> {story.journeySummary}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-gray-100 mt-6 space-y-2">
                  <span className="text-[10px] text-mutedText italic font-semibold">{story.author}</span>
                  <div className="text-[9px] text-mutedText/60 bg-bgLight p-2 rounded-lg leading-relaxed">
                    {story.disclaimer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CLINIC ENVIRONMENT GALLERY */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-wider text-rose-brand uppercase">Inside Sarvamangal IVF</span>
            <h2 className="font-heading text-3xl font-bold text-plum-brand">Clinic Environment</h2>
            <p className="text-xs text-mutedText max-w-md mx-auto">
              A glimpse inside our warm and supportive fertility care facilities. Click to expand.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <button
                key={img.id}
                onClick={() => setActiveLightboxImg(img)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] text-white flex flex-col justify-between p-4 shadow-soft hover:shadow-premium transition-all border border-gray-100 cursor-pointer text-left focus:outline-none"
                style={{ contentVisibility: 'auto' }}
              >
                {img.imgSrc ? (
                  <img 
                    src={img.imgSrc} 
                    alt={img.label} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-tr ${img.color} opacity-70 group-hover:opacity-85 transition-opacity`} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-plum-brand/80 via-transparent to-transparent z-10" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-peach-brand relative z-20">{img.type}</span>
                <div className="flex justify-between items-center w-full relative z-20">
                  <span className="font-heading text-xs font-bold text-white">{img.label}</span>
                  <div className="bg-white/80 text-plum-brand p-1.5 rounded-full group-hover:bg-rose-brand group-hover:text-white transition-colors z-20">
                    <Eye size={12} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeLightboxImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-darkText/90 z-[999] flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="bg-white rounded-3xl max-w-xl w-full p-8 relative space-y-6 text-center"
              >
                <button
                  onClick={() => setActiveLightboxImg(null)}
                  className="absolute top-4 right-4 text-mutedText hover:text-darkText transition-colors z-30"
                >
                  <X size={20} />
                </button>
                <div className="w-full aspect-[4/3] rounded-2xl relative overflow-hidden flex items-center justify-center p-4 border border-rose-brand/10 shadow-inner">
                  {activeLightboxImg.imgSrc ? (
                    <img 
                      src={activeLightboxImg.imgSrc} 
                      alt={activeLightboxImg.label} 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-tr ${activeLightboxImg.color}`} />
                  )}
                  <span className="font-heading text-lg font-bold text-white relative z-20 drop-shadow-md">{activeLightboxImg.label}</span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading font-semibold text-lg text-plum-brand">{activeLightboxImg.label}</h4>
                  <p className="text-xs text-mutedText">High quality clinical consultation and recovery environment. Real photographs will be updated.</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 13. APPOINTMENT CTA */}
      <section className="py-20 px-6 md:px-12 bg-bgLight">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-8 md:p-12 border border-rose-brand/5 shadow-premium space-y-6">
          <span className="text-xs font-bold tracking-wider text-rose-brand uppercase">Start Your Consultation</span>
          <h2 className="font-heading text-3xl font-bold text-plum-brand leading-snug">
            Take the First Step With a Confidential Consultation
          </h2>
          <p className="text-xs text-mutedText max-w-xl mx-auto leading-relaxed">
            Speak with our fertility-care team and understand which evaluation or treatment approach may be appropriate for you. We provide step-by-step clarity.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Link
              to="/appointment"
              className="bg-rose-brand text-white font-semibold px-8 py-3.5 rounded-full hover:bg-plum-brand transition-colors text-xs text-center"
            >
              Book Appointment
            </Link>
            <a
              href={businessDetails.phoneLink}
              className="bg-white border border-rose-brand text-rose-brand font-semibold px-8 py-3.5 rounded-full hover:bg-rose-brand hover:text-white transition-all text-xs text-center flex items-center justify-center space-x-1.5"
            >
              <Phone size={14} />
              <span>Call +91 98986 82649</span>
            </a>
            <a
              href={businessDetails.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#128C7E] transition-all text-xs text-center flex items-center justify-center space-x-1.5"
            >
              <MessageCircle size={14} className="fill-current" />
              <span>WhatsApp the Clinic</span>
            </a>
          </div>
        </div>
      </section>

      {/* 14. LOCATION SECTION */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-bold tracking-wider text-rose-brand uppercase">Locations</span>
            <h2 className="font-heading text-3xl font-bold text-plum-brand">Where to Find Us</h2>
            <div className="space-y-4 text-xs leading-relaxed text-mutedText">
              <p className="font-bold text-plum-brand text-sm">{businessDetails.name}</p>
              <p className="flex items-start space-x-2">
                <MapPin size={16} className="text-rose-brand flex-shrink-0 mt-0.5" />
                <span>{businessDetails.address}</span>
              </p>
              <p><strong>Opening Hours:</strong> {businessDetails.openingHours}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <a
                href={businessDetails.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-300 text-darkText font-semibold py-2.5 rounded-full text-center text-xs hover:border-rose-brand transition-colors"
              >
                Get Directions
              </a>
              <a
                href={businessDetails.phoneLink}
                className="bg-rose-brand text-white font-semibold py-2.5 rounded-full text-center text-xs hover:bg-plum-brand transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-soft border border-gray-150 h-[300px]">
            <iframe
              title="Sarvamangal IVF location map"
              src={businessDetails.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 15. FAQ SECTION */}
      <section className="py-20 px-6 md:px-12 bg-bgLight">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-wider text-rose-brand uppercase">FAQs</span>
            <h2 className="font-heading text-3xl font-bold text-plum-brand">Frequently Asked Questions</h2>
            <p className="text-xs text-mutedText max-w-sm mx-auto">
              Simple, reassuring answers to common questions about fertility care.
            </p>
          </div>

          <div className="space-y-3">
            {faqsData.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-rose-brand/5 shadow-soft overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-heading font-semibold text-sm text-plum-brand hover:text-rose-brand transition-colors flex justify-between items-center cursor-pointer focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {openFaqIdx === idx ? <Minus size={16} /> : <Plus size={16} />}
                </button>
                <AnimatePresence initial={false}>
                  {openFaqIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-5 text-xs text-mutedText leading-relaxed border-t border-gray-50 pt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
