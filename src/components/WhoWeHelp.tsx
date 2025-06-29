import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { Language } from '../types/language';
import { translations } from '../data/translations';

interface WhoWeHelpProps {
  language: Language;
}

const WhoWeHelp: React.FC<WhoWeHelpProps> = ({ language }) => {
  const t = translations.whoWeHelp;

  const painPoints = [
    t.painPoints.tracking[language],
    t.painPoints.timing[language],
    t.painPoints.qualification[language],
    t.painPoints.followUp[language],
    t.painPoints.adSpend[language]
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.title[language]}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              {t.description[language]}
            </p>
          </div>

          {/* Pain Points */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
            <div className="flex items-center justify-center mb-6">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-7 h-7 text-red-600" />
              </div>
            </div>

            <div className="space-y-5">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Solution Preview */}
            <div className="mt-10 p-5 bg-green-50 rounded-2xl border border-green-200">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-semibold text-green-900">
                  {language === 'pt-BR' ? 'A Lezz.pro Resolve Tudo Isso' : 
                   language === 'en-US' ? 'Lezz.pro Solves All of This' : 
                   'Lezz.pro Resuelve Todo Esto'}
                </h3>
              </div>
              <p className="text-sm text-green-800 leading-relaxed">
                {language === 'pt-BR' ? 
                  'Nossa plataforma integrada elimina cada um desses problemas com automação inteligente, permitindo que você foque no crescimento do seu negócio.' :
                 language === 'en-US' ? 
                  'Our integrated platform eliminates each of these problems with intelligent automation, allowing you to focus on growing your business.' :
                  'Nuestra plataforma integrada elimina cada uno de estos problemas con automatización inteligente, permitiéndote enfocarte en hacer crecer tu negocio.'}
              </p>
            </div>

            {/* CTA */}
            <div className="text-center mt-6">
              <button 
                onClick={() => {
                  const messages = {
                    'pt-BR': 'Olá! Tenho esses problemas e quero saber como a Lezz.pro pode me ajudar',
                    'en-US': 'Hello! I have these problems and want to know how Lezz.pro can help me',
                    'es': 'Hola! Tengo estos problemas y quiero saber cómo Lezz.pro puede ayudarme'
                  };
                  
                  const message = encodeURIComponent(messages[language]);
                  window.open(`https://wa.me/5535936180709?text=${message}`, '_blank');
                }}
                className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-semibold text-base"
              >
                {language === 'pt-BR' ? 'Quero uma Solução' : 
                 language === 'en-US' ? 'I Want a Solution' : 
                 'Quiero una Solución'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
