import React from 'react';
import { ShoppingBag, ScrollText } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="/hero_Banniere.webp"
          alt="Katana Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto pt-32 pb-12 px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            L'Art du Katana<br />
            <span className="text-red-500">Une Tradition Millénaire</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Découvrez notre collection exclusive de katanas authentiques, forgés selon les traditions ancestrales japonaises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('shop')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Explorer la Collection
            </button>
            <button 
              onClick={() => onNavigate('history')}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition flex items-center justify-center"
            >
              <ScrollText className="mr-2 h-5 w-5" />
              Histoire des Katanas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}