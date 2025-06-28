import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types/language';
import { translations, contactInfo } from '../data/translations';

interface StickyBannerProps {
  language: Language;
}

const StickyBanner: React.FC<StickyBannerProps> = ({ language }) => {
  const t = translations.stickyBanner;

  const handleWhatsApp = () => {
    const messages = {
      'pt-BR': 'Olá! Quero conhecer e conversar com a Lezz AI',
      'en-US': 'Hello! I want to meet and chat with Lezz AI',
      'es': 'Hola! Quiero conocer y conversar con Lezz AI'
    };
    
    const message = encodeURIComponent(messages[language]);
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex-1 text-center">
            <p className="text-sm font-medium">
              {t.text[language]}
            </p>
          </div>
          <button
            onClick={handleWhatsApp}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 ml-4"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyBanner;