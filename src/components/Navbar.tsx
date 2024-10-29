import React, { useState } from 'react';
import { Sword, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { CartButton } from './cart/CartButton';
import { CartDrawer } from './cart/CartDrawer';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export function Navbar({ isDark, toggleTheme, onNavigate, currentPage }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-black/40 backdrop-blur-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center cursor-pointer" onClick={() => handleNavigate('home')}>
              <Sword className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">刀 Webana</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button 
                  onClick={() => handleNavigate('shop')}
                  className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition ${
                    currentPage === 'shop' ? 'text-red-500 dark:text-red-400' : ''
                  }`}
                >
                  Boutique
                </button>
                <button 
                  onClick={() => handleNavigate('history')}
                  className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition ${
                    currentPage === 'history' ? 'text-red-500 dark:text-red-400' : ''
                  }`}
                >
                  Histoire
                </button>
                <button 
                  onClick={() => handleNavigate('forge')}
                  className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition ${
                    currentPage === 'forge' ? 'text-red-500 dark:text-red-400' : ''
                  }`}
                >
                  Forge
                </button>
                <button 
                  onClick={() => handleNavigate('contact')}
                  className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition ${
                    currentPage === 'contact' ? 'text-red-500 dark:text-red-400' : ''
                  }`}
                >
                  Contact
                </button>
                <CartButton />
                <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              </div>
            </div>
            <div className="md:hidden flex items-center gap-4">
              <CartButton />
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-900 dark:text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="px-4 pt-2 pb-4 bg-white/95 dark:bg-black/95 space-y-2">
            <button
              onClick={() => handleNavigate('shop')}
              className={`block w-full text-left px-4 py-3 rounded-lg ${
                currentPage === 'shop'
                  ? 'bg-red-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Boutique
            </button>
            <button
              onClick={() => handleNavigate('history')}
              className={`block w-full text-left px-4 py-3 rounded-lg ${
                currentPage === 'history'
                  ? 'bg-red-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Histoire
            </button>
            <button
              onClick={() => handleNavigate('forge')}
              className={`block w-full text-left px-4 py-3 rounded-lg ${
                currentPage === 'forge'
                  ? 'bg-red-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Forge
            </button>
            <button
              onClick={() => handleNavigate('contact')}
              className={`block w-full text-left px-4 py-3 rounded-lg ${
                currentPage === 'contact'
                  ? 'bg-red-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
      <CartDrawer />
    </>
  );
}