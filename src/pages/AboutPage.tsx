import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { Language } from '../types/language';
import { translations, contactInfo, logoConfig } from '../data/translations';

interface AboutPageProps {
  language: Language;
}

const AboutPage: React.FC<AboutPageProps> = ({ language }) => {
  const t = translations.about;

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* About Us Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.aboutUs.title[language]}</h1>
            <p className="text-base text-gray-600 leading-relaxed">
              {t.aboutUs.content[language]}
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">{t.purpose.title[language]}</h2>
            <p className="text-base text-gray-600 leading-relaxed text-center">
              {t.purpose.content[language]}
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{t.values.title[language]}</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              {t.values.intro[language]}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {t.values.list[language].map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">{t.history.title[language]}</h2>
            <p className="text-base text-gray-600 leading-relaxed text-center">
              {t.history.content[language]}
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">{t.team.title[language]}</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Priscilla */}
            <div className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={logoConfig.founders.priscilla}
                  alt="Priscilla Rubbo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {translations.founders.priscilla.name}
                </h3>
                <p className="text-base font-medium text-gray-600 mb-4">
                  {translations.founders.priscilla.title[language]}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                  {t.team.priscilla.bio[language]}
                </p>
                
                <div className="flex space-x-4">
                  <a 
                    href={contactInfo.social.priscilla.linkedin}
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href={contactInfo.social.priscilla.instagram}
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Samuel */}
            <div className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={logoConfig.founders.samuel}
                  alt="Samuel de Almeida"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {translations.founders.samuel.name}
                </h3>
                <p className="text-base font-medium text-gray-600 mb-4">
                  {translations.founders.samuel.title[language]}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                  {t.team.samuel.bio[language]}
                </p>
                
                <div className="flex space-x-4">
                  <a 
                    href={contactInfo.social.samuel.linkedin}
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href={contactInfo.social.samuel.instagram}
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;