import React, { useState } from 'react';
import { Target, Users, Lightbulb, Play, X, ExternalLink } from 'lucide-react';
import { Language } from '../types/language';
import { translations } from '../data/translations';

interface PurposeProps {
  language: Language;
}

const Purpose: React.FC<PurposeProps> = ({ language }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const t = translations.purpose;

  const openVimeoDirectly = () => {
    // Abre o vídeo diretamente no Vimeo em nova aba
    window.open('https://vimeo.com/1093077093', '_blank');
  };

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

          {/* Video Player */}
          <div className="relative">
            <div className="aspect-square bg-gray-900 rounded-3xl overflow-hidden relative group">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop')`
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  {/* Main Play Button */}
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-300 transform hover:scale-110 group"
                  >
                    <Play className="w-10 h-10 text-white ml-1" />
                  </button>
                  
                  {/* Alternative Button */}
                  <button
                    onClick={openVimeoDirectly}
                    className="flex items-center space-x-2 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70 transition-colors backdrop-blur-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {language === 'pt-BR' ? 'Ver no Vimeo' : 
                       language === 'en-US' ? 'Watch on Vimeo' : 
                       'Ver en Vimeo'}
                    </span>
                  </button>
                </div>
              </div>
              
              {/* Video Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-white text-sm font-medium">
                    {language === 'pt-BR' ? 'IA com Propósito' : 
                     language === 'en-US' ? 'AI with Purpose' : 
                     'IA con Propósito'}
                  </div>
                  <div className="text-white/70 text-xs mt-1">
                    {language === 'pt-BR' ? 'Vídeo Demonstrativo' : 
                     language === 'en-US' ? 'Demo Video' : 
                     'Video Demostrativo'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Vídeo */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            {/* Botão Fechar */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Container do Vídeo */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div 
                style={{
                  padding: '56.25% 0 0 0',
                  position: 'relative'
                }}
              >
                <iframe
                  src="https://player.vimeo.com/video/1093077093?autoplay=1&title=0&byline=0&portrait=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}
                  title="Purpose Video"
                  onError={() => {
                    // Se falhar, redireciona para o Vimeo
                    window.open('https://vimeo.com/1093077093', '_blank');
                    setIsVideoOpen(false);
                  }}
                />
              </div>
              
              {/* Fallback se o iframe não carregar */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="text-center text-white space-y-4">
                  <div className="text-lg font-medium">
                    {language === 'pt-BR' ? 'Problema ao carregar o vídeo?' : 
                     language === 'en-US' ? 'Problem loading video?' : 
                     '¿Problema al cargar el video?'}
                  </div>
                  <button
                    onClick={openVimeoDirectly}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors mx-auto"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>
                      {language === 'pt-BR' ? 'Assistir no Vimeo' : 
                       language === 'en-US' ? 'Watch on Vimeo' : 
                       'Ver en Vimeo'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Purpose;