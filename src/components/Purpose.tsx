import React, { useState, useRef } from 'react';
import { Target, Users, Lightbulb, Play, Pause } from 'lucide-react';
import { Language } from '../types/language';
import { translations } from '../data/translations';

interface PurposeProps {
  language: Language;
}

const Purpose: React.FC<PurposeProps> = ({ language }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const t = translations.purpose;

  const handlePlayPause = () => {
    if (iframeRef.current) {
      if (isPlaying) {
        // Pause the video
        iframeRef.current.contentWindow?.postMessage('{"method":"pause"}', '*');
        setIsPlaying(false);
      } else {
        // Play the video
        iframeRef.current.contentWindow?.postMessage('{"method":"play"}', '*');
        setIsPlaying(true);
      }
    }
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
            <div className="aspect-square bg-gray-900 rounded-3xl overflow-hidden relative">
              {/* Vimeo Iframe */}
              <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/1092831931?h=e0aee331d8&badge=0&autopause=0&controls=0&title=0&byline=0&portrait=0&background=1&muted=1"
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none' }}
                allow="autoplay; fullscreen; picture-in-picture"
                title="Purpose Video"
              />
              
              {/* Play/Pause Button Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button
                    onClick={handlePlayPause}
                    className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                  >
                    <Play className="w-10 h-10 text-white ml-1" />
                  </button>
                </div>
              )}
              
              {/* Pause Button (bottom left when playing) */}
              {isPlaying && (
                <div className="absolute bottom-4 left-4">
                  <button
                    onClick={handlePlayPause}
                    className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-colors"
                  >
                    <Pause className="w-6 h-6 text-white" />
                  </button>
                </div>
              )}
              
              {/* Video Info */}
              <div className="absolute bottom-4 right-4">
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
    </section>
  );
};

export default Purpose;