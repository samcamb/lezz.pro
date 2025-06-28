import React, { useState } from 'react';
import { useLanguage } from './hooks/useLanguage';
import Header from './components/Header';
import Hero from './components/Hero';
import Purpose from './components/Purpose';
import Results from './components/Results';
import WhoWeHelp from './components/WhoWeHelp';
import Integrations from './components/Integrations';
import Supporters from './components/Supporters';
import Footer from './components/Footer';
import StickyBanner from './components/StickyBanner';
import MethodPage from './pages/MethodPage';
import AboutPage from './pages/AboutPage';

function App() {
  const { language, setLanguage } = useLanguage();
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'method':
        return <MethodPage language={language} />;
      case 'about':
        return <AboutPage language={language} />;
      default:
        return (
          <>
            <Hero language={language} setCurrentPage={setCurrentPage} />
            <Purpose language={language} />
            <Results language={language} />
            <WhoWeHelp language={language} />
            <Integrations language={language} />
            <Supporters language={language} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white pb-16">
      <Header 
        language={language} 
        setLanguage={setLanguage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {renderPage()}
      <Footer language={language} />
      <StickyBanner language={language} />
    </div>
  );
}

export default App;