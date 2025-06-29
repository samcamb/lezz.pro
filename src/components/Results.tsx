import React from 'react';
import { TrendingUp, Clock, DollarSign, Target } from 'lucide-react';
import { Language } from '../types/language';
import { translations } from '../data/translations';

interface ResultsProps {
  language: Language;
}

const Results: React.FC<ResultsProps> = ({ language }) => {
  const t = translations.results;

  const metrics = [
    {
      icon: TrendingUp,
      value: '+300%',
      label: t.metrics.conversion[language],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      value: '-80%',
      label: t.metrics.timeReduction[language],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: DollarSign,
      value: '+150%',
      label: t.metrics.roi[language],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Target,
      value: 'ZERO',
      label: t.metrics.zeroLeads[language],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const caseStudies = [
    {
      title: t.caseStudies.consulting[language],
      category: language === 'pt-BR' ? 'Consultoria' : language === 'en-US' ? 'Consulting' : 'Consultoría',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: t.caseStudies.ecommerce[language],
      category: 'E-commerce',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: t.caseStudies.infoproducer[language],
      category: language === 'pt-BR' ? 'Infoprodutos' : language === 'en-US' ? 'Digital Products' : 'Infoproductos',
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  return (
    <section id="results" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t.title[language]}
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Case Studies */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 text-black">
          <h3 className="text-2xl font-bold text-center mb-10">
            {language === 'pt-BR' ? 'Casos de Sucesso' : 
             language === 'en-US' ? 'Success Stories' : 
             'Casos de Éxito'}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className={`p-5 rounded-2xl border-2 ${study.color} transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1`}>
                <div className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wide">
                  {study.category}
                </div>
                <blockquote className="text-base font-medium text-gray-900 leading-relaxed">
                  "{study.title}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            {language === 'pt-BR' ? 'Pronto para transformar seus resultados?' : 
             language === 'en-US' ? 'Ready to transform your results?' : 
             '¿Listo para transformar tus resultados?'}
          </p>
          <button 
            onClick={() => {
              const messages = {
                'pt-BR': 'Olá! Quero saber mais sobre os resultados que posso alcançar com a Lezz.pro',
                'en-US': 'Hello! I want to know more about the results I can achieve with Lezz.pro',
                'es': 'Hola! Quiero saber más sobre los resultados que puedo lograr con Lezz.pro'
              };
              
              const message = encodeURIComponent(messages[language]);
              window.open(`https://wa.me/5535936180709?text=${message}`, '_blank');
            }}
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-base"
          >
            {language === 'pt-BR' ? 'Quero Esses Resultados' : 
             language === 'en-US' ? 'I Want These Results' : 
             'Quiero Estos Resultados'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Results;
