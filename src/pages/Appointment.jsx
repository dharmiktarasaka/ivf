import React from 'react';
import SEO from '../seo/SEO';
import AppointmentForm from '../components/forms/AppointmentForm';

export default function Appointment() {
  return (
    <div className="bg-bgLight">
      <SEO
        title="Book an Appointment"
        description="Book a confidential fertility consultation at Sarvamangal IVF, Ahmedabad. Choose your preferred time and treatment interest. Your details are kept private."
      />

      {/* Hero */}
      <section className="bg-gradient-warm py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-rose-brand uppercase tracking-wider">Secure Appointment</span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-plum-brand">Book Your Fertility Consultation</h1>
          <p className="text-xs md:text-sm text-mutedText max-w-xl mx-auto">
            Complete the form below to request a private, personalized appointment with our fertility care team.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
}
