import React from 'react';
import { Database, Zap, Layout, MessageCircle, CreditCard, Calendar } from 'lucide-react';

const Integrations: React.FC = () => {
  const tools = [
    { name: 'Salesforce', category: 'CRM', icon: <Database className="w-6 h-6" />, color: 'bg-blue-500' },
    { name: 'HubSpot', category: 'Growth', icon: <Zap className="w-6 h-6" />, color: 'bg-orange-500' },
    { name: 'Stripe', category: 'Payments', icon: <CreditCard className="w-6 h-6" />, color: 'bg-indigo-600' },
    { name: 'Zendesk', category: 'Support', icon: <MessageCircle className="w-6 h-6" />, color: 'bg-green-600' },
    { name: 'Google Cal', category: 'Schedule', icon: <Calendar className="w-6 h-6" />, color: 'bg-blue-600' },
    { name: 'Shopify', category: 'E-com', icon: <Layout className="w-6 h-6" />, color: 'bg-green-500' },
  ];

  return (
    <section id="integrations" className="py-32 bg-white dark:bg-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">Ecosystem</div>
          <h2 className="text-4xl font-bold text-[#0B1F3A] dark:text-white mb-6">Works with your tools.</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soniroyn talks to the tools you already use. It automatically updates your CRM, books calendars, and processes orders.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, idx) => (
            <div key={idx} className="group p-8 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col items-center text-center">
              <div className={`mb-6 w-14 h-14 rounded-2xl ${tool.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                {tool.icon}
              </div>
              <h4 className="font-bold text-[#0B1F3A] dark:text-white text-base mb-1">{tool.name}</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{tool.category}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
           <p className="text-sm font-semibold text-gray-500 mb-6">Need a custom connection?</p>
           <button className="bg-transparent border-2 border-gray-200 dark:border-white/10 text-[#0B1F3A] dark:text-white px-8 py-3 rounded-full font-bold hover:border-teal transition-all cursor-pointer">
             Browse API Docs
           </button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;