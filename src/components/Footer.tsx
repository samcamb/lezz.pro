import React from 'react';
import { Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Language } from '../types/language';
import { translations, contactInfo, logoConfig } from '../data/translations';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations.footer;

  return (
    <footer id="contact" className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <img 
              src={logoConfig.footer}
              alt="Lezz.pro" 
              className="h-16 w-auto filter brightness-0 invert"
            />
            <p className="text-lg font-medium text-gray-300">
              {t.slogan[language]}
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              {language === 'pt-BR' ? 
                'Transformando negócios através da inteligência artificial com propósito e responsabilidade.' :
               language === 'en-US' ? 
                'Transforming businesses through artificial intelligence with purpose and responsibility.' :
                'Transformando negocios a través de la inteligencia artificial con propósito y responsabilidad.'}
            </p>
          </div>

          {/* Menu Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {language === 'pt-BR' ? 'Menu' : language === 'en-US' ? 'Menu' : 'Menú'}
            </h3>
            <div className="space-y-2">
              <a href="#home" className="block text-sm text-gray-400 hover:text-white transition-colors">
                {language === 'pt-BR' ? 'Início' : language === 'en-US' ? 'Home' : 'Inicio'}
              </a>
              <a href="#method" className="block text-sm text-gray-400 hover:text-white transition-colors">
                {language === 'pt-BR' ? 'Método Lezz' : language === 'en-US' ? 'Lezz Method' : 'Método Lezz'}
              </a>
              <a href="#about" className="block text-sm text-gray-400 hover:text-white transition-colors">
                {language === 'pt-BR' ? 'Sobre' : language === 'en-US' ? 'About' : 'Acerca'}
              </a>
            </div>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {language === 'pt-BR' ? 'Legal' : language === 'en-US' ? 'Legal' : 'Legal'}
            </h3>
            <div className="space-y-2">
              <a href="/terms" className="block text-sm text-gray-400 hover:text-white transition-colors">
                {t.legal.terms[language]}
              </a>
              <a href="/privacy" className="block text-sm text-gray-400 hover:text-white transition-colors">
                {t.legal.privacy[language]}
              </a>
              <a href="/cookies" className="block text-sm text-gray-400 hover:text-white transition-colors">
                {t.legal.cookies[language]}
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              {language === 'pt-BR' ? 'Contato' : language === 'en-US' ? 'Contact' : 'Contacto'}
            </h3>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href={contactInfo.social.linkedin}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={contactInfo.social.instagram}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button 
                onClick={() => {
                  const messages = {
                    'pt-BR': 'Olá! Gostaria de saber mais sobre as soluções da Lezz.pro',
                    'en-US': 'Hello! I would like to know more about Lezz.pro solutions',
                    'es': 'Hola! Me gustaría saber más sobre las soluciones de Lezz.pro'
                  };
                  
                  const message = encodeURIComponent(messages[language]);
                  window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
                }}
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="space-y-1 text-sm text-gray-400">
              <p>WhatsApp: {contactInfo.whatsapp}</p>
              <p>Email: contato@lezz.pro</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            {t.copyright[language]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;