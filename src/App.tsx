import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Shop } from './pages/Shop';
import { History } from './pages/History';
import { Forge } from './pages/Forge';
import { Contact } from './pages/Contact';
import { Checkout } from './pages/Checkout';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleNavigation = (event: CustomEvent<string>) => {
      setCurrentPage(event.detail);
    };

    window.addEventListener('navigate', handleNavigation as EventListener);
    return () => {
      window.removeEventListener('navigate', handleNavigation as EventListener);
    };
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  const renderPage = () => {
    switch (currentPage) {
      case 'shop':
        return <Shop />;
      case 'history':
        return <History />;
      case 'forge':
        return <Forge />;
      case 'contact':
        return <Contact />;
      case 'checkout':
        return <Checkout />;
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            <Features />
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-50 to-white'} transition-colors duration-300`}>
      <Navbar 
        isDark={isDark} 
        toggleTheme={toggleTheme}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;