import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface Category {
  id: string;
  name: string;
}

interface Period {
  id: string;
  name: string;
}

interface FilterBarProps {
  categories: Category[];
  periods: Period[];
  selectedCategory: string;
  selectedPeriod: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onPeriodChange: (period: string) => void;
  onSearchChange: (query: string) => void;
}

export function FilterBar({
  categories,
  periods,
  selectedCategory,
  selectedPeriod,
  searchQuery,
  onCategoryChange,
  onPeriodChange,
  onSearchChange,
}: FilterBarProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un katana..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Toutes les catégories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <SlidersHorizontal className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select
              value={selectedPeriod}
              onChange={(e) => onPeriodChange(e.target.value)}
              className="appearance-none pl-4 pr-10 py-2 rounded-lg border dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="">Toutes les périodes</option>
              {periods.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.name}
                </option>
              ))}
            </select>
            <SlidersHorizontal className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}