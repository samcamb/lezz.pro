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
    <div className="fixed bottom-0 left-0 right-0 z-40 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={handleWhatsApp}
          className="w-full bg-green-600 text-white py-4 rounded-t-2xl hover:bg-green-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-3 font-semibold text-base shadow-xl"
        >
          <MessageCircle className="w-5 h-5" />
          <span>{t.text[language]} pelo WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default StickyBanner;