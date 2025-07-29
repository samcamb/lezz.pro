import React, { useState } from 'react';
import { Cookie, Settings, BarChart3, Target, Shield } from 'lucide-react';
import { Language } from '../types/language';

interface CookiesPageProps {
  language: Language;
}

const CookiesPage: React.FC<CookiesPageProps> = ({ language }) => {
  const [cookieSettings, setCookieSettings] = useState({
    essential: true, // Sempre habilitado
    analytics: true,
    marketing: true,
    preferences: true
  });

  const content = {
    title: {
      'pt-BR': 'Política de Cookies',
      'en-US': 'Cookie Policy',
      'es': 'Política de Cookies'
    },
    lastUpdated: {
      'pt-BR': 'Última atualização: Janeiro de 2025',
      'en-US': 'Last updated: January 2025',
      'es': 'Última actualización: Enero de 2025'
    },
    intro: {
      'pt-BR': 'Utilizamos cookies e tecnologias similares para melhorar sua experiência, personalizar conteúdo, analisar tráfego e otimizar nossos serviços de IA. Esta política explica como e por que usamos essas tecnologias.',
      'en-US': 'We use cookies and similar technologies to improve your experience, personalize content, analyze traffic, and optimize our AI services. This policy explains how and why we use these technologies.',
      'es': 'Utilizamos cookies y tecnologías similares para mejorar tu experiencia, personalizar contenido, analizar tráfico y optimizar nuestros servicios de IA. Esta política explica cómo y por qué usamos estas tecnologías.'
    },
    whatAreCookies: {
      title: {
        'pt-BR': 'O que são Cookies?',
        'en-US': 'What are Cookies?',
        'es': '¿Qué son las Cookies?'
      },
      content: {
        'pt-BR': 'Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita nosso site. Eles nos ajudam a lembrar suas preferências, entender como você usa nossos serviços e melhorar sua experiência.',
        'en-US': 'Cookies are small text files stored on your device when you visit our website. They help us remember your preferences, understand how you use our services, and improve your experience.',
        'es': 'Las cookies son pequeños archivos de texto almacenados en tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a recordar tus preferencias, entender cómo usas nuestros servicios y mejorar tu experiencia.'
      }
    },
    cookieTypes: {
      essential: {
        title: {
          'pt-BR': 'Cookies Essenciais',
          'en-US': 'Essential Cookies',
          'es': 'Cookies Esenciales'
        },
        description: {
          'pt-BR': 'Necessários para o funcionamento básico do site. Não podem ser desabilitados.',
          'en-US': 'Necessary for basic website functionality. Cannot be disabled.',
          'es': 'Necesarias para el funcionamiento básico del sitio. No se pueden deshabilitar.'
        },
        examples: {
          'pt-BR': 'Autenticação, segurança, preferências de idioma',
          'en-US': 'Authentication, security, language preferences',
          'es': 'Autenticación, seguridad, preferencias de idioma'
        },
        icon: Shield
      },
      analytics: {
        title: {
          'pt-BR': 'Cookies de Análise',
          'en-US': 'Analytics Cookies',
          'es': 'Cookies de Análisis'
        },
        description: {
          'pt-BR': 'Coletam informações sobre como você usa nosso site para melhorarmos nossos serviços.',
          'en-US': 'Collect information about how you use our website to improve our services.',
          'es': 'Recopilan información sobre cómo usas nuestro sitio web para mejorar nuestros servicios.'
        },
        examples: {
          'pt-BR': 'Google Analytics, métricas de performance, análise de comportamento',
          'en-US': 'Google Analytics, performance metrics, behavior analysis',
          'es': 'Google Analytics, métricas de rendimiento, análisis de comportamiento'
        },
        icon: BarChart3
      },
      marketing: {
        title: {
          'pt-BR': 'Cookies de Marketing',
          'en-US': 'Marketing Cookies',
          'es': 'Cookies de Marketing'
        },
        description: {
          'pt-BR': 'Usados para personalizar anúncios e medir a eficácia de campanhas publicitárias.',
          'en-US': 'Used to personalize ads and measure the effectiveness of advertising campaigns.',
          'es': 'Utilizadas para personalizar anuncios y medir la efectividad de campañas publicitarias.'
        },
        examples: {
          'pt-BR': 'Facebook Pixel, Google Ads, remarketing, conversões',
          'en-US': 'Facebook Pixel, Google Ads, remarketing, conversions',
          'es': 'Facebook Pixel, Google Ads, remarketing, conversiones'
        },
        icon: Target
      },
      preferences: {
        title: {
          'pt-BR': 'Cookies de Preferências',
          'en-US': 'Preference Cookies',
          'es': 'Cookies de Preferencias'
        },
        description: {
          'pt-BR': 'Lembram suas escolhas e personalizam sua experiência no site.',
          'en-US': 'Remember your choices and personalize your website experience.',
          'es': 'Recuerdan tus elecciones y personalizan tu experiencia en el sitio web.'
        },
        examples: {
          'pt-BR': 'Tema, layout, configurações personalizadas',
          'en-US': 'Theme, layout, custom settings',
          'es': 'Tema, diseño, configuraciones personalizadas'
        },
        icon: Settings
      }
    }
  };

  const handleCookieToggle = (type: string) => {
    if (type === 'essential') return; // Não pode ser desabilitado
    
    setCookieSettings(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const saveSettings = () => {
    // Aqui você salvaria as configurações de cookies
    alert(language === 'pt-BR' ? 'Configurações salvas!' : 
          language === 'en-US' ? 'Settings saved!' : 
          '¡Configuraciones guardadas!');
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <Cookie className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.title[language]}
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            {content.lastUpdated[language]}
          </p>
          <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {content.intro[language]}
          </p>
        </div>

        {/* What are Cookies */}
        <div className="bg-gray-50 rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {content.whatAreCookies.title[language]}
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            {content.whatAreCookies.content[language]}
          </p>
        </div>

        {/* Cookie Types & Settings */}
        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            {language === 'pt-BR' ? 'Tipos de Cookies e Configurações' : 
             language === 'en-US' ? 'Cookie Types and Settings' : 
             'Tipos de Cookies y Configuraciones'}
          </h2>

          {Object.entries(content.cookieTypes).map(([key, cookieType]) => {
            const Icon = cookieType.icon;
            const isEnabled = cookieSettings[key as keyof typeof cookieSettings];
            const isEssential = key === 'essential';

            return (
              <div key={key} className="bg-white border-2 border-gray-200 rounded-3xl p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {cookieType.title[language]}
                      </h3>
                      <p className="text-base text-gray-600 mb-3">
                        {cookieType.description[language]}
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>
                          {language === 'pt-BR' ? 'Exemplos: ' : 
                           language === 'en-US' ? 'Examples: ' : 
                           'Ejemplos: '}
                        </strong>
                        {cookieType.examples[language]}
                      </p>
                    </div>
                  </div>
                  
                  {/* Toggle Switch */}
                  <div className="flex items-center space-x-3 ml-4">
                    <span className="text-sm text-gray-600">
                      {isEnabled ? 
                        (language === 'pt-BR' ? 'Ativo' : language === 'en-US' ? 'Active' : 'Activo') :
                        (language === 'pt-BR' ? 'Inativo' : language === 'en-US' ? 'Inactive' : 'Inactivo')
                      }
                    </span>
                    <button
                      onClick={() => handleCookieToggle(key)}
                      disabled={isEssential}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        isEnabled ? 'bg-black' : 'bg-gray-300'
                      } ${isEssential ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          isEnabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Save Settings Button */}
        <div className="text-center mb-12">
          <button
            onClick={saveSettings}
            className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            {language === 'pt-BR' ? 'Salvar Configurações' : 
             language === 'en-US' ? 'Save Settings' : 
             'Guardar Configuraciones'}
          </button>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              {language === 'pt-BR' ? 'Como Gerenciar Cookies' : 
               language === 'en-US' ? 'How to Manage Cookies' : 
               'Cómo Gestionar Cookies'}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {language === 'pt-BR' ? 
                'Você pode controlar e/ou excluir cookies conforme desejar. Pode excluir todos os cookies que já estão no seu computador e configurar a maioria dos navegadores para impedir que sejam colocados.' :
               language === 'en-US' ? 
                'You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed.' :
                'Puedes controlar y/o eliminar cookies como desees. Puedes eliminar todas las cookies que ya están en tu computadora y configurar la mayoría de los navegadores para evitar que se coloquen.'}
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              {language === 'pt-BR' ? 'Cookies de Terceiros' : 
               language === 'en-US' ? 'Third-Party Cookies' : 
               'Cookies de Terceros'}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {language === 'pt-BR' ? 
                'Alguns cookies são colocados por serviços de terceiros que aparecem em nossas páginas. Isso inclui Google Analytics, Facebook Pixel e outras ferramentas de análise e marketing.' :
               language === 'en-US' ? 
                'Some cookies are placed by third-party services that appear on our pages. This includes Google Analytics, Facebook Pixel, and other analytics and marketing tools.' :
                'Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras páginas. Esto incluye Google Analytics, Facebook Pixel y otras herramientas de análisis y marketing.'}
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-black text-white rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">
            {language === 'pt-BR' ? 'Dúvidas sobre Cookies?' : 
             language === 'en-US' ? 'Questions about Cookies?' : 
             '¿Preguntas sobre Cookies?'}
          </h3>
          <p className="text-gray-300 mb-6">
            {language === 'pt-BR' ? 
              'Se você tiver alguma dúvida sobre nossa política de cookies, entre em contato conosco.' :
             language === 'en-US' ? 
              'If you have any questions about our cookie policy, please contact us.' :
              'Si tienes alguna pregunta sobre nuestra política de cookies, contáctanos.'}
          </p>
          <div className="space-y-2">
            <p className="text-sm">Email: lezz.pro.ia@gmail.com</p>
            <p className="text-sm">WhatsApp: +55 35 93618-0709</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;