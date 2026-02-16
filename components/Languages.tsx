import React from 'react';
import { Globe } from 'lucide-react';

const Languages: React.FC = () => {
  const langs = [
    { name: 'English', sub: 'Native fluency', flag: '🇺🇸' },
    { name: 'Spanish', sub: 'Hablo español', flag: '🇪🇸' },
    { name: 'French', sub: 'Parle français', flag: '🇫🇷' },
    { name: 'German', sub: 'Spricht Deutsch', flag: '🇩🇪' },
    { name: 'Hindi', sub: 'नमस्ते', flag: '🇮🇳' },
    { name: 'Mandarin', sub: '你好', flag: '🇨🇳' },
    { name: 'Arabic', sub: 'أهلاً', flag: '🇦🇪' },
    { name: 'Portuguese', sub: 'Fala português', flag: '🇧🇷' }
  ];

  return (
    <section id="languages" className="py-32 bg-slate-50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center text-teal mb-8">
              <Globe size={32} />
            </div>
            <h2 className="text-4xl font-bold text-[#0B1F3A] dark:text-white mb-6 leading-tight">
              A Global Assistant for a <br />
              <span className="text-[#0F766E]">Global Business.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Soniroyn isn't just an English speaker. Our AI understands and speaks over 50 languages perfectly. It automatically detects the language of the caller and switches instantly.
            </p>
            <div className="flex gap-4">
               <div className="p-4 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm flex-1">
                 <p className="text-2xl font-bold text-teal">50+</p>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Supported Languages</p>
               </div>
               <div className="p-4 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm flex-1">
                 <p className="text-2xl font-bold text-teal">Instant</p>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Language Switching</p>
               </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {langs.map((lang, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 text-center hover:shadow-xl hover:border-teal/30 transition-all cursor-default">
                <span className="text-3xl mb-4 block">{lang.flag}</span>
                <h4 className="font-bold text-[#0B1F3A] dark:text-white text-sm mb-1">{lang.name}</h4>
                <p className="text-[10px] text-gray-400 font-medium">{lang.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;