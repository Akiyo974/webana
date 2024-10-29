import React from 'react';

export function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/5 dark:bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm shadow-lg transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Artisanat Traditionnel</h3>
          <p className="text-gray-600 dark:text-gray-400">Chaque katana est forgé à la main selon les méthodes ancestrales japonaises.</p>
        </div>
        <div className="bg-white/5 dark:bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm shadow-lg transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Qualité Supérieure</h3>
          <p className="text-gray-600 dark:text-gray-400">Acier sélectionné et travaillé pour une qualité et une durabilité exceptionnelles.</p>
        </div>
        <div className="bg-white/5 dark:bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm shadow-lg transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Histoire & Authenticité</h3>
          <p className="text-gray-600 dark:text-gray-400">Chaque pièce raconte une histoire et perpétue la tradition des maîtres forgerons.</p>
        </div>
      </div>
    </div>
  );
}