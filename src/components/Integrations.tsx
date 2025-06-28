import React, { useRef, useEffect } from 'react';
import { Language } from '../types/language';
import { translations, integrationLogos } from '../data/translations';

interface IntegrationsProps {
  language: Language;
}

const Integrations: React.FC<IntegrationsProps> = ({ language }) => {
  const t = translations.integrations;
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicar os itens para criar o efeito de loop infinito
  const duplicatedIntegrations = [...integrationLogos, ...integrationLogos];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset quando chegar ao final da primeira sequência
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pausar animação quando hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {t.title[language]}
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.description[language]}
          </p>
        </div>

        {/* Scrolling Integration Logos */}
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-8 overflow-x-hidden"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedIntegrations.map((integration, index) => (
              <div 
                key={index}
                className="flex flex-col items-center space-y-2 group hover:scale-110 transition-transform duration-300 flex-shrink-0"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-xl group-hover:shadow-xl transition-shadow duration-300">
                  {/* Tenta carregar a imagem, se falhar usa o fallback */}
                  <img 
                    src={integration.logo} 
                    alt={integration.name}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      // Se a imagem falhar, mostra o emoji fallback
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = integration.fallback;
                        parent.className += ' text-xl';
                      }
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-gray-600 group-hover:text-black transition-colors whitespace-nowrap">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;