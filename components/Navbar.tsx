import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface Props {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

const Navbar: React.FC<Props> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const CALENDLY_LINK = "https://calendly.com/shriikantyadwad/30min";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleBookDemo = () => {
    window.open(CALENDLY_LINK, '_blank');
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Features', id: 'modules' },
    { name: 'Languages', id: 'languages' },
    { name: 'Tools', id: 'integrations' },
    { name: 'FAQ', id: 'faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-navy-dark shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-[#0B1F3A] dark:text-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              SONIROYN
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium transition-colors hover:text-[#0F766E] text-[#1F2937] dark:text-gray-300 bg-transparent border-none cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4 border-l dark:border-white/10 pl-8">
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-600 dark:text-gray-300"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={handleBookDemo}
                className="bg-[#0B1F3A] dark:bg-[#0F766E] text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-all cursor-pointer border-none"
              >
                Book a Demo
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-gray-600 dark:text-gray-300">
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#0B1F3A] dark:text-white bg-transparent border-none cursor-pointer">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-navy-dark shadow-xl absolute top-full left-0 w-full animate-in slide-in-from-top">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t dark:border-white/10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-[#1F2937] dark:text-gray-300 hover:text-[#0F766E] block w-full text-left px-3 py-4 text-base font-medium border-b border-gray-100 dark:border-white/5 bg-transparent cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={handleBookDemo}
              className="bg-[#0B1F3A] dark:bg-[#0F766E] text-white block w-full px-3 py-4 rounded-md text-base font-semibold text-center mt-4 bg-transparent cursor-pointer border-none"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;