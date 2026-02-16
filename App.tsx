import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Modules from './components/Modules';
import TechStack from './components/TechStack';
import HowItWorks from './components/HowItWorks';
import AboutMission from './components/AboutMission';
import Founder from './components/Founder';
import Integrations from './components/Integrations';
import Languages from './components/Languages';
import Faq from './components/Faq';
import ContactDemo from './components/ContactDemo';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import { Shield, Lock, Globe, Server } from 'lucide-react';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<string | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-navy-dark transition-colors duration-500">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        <Hero />
        
        {/* Premium Trust Bar */}
        <div className="bg-slate-50 dark:bg-white/[0.02] py-12 border-y border-gray-100 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20">
              <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Shield className="w-6 h-6 text-navy dark:text-white" />
                <span className="font-bold text-sm tracking-widest text-navy dark:text-white">GDPR COMPLIANT</span>
              </div>
              <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Lock className="w-6 h-6 text-navy dark:text-white" />
                <span className="font-bold text-sm tracking-widest text-navy dark:text-white">SOC2 TYPE II</span>
              </div>
              <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Globe className="w-6 h-6 text-navy dark:text-white" />
                <span className="font-bold text-sm tracking-widest text-navy dark:text-white">GLOBAL INFRA</span>
              </div>
              <div className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Server className="w-6 h-6 text-navy dark:text-white" />
                <span className="font-bold text-sm tracking-widest text-navy dark:text-white">SECURE STORAGE</span>
              </div>
            </div>
          </div>
        </div>

        <AboutMission />
        <Modules />
        <TechStack />
        <HowItWorks />
        <Languages />
        <Integrations />
        <Faq />
        <ContactDemo />
        
        <Founder />
      </main>

      <Footer onLegalClick={setActiveLegalDoc} />

      {/* Legal Overlays */}
      {activeLegalDoc && (
        <LegalModal 
          type={activeLegalDoc} 
          onClose={() => setActiveLegalDoc(null)} 
        />
      )}
    </div>
  );
};

export default App;