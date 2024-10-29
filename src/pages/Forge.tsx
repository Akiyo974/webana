import React, { useState } from 'react';
import forgeData from '../data/forge.json';
import { Clock, ChevronRight, ChevronLeft } from 'lucide-react';

export function Forge() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % forgeData.steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + forgeData.steps.length) % forgeData.steps.length);
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[50vh] mb-16 overflow-hidden">
        <div className="absolute inset-0 transform scale-110">
          <img
            src={forgeData.introduction.headerImage}
            alt="Forge"
            className="w-full h-full object-cover transform scale-110 motion-safe:animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 backdrop-blur-sm"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {forgeData.introduction.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            La maîtrise ancestrale de la forge japonaise
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 mb-16">
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-center">
            {forgeData.introduction.description}
          </p>
        </div>

        {/* Forge Process Viewer */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-8">
          <div className="relative h-[60vh]">
            <img
              src={forgeData.steps[currentStep].image}
              alt={forgeData.steps[currentStep].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {forgeData.steps[currentStep].title}
                </h2>
                <p className="text-lg text-gray-200 mb-4">
                  {forgeData.steps[currentStep].description}
                </p>
                <div className="flex items-center text-red-400">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Durée : {forgeData.steps[currentStep].duration}</span>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevStep}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition transform hover:scale-110"
              aria-label="Étape précédente"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={nextStep}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition transform hover:scale-110"
              aria-label="Étape suivante"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex">
            {forgeData.steps.map((step, index) => (
              <div
                key={step.id}
                className={`h-2 flex-1 cursor-pointer transition-all duration-300 ${
                  index === currentStep ? 'bg-red-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => setCurrentStep(index)}
              />
            ))}
          </div>
        </div>

        {/* Step Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {forgeData.steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setCurrentStep(index)}
              className={`p-4 rounded-xl shadow-lg transition-all transform hover:scale-105 ${
                index === currentStep
                  ? 'bg-red-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-gray-700'
              }`}
            >
              <span className="text-sm font-medium">{step.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}