import React, { useState, useRef } from 'react';
import { Bot, BarChart3, Target, BookOpen, ArrowRight, CheckCircle, Play, Pause } from 'lucide-react';
import { Language } from '../types/language';
import { translations, contactInfo, videoUrls } from '../data/translations';

interface MethodPageProps {
  language: Language;
}

const MethodPage: React.FC<MethodPageProps> = ({ language }) => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set());
  const videoRefs = useRef<{ [key: string]: HTMLIFrameElement | null }>({});
  const t = translations.method;

  const handleWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodedMessage}`, '_blank');
  };

  const handlePlay = (videoId: string, vimeoId: string) => {
    const iframe = videoRefs.current[videoId];
    if (iframe) {
      // Para qualquer vídeo que esteja tocando
      if (playingVideo && videoRefs.current[playingVideo]) {
        videoRefs.current[playingVideo]?.contentWindow?.postMessage('{"method":"pause"}', '*');
      }
      
      // Carrega o vídeo com autoplay e áudio habilitado
      const newSrc = `https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&controls=0&title=0&byline=0&portrait=0&autoplay=1&muted=0`;
      iframe.src = newSrc;
      setPlayingVideo(videoId);
      setLoadedVideos(prev => new Set(prev).add(videoId));
    }
  };

  const handlePause = (videoId: string) => {
    const iframe = videoRefs.current[videoId];
    if (iframe) {
      iframe.contentWindow?.postMessage('{"method":"pause"}', '*');
      setPlayingVideo(null);
    }
  };

  const resetVideo = (videoId: string, vimeoId: string) => {
    const iframe = videoRefs.current[videoId];
    if (iframe) {
      // Volta ao estado inicial
      const initialSrc = `https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&controls=0&title=0&byline=0&portrait=0&background=1&muted=1`;
      iframe.src = initialSrc;
      setPlayingVideo(null);
      setLoadedVideos(prev => {
        const newSet = new Set(prev);
        newSet.delete(videoId);
        return newSet;
      });
    }
  };

  const pillars = [
    {
      step: 1,
      icon: Bot,
      stepTitle: language === 'pt-BR' ? 'ETAPA 1: CAPTAÇÃO E PRIMEIRO CONTATO' : 
                 language === 'en-US' ? 'STAGE 1: CAPTURE AND FIRST CONTACT' : 
                 'ETAPA 1: CAPTACIÓN Y PRIMER CONTACTO',
      name: language === 'pt-BR' ? 'AGENTE IA SDR' : 
            language === 'en-US' ? 'AI SDR AGENT' : 
            'AGENTE IA SDR',
      description: language === 'pt-BR' ? 'O ciclo inicia quando um lead chega ao seu negócio. Nosso Agente IA SDR funciona como o primeiro ponto de contato, operando 24/7 sem pausas, férias ou limitações humanas.' :
                   language === 'en-US' ? 'The cycle begins when a lead arrives at your business. Our AI SDR Agent functions as the first point of contact, operating 24/7 without breaks, vacations, or human limitations.' :
                   'El ciclo comienza cuando un lead llega a tu negocio. Nuestro Agente IA SDR funciona como el primer punto de contacto, operando 24/7 sin pausas, vacaciones o limitaciones humanas.',
      features: language === 'pt-BR' ? [
        'Recepção Inteligente',
        'Qualificação Automatizada',
        'Primeiro Atendimento Humanizado',
        'Coleta de Informações Estratégicas',
        'Agendamento Automático'
      ] : language === 'en-US' ? [
        'Intelligent Reception',
        'Automated Qualification',
        'Humanized First Service',
        'Strategic Information Collection',
        'Automatic Scheduling'
      ] : [
        'Recepción Inteligente',
        'Calificación Automatizada',
        'Primera Atención Humanizada',
        'Recolección de Información Estratégica',
        'Programación Automática'
      ],
      color: 'from-blue-500 to-blue-600',
      videoId: 'pillar1',
      vimeoId: '1093077093'
    },
    {
      step: 2,
      icon: BarChart3,
      stepTitle: language === 'pt-BR' ? 'ETAPA 2: ORGANIZAÇÃO E INTELIGÊNCIA COMERCIAL' : 
                 language === 'en-US' ? 'STAGE 2: ORGANIZATION AND COMMERCIAL INTELLIGENCE' : 
                 'ETAPA 2: ORGANIZACIÓN E INTELIGENCIA COMERCIAL',
      name: language === 'pt-BR' ? 'CRM INTELIGENTE FOCO EM VENDAS' : 
            language === 'en-US' ? 'INTELLIGENT CRM FOCUSED ON SALES' : 
            'CRM INTELIGENTE ENFOCADO EN VENTAS',
      description: language === 'pt-BR' ? 'Após a qualificação inicial, cada lead é automaticamente direcionado para nosso CRM Inteligente, que não é apenas um repositório de dados, mas uma central de inteligência comercial.' :
                   language === 'en-US' ? 'After initial qualification, each lead is automatically directed to our Intelligent CRM, which is not just a data repository, but a commercial intelligence center.' :
                   'Después de la calificación inicial, cada lead se dirige automáticamente a nuestro CRM Inteligente, que no es solo un repositorio de datos, sino un centro de inteligencia comercial.',
      features: language === 'pt-BR' ? [
        'Criação Automática de Cards',
        'Segmentação Inteligente',
        'Distribuição Estratégica',
        'Follow-up Automatizado',
        'Histórico Completo',
        'Insights Preditivos'
      ] : language === 'en-US' ? [
        'Automatic Card Creation',
        'Intelligent Segmentation',
        'Strategic Distribution',
        'Automated Follow-up',
        'Complete History',
        'Predictive Insights'
      ] : [
        'Creación Automática de Tarjetas',
        'Segmentación Inteligente',
        'Distribución Estratégica',
        'Seguimiento Automatizado',
        'Historial Completo',
        'Insights Predictivos'
      ],
      color: 'from-purple-500 to-purple-600',
      videoId: 'pillar2',
      vimeoId: '1093094206'
    },
    {
      step: 3,
      icon: Target,
      stepTitle: language === 'pt-BR' ? 'ETAPA 3: OTIMIZAÇÃO CONTÍNUA DE CAMPANHAS' : 
                 language === 'en-US' ? 'STAGE 3: CONTINUOUS CAMPAIGN OPTIMIZATION' : 
                 'ETAPA 3: OPTIMIZACIÓN CONTINUA DE CAMPAÑAS',
      name: language === 'pt-BR' ? 'PIXEL BOOSTER AUTOMÁTICO' : 
            language === 'en-US' ? 'AUTOMATIC PIXEL BOOSTER' : 
            'PIXEL BOOSTER AUTOMÁTICO',
      description: language === 'pt-BR' ? 'Enquanto sua equipe foca nas vendas, nosso Pixel Booster trabalha nos bastidores, otimizando continuamente suas campanhas de tráfego pago para atrair leads cada vez melhores.' :
                   language === 'en-US' ? 'While your team focuses on sales, our Pixel Booster works behind the scenes, continuously optimizing your paid traffic campaigns to attract increasingly better leads.' :
                   'Mientras tu equipo se enfoca en las ventas, nuestro Pixel Booster trabaja detrás de escena, optimizando continuamente tus campañas de tráfico pago para atraer leads cada vez mejores.',
      features: language === 'pt-BR' ? [
        'Rastreamento Inteligente',
        'Retroalimentação de Dados',
        'Otimização 24/7',
        'Remarketing Inteligente',
        'Análise Preditiva',
        'Bid Automático'
      ] : language === 'en-US' ? [
        'Intelligent Tracking',
        'Data Feedback',
        '24/7 Optimization',
        'Intelligent Remarketing',
        'Predictive Analysis',
        'Automatic Bidding'
      ] : [
        'Seguimiento Inteligente',
        'Retroalimentación de Datos',
        'Optimización 24/7',
        'Remarketing Inteligente',
        'Análisis Predictivo',
        'Puja Automática'
      ],
      color: 'from-green-500 to-green-600',
      videoId: 'pillar3',
      vimeoId: '1093072840'
    },
    {
      step: 4,
      icon: BookOpen,
      stepTitle: language === 'pt-BR' ? 'ETAPA 4: CAPACITAÇÃO E EVOLUÇÃO CONTÍNUA' : 
                 language === 'en-US' ? 'STAGE 4: TRAINING AND CONTINUOUS EVOLUTION' : 
                 'ETAPA 4: CAPACITACIÓN Y EVOLUCIÓN CONTINUA',
      name: language === 'pt-BR' ? 'LEZZ ACADEMY' : 
            language === 'en-US' ? 'LEZZ ACADEMY' : 
            'LEZZ ACADEMY',
      description: language === 'pt-BR' ? 'Para garantir que sua equipe extraia o máximo potencial do método, oferecemos a LEZZ Academy - nossa plataforma de treinamento gamificada que desenvolve competências comerciais e tecnológicas.' :
                   language === 'en-US' ? 'To ensure your team extracts the maximum potential from the method, we offer LEZZ Academy - our gamified training platform that develops commercial and technological skills.' :
                   'Para garantizar que tu equipo extraiga el máximo potencial del método, ofrecemos LEZZ Academy - nuestra plataforma de entrenamiento gamificada que desarrolla competencias comerciales y tecnológicas.',
      features: language === 'pt-BR' ? [
        'Treinamento Gamificado',
        'Capacitação Técnica',
        'Desenvolvimento Comercial',
        'Acompanhamento Personalizado',
        'Análise de Performance',
        'Evolução Contínua'
      ] : language === 'en-US' ? [
        'Gamified Training',
        'Technical Training',
        'Commercial Development',
        'Personalized Monitoring',
        'Performance Analysis',
        'Continuous Evolution'
      ] : [
        'Entrenamiento Gamificado',
        'Capacitación Técnica',
        'Desarrollo Comercial',
        'Seguimiento Personalizado',
        'Análisis de Rendimiento',
        'Evolución Continua'
      ],
      color: 'from-orange-500 to-orange-600',
      videoId: 'pillar4',
      vimeoId: '1093100258'
    }
  ];

  const cycleSteps = language === 'pt-BR' ? [
    'Mais leads qualificados chegam',
    'Atendimento 24/7 nunca perde oportunidades',
    'Equipe foca apenas em leads quentes',
    'Campanhas se otimizam automaticamente',
    'ROI aumenta continuamente',
    'Equipe evolui constantemente'
  ] : language === 'en-US' ? [
    'More qualified leads arrive',
    '24/7 service never misses opportunities',
    'Team focuses only on hot leads',
    'Campaigns optimize automatically',
    'ROI increases continuously',
    'Team evolves constantly'
  ] : [
    'Llegan más leads calificados',
    'Atención 24/7 nunca pierde oportunidades',
    'Equipo se enfoca solo en leads calientes',
    'Campañas se optimizan automáticamente',
    'ROI aumenta continuamente',
    'Equipo evoluciona constantemente'
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            {t.title[language]}
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle[language]}
          </p>
          <button
            onClick={() => handleWhatsApp(language === 'pt-BR' ? 'Olá! Quero multiplicar minhas vendas com o Método LEZZ' : 
                                          language === 'en-US' ? 'Hello! I want to multiply my sales with the LEZZ Method' : 
                                          'Hola! Quiero multiplicar mis ventas con el Método LEZZ')}
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-base"
          >
            {language === 'pt-BR' ? 'Quero multiplicar minhas vendas' : 
             language === 'en-US' ? 'I want to multiply my sales' : 
             'Quiero multiplicar mis ventas'}
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {language === 'pt-BR' ? 'Como funciona o ciclo do Método Lezz' : 
               language === 'en-US' ? 'How the Lezz Method cycle works' : 
               'Cómo funciona el ciclo del Método Lezz'}
            </h2>
            <p className="text-sm text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t.description[language]}
            </p>
          </div>
        </div>
      </section>

      {/* The 4 Pillars Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isEven = index % 2 === 0;
              const isPlaying = playingVideo === pillar.videoId;
              const isLoaded = loadedVideos.has(pillar.videoId);
              
              return (
                <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={`p-6 lg:p-8 flex flex-col justify-center ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${pillar.color} flex items-center justify-center`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                          {pillar.stepTitle}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {pillar.name}
                      </h3>
                      
                      <p className="text-sm text-gray-600 leading-relaxed mb-6">
                        {pillar.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {pillar.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-xs text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Video Player */}
                    <div className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6 lg:p-8 ${!isEven ? 'lg:col-start-1' : ''}`}>
                      <div className="w-full max-w-md aspect-video bg-gray-900 rounded-2xl overflow-hidden relative">
                        {/* Vimeo Iframe */}
                        <iframe
                          ref={(el) => { videoRefs.current[pillar.videoId] = el; }}
                          src={`https://player.vimeo.com/video/${pillar.vimeoId}?badge=0&autopause=0&controls=0&title=0&byline=0&portrait=0&background=1&muted=1`}
                          className="absolute inset-0 w-full h-full"
                          style={{ border: 'none' }}
                          allow="autoplay; fullscreen; picture-in-picture"
                          title={`${pillar.name} Video`}
                        />
                        
                        {/* Play Button Overlay */}
                        {!isPlaying && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <button
                              onClick={() => handlePlay(pillar.videoId, pillar.vimeoId)}
                              className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-full flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform duration-300`}
                            >
                              <Play className="w-8 h-8 text-white ml-1" />
                            </button>
                          </div>
                        )}
                        
                        {/* Pause Button (bottom left when playing) */}
                        {isPlaying && (
                          <div className="absolute bottom-3 left-3">
                            <button
                              onClick={() => handlePause(pillar.videoId)}
                              className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-colors"
                            >
                              <Pause className="w-5 h-5 text-white" />
                            </button>
                          </div>
                        )}
                        
                        {/* Reset Button (when paused after playing) */}
                        {!isPlaying && isLoaded && (
                          <div className="absolute top-3 right-3">
                            <button
                              onClick={() => resetVideo(pillar.videoId, pillar.vimeoId)}
                              className="px-3 py-2 bg-black/50 rounded-full text-white text-xs backdrop-blur-sm hover:bg-black/70 transition-colors"
                            >
                              {language === 'pt-BR' ? 'Reiniciar' : 
                               language === 'en-US' ? 'Restart' : 
                               'Reiniciar'}
                            </button>
                          </div>
                        )}
                        
                        {/* Info Overlay */}
                        <div className="absolute bottom-3 right-3">
                          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                            <div className="text-white text-xs font-medium">
                              {language === 'pt-BR' ? 'Pilar' : language === 'en-US' ? 'Pillar' : 'Pilar'} {pillar.step}
                            </div>
                            <div className="text-white/70 text-xs mt-1">
                              {pillar.name}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Virtuous Cycle Section */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'pt-BR' ? 'O Ciclo Virtuoso do Método Lezz' : 
               language === 'en-US' ? 'The Virtuous Cycle of the Lezz Method' : 
               'El Ciclo Virtuoso del Método Lezz'}
            </h2>
            <h3 className="text-lg text-gray-300 mb-6">
              {language === 'pt-BR' ? 'Como os 4 Pilares se Conectam:' : 
               language === 'en-US' ? 'How the 4 Pillars Connect:' : 
               'Cómo se Conectan los 4 Pilares:'}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {cycleSteps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-black font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-xs text-gray-300">{step}</p>
              </div>
            ))}
          </div>

          {/* Connection Visualization */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-white/10 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <ArrowRight className="w-3 h-3 text-gray-300" />
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></div>
              <ArrowRight className="w-3 h-3 text-gray-300" />
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse animation-delay-2000"></div>
              <ArrowRight className="w-3 h-3 text-gray-300" />
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse animation-delay-3000"></div>
            </div>
            <p className="text-gray-300 mt-3 font-medium text-sm">
              {language === 'pt-BR' ? 'Ciclo Integrado e Automatizado' : 
               language === 'en-US' ? 'Integrated and Automated Cycle' : 
               'Ciclo Integrado y Automatizado'}
            </p>
          </div>

          {/* Novo Campo de Vídeo do Ciclo Virtuoso */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">
              {language === 'pt-BR' ? 'Veja o Ciclo Completo em Ação' : 
               language === 'en-US' ? 'See the Complete Cycle in Action' : 
               'Ve el Ciclo Completo en Acción'}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {language === 'pt-BR' ? 'Assista como os 4 pilares trabalham juntos para criar um ciclo virtuoso de crescimento contínuo.' :
               language === 'en-US' ? 'Watch how the 4 pillars work together to create a virtuous cycle of continuous growth.' :
               'Mira cómo los 4 pilares trabajan juntos para crear un ciclo virtuoso de crecimiento continuo.'}
            </p>
            
            {/* Video Player do Ciclo */}
            <div className="max-w-2xl mx-auto">
              <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden relative">
                {/* Vimeo Iframe */}
                <iframe
                  ref={(el) => { videoRefs.current['cycle'] = el; }}
                  src="https://player.vimeo.com/video/1092831931?badge=0&autopause=0&controls=0&title=0&byline=0&portrait=0&background=1&muted=1"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="Ciclo Virtuoso Video"
                />
                
                {/* Play Button Overlay */}
                {playingVideo !== 'cycle' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button
                      onClick={() => handlePlay('cycle', '1092831931')}
                      className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      <Play className="w-10 h-10 text-white ml-1" />
                    </button>
                  </div>
                )}
                
                {/* Pause Button (bottom left when playing) */}
                {playingVideo === 'cycle' && (
                  <div className="absolute bottom-4 left-4">
                    <button
                      onClick={() => handlePause('cycle')}
                      className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-colors"
                    >
                      <Pause className="w-6 h-6 text-white" />
                    </button>
                  </div>
                )}
                
                {/* Reset Button (when paused after playing) */}
                {playingVideo !== 'cycle' && loadedVideos.has('cycle') && (
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => resetVideo('cycle', '1092831931')}
                      className="px-3 py-2 bg-black/50 rounded-full text-white text-xs backdrop-blur-sm hover:bg-black/70 transition-colors"
                    >
                      {language === 'pt-BR' ? 'Reiniciar' : 
                       language === 'en-US' ? 'Restart' : 
                       'Reiniciar'}
                    </button>
                  </div>
                )}
                
                {/* Video Info */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-white text-sm font-medium">
                      {language === 'pt-BR' ? 'Ciclo Virtuoso' : 
                       language === 'en-US' ? 'Virtuous Cycle' : 
                       'Ciclo Virtuoso'}
                    </div>
                    <div className="text-white/70 text-xs mt-1">
                      {language === 'pt-BR' ? 'Método Lezz Completo' : 
                       language === 'en-US' ? 'Complete Lezz Method' : 
                       'Método Lezz Completo'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {language === 'pt-BR' ? 'Quer multiplicar suas vendas com o Método LEZZ de 4 Pilares?' : 
             language === 'en-US' ? 'Want to multiply your sales with the LEZZ 4-Pillar Method?' : 
             '¿Quieres multiplicar tus ventas con el Método LEZZ de 4 Pilares?'}
          </h2>
          <button
            onClick={() => handleWhatsApp(language === 'pt-BR' ? 'Olá! Quero falar com a Lezz IA sobre o Método LEZZ' : 
                                          language === 'en-US' ? 'Hello! I want to talk to Lezz AI about the LEZZ Method' : 
                                          'Hola! Quiero hablar con Lezz IA sobre el Método LEZZ')}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-semibold text-base"
          >
            {language === 'pt-BR' ? 'Falar com a Lezz IA' : 
             language === 'en-US' ? 'Talk to Lezz AI' : 
             'Hablar con Lezz IA'}
          </button>
        </div>
      </section>
    </div>
  );
};

export default MethodPage;