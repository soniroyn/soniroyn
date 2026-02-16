import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "What exactly is Soniroyn?",
      answer: "Soniroyn is an AI-powered voice automation platform designed to handle inbound and outbound phone calls for businesses. It ensures that your business never misses a revenue opportunity due to an unanswered call by providing 24/7 intelligent support."
    },
    {
      question: "How is Soniroyn different from a standard phone bot?",
      answer: "Standard bots often rely on rigid, pre-recorded menus (IVR). Soniroyn uses advanced Intelligence (LLMs) to have natural, context-aware conversations. It understands intent, handles complex queries, and sounds human-like rather than robotic."
    },
    {
      question: "Can it really handle appointment bookings?",
      answer: "Yes! Our Appointment Handler module integrates directly with your existing calendars (like Google Calendar or Calendly) and CRMs. It can book new meetings, reschedule existing ones, and send automated confirmations without any human intervention."
    },
    {
      question: "Does it support languages other than English?",
      answer: "Absolutely. Soniroyn is a global platform supporting over 50 languages, including Spanish, French, German, Hindi, and Mandarin. It can even detect the caller's language and switch automatically during a conversation."
    },
    {
      question: "How does it integrate with my current tools?",
      answer: "Soniroyn features enterprise-ready integrations for major CRMs like Salesforce and HubSpot, payment processors like Stripe, and various helpdesk tools. We also provide a robust API for custom business workflows."
    },
    {
      question: "Is my data secure and private?",
      answer: "Security is a core pillar of our platform. We use end-to-end encryption for all calls, secure storage for data extraction, and our framework is GDPR-ready to ensure complete transparency and privacy for you and your customers."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-white dark:bg-navy-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-teal/10 text-[10px] font-bold uppercase tracking-widest text-teal mb-4">FAQ</div>
          <h2 className="text-4xl font-bold text-[#0B1F3A] dark:text-white mb-6">Common Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about the Soniroyn voice automation platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer border-none"
              >
                <span className="font-bold text-[#0B1F3A] dark:text-white pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-teal flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-white/10">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Still have questions?</p>
          <button 
            onClick={() => window.open("https://calendly.com/shriikantyadwad/30min", '_blank')}
            className="text-teal font-bold hover:underline flex items-center justify-center gap-2 mx-auto cursor-pointer bg-transparent border-none"
          >
            Ask us during a 1-on-1 demo <ChevronDown size={16} className="-rotate-90" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;