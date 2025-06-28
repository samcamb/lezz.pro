import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Language } from '../types/language';
import { translations, contactInfo } from '../data/translations';

interface HeroProps {
  language: Language;
  setCurrentPage: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ language, setCurrentPage }) => {
  const t = translations.hero;

  const handleWhatsApp = () => {
    const messages = {
      'pt-BR': 'Olá! Gostaria de saber mais sobre as soluções de IA da Lezz.pro',
      'en-US': 'Hello! I would like to know more about Lezz.pro AI solutions',
      'es': 'Hola! Me gustaría saber más sobre las soluciones de IA de Lezz.pro'
    };
    
    const message = encodeURIComponent(messages[language]);
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  const handleMethodClick = () => {
    setCurrentPage('method');
    window.scrollTo(0, 0);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline - Fonte menor */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {t.title[language]}
          </h1>

          {/* Sub-headline - Fonte menor */}
          <h2 className="text-base md:text-lg lg:text-xl text-gray-300 mb-5 leading-relaxed font-light">
            {t.subtitle[language]}
          </h2>

          {/* Secondary Slogan - Fonte menor */}
          <p className="text-sm md:text-base text-gray-400 mb-8 font-medium">
            {t.slogan[language]}
          </p>

          {/* CTA Buttons - Novos textos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleWhatsApp}
              className="group flex items-center space-x-3 bg-white text-black px-5 py-2.5 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-sm"
            >
              <span>{t.cta1[language]}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={handleMethodClick}
              className="group flex items-center space-x-3 border-2 border-white text-white px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-semibold text-sm"
            >
              <Play className="w-4 h-4" />
              <span>{t.cta2[language]}</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;