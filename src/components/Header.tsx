import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Menu, X } from 'lucide-react';
import { Language } from '../types/language';
import { translations, contactInfo, logoConfig } from '../data/translations';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const t = translations.nav;

  const languages = [
    { code: 'pt-BR' as Language, name: 'Português', flag: '🇧🇷' },
    { code: 'en-US' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' }
  ];

  const currentLang = languages.find(lang => lang.code === language);

  const handleWhatsApp = () => {
    const messages = {
      'pt-BR': 'Olá! Gostaria de saber mais sobre as soluções de IA da Lezz.pro',
      'en-US': 'Hello! I would like to know more about Lezz.pro AI solutions',
      'es': 'Hola! Me gustaría saber más sobre las soluciones de IA de Lezz.pro'
    };
    
    const message = encodeURIComponent(messages[language]);
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    // Scroll to top when changing pages
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Aumentado ainda mais */}
          <div className="flex-shrink-0">
            <img 
              src={logoConfig.main}
              alt="Lezz.pro" 
              className="h-16 w-auto cursor-pointer" // Aumentado de h-12 para h-16
              onClick={() => handleNavClick('home')}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleNavClick('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home' ? 'text-black' : 'text-gray-700 hover:text-black'
              }`}
            >
              {t.home[language]}
            </button>
            <button 
              onClick={() => handleNavClick('method')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'method' ? 'text-black' : 'text-gray-700 hover:text-black'
              }`}
            >
              {t.method[language]}
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'about' ? 'text-black' : 'text-gray-700 hover:text-black'
              }`}
            >
              {t.about[language]}
            </button>
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-2 py-1 text-xs font-medium text-gray-700 hover:text-black transition-colors"
              >
                <span>{currentLang?.flag}</span>
                <span>{currentLang?.name}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full px-3 py-2 text-xs text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 text-xs"
            >
              <MessageCircle className="w-3 h-3" />
              <span className="font-medium">{t.chatWithAI[language]}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-black transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavClick('home')}
                className={`text-left text-sm font-medium transition-colors ${
                  currentPage === 'home' ? 'text-black' : 'text-gray-700 hover:text-black'
                }`}
              >
                {t.home[language]}
              </button>
              <button 
                onClick={() => handleNavClick('method')}
                className={`text-left text-sm font-medium transition-colors ${
                  currentPage === 'method' ? 'text-black' : 'text-gray-700 hover:text-black'
                }`}
              >
                {t.method[language]}
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className={`text-left text-sm font-medium transition-colors ${
                  currentPage === 'about' ? 'text-black' : 'text-gray-700 hover:text-black'
                }`}
              >
                {t.about[language]}
              </button>
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs transition-colors ${
                        language === lang.code 
                          ? 'bg-black text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <button
                onClick={handleWhatsApp}
                className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 mt-4 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="font-medium">{t.chatWithAI[language]}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;