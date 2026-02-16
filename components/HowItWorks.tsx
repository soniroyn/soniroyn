import React from 'react';
import { HOW_IT_WORKS } from '../constants';

const HowItWorks: React.FC = () => {
  const CALENDLY_LINK = "https://calendly.com/shriikantyadwad/30min";

  const handleBookDemo = () => {
    window.open(CALENDLY_LINK, '_blank');
  };

  return (
    <section id="how-it-works" className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0F766E] to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Implementation</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Deploying Soniroyn is a structured process designed for stability and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-800 -z-0"></div>
          
          {HOW_IT_WORKS.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-navy border-4 border-gray-800 flex items-center justify-center mb-8 hover:border-[#0F766E] transition-colors group">
                <span className="text-[#0F766E] font-bold text-2xl group-hover:scale-110 transition-transform">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
           <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h4 className="text-xl font-bold mb-2">Ready to secure your revenue?</h4>
                <p className="text-gray-400">Join forward-thinking enterprises using Soniroyn for intelligent automation.</p>
              </div>
              <button 
                onClick={handleBookDemo}
                className="bg-[#0F766E] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#134E4A] transition-all border-none cursor-pointer"
              >
                Book a Demo
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;