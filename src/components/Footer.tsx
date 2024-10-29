import React from 'react';
import { Sword, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const handleNavigate = (page: string) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: page }));
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => handleNavigate('home')}>
              <Sword className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">刀 Webana</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Excellence et tradition dans l'art du katana depuis 1970.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigate('shop')}
                  className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                >
                  Boutique
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate('history')}
                  className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                >
                  Histoire
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate('forge')}
                  className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                >
                  Forge
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigate('contact')}
                  className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                contact@webana.com
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +33 1 23 45 67 89
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                75001 Paris, France
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>Tous droits réservés © 2024 - Créé par{' '}
            <a 
              href="https://akiyo974.github.io/portfolio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-red-500 transition-colors underline"
            >
              Christen Dijoux
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}