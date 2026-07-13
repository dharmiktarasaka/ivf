import React, { useState } from 'react';
import { Calendar, Phone, CheckCircle, Shield, MessageCircle } from 'lucide-react';
import { businessDetails } from '../../config/businessDetails';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    ageRange: '20-29',
    consultationType: 'Fertility Consultation',
    treatmentInterest: 'General Investigation',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    visitType: 'First Consultation',
    contactMethod: 'Phone Call',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [appointmentRef, setAppointmentRef] = useState('');

  const ageRanges = ['20-29', '30-34', '35-39', '40+'];
  
  const consultationTypes = [
    'Fertility Consultation',
    'IVF Consultation',
    'IUI Consultation',
    'ICSI Consultation',
    'Egg Freezing Consultation',
    'Male Fertility Consultation',
    'Female Fertility Consultation',
    'Counselling Consultation',
    'Follow-Up Consultation'
  ];

  const treatments = [
    'General Investigation',
    'In Vitro Fertilization (IVF)',
    'Intracytoplasmic Sperm Injection (ICSI)',
    'Intrauterine Insemination (IUI)',
    'Egg Freezing',
    'Egg Donation',
    'Frozen Embryo Transfer (FET)',
    'Ovulation Induction',
    'Diagnostic Laparoscopy/Hysteroscopy',
    'Infertility Counselling'
  ];

  const timeSlots = [
    'Morning (9:00 AM - 12:00 PM)',
    'Afternoon (12:00 PM - 4:00 PM)',
    'Evening (4:00 PM - 8:00 PM)'
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
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
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
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Generate mock reference
    const mockRef = `SM-APT-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppointmentRef(mockRef);

    // Save request in LocalStorage CRM database
    const crmLeads = JSON.parse(localStorage.getItem('sarvamangal_crm_leads') || '[]');
    const newLead = {
      id: Date.now(),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      source: 'Appointment Form',
      interest: `${formData.consultationType} (${formData.treatmentInterest})`,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      status: 'New Enquiry',
      notes: `Age: ${formData.ageRange}. Visit: ${formData.visitType}. Contact by: ${formData.contactMethod}. Message: ${formData.message}`,
      date: new Date().toISOString()
    };
    crmLeads.push(newLead);
    localStorage.setItem('sarvamangal_crm_leads', JSON.stringify(crmLeads));

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-premium border border-rose-brand/5 text-center max-w-xl mx-auto">
        <div className="bg-emerald-50 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={36} />
        </div>
        <h3 className="font-heading text-2xl font-bold text-plum-brand mb-2">Request Submitted Confidentially</h3>
        <p className="text-sm text-mutedText mb-4 leading-relaxed">
          Thank you for reaching out to Sarvamangal IVF. Your request has been securely registered in our system.
        </p>
        
        <div className="bg-bgLight rounded-2xl p-4 mb-6 inline-block w-full">
          <div className="text-xs text-mutedText uppercase tracking-wider mb-1">Appointment Reference</div>
          <div className="text-lg font-bold text-plum-brand font-mono">{appointmentRef}</div>
        </div>

        <div className="space-y-3 mb-6 text-left text-xs text-mutedText">
          <p>• <strong>Preferred Date:</strong> {formData.preferredDate}</p>
          <p>• <strong>Consultation Type:</strong> {formData.consultationType}</p>
          <p>• <strong>Contact Method:</strong> {formData.contactMethod}</p>
        </div>

        <p className="text-xs text-mutedText mb-8">
          A fertility care coordinator will contact you shortly via your preferred contact method to confirm the final slot details.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={businessDetails.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white py-3 rounded-full flex items-center justify-center space-x-2 text-sm font-semibold hover:bg-[#128C7E] transition-colors"
          >
            <MessageCircle size={18} className="fill-current" />
            <span>Follow-up on WhatsApp</span>
          </a>
          <a
            href={businessDetails.phoneLink}
            className="bg-rose-brand text-white py-3 rounded-full flex items-center justify-center space-x-2 text-sm font-semibold hover:bg-plum-brand transition-colors"
          >
            <Phone size={16} />
            <span>Call Us Directly</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-8 shadow-premium border border-rose-brand/5 space-y-6">
      <div className="flex items-center space-x-2 text-rose-brand text-xs font-semibold uppercase tracking-wider">
        <Shield size={16} />
        <span>Secure & Confidential Fertility Care Request</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-darkText mb-2" htmlFor="name">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`w-full bg-bgLight rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 ${
              errors.name ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-rose-brand border border-gray-100'
            }`}
          />
          {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
        </div>

        {/* Age Range */}
        <div>
          <label className="block text-xs font-semibold text-darkText mb-2" htmlFor="ageRange">
            Age Range
          </label>
          <select
            id="ageRange"
            name="ageRange"
            value={formData.ageRange}
            onChange={handleChange}
            className="w-full bg-bgLight rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-rose-brand border border-gray-100"
          >
            {ageRanges.map(a => <option key={a} value={a}>{a} Years</option>)}
          </select>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-semibold text-darkText mb-2" htmlFor="phone">
            Phone Number *
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98986 82649"
            className={`w-full bg-bgLight rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 ${
              errors.phone ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-rose-brand border border-gray-100'
            }`}
          />
          {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone}</span>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-darkText mb-2" htmlFor="email">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. name@example.com"
            className={`w-full bg-bgLight rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 ${
              errors.email ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-rose-brand border border-gray-100'
            }`}
          />
          {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>}
        </div>

        {/* Consultation Type */}
        <div>
          <label className="block text-xs font-semibold text-darkText mb-2" htmlFor="consultationType">
            Preferred Consultation Type
          </label>
          <select
            id="consultationType"
            name="consultationType"
            value={formData.consultationType}
            onChange={handleChange}
            className="w-full bg-bgLight rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-rose-brand border border-gray-100"
          >
            {consultationTypes.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Treatment Interest */}
        <div>
          <label className="block text-xs font-semibold text-darkText mb-2" htmlFor="treatmentInterest">
            Treatment Interest
          </label>
          <select
            id="treatmentInterest"
            name="treatmentInterest"
            value={formData.treatmentInterest}
            onChange={handleChange}
            className="w-full bg-bgLight rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-rose-brand border border-gray-100"
          >
            {treatments.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* Preferred Date */}
        <div>
          <label className="block text-xs font-semibold text-darkText mb-2" htmlFor="preferredDate">
            Preferred Date *
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className={`w-full bg-bgLight rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 ${
              errors.preferredDate ? 'focus:ring-red-500 border border-red-500' : 'focus:ring-rose-brand border border-gray-100'
            }`}
          />
          {errors.preferredDate && <span className="text-xs text-red-500 mt-1 block">{errors.preferredDate}</span>}
        </div>

        {/* Preferred Time */}
        <div>
          <label className="block text-xs font-semibold text-darkText mb-2" htmlFor="preferredTime">
            Preferred Time Slot
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full bg-bgLight rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-rose-brand border border-gray-100"
          >
            {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* First consultation or follow-up */}
        <div>
          <label className="block text-xs font-semibold text-darkText mb-2">
            Is this your first visit?
          </label>
          <div className="flex space-x-6 py-2.5">
            <label className="flex items-center space-x-2 text-sm text-mutedText cursor-pointer">
              <input
                type="radio"
                name="visitType"
                value="First Consultation"
                checked={formData.visitType === 'First Consultation'}
                onChange={handleChange}
                className="text-rose-brand focus:ring-rose-brand"
              />
              <span>First Consultation</span>
            </label>
            <label className="flex items-center space-x-2 text-sm text-mutedText cursor-pointer">
              <input
                type="radio"
                name="visitType"
                value="Follow-Up Consultation"
                checked={formData.visitType === 'Follow-Up Consultation'}
                onChange={handleChange}
                className="text-rose-brand focus:ring-rose-brand"
              />
              <span>Follow-Up Visit</span>
            </label>
          </div>
        </div>

        {/* Preferred contact method */}
        <div>
          <label className="block text-xs font-semibold text-darkText mb-2">
            Preferred Contact Method
          </label>
          <div className="flex space-x-6 py-2.5">
            <label className="flex items-center space-x-2 text-sm text-mutedText cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="Phone Call"
                checked={formData.contactMethod === 'Phone Call'}
                onChange={handleChange}
                className="text-rose-brand focus:ring-rose-brand"
              />
              <span>Phone Call</span>
            </label>
            <label className="flex items-center space-x-2 text-sm text-mutedText cursor-pointer">
              <input
                type="radio"
                name="contactMethod"
                value="WhatsApp"
                checked={formData.contactMethod === 'WhatsApp'}
                onChange={handleChange}
                className="text-rose-brand focus:ring-rose-brand"
              />
              <span>WhatsApp</span>
            </label>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-darkText mb-2" htmlFor="message">
          Additional Notes or Questions (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly share any details you would like us to know in advance..."
          className="w-full bg-bgLight rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-rose-brand border border-gray-100 resize-none"
        />
      </div>

      {/* Privacy Notice */}
      <p className="text-[10px] text-mutedText leading-relaxed">
        <strong>Privacy Notice:</strong> Your details are used only to respond to your appointment request. This frontend demo does not send data to a medical system.
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-rose-brand text-white py-3.5 rounded-full font-semibold shadow-md hover:bg-plum-brand transition-colors cursor-pointer text-sm"
      >
        Submit Secure Appointment Request
      </button>
    </form>
  );
}
