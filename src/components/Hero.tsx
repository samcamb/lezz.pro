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
      {/* Background com vídeo do Vimeo */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://player.vimeo.com/video/1092831931?autoplay=1&loop=1&muted=1&controls=0&background=1&title=0&byline=0&portrait=0"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            width: '100vw',
            height: '100vh',
            border: 'none',
            pointerEvents: 'none'
          }}
          allow="autoplay; fullscreen"
          title="Hero Background Video"
        />
        
        {/* Overlay escuro para melhor legibilidade */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {t.title[language]}
          </h1>

          {/* Sub-headline */}
          <h2 className="text-xs md:text-sm lg:text-base text-gray-300 mb-4 leading-relaxed font-light">
            {t.subtitle[language]}
          </h2>

          {/* Secondary Slogan */}
          <p className="text-xs md:text-sm text-gray-400 mb-8 font-medium">
            {t.slogan[language]}
          </p>

          {/* CTA Buttons */}
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