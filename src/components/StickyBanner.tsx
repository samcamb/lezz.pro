import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { Language } from '../types/language';
import { translations, contactInfo } from '../data/translations';

interface StickyBannerProps {
  language: Language;
}

const StickyBanner: React.FC<StickyBannerProps> = ({ language }) => {
  const t = translations.stickyBanner;

  const handleWhatsApp = () => {
    const messages = {
      'pt-BR': 'Olá! Quero perguntar para a Lezz IA como otimizar meu negócio com IA',
      'en-US': 'Hello! I want to ask Lezz AI how to optimize my business with AI',
      'es': 'Hola! Quiero preguntarle a Lezz IA cómo optimizar mi negocio con IA'
    };
    
    const message = encodeURIComponent(messages[language]);
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <button
            onClick={handleWhatsApp}
            className="group w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 px-6 rounded-2xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 shadow-lg hover:shadow-2xl backdrop-blur-sm border border-white/10"
          >
            <div className="flex items-center justify-center space-x-3">
              {/* Animated sparkle icon */}
              <div className="relative">
                <Sparkles className="w-4 h-4 text-emerald-200 animate-pulse" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
              </div>
              
              {/* Main text */}
              <span className="font-medium text-sm tracking-wide">
                {t.text[language]}
              </span>
              
              {/* WhatsApp icon with subtle animation */}
              <div className="relative">
                <MessageCircle className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
              </div>
            </div>
            
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;