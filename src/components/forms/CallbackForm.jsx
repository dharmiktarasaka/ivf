import React, { useState } from 'react';
import { Phone, CheckCircle, Shield } from 'lucide-react';

export default function CallbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bestTime: 'Morning (9 AM - 12 PM)',
    treatmentInterest: 'IVF Treatment',
    language: 'Gujarati',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [callbackRef, setCallbackRef] = useState('');

  const timeOptions = [
    'Morning (9 AM - 12 PM)',
    'Afternoon (12 PM - 4 PM)',
    'Evening (4 PM - 8 PM)'
  ];

  const treatments = [
    'IVF Treatment',
    'ICSI Treatment',
    'IUI Treatment',
    'Egg Freezing',
    'Male Fertility support',
    'Female Fertility support',
    'General Inquiry'
  ];

  const languages = ['Gujarati', 'Hindi', 'English'];

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
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const mockRef = `SM-CB-${Math.floor(1000 + Math.random() * 9000)}`;
    setCallbackRef(mockRef);

    // Save to CRM local storage
    const crmLeads = JSON.parse(localStorage.getItem('sarvamangal_crm_leads') || '[]');
    const newLead = {
      id: Date.now(),
      name: formData.name,
      phone: formData.phone,
      email: 'N/A (Callback)',
      source: 'Confidential Callback Form',
      interest: formData.treatmentInterest,
      preferredDate: new Date().toLocaleDateString(),
      preferredTime: formData.bestTime,
      status: 'Callback Requested',
      notes: `Preferred Language: ${formData.language}. Note: ${formData.message}`,
      date: new Date().toISOString()
    };
    crmLeads.push(newLead);
    localStorage.setItem('sarvamangal_crm_leads', JSON.stringify(crmLeads));

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-premium border border-rose-brand/5 text-center max-w-md mx-auto">
        <div className="bg-emerald-50 text-emerald-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={24} />
        </div>
        <h3 className="font-heading text-xl font-bold text-plum-brand mb-1">Callback Requested</h3>
        <p className="text-xs text-mutedText mb-4">
          Your request has been filed confidentially. Reference code: <strong>{callbackRef}</strong>
        </p>
        <p className="text-xs text-mutedText leading-relaxed">
          Our support staff will call you at <strong>{formData.phone}</strong> during the <strong>{formData.bestTime}</strong> slot, speaking in <strong>{formData.language}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 shadow-premium border border-rose-brand/5 space-y-4">
      <div className="flex items-center space-x-1.5 text-rose-brand text-[11px] font-semibold uppercase tracking-wider">
        <Shield size={14} />
        <span>Confidential Callback request</span>
      </div>

      <div>
        <label className="block text-[11px] font-semibold text-darkText mb-1.5" htmlFor="name">
          Name *
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

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-[11px] font-semibold text-darkText mb-1.5" htmlFor="bestTime">
            Best Time to Call
          </label>
          <select
            id="bestTime"
            name="bestTime"
            value={formData.bestTime}
            onChange={handleChange}
            className="w-full bg-bgLight rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-rose-brand border border-gray-100"
          >
            {timeOptions.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-darkText mb-1.5" htmlFor="language">
            Preferred Language
          </label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full bg-bgLight rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-rose-brand border border-gray-100"
          >
            {languages.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
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

      <div>
        <label className="block text-[11px] font-semibold text-darkText mb-1.5" htmlFor="message">
          Short Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows="2"
          value={formData.message}
          onChange={handleChange}
          placeholder="Any specific question..."
          className="w-full bg-bgLight rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-rose-brand border border-gray-100 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-rose-brand text-white py-3 rounded-full text-xs font-semibold shadow-md hover:bg-plum-brand transition-colors cursor-pointer"
      >
        Request Callback
      </button>
    </form>
  );
}
