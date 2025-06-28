import React, { useState } from 'react';
import { Bot, Database, TrendingUp, GraduationCap, Play } from 'lucide-react';
import { Language } from '../types/language';
import { translations } from '../data/translations';

interface MethodProps {
  language: Language;
}

const Method: React.FC<MethodProps> = ({ language }) => {
  const [activePillar, setActivePillar] = useState(0);
  const t = translations.method;

  const pillars = [
    {
      icon: Bot,
      title: t.pillars.pillar1.title[language],
      description: t.pillars.pillar1.description[language],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Database,
      title: t.pillars.pillar2.title[language],
      description: t.pillars.pillar2.description[language],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: t.pillars.pillar3.title[language],
      description: t.pillars.pillar3.description[language],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: GraduationCap,
      title: t.pillars.pillar4.title[language],
      description: t.pillars.pillar4.description[language],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="method" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.title[language]}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.description[language]}
          </p>
        </div>

        {/* Pillars Navigation */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <button
                key={index}
                onClick={() => setActivePillar(index)}
                className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  activePillar === index
                    ? 'bg-black text-white shadow-2xl'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-lg'
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    activePillar === index 
                      ? 'bg-white/20' 
                      : `bg-gradient-to-r ${pillar.color}`
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      activePillar === index ? 'text-white' : 'text-white'
                    }`} />
                  </div>
                  <h3 className="font-semibold text-lg leading-tight">
                    {pillar.title}
                  </h3>
                  <div className="text-sm opacity-75">
                    {language === 'pt-BR' ? 'Pilar' : language === 'en-US' ? 'Pillar' : 'Pilar'} {index + 1}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${pillars[activePillar].color} flex items-center justify-center`}>
                  {React.createElement(pillars[activePillar].icon, { 
                    className: "w-8 h-8 text-white" 
                  })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {pillars[activePillar].title}
                  </h3>
                  <p className="text-gray-500">
                    {language === 'pt-BR' ? 'Pilar' : language === 'en-US' ? 'Pillar' : 'Pilar'} {activePillar + 1}
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {pillars[activePillar].description}
              </p>

              <button className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 w-fit">
                <Play className="w-5 h-5" />
                <span className="font-medium">
                  {language === 'pt-BR' ? 'Ver em Ação' : 
                   language === 'en-US' ? 'See in Action' : 
                   'Ver en Acción'}
                </span>
              </button>
            </div>

            {/* Video/Visual */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8 lg:p-12">
              <div className="w-full max-w-md aspect-video bg-black rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-white text-sm font-medium">
                      {pillars[activePillar].title}
                    </div>
                    <div className="text-white/70 text-xs mt-1">
                      {language === 'pt-BR' ? 'Demonstração Interativa' : 
                       language === 'en-US' ? 'Interactive Demo' : 
                       'Demostración Interactiva'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connection Visualization */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse animation-delay-1000"></div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse animation-delay-2000"></div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse animation-delay-3000"></div>
          </div>
          <p className="text-gray-600 mt-4 font-medium">
            {language === 'pt-BR' ? 'Ciclo Integrado e Automatizado' : 
             language === 'en-US' ? 'Integrated and Automated Cycle' : 
             'Ciclo Integrado y Automatizado'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Method;