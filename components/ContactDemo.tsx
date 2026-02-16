import React from 'react';
import { CheckCircle, Shield, Zap, Globe, ArrowRight, Calendar } from 'lucide-react';

const ContactDemo: React.FC = () => {
  const CALENDLY_LINK = "https://calendly.com/shriikantyadwad/30min";

  const handleBooking = () => {
    window.open(CALENDLY_LINK, '_blank');
  };

  const benefits = [
    { title: "Quick Setup", desc: "Start answering calls in minutes." },
    { title: "Totally Secure", desc: "Your data is always private and encrypted." },
    { title: "Built by Experts", desc: "Designed for high-performance businesses." }
  ];

  return (
    <section id="contact" className="py-32 bg-slate-50 dark:bg-white/[0.01] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal/[0.03] -skew-x-12 transform translate-x-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal/10 text-teal text-[10px] font-bold tracking-widest uppercase mb-8">
              Take Action
            </div>
            <h2 className="text-5xl font-bold text-[#0B1F3A] dark:text-white mb-8 leading-[1.1]">
              Ready to <span className="text-teal">automate</span> <br /> 
              your voice operations?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
              Don't let another lead slip through your fingers. Join the businesses already saving hours of manual work with Soniroyn.
            </p>
            
            <div className="space-y-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white dark:bg-white/5 shadow-md border border-gray-100 dark:border-white/10 flex items-center justify-center text-teal">
                    {i === 0 ? <Zap size={24} /> : i === 1 ? <Shield size={24} /> : <Globe size={24} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3A] dark:text-white text-lg mb-1">{benefit.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <div className="bg-[#0B1F3A] dark:bg-teal rounded-[3rem] p-12 md:p-16 text-center shadow-2xl relative overflow-hidden group">
              {/* Decorative circle */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl transition-transform group-hover:scale-110"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center text-white mx-auto mb-8">
                  <Calendar size={40} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Schedule Your Personal 1-on-1 Demo</h3>
                <p className="text-white/70 mb-10 text-lg leading-relaxed max-w-sm mx-auto">
                  Pick a time that works for you. We'll show you exactly how Soniroyn can grow your business.
                </p>
                
                <button 
                  onClick={handleBooking}
                  className="w-full bg-white text-[#0B1F3A] py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-4 group cursor-pointer border-none"
                >
                  Book My Demo Now
                  <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                </button>
                
                <div className="mt-8 flex items-center justify-center gap-6 opacity-60">
                   <div className="flex items-center gap-2 text-white">
                     <CheckCircle size={14} />
                     <span className="text-[10px] font-bold uppercase tracking-widest">30 Min Consultation</span>
                   </div>
                   <div className="flex items-center gap-2 text-white">
                     <Shield size={14} />
                     <span className="text-[10px] font-bold uppercase tracking-widest">Zero Commitment</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDemo;