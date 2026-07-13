import React, { useState } from 'react';
import { Mail, CheckCircle, Shield } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'General Enquiry',
    treatmentInterest: 'IVF Treatment',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const enquiryTypes = [
    'General Enquiry',
    'Treatment Questions',
    'Billing & Costing Inquiry',
    'Second Opinion Request',
    'Other Support'
  ];

  const treatments = [
    'IVF Treatment',
    'ICSI Treatment',
    'IUI Treatment',
    'Egg Freezing',
    'Male Fertility Support',
    'Female Fertility Support',
    'Laparoscopy & Hysteroscopy',
    'Other Care'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please type a message';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Save to LocalStorage CRM
    const crmLeads = JSON.parse(localStorage.getItem('sarvamangal_crm_leads') || '[]');
    const newLead = {
      id: Date.now(),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      source: 'Contact Page Form',
      interest: `${formData.enquiryType} - ${formData.treatmentInterest}`,
      preferredDate: new Date().toLocaleDateString(),
      preferredTime: 'N/A',
      status: 'New Enquiry',
      notes: formData.message,
      date: new Date().toISOString()
    };
    crmLeads.push(newLead);
    localStorage.setItem('sarvamangal_crm_leads', JSON.stringify(crmLeads));

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-premium border border-rose-brand/5 text-center">
        <div className="bg-emerald-50 text-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={24} />
        </div>
        <h3 className="font-heading text-xl font-bold text-plum-brand mb-2">Message Sent</h3>
        <p className="text-xs text-mutedText leading-relaxed">
          Thank you, <strong>{formData.name}</strong>. Your message has been received with strict confidentiality. Our team will review your enquiry and respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-8 shadow-premium border border-rose-brand/5 space-y-5">
      <div className="flex items-center space-x-1.5 text-rose-brand text-[11px] font-semibold uppercase tracking-wider">
        <Shield size={14} />
        <span>Confidential Contact Form</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-semibold text-darkText mb-1.5" htmlFor="name">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={`w-full bg-bgLight rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 ${
              errors.name ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-rose-brand border border-gray-100'
            }`}
          />
          {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-darkText mb-1.5" htmlFor="phone">
            Phone Number *
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98986 82649"
            className={`w-full bg-bgLight rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 ${
              errors.phone ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-rose-brand border border-gray-100'
            }`}
          />
          {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone}</span>}
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-semibold text-darkText mb-1.5" htmlFor="email">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="name@example.com"
          className={`w-full bg-bgLight rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 ${
            errors.email ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-rose-brand border border-gray-100'
          }`}
        />
        {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-semibold text-darkText mb-1.5" htmlFor="enquiryType">
            Enquiry Type
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className="w-full bg-bgLight rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-rose-brand border border-gray-100"
          >
            {enquiryTypes.map(e => <option key={e} value={e}>{e}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-darkText mb-1.5" htmlFor="treatmentInterest">
            Treatment Interest
          </label>
          <select
            id="treatmentInterest"
            name="treatmentInterest"
            value={formData.treatmentInterest}
            onChange={handleChange}
            className="w-full bg-bgLight rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-rose-brand border border-gray-100"
          >
            {treatments.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-semibold text-darkText mb-1.5" htmlFor="message">
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you? Feel free to ask details..."
          className={`w-full bg-bgLight rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 ${
            errors.message ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-rose-brand border border-gray-100'
          } resize-none`}
        />
        {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message}</span>}
      </div>

      <button
        type="submit"
        className="w-full bg-rose-brand hover:bg-plum-brand text-white py-3 rounded-full text-xs font-semibold shadow-md transition-colors cursor-pointer"
      >
        Send Confidential Message
      </button>
    </form>
  );
}
