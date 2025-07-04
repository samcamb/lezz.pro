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
      // Carrega o vídeo com parâmetros MUITO restritivos para evitar conteúdo relacionado
      const newSrc = 'https://player.vimeo.com/video/1092831931?badge=0&autopause=0&player_id=0&app_id=122963&controls=0&title=0&byline=0&portrait=0&outro=nothing&loop=0&autoplay=1&muted=0&background=0&transparent=0&responsive=1&dnt=1&playsinline=1&keyboard=0&pip=0&quality=auto&end_screen=0';
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

  const resetVideoToInitialState = () => {
    if (iframeRef.current) {
      // Força o reset completo removendo e recriando o iframe
      const parent = iframeRef.current.parentNode;
      const newIframe = document.createElement('iframe');
      
      // Copia todos os atributos
      newIframe.className = iframeRef.current.className;
      newIframe.style.cssText = iframeRef.current.style.cssText;
      newIframe.allow = iframeRef.current.allow;
      newIframe.title = iframeRef.current.title;
      newIframe.style.border = 'none';
      
      // URL inicial com background=1 e muted=1 para preview
      const initialSrc = 'https://player.vimeo.com/video/1092831931?badge=0&autopause=0&player_id=0&app_id=122963&controls=0&title=0&byline=0&portrait=0&outro=nothing&loop=0&background=1&muted=1&transparent=0&responsive=1&dnt=1&playsinline=1&keyboard=0&pip=0&quality=auto&end_screen=0';
      newIframe.src = initialSrc;
      
      // Substitui o iframe antigo
      if (parent) {
        parent.replaceChild(newIframe, iframeRef.current);
        iframeRef.current = newIframe;
      }
      
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
          
          // Reset IMEDIATO para evitar qualquer tela de fim do Vimeo
          setTimeout(() => {
            resetVideoToInitialState();
          }, 50); // Reset muito rápido - apenas 50ms
        } else if (data.event === 'timeupdate' && data.data && data.data.percent > 0.95) {
          // Detecta quando está próximo do fim (95%) e já prepara o reset
          setTimeout(() => {
            if (iframeRef.current) {
              resetVideoToInitialState();
            }
          }, 1000); // Reset preventivo 1 segundo antes do fim
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
                src="https://player.vimeo.com/video/1092831931?badge=0&autopause=0&player_id=0&app_id=122963&controls=0&title=0&byline=0&portrait=0&outro=nothing&loop=0&background=1&muted=1&transparent=0&responsive=1&dnt=1&playsinline=1&keyboard=0&pip=0&quality=auto&end_screen=0"
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none' }}
                allow="autoplay; fullscreen; picture-in-picture"
                title="Purpose Video"
              />
              
              {/* Play Button Overlay - Sempre visível quando não está tocando */}
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

              {/* Overlay de proteção contra cliques no final */}
              {videoEnded && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                  <button
                    onClick={() => {
                      resetVideoToInitialState();
                      setTimeout(handlePlay, 100);
                    }}
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