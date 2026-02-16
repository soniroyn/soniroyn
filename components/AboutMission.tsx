import React from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const AboutMission: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white dark:bg-navy-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal/10 rounded-full blur-3xl"></div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-[10px] font-bold tracking-widest uppercase mb-8">
              Our Vision
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] dark:text-white mb-8 leading-tight">
              Enterprise AI focused on <br />
              <span className="text-teal">Revenue Resilience.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Soniroyn is an enterprise-grade AI voice automation system that handles inbound and outbound calls with personalization, contextual intelligence, and structured data capture. 
            </p>
            <div className="space-y-6" id="mission">
               <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                 <div className="text-teal mt-1"><Target size={24} /></div>
                 <div>
                   <h4 className="font-bold text-[#0B1F3A] dark:text-white mb-2">The Mission</h4>
                   <p className="text-sm text-gray-500 dark:text-gray-400">To ensure businesses never lose revenue due to unanswered or missed calls by providing intelligent, always-available voice automation.</p>
                 </div>
               </div>
               <div className="flex gap-4 p-6 rounded-2xl bg-white dark:bg-navy border border-gray-100 dark:border-white/10 shadow-sm">
                 <div className="text-teal mt-1"><Lightbulb size={24} /></div>
                 <div>
                   <h4 className="font-bold text-[#0B1F3A] dark:text-white mb-2">Our Core Goal</h4>
                   <p className="text-sm text-gray-500 dark:text-gray-400">Replacing repetitive call handling while preserving a human-like conversational experience through contextual intelligence.</p>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="relative group">
             <div className="aspect-square rounded-[3rem] bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] to-teal opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUp size={120} className="text-[#0B1F3A]/10 dark:text-white/10 group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                {/* Floating Stats */}
                <div className="absolute top-12 left-12 p-6 bg-white dark:bg-navy rounded-2xl shadow-xl border border-gray-100 dark:border-white/10">
                   <p className="text-3xl font-bold text-[#0B1F3A] dark:text-white">100%</p>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Call Pickup Rate</p>
                </div>
                
                <div className="absolute bottom-12 right-12 p-6 bg-[#0F766E] rounded-2xl shadow-xl text-white">
                   <p className="text-3xl font-bold">24/7</p>
                   <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Global Availability</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;