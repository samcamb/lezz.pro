import { useState, useEffect } from 'react';
import { Language } from '../types/language';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en-US');

  useEffect(() => {
    // Auto-detect language based on browser locale
    const browserLang = navigator.language;
    if (browserLang.startsWith('pt')) {
      setLanguage('pt-BR');
    } else if (browserLang.startsWith('es')) {
      setLanguage('es');
    } else {
      setLanguage('en-US');
    }
  }, []);

  return { language, setLanguage };
};