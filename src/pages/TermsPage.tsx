import React from 'react';
import { Language } from '../types/language';

interface TermsPageProps {
  language: Language;
}

const TermsPage: React.FC<TermsPageProps> = ({ language }) => {
  const content = {
    title: {
      'pt-BR': 'Termos de Uso',
      'en-US': 'Terms of Use',
      'es': 'Términos de Uso'
    },
    lastUpdated: {
      'pt-BR': 'Última atualização: Janeiro de 2025',
      'en-US': 'Last updated: January 2025',
      'es': 'Última actualización: Enero de 2025'
    },
    sections: {
      acceptance: {
        title: {
          'pt-BR': '1. Aceitação dos Termos',
          'en-US': '1. Acceptance of Terms',
          'es': '1. Aceptación de los Términos'
        },
        content: {
          'pt-BR': 'Ao acessar e usar os serviços da Lezz.pro, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.',
          'en-US': 'By accessing and using Lezz.pro services, you agree to comply with and be bound by these Terms of Use. If you do not agree to any part of these terms, you should not use our services.',
          'es': 'Al acceder y usar los servicios de Lezz.pro, aceptas cumplir y estar vinculado por estos Términos de Uso. Si no estás de acuerdo con cualquier parte de estos términos, no debes usar nuestros servicios.'
        }
      },
      services: {
        title: {
          'pt-BR': '2. Descrição dos Serviços',
          'en-US': '2. Service Description',
          'es': '2. Descripción de los Servicios'
        },
        content: {
          'pt-BR': 'A Lezz.pro oferece soluções de inteligência artificial para automação de processos comerciais, incluindo agentes de atendimento automatizado, CRM inteligente, otimização de campanhas e treinamento de equipes. Nossos serviços são projetados para potencializar negócios através da tecnologia.',
          'en-US': 'Lezz.pro offers artificial intelligence solutions for commercial process automation, including automated customer service agents, intelligent CRM, campaign optimization, and team training. Our services are designed to empower businesses through technology.',
          'es': 'Lezz.pro ofrece soluciones de inteligencia artificial para automatización de procesos comerciales, incluyendo agentes de atención automatizada, CRM inteligente, optimización de campañas y entrenamiento de equipos. Nuestros servicios están diseñados para potenciar negocios a través de la tecnología.'
        }
      },
      userResponsibilities: {
        title: {
          'pt-BR': '3. Responsabilidades do Usuário',
          'en-US': '3. User Responsibilities',
          'es': '3. Responsabilidades del Usuario'
        },
        content: {
          'pt-BR': 'Você se compromete a: (a) fornecer informações precisas e atualizadas; (b) usar nossos serviços de forma legal e ética; (c) não interferir no funcionamento dos sistemas; (d) manter a confidencialidade de suas credenciais de acesso; (e) respeitar os direitos de propriedade intelectual.',
          'en-US': 'You agree to: (a) provide accurate and up-to-date information; (b) use our services legally and ethically; (c) not interfere with system operations; (d) maintain the confidentiality of your access credentials; (e) respect intellectual property rights.',
          'es': 'Te comprometes a: (a) proporcionar información precisa y actualizada; (b) usar nuestros servicios de manera legal y ética; (c) no interferir con el funcionamiento de los sistemas; (d) mantener la confidencialidad de tus credenciales de acceso; (e) respetar los derechos de propiedad intelectual.'
        }
      },
      intellectualProperty: {
        title: {
          'pt-BR': '4. Propriedade Intelectual',
          'en-US': '4. Intellectual Property',
          'es': '4. Propiedad Intelectual'
        },
        content: {
          'pt-BR': 'Todos os direitos de propriedade intelectual relacionados aos serviços da Lezz.pro, incluindo software, algoritmos, design e conteúdo, são de propriedade exclusiva da Lezz.pro ou de seus licenciadores. É proibida a reprodução, distribuição ou modificação sem autorização expressa.',
          'en-US': 'All intellectual property rights related to Lezz.pro services, including software, algorithms, design, and content, are the exclusive property of Lezz.pro or its licensors. Reproduction, distribution, or modification without express authorization is prohibited.',
          'es': 'Todos los derechos de propiedad intelectual relacionados con los servicios de Lezz.pro, incluyendo software, algoritmos, diseño y contenido, son propiedad exclusiva de Lezz.pro o sus licenciantes. Está prohibida la reproducción, distribución o modificación sin autorización expresa.'
        }
      },
      dataProtection: {
        title: {
          'pt-BR': '5. Proteção de Dados',
          'en-US': '5. Data Protection',
          'es': '5. Protección de Datos'
        },
        content: {
          'pt-BR': 'Respeitamos sua privacidade e protegemos seus dados pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD) e outras legislações aplicáveis. Para mais informações, consulte nossa Política de Privacidade.',
          'en-US': 'We respect your privacy and protect your personal data in accordance with the General Data Protection Law (LGPD) and other applicable legislation. For more information, see our Privacy Policy.',
          'es': 'Respetamos tu privacidad y protegemos tus datos personales de acuerdo con la Ley General de Protección de Datos (LGPD) y otras legislaciones aplicables. Para más información, consulta nuestra Política de Privacidad.'
        }
      },
      limitations: {
        title: {
          'pt-BR': '6. Limitações de Responsabilidade',
          'en-US': '6. Liability Limitations',
          'es': '6. Limitaciones de Responsabilidad'
        },
        content: {
          'pt-BR': 'A Lezz.pro não se responsabiliza por danos indiretos, incidentais ou consequenciais decorrentes do uso de nossos serviços. Nossa responsabilidade total não excederá o valor pago pelos serviços nos últimos 12 meses.',
          'en-US': 'Lezz.pro is not responsible for indirect, incidental, or consequential damages arising from the use of our services. Our total liability will not exceed the amount paid for services in the last 12 months.',
          'es': 'Lezz.pro no se responsabiliza por daños indirectos, incidentales o consecuenciales derivados del uso de nuestros servicios. Nuestra responsabilidad total no excederá el monto pagado por los servicios en los últimos 12 meses.'
        }
      },
      termination: {
        title: {
          'pt-BR': '7. Rescisão',
          'en-US': '7. Termination',
          'es': '7. Terminación'
        },
        content: {
          'pt-BR': 'Qualquer uma das partes pode rescindir o acordo a qualquer momento mediante aviso prévio. Em caso de violação destes termos, a Lezz.pro pode suspender ou encerrar o acesso aos serviços imediatamente.',
          'en-US': 'Either party may terminate the agreement at any time with prior notice. In case of violation of these terms, Lezz.pro may suspend or terminate access to services immediately.',
          'es': 'Cualquiera de las partes puede rescindir el acuerdo en cualquier momento con aviso previo. En caso de violación de estos términos, Lezz.pro puede suspender o terminar el acceso a los servicios inmediatamente.'
        }
      },
      changes: {
        title: {
          'pt-BR': '8. Alterações nos Termos',
          'en-US': '8. Changes to Terms',
          'es': '8. Cambios en los Términos'
        },
        content: {
          'pt-BR': 'Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação. O uso continuado dos serviços constitui aceitação dos termos modificados.',
          'en-US': 'We reserve the right to modify these terms at any time. Changes will take effect immediately upon publication. Continued use of services constitutes acceptance of the modified terms.',
          'es': 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de la publicación. El uso continuado de los servicios constituye aceptación de los términos modificados.'
        }
      },
      contact: {
        title: {
          'pt-BR': '9. Contato',
          'en-US': '9. Contact',
          'es': '9. Contacto'
        },
        content: {
          'pt-BR': 'Para dúvidas sobre estes Termos de Uso, entre em contato conosco através do email lezz.pro.ia@gmail.com ou WhatsApp +55 35 93618-0709.',
          'en-US': 'For questions about these Terms of Use, contact us via email lezz.pro.ia@gmail.com or WhatsApp +55 35 93618-0709.',
          'es': 'Para preguntas sobre estos Términos de Uso, contáctanos a través del email lezz.pro.ia@gmail.com o WhatsApp +55 35 93618-0709.'
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content.title[language]}
          </h1>
          <p className="text-sm text-gray-500">
            {content.lastUpdated[language]}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 rounded-3xl p-8 mb-8">
            <p className="text-base text-gray-700 leading-relaxed">
              {language === 'pt-BR' ? 
                'Bem-vindo aos Termos de Uso da Lezz.pro. Este documento estabelece as condições para o uso de nossos serviços de inteligência artificial. Leia atentamente antes de utilizar nossa plataforma.' :
               language === 'en-US' ? 
                'Welcome to Lezz.pro Terms of Use. This document establishes the conditions for using our artificial intelligence services. Please read carefully before using our platform.' :
                'Bienvenido a los Términos de Uso de Lezz.pro. Este documento establece las condiciones para el uso de nuestros servicios de inteligencia artificial. Lee atentamente antes de usar nuestra plataforma.'}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {Object.entries(content.sections).map(([key, section]) => (
              <div key={key} className="border-l-4 border-black pl-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {section.title[language]}
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  {section.content[language]}
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 p-6 bg-black text-white rounded-2xl text-center">
            <p className="text-sm">
              {language === 'pt-BR' ? 
                'Ao usar os serviços da Lezz.pro, você confirma que leu, compreendeu e concorda com estes Termos de Uso.' :
               language === 'en-US' ? 
                'By using Lezz.pro services, you confirm that you have read, understood, and agree to these Terms of Use.' :
                'Al usar los servicios de Lezz.pro, confirmas que has leído, entendido y aceptas estos Términos de Uso.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;