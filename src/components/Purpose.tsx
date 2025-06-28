import React from 'react';
import { Target, Users, Lightbulb, Play } from 'lucide-react';
import { Language } from '../types/language';
import { translations, videoUrls } from '../data/translations';

interface PurposeProps {
  language: Language;
}

const Purpose: React.FC<PurposeProps> = ({ language }) => {
  const t = translations.purpose;

  return (
    <section id="purpose" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {t.title[language]}
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed">
              {t.description[language]}
            </p>

            {/* Key Points */}
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {language === 'pt-BR' ? 'Automação com Propósito' : 
                     language === 'en-US' ? 'Automation with Purpose' : 
                     'Automatización con Propósito'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {language === 'pt-BR' ? 'Libertamos sua equipe de tarefas repetitivas para focar no que realmente importa.' :
                     language === 'en-US' ? 'We free your team from repetitive tasks to focus on what really matters.' :
                     'Liberamos a tu equipo de tareas repetitivas para enfocarse en lo que realmente importa.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {language === 'pt-BR' ? 'Centrado no Humano' : 
                     language === 'en-US' ? 'Human-Centered' : 
                     'Centrado en el Humano'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {language === 'pt-BR' ? 'Nossa IA serve para potencializar pessoas, não substituí-las.' :
                     language === 'en-US' ? 'Our AI serves to empower people, not replace them.' :
                     'Nuestra IA sirve para empoderar a las personas, no reemplazarlas.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {language === 'pt-BR' ? 'Inovação Responsável' : 
                     language === 'en-US' ? 'Responsible Innovation' : 
                     'Innovación Responsable'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {language === 'pt-BR' ? 'Desenvolvemos tecnologia que gera valor real e sustentável para seu negócio.' :
                     language === 'en-US' ? 'We develop technology that generates real and sustainable value for your business.' :
                     'Desarrollamos tecnología que genera valor real y sostenible para tu negocio.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual com Vídeo */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center relative">
                {/* Vídeo do Vimeo para a seção Purpose */}
                <iframe
                  src={`${videoUrls.purpose?.[language] || videoUrls.hero[language]}?autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0`}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    border: 'none'
                  }}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  title="Purpose Section Video"
                />
                
                {/* Overlay com botão de play */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-3xl z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors cursor-pointer">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                
                {/* Fallback caso o vídeo não carregue */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
                  <div className="relative">
                    <div className="w-56 h-56 relative">
                      <div className="absolute inset-0 bg-black rounded-full opacity-10 animate-pulse"></div>
                      <div className="absolute top-1/4 left-1/4 w-28 h-28 bg-black rounded-lg transform rotate-12 opacity-20"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gray-600 rounded-full opacity-30"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-black rounded-full flex items-center justify-center">
                        <Users className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;