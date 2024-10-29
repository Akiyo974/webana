import React from 'react';
import { Sword, Hammer, Users } from 'lucide-react';
import historyData from '../data/history.json';

const iconMap = {
  Sword: Sword,
  Hammer: Hammer,
  Users: Users,
};

export function History() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[50vh] mb-16 overflow-hidden">
        <div className="absolute inset-0 transform scale-110">
          <img
            src={historyData.introduction.headerImage}
            alt="Ancient Japanese Sword"
            className="w-full h-full object-cover transform scale-110 motion-safe:animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 backdrop-blur-sm"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {historyData.introduction.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Une tradition millénaire de l'art du sabre japonais
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {historyData.features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div key={feature.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 transform hover:scale-105 transition-transform">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-500/10 p-3 rounded-lg">
                    <IconComponent className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 sm:p-8 mb-16">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed break-words">
              {historyData.introduction.description}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></div>

          <div className="space-y-24">
            {historyData.timeline.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                <div className={`flex flex-col md:flex-row items-center justify-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Date Block */}
                  <div className={`w-32 flex flex-col items-center mb-4 md:mb-0 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <span className="text-red-500 font-bold">{event.date}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{event.period}</span>
                  </div>

                  {/* Content Block */}
                  <div className="w-full md:w-[calc(50%-5rem)]">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform">
                      <div className="relative h-48 md:h-64">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                            {event.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-200">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}