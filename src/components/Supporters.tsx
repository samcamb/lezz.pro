import React, { useRef, useEffect } from 'react';
import { Language } from '../types/language';
import { translations, supporterLogos } from '../data/translations';

interface SupportersProps {
  language: Language;
}

const Supporters: React.FC<SupportersProps> = ({ language }) => {
  const t = translations.supporters;
  const scrollRef = useRef<HTMLDivElement>(null);

  // Não duplicar tanto - apenas 2 apoiadores
  const duplicatedSupporters = [...supporterLogos, ...supporterLogos];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.2; // Mais lento já que são poucos itens

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
                  <div className="w-32 h-16 flex items-center justify-center">
                    {/* Tenta carregar a imagem, se falhar usa o fallback */}
                    <img 
                      src={supporter.logo} 
                      alt={supporter.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        // Se a imagem falhar, mostra o texto fallback
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-black font-bold text-sm">${supporter.fallback}</span>`;
                        }
                      }}
                    />
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