import React, { useState, useEffect } from 'react';
import { Home, Building } from 'lucide-react';
import translations from '../src/js/translations';

const LandingPage = () => {
  const [currentLang, setCurrentLang] = useState('de');
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const t = translations[currentLang];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <nav className="max-w-5xl mx-auto px-4 h-16 flex justify-between items-center">
          <div className="flex items-center space-x-2 group">
            <Home className="h-6 w-6 text-blue-600 transform group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xl font-semibold text-blue-600">FAIRFINANCE24</span>
          </div>

          <div className="flex items-center space-x-8">
            <button onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'text-blue-600' : 'text-gray-600'}>{t.nav.home}</button>
            <button onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'text-blue-600' : 'text-gray-600'}>{t.nav.about}</button>

            <div className="flex items-center space-x-2 border-l pl-6">
              {['de', 'en', 'es'].map((lang) => (
                <button key={lang} onClick={() => setCurrentLang(lang)} className={currentLang === lang ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-blue-50'}>
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className={`pt-24 flex-grow transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {activeSection === 'home' ? <h1>{t.home.welcome} FAIRFINANCE24</h1> : <h2>{t.about.title}</h2>}
      </main>
    </div>
  );
};

export default LandingPage;
