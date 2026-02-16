import React from 'react';

interface Props {
  onLegalClick: (type: string) => void;
}

const Footer: React.FC<Props> = ({ onLegalClick }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-2xl font-bold tracking-tight mb-6 block">SONIROYN</span>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Never Lose a Customer to a Missed Call. Enterprise-grade AI voice automation built for performance.
            </p>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">
              Founder: Shrikant Nagesh Yadwad
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#0F766E] mb-6">Product</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => scrollToSection('modules')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-gray-400 p-0 text-left">AI Modules</button></li>
              <li><button onClick={() => scrollToSection('how-it-works')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-gray-400 p-0 text-left">Implementation</button></li>
              <li><button onClick={() => scrollToSection('integrations')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-gray-400 p-0 text-left">Integrations</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-gray-400 p-0 text-left">FAQ</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#0F766E] mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-gray-400 p-0 text-left">About Us</button></li>
              <li><button onClick={() => scrollToSection('mission')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-gray-400 p-0 text-left">Our Mission</button></li>
              <li><button onClick={() => scrollToSection('modules')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-gray-400 p-0 text-left">Case Studies</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-gray-400 p-0 text-left">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#0F766E] mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => onLegalClick('privacy')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-gray-400 p-0 text-left">Privacy Policy</button></li>
              <li><button onClick={() => onLegalClick('terms')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-gray-400 p-0 text-left">Terms of Service</button></li>
              <li><button onClick={() => onLegalClick('gdpr')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-gray-400 p-0 text-left">GDPR Compliance</button></li>
              <li><button onClick={() => onLegalClick('data')} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-gray-400 p-0 text-left">Data Processing</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Soniroyn. All rights reserved. Registered Domain: soniroyn.com
          </p>
          <div className="flex gap-6 text-gray-500 text-xs font-bold uppercase tracking-tighter">
            <a href="https://www.linkedin.com/in/shrikant-nagesh-yadwad-5b3075252" target="_blank" className="hover:text-white cursor-pointer no-underline text-gray-500">LinkedIn</a>
            <span className="hover:text-white cursor-pointer">Twitter</span>
            <span className="hover:text-white cursor-pointer">YouTube</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;