import React from 'react';
import { ArrowRight, CheckCircle, MessageCircle, TrendingUp, Users, Target, BarChart3, BookOpen, Zap } from 'lucide-react';
import { Language } from '../types/language';
import { contactInfo } from '../data/translations';

interface PlansPageProps {
  language: Language;
}

const PlansPage: React.FC<PlansPageProps> = ({ language }) => {
  const handleWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodedMessage}`, '_blank');
  };

  const content = {
    title: {
      'pt-BR': 'Sua Jornada de Maturidade Comercial',
      'en-US': 'Your Commercial Maturity Journey',
      'es': 'Tu Jornada de Madurez Comercial'
    },
    subtitle: {
      'pt-BR': 'Nossos planos evoluem com o seu negócio. Comece resolvendo seus desafios mais urgentes e cresça conosco, passo a passo.',
      'en-US': 'Our plans evolve with your business. Start by solving your most urgent challenges and grow with us, step by step.',
      'es': 'Nuestros planes evolucionan con tu negocio. Comienza resolviendo tus desafíos más urgentes y crece con nosotros, paso a paso.'
    },
    phases: {
      phase1: {
        title: {
          'pt-BR': 'LEZZ ATENDIMENTO E OTIMIZAÇÃO',
          'en-US': 'LEZZ SERVICE & OPTIMIZATION',
          'es': 'LEZZ ATENCIÓN Y OPTIMIZACIÓN'
        },
        subtitle: {
          'pt-BR': 'Garanta o Atendimento e Potencialize seus Anúncios',
          'en-US': 'Guarantee Service and Boost Your Ads',
          'es': 'Garantiza la Atención y Potencia tus Anuncios'
        },
        description: {
          'pt-BR': 'Ideal para empresas que querem aproveitar 100% do seu investimento em marketing. Nesta fase, implementamos o Agente IA para atender e qualificar todos os leads 24 horas por dia, enquanto o Pixel Booster já começa a otimizar seus anúncios, buscando um público mais qualificado e barato.',
          'en-US': 'Ideal for companies that want to leverage 100% of their marketing investment. In this phase, we implement the AI Agent to serve and qualify all leads 24 hours a day, while the Pixel Booster already starts optimizing your ads, seeking a more qualified and cheaper audience.',
          'es': 'Ideal para empresas que quieren aprovechar el 100% de su inversión en marketing. En esta fase, implementamos el Agente IA para atender y calificar todos los leads 24 horas al día, mientras el Pixel Booster ya comienza a optimizar tus anuncios, buscando una audiencia más calificada y barata.'
        },
        focus: {
          'pt-BR': 'Atendimento Imediato, Qualificação e Inteligência de Anúncios',
          'en-US': 'Immediate Service, Qualification and Ad Intelligence',
          'es': 'Atención Inmediata, Calificación e Inteligencia de Anuncios'
        },
        features: {
          'pt-BR': [
            'Agente IA SDR 24/7',
            'Qualificação automática de leads',
            'Pixel Booster para otimização',
            'Rastreamento inteligente',
            'Suporte técnico completo'
          ],
          'en-US': [
            '24/7 AI SDR Agent',
            'Automatic lead qualification',
            'Pixel Booster for optimization',
            'Intelligent tracking',
            'Complete technical support'
          ],
          'es': [
            'Agente IA SDR 24/7',
            'Calificación automática de leads',
            'Pixel Booster para optimización',
            'Seguimiento inteligente',
            'Soporte técnico completo'
          ]
        },
        icon: MessageCircle,
        color: 'from-blue-500 to-blue-600'
      },
      phase2: {
        title: {
          'pt-BR': 'LEZZ ORGANIZAÇÃO',
          'en-US': 'LEZZ ORGANIZATION',
          'es': 'LEZZ ORGANIZACIÓN'
        },
        subtitle: {
          'pt-BR': 'Organize o Time e Controle suas Oportunidades',
          'en-US': 'Organize Your Team and Control Your Opportunities',
          'es': 'Organiza tu Equipo y Controla tus Oportunidades'
        },
        description: {
          'pt-BR': 'Com leads qualificados chegando e seus anúncios sendo otimizados, o próximo passo é organizar o processo de vendas. Adicionamos o CRM Inteligente, uma central de comando para seu time comercial gerenciar cada oportunidade com follow-ups personalizados, histórico completo e automações que eliminam o trabalho manual.',
          'en-US': 'With qualified leads arriving and your ads being optimized, the next step is to organize the sales process. We add the Intelligent CRM, a command center for your sales team to manage each opportunity with personalized follow-ups, complete history, and automations that eliminate manual work.',
          'es': 'Con leads calificados llegando y tus anuncios siendo optimizados, el siguiente paso es organizar el proceso de ventas. Agregamos el CRM Inteligente, un centro de comando para que tu equipo comercial gestione cada oportunidad con seguimientos personalizados, historial completo y automatizaciones que eliminan el trabajo manual.'
        },
        focus: {
          'pt-BR': 'Gestão do Funil de Vendas, Produtividade da Equipe e Controle Total',
          'en-US': 'Sales Funnel Management, Team Productivity and Total Control',
          'es': 'Gestión del Embudo de Ventas, Productividad del Equipo y Control Total'
        },
        features: {
          'pt-BR': [
            'CRM Inteligente completo',
            'Pipeline automatizado',
            'Follow-ups personalizados',
            'Histórico completo de interações',
            'Distribuição inteligente de leads',
            'Relatórios de performance'
          ],
          'en-US': [
            'Complete Intelligent CRM',
            'Automated pipeline',
            'Personalized follow-ups',
            'Complete interaction history',
            'Intelligent lead distribution',
            'Performance reports'
          ],
          'es': [
            'CRM Inteligente completo',
            'Pipeline automatizado',
            'Seguimientos personalizados',
            'Historial completo de interacciones',
            'Distribución inteligente de leads',
            'Reportes de rendimiento'
          ]
        },
        icon: BarChart3,
        color: 'from-purple-500 to-purple-600'
      },
      phase3: {
        title: {
          'pt-BR': 'LEZZ PERFORMANCE',
          'en-US': 'LEZZ PERFORMANCE',
          'es': 'LEZZ PERFORMANCE'
        },
        subtitle: {
          'pt-BR': 'Acelere com Estratégia e Capacitação',
          'en-US': 'Accelerate with Strategy and Training',
          'es': 'Acelera con Estrategia y Capacitación'
        },
        description: {
          'pt-BR': 'Com a operação estruturada, é hora de acelerar com estratégia. Aqui, você tem o Método Lezz completo, incluindo a Lezz Academy para capacitação contínua e nosso Acompanhamento Estratégico Quinzenal, onde nos tornamos seus parceiros para analisar dados e otimizar cada etapa do seu funil, do clique no anúncio ao fechamento da venda.',
          'en-US': 'With the operation structured, it\'s time to accelerate with strategy. Here, you have the complete Lezz Method, including Lezz Academy for continuous training and our Biweekly Strategic Monitoring, where we become your partners to analyze data and optimize every stage of your funnel, from ad click to sale closure.',
          'es': 'Con la operación estructurada, es hora de acelerar con estrategia. Aquí, tienes el Método Lezz completo, incluyendo Lezz Academy para capacitación continua y nuestro Acompañamiento Estratégico Quincenal, donde nos convertimos en tus socios para analizar datos y optimizar cada etapa de tu embudo, desde el clic en el anuncio hasta el cierre de la venta.'
        },
        focus: {
          'pt-BR': 'Análise Estratégica, Capacitação do Time e Escala de Resultados',
          'en-US': 'Strategic Analysis, Team Training and Results Scaling',
          'es': 'Análisis Estratégico, Capacitación del Equipo y Escala de Resultados'
        },
        features: {
          'pt-BR': [
            'Método Lezz completo',
            'Lezz Academy gamificada',
            'Acompanhamento estratégico quinzenal',
            'Análise avançada de dados',
            'Otimização contínua do funil',
            'Consultoria estratégica personalizada',
            'Treinamento especializado da equipe'
          ],
          'en-US': [
            'Complete Lezz Method',
            'Gamified Lezz Academy',
            'Biweekly strategic monitoring',
            'Advanced data analysis',
            'Continuous funnel optimization',
            'Personalized strategic consulting',
            'Specialized team training'
          ],
          'es': [
            'Método Lezz completo',
            'Lezz Academy gamificada',
            'Acompañamiento estratégico quincenal',
            'Análisis avanzado de datos',
            'Optimización continua del embudo',
            'Consultoría estratégica personalizada',
            'Entrenamiento especializado del equipo'
          ]
        },
        icon: Target,
        color: 'from-green-500 to-green-600'
      }
    },
    cta: {
      title: {
        'pt-BR': 'Vamos conversar e descobrir em qual fase sua empresa está?',
        'en-US': 'Let\'s talk and find out what phase your company is in?',
        'es': '¿Hablemos y descubramos en qué fase está tu empresa?'
      },
      button: {
        'pt-BR': 'Descobrir Minha Fase Ideal',
        'en-US': 'Discover My Ideal Phase',
        'es': 'Descubrir Mi Fase Ideal'
      }
    }
  };

  const phases = [content.phases.phase1, content.phases.phase2, content.phases.phase3];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            {content.title[language]}
          </h1>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            {content.subtitle[language]}
          </p>
          
          {/* Journey Visualization */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-300">
                {language === 'pt-BR' ? 'Fase 1' : language === 'en-US' ? 'Phase 1' : 'Fase 1'}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-300">
                {language === 'pt-BR' ? 'Fase 2' : language === 'en-US' ? 'Phase 2' : 'Fase 2'}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-300">
                {language === 'pt-BR' ? 'Fase 3' : language === 'en-US' ? 'Phase 3' : 'Fase 3'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isEven = index % 2 === 0;
              const phaseNumber = index + 1;
              
              return (
                <div key={index} className="relative">
                  {/* Phase Number Badge */}
                  <div className="flex justify-center mb-8">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                      {phaseNumber}
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Content */}
                      <div className={`p-8 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:col-start-2' : ''}`}>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                            {language === 'pt-BR' ? 'FASE' : language === 'en-US' ? 'PHASE' : 'FASE'} {phaseNumber}
                          </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                          {phase.title[language]}
                        </h2>
                        
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">
                          "{phase.subtitle[language]}"
                        </h3>
                        
                        <p className="text-base text-gray-600 leading-relaxed mb-6">
                          {phase.description[language]}
                        </p>

                        <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                          <h4 className="text-sm font-bold text-gray-900 mb-3">
                            {language === 'pt-BR' ? 'FOCO:' : language === 'en-US' ? 'FOCUS:' : 'ENFOQUE:'}
                          </h4>
                          <p className="text-sm text-gray-700 font-medium">
                            {phase.focus[language]}
                          </p>
                        </div>

                        <div className="space-y-3">
                          {phase.features[language].map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Visual */}
                      <div className={`bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8 lg:p-12 ${!isEven ? 'lg:col-start-1' : ''}`}>
                        <div className="text-center">
                          <div className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center shadow-2xl`}>
                            <Icon className="w-16 h-16 text-white" />
                          </div>
                          <div className="space-y-2">
                            <div className={`h-2 bg-gradient-to-r ${phase.color} rounded-full mx-auto`} style={{width: `${(phaseNumber) * 30}%`}}></div>
                            <p className="text-sm text-gray-600 font-medium">
                              {language === 'pt-BR' ? 'Nível de Maturidade' : 
                               language === 'en-US' ? 'Maturity Level' : 
                               'Nivel de Madurez'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow to next phase */}
                  {index < phases.length - 1 && (
                    <div className="flex justify-center mt-8">
                      <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              {content.cta.title[language]}
            </h2>
            
            <p className="text-base text-gray-300 mb-8 leading-relaxed">
              {language === 'pt-BR' ? 
                'Cada empresa tem seu momento e suas necessidades específicas. Vamos conversar para identificar exatamente onde você está e qual fase do Método Lezz vai gerar mais impacto no seu negócio agora.' :
               language === 'en-US' ? 
                'Every company has its moment and specific needs. Let\'s talk to identify exactly where you are and which phase of the Lezz Method will generate the most impact on your business now.' :
                'Cada empresa tiene su momento y sus necesidades específicas. Hablemos para identificar exactamente dónde estás y qué fase del Método Lezz generará más impacto en tu negocio ahora.'}
            </p>

            <button
              onClick={() => handleWhatsApp(language === 'pt-BR' ? 
                'Olá! Quero descobrir em qual fase do Método Lezz minha empresa está e como posso começar' :
                language === 'en-US' ? 
                'Hello! I want to discover which phase of the Lezz Method my company is in and how I can start' :
                'Hola! Quiero descubrir en qué fase del Método Lezz está mi empresa y cómo puedo comenzar')}
              className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-base inline-flex items-center space-x-3"
            >
              <span>{content.cta.button[language]}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Contact Info */}
            <div className="mt-8 text-sm text-gray-400">
              <p>WhatsApp: {contactInfo.whatsapp}</p>
              <p>Email: contato@lezz.pro</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlansPage;