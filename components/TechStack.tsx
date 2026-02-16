import React from 'react';
import { ArrowRight } from 'lucide-react';

const TechStack: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-[#0B1F3A] dark:text-white mb-6">How does Soniroyn software work?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our system combines three layers of intelligence to provide a human-like voice experience.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-2 max-w-5xl mx-auto">
          {/* Transcriber */}
          <div className="flex-1 bg-[#FDE6D2] dark:bg-[#8B5E3C]/20 p-12 flex flex-col items-center justify-center text-center rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl border border-orange-200 dark:border-orange-900/30">
            <div className="mb-6 opacity-60">
              <div className="flex gap-1 h-6 items-center">
                <div className="w-0.5 h-6 bg-[#0B1F3A] dark:bg-white"></div>
                <div className="w-0.5 h-4 bg-[#0B1F3A] dark:bg-white"></div>
                <div className="w-0.5 h-5 bg-[#0B1F3A] dark:bg-white"></div>
                <div className="w-0.5 h-3 bg-[#0B1F3A] dark:bg-white"></div>
              </div>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A]/60 dark:text-white/60 mb-2">Speech-to-Text (STT)</p>
            <h3 className="text-2xl font-bold text-[#0B1F3A] dark:text-white mb-8">Transcriber</h3>
            <p className="text-sm text-[#0B1F3A]/70 dark:text-white/70">Instantly converts voice <br />into written text.</p>
          </div>

          {/* Model */}
          <div className="flex-1 bg-[#E8EAF6] dark:bg-[#3F51B5]/10 p-12 flex flex-col items-center justify-center text-center border-y lg:border-y-0 lg:border-x border-blue-200 dark:border-blue-900/30">
             <div className="mb-6 flex items-center gap-3">
               <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400">"ABC"</span>
               <ArrowRight size={14} className="text-blue-400" />
               <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400">"DEF"</span>
             </div>
             <p className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A]/60 dark:text-white/60 mb-2">Intelligence (LLM)</p>
             <h3 className="text-2xl font-bold text-[#0B1F3A] dark:text-white mb-8">Model</h3>
             <p className="text-sm text-[#0B1F3A]/70 dark:text-white/70">Processes language to <br />decide the best response.</p>
          </div>

          {/* Voice */}
          <div className="flex-1 bg-[#FFB74D] dark:bg-[#E65100]/20 p-12 flex flex-col items-center justify-center text-center rounded-b-3xl lg:rounded-b-none lg:rounded-r-3xl border border-orange-300 dark:border-orange-800/30">
            <div className="mb-6 flex items-center gap-3">
               <span className="text-[10px] font-mono text-[#0B1F3A] dark:text-white">"DEF"</span>
               <ArrowRight size={14} className="text-[#0B1F3A]/40 dark:text-white/40" />
               <div className="flex gap-1 h-6 items-center">
                <div className="w-0.5 h-3 bg-[#0B1F3A] dark:bg-white"></div>
                <div className="w-0.5 h-6 bg-[#0B1F3A] dark:bg-white"></div>
                <div className="w-0.5 h-4 bg-[#0B1F3A] dark:bg-white"></div>
                <div className="w-0.5 h-5 bg-[#0B1F3A] dark:bg-white"></div>
              </div>
             </div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A]/60 dark:text-white/60 mb-2">Text-to-Speech (TTS)</p>
            <h3 className="text-2xl font-bold text-[#0B1F3A] dark:text-white mb-8">Voice</h3>
            <p className="text-sm text-[#0B1F3A]/70 dark:text-white/70">Speaks back with a natural, <br />human-like sound.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
           <p className="text-gray-500 text-sm max-w-xl mx-auto">This powerful workflow ensures every call is handled with the same intelligence as a trained employee.</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;