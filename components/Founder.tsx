import React from 'react';
import { Linkedin } from 'lucide-react';

const Founder: React.FC = () => {
  const linkedinUrl = "https://www.linkedin.com/in/shrikant-nagesh-yadwad-5b3075252";

  return (
    <div id="founder" className="py-12 border-t border-gray-100 dark:border-white/5 bg-slate-50/50 dark:bg-navy-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-teal uppercase tracking-[0.2em]">Founded by</span>
            <span className="text-sm font-bold text-[#0B1F3A] dark:text-white">Shrikant Nagesh Yadwad</span>
          </div>
          
          <div className="hidden sm:block w-px h-4 bg-gray-200 dark:bg-white/10"></div>
          
          <div className="flex items-center gap-4">
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#0077b5] hover:text-[#0077b5]/80 transition-all text-xs font-semibold no-underline group"
            >
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;