import React, { useState } from 'react';
import { Shield, CheckCircle } from 'lucide-react';

export default function QuickAppointmentCard() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: 'IVF Treatment'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const treatments = [
    'IVF Treatment',
    'ICSI Treatment',
    'IUI Treatment',
    'Egg Freezing',
    'Fertility Testing',
    'General Consultation'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please fill in both name and phone');
      return;
    }
    setError('');

    // Save lead to local storage CRM
    const crmLeads = JSON.parse(localStorage.getItem('sarvamangal_crm_leads') || '[]');
    const newLead = {
      id: Date.now(),
      name: formData.name,
      phone: formData.phone,
      email: 'N/A (Quick Hero Form)',
      source: 'Hero Quick Form',
      interest: formData.treatment,
      preferredDate: new Date().toLocaleDateString(),
      preferredTime: 'Anytime',
      status: 'Callback Requested',
      notes: 'Quick lead generated from Home Hero card.',
      date: new Date().toISOString()
    };
    crmLeads.push(newLead);
    localStorage.setItem('sarvamangal_crm_leads', JSON.stringify(crmLeads));

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-premium border border-rose-brand/10 text-center space-y-3">
        <div className="bg-emerald-50 text-emerald-600 w-10 h-10 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle size={20} />
        </div>
        <h4 className="font-heading text-lg font-bold text-plum-brand">Request Logged</h4>
        <p className="text-xs text-mutedText leading-relaxed">
          Thank you, <strong>{formData.name}</strong>. A care specialist will call you back at <strong>{formData.phone}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-premium border border-rose-brand/10 space-y-4">
      <div>
        <h4 className="font-heading text-base font-bold text-plum-brand">Confidential Callback</h4>
        <p className="text-[11px] text-mutedText">Speak with our fertility-care team today.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Treatment Interest */}
        <div>
          <select
            name="treatment"
            value={formData.treatment}
            onChange={(e) => setFormData(prev => ({ ...prev, treatment: e.target.value }))}
            className="w-full bg-bgLight rounded-xl px-3 py-2.5 text-xs text-darkText focus:outline-none focus:ring-1 focus:ring-rose-brand border border-gray-100"
          >
            {treatments.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full bg-bgLight rounded-xl px-3 py-2.5 text-xs text-darkText focus:outline-none focus:ring-1 focus:ring-rose-brand border border-gray-100"
          />
        </div>

        {/* Phone */}
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full bg-bgLight rounded-xl px-3 py-2.5 text-xs text-darkText focus:outline-none focus:ring-1 focus:ring-rose-brand border border-gray-100"
          />
        </div>

        {error && <p className="text-[10px] text-red-500 font-semibold">{error}</p>}

        {/* Privacy Note */}
        <div className="flex items-center space-x-1 text-[9px] text-mutedText">
          <Shield size={10} className="text-rose-brand" />
          <span>Information is held securely and privately.</span>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-rose-brand hover:bg-plum-brand text-white py-2.5 rounded-full text-xs font-semibold shadow-md transition-colors cursor-pointer"
        >
          Request Callback
        </button>
      </form>
    </div>
  );
}
