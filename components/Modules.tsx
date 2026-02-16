import React from 'react';
import { PhoneCall, Calendar, Database, UserCheck, Smartphone, Settings } from 'lucide-react';

const Modules: React.FC = () => {
  const features = [
    {
      title: 'Customer Support',
      desc: 'Handles inbound calls instantly, resolving queries 24/7 without manual intervention.',
      icon: PhoneCall,
      outcome: '0% Missed Calls'
    },
    {
      title: 'Appointment Handler',
      desc: 'Smart calendar integration for seamless booking, rescheduling, and automated confirmations.',
      icon: Calendar,
      outcome: 'Fully Automated Scheduling'
    },
    {
      title: 'Personalized Inbound',
      desc: 'Recognizes returning customers via CRM, speaking to them with historical context.',
      icon: UserCheck,
      outcome: 'Elevated Client Loyalty'
    },
    {
      title: 'Relevant Outbound',
      desc: 'Not a pre-recorded bot. Intelligent outbound follow-ups, reminders, and qualification calls.',
      icon: Smartphone,
      outcome: 'Higher Recovery Rates'
    },
    {
      title: 'Post-Call Analysis',
      desc: 'Automatic summaries, sentiment detection, and lead qualification tagging for your CRM.',
      icon: Database,
      outcome: 'Actionable Business Intelligence'
    },
    {
      title: 'Professional Persona',
      desc: 'Customize the voice, tone, and brand personality to match your professional standard.',
      icon: Settings,
      outcome: 'Enterprise Brand Consistency'
    }
  ];

  return (
    <section id="modules" className="py-32 bg-white dark:bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-block px-3 py-1 rounded-full bg-teal/10 text-[10px] font-bold uppercase tracking-widest text-teal mb-4">Core Modules</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1F3A] dark:text-white mb-6">Built for mission-critical operations.</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Soniroyn replaces repetitive manual call handling with high-fidelity, intelligent voice automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="relative p-10 rounded-[2.5rem] bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/[0.05] hover:shadow-2xl hover:border-teal/20 transition-all duration-500 group"
              >
                <div className="mb-8 p-5 bg-white dark:bg-navy rounded-2xl shadow-sm inline-block text-teal group-hover:scale-110 group-hover:bg-teal group-hover:text-white transition-all duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1F3A] dark:text-white mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-sm">{item.desc}</p>
                <div className="pt-6 border-t border-gray-200 dark:border-white/5">
                  <p className="text-[10px] font-bold text-teal uppercase tracking-widest mb-1">Key Outcome</p>
                  <p className="text-sm font-bold text-[#0B1F3A] dark:text-gray-300">{item.outcome}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Modules;