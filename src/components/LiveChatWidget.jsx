import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, HeartHandshake, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      sender: 'bot', 
      text: "Welcome to Sarvamangal IVF. I am your Care Assistant. How can I support you today?",
      time: new Date()
    },
    {
      id: 2,
      sender: 'bot',
      text: "Please note: Your details are processed with strict confidentiality. This is a demo widget.",
      time: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatStep, setChatStep] = useState("idle"); // idle, capture_name, capture_phone, capture_interest, capture_time, complete
  const [leadData, setLeadData] = useState({
    name: "",
    phone: "",
    interest: "",
    time: ""
  });

  const chatEndRef = useRef(null);

  const quickOptions = [
    { label: "Book First Consultation", action: "book" },
    { label: "Ask About IVF", action: "ask_ivf" },
    { label: "Ask About IUI", action: "ask_iui" },
    { label: "Ask About ICSI", action: "ask_icsi" },
    { label: "Male Fertility Support", action: "male" },
    { label: "Female Fertility Support", action: "female" },
    { label: "Request Callback", action: "callback" },
    { label: "Get Directions", action: "directions" }
  ];

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const botReply = (text, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev, 
        { id: Date.now(), sender: 'bot', text, time: new Date() }
      ]);
    }, delay);
  };

  const handleOptionClick = (option) => {
    // Add user message
    setMessages(prev => [
      ...prev, 
      { id: Date.now(), sender: 'user', text: option.label, time: new Date() }
    ]);

    if (option.action === 'directions') {
      botReply("Sarvamangal IVF is located at Jyoti Complex, NH228, Shyamal Cross Road, near Shyamal Flyover, Shyamal, Ahmedabad, Gujarat 380013. We are open daily until 8:00 PM.");
      return;
    }

    if (option.action.startsWith('ask_')) {
      const treatment = option.action === 'ask_ivf' ? 'IVF' : option.action === 'ask_iui' ? 'IUI' : 'ICSI';
      botReply(`To understand if ${treatment} is suitable for you, a professional consultation is required. Standard ${treatment} involves careful diagnostics, stimulation, and custom cycles. Would you like to schedule a confidential discussion with our expert?`, 800);
      return;
    }

    // Start lead capture flow
    setLeadData(prev => ({ ...prev, interest: option.label }));
    setChatStep("capture_name");
    botReply("I'd be glad to help you organize that. To get started, could you please share your full name?");
  };

  const handleSend = (e) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    setMessages(prev => [
      ...prev, 
      { id: Date.now(), sender: 'user', text: userText, time: new Date() }
    ]);
    setInputText("");

    if (chatStep === "capture_name") {
      setLeadData(prev => ({ ...prev, name: userText }));
      setChatStep("capture_phone");
      botReply(`Thank you, ${userText}. What is your contact phone number so our care team can connect with you?`);
    } else if (chatStep === "capture_phone") {
      setLeadData(prev => ({ ...prev, phone: userText }));
      setChatStep("capture_interest");
      botReply("Got it. Which fertility service or treatment is this regarding? (e.g. IVF, IUI, General Consultation)");
    } else if (chatStep === "capture_interest") {
      setLeadData(prev => ({ ...prev, interest: userText }));
      setChatStep("capture_time");
      botReply("Thank you. Finally, what is the best time for our fertility coordinator to call you? (e.g., Morning, Afternoon, Evening)");
    } else if (chatStep === "capture_time") {
      const finalData = { ...leadData, time: userText };
      setLeadData(finalData);
      setChatStep("complete");
      
      // Save lead to local storage CRM
      const crmLeads = JSON.parse(localStorage.getItem('sarvamangal_crm_leads') || '[]');
      const mockRef = `SM-CHAT-${Math.floor(1000 + Math.random() * 9000)}`;
      
      const newLead = {
        id: Date.now(),
        name: finalData.name,
        phone: finalData.phone,
        email: 'N/A (Chat)',
        source: 'Live Chat Assistant',
        interest: finalData.interest,
        preferredDate: new Date().toLocaleDateString(),
        preferredTime: finalData.time,
        status: 'New Enquiry',
        notes: `Enquiry generated through simulated AI chat widget. Best time: ${finalData.time}`,
        date: new Date().toISOString()
      };
      
      crmLeads.push(newLead);
      localStorage.setItem('sarvamangal_crm_leads', JSON.stringify(crmLeads));

      botReply(`All set! Your confidential callback request is received. Your reference code is ${mockRef}. Our care coordinator will call you back during the ${userText} hours.`);
      botReply("For your safety: Do not submit any medical diagnostic files here. Safe journeys!");
    } else {
      // General response
      if (userText.toLowerCase().includes("cost") || userText.toLowerCase().includes("price")) {
        botReply("Our pricing is transparent and competitive. We offer customizable packages based on your diagnosis. Our team can detail these costs during a private consultation.");
      } else if (userText.toLowerCase().includes("success") || userText.toLowerCase().includes("rate")) {
        botReply("Success rates are dependent on individual patient profiles, maternal age, and lifestyle. We focus on providing the highest quality care to optimize your path, but we do not make guaranteed outcomes claims.");
      } else {
        botReply("I understand your question. For detailed medical guidance, diagnostic reviews, or treatment assessments, please consult a qualified clinician. Would you like me to book a callback with our fertility coordinator?");
      }
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 md:right-32 z-40 bg-rose-brand text-white p-4 rounded-full shadow-lg hover:bg-plum-brand transition-colors flex items-center justify-center cursor-pointer"
        aria-label="Toggle Live Chat Assistant"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-36 right-4 left-4 md:left-auto md:right-6 w-auto md:w-[380px] h-[500px] z-50 rounded-2xl shadow-premium border border-rose-brand/10 bg-white flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-rose-plum p-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-white/20 p-2 rounded-full">
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-base">Sarvamangal Care</h3>
                  <p className="text-xs text-white/80">Support Assistant — Demo</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Warning bar */}
            <div className="bg-amber-50 px-3 py-1.5 border-b border-amber-100 flex items-center space-x-1 text-[11px] text-amber-800">
              <ShieldAlert size={12} className="flex-shrink-0" />
              <span>Confidential frontend demo. Do not share real health files.</span>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-bgLight">
              {messages.map(msg => (
                <div 
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-rose-brand text-white rounded-tr-none'
                      : 'bg-white text-darkText border border-gray-100 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-darkText border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3 text-sm shadow-sm flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 bg-rose-brand rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-rose-brand rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-rose-brand rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Actions (only show when idle) */}
            {chatStep === "idle" && !isTyping && (
              <div className="bg-white p-2 border-t border-gray-100 max-h-32 overflow-y-auto flex flex-wrap gap-1">
                {quickOptions.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(opt)}
                    className="text-[11px] font-medium bg-blush-brand text-rose-brand border border-rose-brand/10 rounded-full px-2.5 py-1 hover:bg-rose-brand hover:text-white transition-colors cursor-pointer"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex items-center space-x-2">
              <input
                type="text"
                placeholder={
                  chatStep === "capture_name" ? "Type your name..." :
                  chatStep === "capture_phone" ? "Type your phone number..." :
                  chatStep === "capture_interest" ? "Type treatment interest..." :
                  chatStep === "capture_time" ? "Best callback time (e.g. 5 PM)..." :
                  "Ask a support question..."
                }
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 bg-bgLight rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-rose-brand border border-gray-200"
              />
              <button
                type="submit"
                className="bg-rose-brand hover:bg-plum-brand text-white p-2 rounded-full transition-colors flex items-center justify-center cursor-pointer"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
