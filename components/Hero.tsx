import React from 'react';
import { ArrowRight, Phone, MessageSquare, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const CALENDLY_LINK = "https://calendly.com/shriikantyadwad/30min";

  const handleBookDemo = () => {
    window.open(CALENDLY_LINK, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden dark:bg-navy-dark">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-teal/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#0F766E]/10 dark:bg-[#0F766E]/20 text-[#0F766E] dark:text-[#2dd4bf] text-sm font-semibold mb-8">
              <Zap size={16} className="mr-2" />
              Smart Voice Assistant for Business
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0B1F3A] dark:text-white leading-[1.1] mb-8 tracking-tight">
              Pick up every call. <br />
              <span className="text-[#0F766E]">Capture every deal.</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Soniroyn is a smart voice assistant that handles your inbound calls and outbound calls, books appointments, and helps customers 24/7. No more missed revenue.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={handleBookDemo}
                className="w-full sm:w-auto bg-[#0B1F3A] dark:bg-[#0F766E] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 border-none cursor-pointer"
              >
                Book a Demo <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('modules')}
                className="w-full sm:w-auto border-2 border-gray-200 dark:border-white/10 bg-transparent text-gray-700 dark:text-gray-300 px-10 py-5 rounded-full font-bold text-lg hover:border-[#0F766E] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                See Features
              </button>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-60">
               <div className="flex items-center gap-2">
                 <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                    <MessageSquare size={18} className="text-[#0F766E]" />
                 </div>
                 <span className="text-sm font-bold dark:text-gray-400">Natural Chatting</span>
               </div>
               <div className="flex items-center gap-2">
                 <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                    <Phone size={18} className="text-[#0F766E]" />
                 </div>
                 <span className="text-sm font-bold dark:text-gray-400">Clear Voice</span>
               </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 relative">
            <div className="relative bg-white dark:bg-[#1e293b] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-none p-6 border border-gray-100 dark:border-white/10 animate-in fade-in zoom-in duration-700">
              <div className="absolute -top-6 -right-6 bg-white dark:bg-teal p-5 rounded-2xl shadow-xl border border-gray-50 dark:border-none flex items-center gap-4 animate-bounce duration-[3000ms]">
                <div className="bg-[#0F766E] dark:bg-navy p-3 rounded-full text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-200 font-bold uppercase tracking-widest leading-none mb-1">Incoming</p>
                  <p className="text-sm font-bold text-[#0B1F3A] dark:text-white">Customer Support</p>
                </div>
              </div>
              
              <div className="rounded-[1.5rem] overflow-hidden bg-gray-50 dark:bg-navy-dark aspect-[4/5] flex flex-col items-center justify-center border border-gray-100 dark:border-white/5 relative">
                 <div className="flex flex-col items-center gap-8 w-full max-w-xs">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full border-2 border-[#0F766E]/20 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-[#0F766E]/10 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-[#0F766E] shadow-lg flex items-center justify-center text-white">
                            <Phone size={32} />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center px-6">
                       <h3 className="text-xl font-bold text-[#0B1F3A] dark:text-white mb-2">Automating Your Voice</h3>
                       <p className="text-sm text-gray-500 dark:text-gray-400">Soniroyn picks up every call instantly and speaks with human-like intelligence.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;