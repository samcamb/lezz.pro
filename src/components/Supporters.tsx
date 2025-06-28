import React, { useRef, useEffect } from 'react';
import { Language } from '../types/language';
import { translations } from '../data/translations';

interface SupportersProps {
  language: Language;
}

const Supporters: React.FC<SupportersProps> = ({ language }) => {
  const t = translations.supporters;
  const scrollRef = useRef<HTMLDivElement>(null);

  const supporters = [
    { name: 'SEBRAE', logo: 'SEBRAE' },
    // Adicione mais apoiadores aqui conforme necessário
  ];

  // Duplicar os itens para criar o efeito de loop infinito
  const duplicatedSupporters = [...supporters, ...supporters, ...supporters];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.3;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset quando chegar ao final da primeira sequência
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
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
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            {t.title[language]}
          </h3>
          
          {/* Scrolling Supporters */}
          <div className="relative overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex space-x-12 overflow-x-hidden justify-center"
              style={{ scrollBehavior: 'auto' }}
            >
              {duplicatedSupporters.map((supporter, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 flex-shrink-0">
                  <div className="w-24 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{supporter.logo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supporters;