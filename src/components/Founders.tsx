import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { Language } from '../types/language';
import { translations } from '../data/translations';

interface FoundersProps {
  language: Language;
}

const Founders: React.FC<FoundersProps> = ({ language }) => {
  const t = translations.founders;

  const founders = [
    {
      name: t.priscilla.name,
      title: t.priscilla.title[language],
      bio: t.priscilla.bio[language],
      image: '/pri.png',
      social: {
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: t.samuel.name,
      title: t.samuel.title[language],
      bio: t.samuel.bio[language],
      image: '/sam.webp',
      social: {
        linkedin: '#',
        instagram: '#'
      }
    }
  ];

  return (
    <section id="founders" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t.title[language]}
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'pt-BR' ? 
              'Conheça os fundadores que vivem na prática os desafios que nossa solução resolve.' :
             language === 'en-US' ? 
              'Meet the founders who live in practice the challenges that our solution solves.' :
              'Conoce a los fundadores que viven en la práctica los desafíos que nuestra solución resuelve.'}
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {founders.map((founder, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-base font-medium text-gray-600 mb-4">
                    {founder.title}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-6">
                    {founder.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex space-x-4">
                    <a 
                      href={founder.social.linkedin}
                      className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                    <a 
                      href={founder.social.instagram}
                      className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'pt-BR' ? 
                'Quer conversar diretamente com os fundadores?' :
               language === 'en-US' ? 
                'Want to talk directly with the founders?' :
                '¿Quieres hablar directamente con los fundadores?'}
            </h3>
            <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto">
              {language === 'pt-BR' ? 
                'Estamos sempre disponíveis para entender seu negócio e mostrar como a Lezz.pro pode transformar seus resultados.' :
               language === 'en-US' ? 
                'We are always available to understand your business and show how Lezz.pro can transform your results.' :
                'Siempre estamos disponibles para entender tu negocio y mostrar cómo Lezz.pro puede transformar tus resultados.'}
            </p>
            <button 
              onClick={() => {
                const messages = {
                  'pt-BR': 'Olá! Gostaria de conversar com os fundadores sobre a Lezz.pro',
                  'en-US': 'Hello! I would like to talk with the founders about Lezz.pro',
                  'es': 'Hola! Me gustaría hablar con los fundadores sobre Lezz.pro'
                };
                
                const message = encodeURIComponent(messages[language]);
                window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
              }}
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-semibold text-base"
            >
              {language === 'pt-BR' ? 'Falar com os Fundadores' : 
               language === 'en-US' ? 'Talk to the Founders' : 
               'Hablar con los Fundadores'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;