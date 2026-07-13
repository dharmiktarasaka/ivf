import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Download, Phone, MessageCircle } from 'lucide-react';
import SEO from '../seo/SEO';
import { journeyData } from '../data/journeyData';
import { businessDetails } from '../config/businessDetails';

export default function FertilityJourney() {
  const detailedSteps = [
    {
      step: 1,
      title: "When to Seek Fertility Support",
      heading: "Recognising the Right Time",
      content: "If you are under 35 and have been trying for over a year, or over 35 and tried for six months, scheduling a consultation is a positive first step. Some couples benefit from an early evaluation if they have known health conditions affecting reproduction.",
      bullets: ["Irregular or absent menstrual cycles", "Known PCOS, endometriosis, or hormonal imbalance", "Previous pelvic surgeries or infections", "Prior pregnancy loss (recurrent miscarriages)"]
    },
    {
      step: 2,
      title: "Your First Consultation",
      heading: "A Private, Relaxed Discussion",
      content: "The first visit to our clinic is an unhurried conversation. We listen to your medical history, answer your questions, and outline what the next steps may look like. There is no pressure and no rush.",
      bullets: ["Medical and reproductive history review", "Lifestyle and diet discussion", "Emotional check-in and support assessment", "Overview of available diagnostic and treatment options"]
    },
    {
      step: 3,
      title: "Female Fertility Evaluation",
      heading: "Gentle Diagnostic Testing for Women",
      content: "Our clinical team conducts a series of targeted, comfortable tests to understand hormonal balance, egg reserve, and reproductive anatomy.",
      bullets: ["Hormone blood panels (FSH, LH, AMH, thyroid)", "Transvaginal ultrasound (ovarian reserve & follicle scan)", "Hysterosalpingography (HSG) – tubal patency check", "Pelvic examination and medical history review"]
    },
    {
      step: 4,
      title: "Male Fertility Evaluation",
      heading: "A Simple, Private Assessment",
      content: "Male fertility testing is straightforward, private, and crucial. Many fertility journeys are improved after addressing male reproductive factors.",
      bullets: ["Semen analysis (count, motility, shape)", "Hormonal profiling if indicated", "Lifestyle guidance (diet, heat exposure, stress reduction)", "Referral for advanced sperm testing if required"]
    },
    {
      step: 5,
      title: "Personalized Treatment Plan",
      heading: "A Plan Built Around You",
      content: "After reviewing all evaluations, our specialist designs a customized clinical pathway — recommending the most appropriate, least invasive treatment option to start with.",
      bullets: ["Plain-language treatment explanation", "Timeline and monitoring schedule overview", "Emotional and counselling plan outline", "Lifestyle and medication guidance"]
    },
    {
      step: 6,
      title: "Treatment and Monitoring",
      heading: "Close, Caring Oversight",
      content: "Whether you are undergoing IUI, IVF, ICSI, or another treatment, our team monitors your response carefully with regular scans, blood tests, and check-ins.",
      bullets: ["Follicle tracking ultrasounds", "Hormone level monitoring via blood tests", "Embryology updates during IVF/ICSI cycles", "Immediate access to your nursing care team"]
    }
  ];

  return (
    <div className="bg-bgLight">
      <SEO
        title="Your Fertility Journey"
        description="Understand the complete fertility care journey at Sarvamangal IVF — from consultation and testing to personalized treatment and ongoing emotional support."
      />

      {/* Hero Banner */}
      <section className="bg-gradient-warm py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-rose-brand uppercase tracking-wider">Your Path Forward</span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-plum-brand">
            Understanding Your Fertility Journey
          </h1>
          <p className="text-xs md:text-sm text-mutedText leading-relaxed max-w-xl mx-auto">
            A step-by-step, plain-language guide to help you understand what to expect at every stage of your fertility care at Sarvamangal IVF.
          </p>
        </div>
      </section>

      {/* Overview Timeline Pills */}
      <section className="py-10 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {journeyData.map((step, i) => (
            <span key={i} className="inline-flex items-center space-x-2 bg-blush-brand text-plum-brand font-semibold text-xs px-4 py-2 rounded-full border border-rose-brand/10">
              <span className="w-5 h-5 bg-rose-brand text-white rounded-full flex items-center justify-center text-[10px] font-bold">{step.step}</span>
              <span>{step.title}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-10">
          {detailedSteps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-rose-brand/5 shadow-soft grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-2 flex items-start justify-center md:justify-start pt-1">
                <div className="w-12 h-12 rounded-2xl bg-rose-brand text-white flex items-center justify-center text-xl font-bold font-heading shadow-md">
                  {step.step}
                </div>
              </div>
              <div className="md:col-span-10 space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-rose-brand uppercase tracking-wider">Step {step.step}</span>
                  <h2 className="font-heading text-xl font-bold text-plum-brand mt-0.5">{step.title}</h2>
                  <h3 className="font-heading text-base text-rose-brand/80 font-medium">{step.heading}</h3>
                </div>
                <p className="text-sm text-mutedText leading-relaxed">{step.content}</p>
                <ul className="space-y-2">
                  {step.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start space-x-2 text-xs text-mutedText">
                      <CheckCircle2 size={14} className="text-rose-brand flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guide Download Demo Button */}
      <section className="py-10 px-6 bg-bgLight border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h3 className="font-heading text-xl font-bold text-plum-brand">Download Our Fertility Journey Guide</h3>
          <p className="text-xs text-mutedText">A simple printable summary to share with your partner (Demo — no real file download).</p>
          <button
            onClick={() => alert('Demo: In a live clinic system, a PDF guide would be generated and downloaded here.')}
            className="inline-flex items-center space-x-2 bg-rose-brand text-white font-semibold px-6 py-3 rounded-full hover:bg-plum-brand transition-colors text-xs cursor-pointer"
          >
            <Download size={16} />
            <span>Download Guide (Demo)</span>
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-heading text-2xl font-bold text-plum-brand">Ready to Begin Your Journey?</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/appointment" className="bg-rose-brand text-white font-semibold px-8 py-3 rounded-full hover:bg-plum-brand transition-colors text-xs text-center">
              Book First Consultation
            </Link>
            <a href={businessDetails.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#128C7E] transition-colors text-xs text-center flex items-center justify-center space-x-1.5">
              <MessageCircle size={14} className="fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
