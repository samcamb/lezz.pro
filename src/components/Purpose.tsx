import React, { useState, useRef } from 'react';
import { Target, Users, Lightbulb, Play, Pause } from 'lucide-react';
import { Language } from '../types/language';
import { translations } from '../data/translations';

interface PurposeProps {
  language: Language;
}

const Purpose: React.FC<PurposeProps> = ({ language }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const t = translations.purpose;

  const handlePlay = () => {
    if (iframeRef.current) {
      // Carrega o vídeo com autoplay, sem loop
      const newSrc = 'https://player.vimeo.com/video/1092831931?badge=0&autopause=0&controls=0&title=0&byline=0&portrait=0&outro=nothing&loop=0&autoplay=1&muted=0';
      iframeRef.current.src = newSrc;
      setIsPlaying(true);
      setVideoEnded(false);
    }
  };

  const handlePause = () => {
    if (iframeRef.current) {
      // Pausa o vídeo via postMessage
      iframeRef.current.contentWindow?.postMessage('{"method":"pause"}', '*');
      setIsPlaying(false);
    }
  };

  const resetVideo = () => {
    if (iframeRef.current) {
      // Volta ao estado inicial (sem autoplay, com muted)
      const initialSrc = 'https://player.vimeo.com/video/1092831931?badge=0&autopause=0&controls=0&title=0&byline=0&portrait=0&outro=nothing&loop=0&background=1&muted=1';
      iframeRef.current.src = initialSrc;
      setIsPlaying(false);
      setVideoEnded(false);
    }
  };

  // Escuta mensagens do Vimeo para detectar quando o vídeo termina
  React.useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://player.vimeo.com') return;
      
      try {
        const data = JSON.parse(event.data);
        if (data.event === 'ended') {
          setIsPlaying(false);
          setVideoEnded(true);
        }
      } catch (e) {
        // Ignora mensagens que não são JSON válido
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

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
            <div className="aspect-video bg-gray-900 rounded-3xl overflow-hidden relative">
              {/* Vimeo Iframe */}
              <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/1092831931?badge=0&autopause=0&controls=0&title=0&byline=0&portrait=0&outro=nothing&loop=0&background=1&muted=1"
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none' }}
                allow="autoplay; fullscreen; picture-in-picture"
                title="Purpose Video"
              />
              
              {/* Play Button Overlay - Aparece quando não está tocando */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <button
                    onClick={handlePlay}
                    className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                  >
                    <Play className="w-10 h-10 text-white ml-1" />
                  </button>
                </div>
              )}
              
              {/* Pause Button - Aparece no canto inferior esquerdo quando está tocando */}
              {isPlaying && (
                <div className="absolute bottom-4 left-4">
                  <button
                    onClick={handlePause}
                    className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-colors"
                  >
                    <Pause className="w-6 h-6 text-white" />
                  </button>
                </div>
              )}
              
              {/* Replay Button - Aparece quando o vídeo terminou */}
              {videoEnded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <button
                    onClick={resetVideo}
                    className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                  >
                    <Play className="w-10 h-10 text-white ml-1" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;