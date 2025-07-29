import React from 'react';
import { Shield, Eye, Lock, Users, Database, Settings } from 'lucide-react';
import { Language } from '../types/language';

interface PrivacyPageProps {
  language: Language;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ language }) => {
  const content = {
    title: {
      'pt-BR': 'Política de Privacidade',
      'en-US': 'Privacy Policy',
      'es': 'Política de Privacidad'
    },
    lastUpdated: {
      'pt-BR': 'Última atualização: Janeiro de 2025',
      'en-US': 'Last updated: January 2025',
      'es': 'Última actualización: Enero de 2025'
    },
    intro: {
      'pt-BR': 'Na Lezz.pro, sua privacidade é nossa prioridade. Esta política explica como coletamos, usamos, protegemos e compartilhamos suas informações pessoais em conformidade com a LGPD e outras legislações aplicáveis.',
      'en-US': 'At Lezz.pro, your privacy is our priority. This policy explains how we collect, use, protect, and share your personal information in compliance with LGPD and other applicable legislation.',
      'es': 'En Lezz.pro, tu privacidad es nuestra prioridad. Esta política explica cómo recopilamos, usamos, protegemos y compartimos tu información personal en cumplimiento con la LGPD y otras legislaciones aplicables.'
    },
    sections: {
      dataCollection: {
        title: {
          'pt-BR': 'Informações que Coletamos',
          'en-US': 'Information We Collect',
          'es': 'Información que Recopilamos'
        },
        icon: Database,
        items: {
          'pt-BR': [
            'Dados de identificação: nome, email, telefone, empresa',
            'Dados de navegação: cookies, logs de acesso, preferências',
            'Dados comerciais: histórico de interações, leads, vendas',
            'Dados técnicos: endereço IP, dispositivo, navegador'
          ],
          'en-US': [
            'Identification data: name, email, phone, company',
            'Navigation data: cookies, access logs, preferences',
            'Commercial data: interaction history, leads, sales',
            'Technical data: IP address, device, browser'
          ],
          'es': [
            'Datos de identificación: nombre, email, teléfono, empresa',
            'Datos de navegación: cookies, logs de acceso, preferencias',
            'Datos comerciales: historial de interacciones, leads, ventas',
            'Datos técnicos: dirección IP, dispositivo, navegador'
          ]
        }
      },
      dataUsage: {
        title: {
          'pt-BR': 'Como Usamos suas Informações',
          'en-US': 'How We Use Your Information',
          'es': 'Cómo Usamos tu Información'
        },
        icon: Settings,
        items: {
          'pt-BR': [
            'Fornecer e melhorar nossos serviços de IA',
            'Personalizar sua experiência na plataforma',
            'Comunicar sobre atualizações e novidades',
            'Analisar performance e otimizar campanhas',
            'Cumprir obrigações legais e contratuais'
          ],
          'en-US': [
            'Provide and improve our AI services',
            'Personalize your platform experience',
            'Communicate about updates and news',
            'Analyze performance and optimize campaigns',
            'Comply with legal and contractual obligations'
          ],
          'es': [
            'Proporcionar y mejorar nuestros servicios de IA',
            'Personalizar tu experiencia en la plataforma',
            'Comunicar sobre actualizaciones y novedades',
            'Analizar rendimiento y optimizar campañas',
            'Cumplir obligaciones legales y contractuales'
          ]
        }
      },
      dataProtection: {
        title: {
          'pt-BR': 'Proteção de Dados',
          'en-US': 'Data Protection',
          'es': 'Protección de Datos'
        },
        icon: Shield,
        items: {
          'pt-BR': [
            'Criptografia de dados em trânsito e em repouso',
            'Controles de acesso rigorosos e autenticação',
            'Monitoramento contínuo de segurança',
            'Backups seguros e planos de recuperação',
            'Treinamento regular da equipe em segurança'
          ],
          'en-US': [
            'Data encryption in transit and at rest',
            'Strict access controls and authentication',
            'Continuous security monitoring',
            'Secure backups and recovery plans',
            'Regular team security training'
          ],
          'es': [
            'Encriptación de datos en tránsito y en reposo',
            'Controles de acceso estrictos y autenticación',
            'Monitoreo continuo de seguridad',
            'Copias de seguridad y planes de recuperación',
            'Entrenamiento regular del equipo en seguridad'
          ]
        }
      },
      userRights: {
        title: {
          'pt-BR': 'Seus Direitos',
          'en-US': 'Your Rights',
          'es': 'Tus Derechos'
        },
        icon: Users,
        items: {
          'pt-BR': [
            'Acesso: consultar dados pessoais que possuímos',
            'Retificação: corrigir informações incorretas',
            'Exclusão: solicitar remoção de dados pessoais',
            'Portabilidade: receber dados em formato estruturado',
            'Oposição: contestar o processamento de dados'
          ],
          'en-US': [
            'Access: consult personal data we possess',
            'Rectification: correct incorrect information',
            'Deletion: request removal of personal data',
            'Portability: receive data in structured format',
            'Opposition: contest data processing'
          ],
          'es': [
            'Acceso: consultar datos personales que poseemos',
            'Rectificación: corregir información incorrecta',
            'Eliminación: solicitar eliminación de datos personales',
            'Portabilidad: recibir datos en formato estructurado',
            'Oposición: contestar el procesamiento de datos'
          ]
        }
      },
      dataSharing: {
        title: {
          'pt-BR': 'Compartilhamento de Dados',
          'en-US': 'Data Sharing',
          'es': 'Compartir Datos'
        },
        icon: Eye,
        content: {
          'pt-BR': 'Não vendemos seus dados pessoais. Compartilhamos informações apenas quando necessário para: (a) fornecer nossos serviços; (b) cumprir obrigações legais; (c) proteger nossos direitos; (d) com seu consentimento explícito.',
          'en-US': 'We do not sell your personal data. We share information only when necessary to: (a) provide our services; (b) comply with legal obligations; (c) protect our rights; (d) with your explicit consent.',
          'es': 'No vendemos tus datos personales. Compartimos información solo cuando es necesario para: (a) proporcionar nuestros servicios; (b) cumplir obligaciones legales; (c) proteger nuestros derechos; (d) con tu consentimiento explícito.'
        }
      },
      dataRetention: {
        title: {
          'pt-BR': 'Retenção de Dados',
          'en-US': 'Data Retention',
          'es': 'Retención de Datos'
        },
        icon: Lock,
        content: {
          'pt-BR': 'Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política ou conforme exigido por lei. Dados de marketing são mantidos até você solicitar a exclusão.',
          'en-US': 'We keep your personal data only for the time necessary to fulfill the purposes described in this policy or as required by law. Marketing data is kept until you request deletion.',
          'es': 'Mantenemos tus datos personales solo por el tiempo necesario para cumplir los propósitos descritos en esta política o según lo requiera la ley. Los datos de marketing se mantienen hasta que solicites la eliminación.'
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
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

        {/* Content */}
        <div className="space-y-12">
          {Object.entries(content.sections).map(([key, section]) => {
            const Icon = section.icon;
            return (
              <div key={key} className="bg-gray-50 rounded-3xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.title[language]}
                  </h2>
                </div>
                
                {section.items ? (
                  <ul className="space-y-3">
                    {section.items[language].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-base text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-base text-gray-700 leading-relaxed">
                    {section.content[language]}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-black text-white rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">
            {language === 'pt-BR' ? 'Dúvidas sobre Privacidade?' : 
             language === 'en-US' ? 'Privacy Questions?' : 
             '¿Preguntas sobre Privacidad?'}
          </h3>
          <p className="text-gray-300 mb-6">
            {language === 'pt-BR' ? 
              'Entre em contato com nosso Encarregado de Proteção de Dados (DPO) para esclarecer qualquer dúvida sobre o tratamento de seus dados pessoais.' :
             language === 'en-US' ? 
              'Contact our Data Protection Officer (DPO) to clarify any questions about the processing of your personal data.' :
              'Contacta a nuestro Oficial de Protección de Datos (DPO) para aclarar cualquier duda sobre el tratamiento de tus datos personales.'}
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

export default PrivacyPage;