import React, { useState, useEffect } from 'react';
import productsData from '../data/products.json';
import { ProductCard } from '../components/shop/ProductCard';
import { FilterBar } from '../components/shop/FilterBar';
import { ProductModal } from '../components/shop/ProductModal';
import { useCart } from '../context/CartContext';

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData.products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    let result = productsData.products;

    if (selectedCategory) {
      result = result.filter((product) => product.category === selectedCategory);
    }

    if (selectedPeriod) {
      result = result.filter((product) => product.period === selectedPeriod);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    setFilteredProducts(result);
  }, [selectedCategory, selectedPeriod, searchQuery]);

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: selectedProduct.id,
          name: selectedProduct.name,
          price: selectedProduct.price,
          image: selectedProduct.image,
        },
      });
      handleCloseModal();
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[50vh] mb-16 overflow-hidden">
        <div className="absolute inset-0 transform scale-110">
          <img
            src="/shop_Banniere.webp"
            alt="Collection de Katanas"
            className="w-full h-full object-cover transform scale-110 motion-safe:animate-subtle-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 backdrop-blur-sm"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Notre Collection
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Découvrez nos katanas d'exception, forgés selon la tradition
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FilterBar
          categories={productsData.categories}
          periods={productsData.periods}
          selectedCategory={selectedCategory}
          selectedPeriod={selectedPeriod}
          searchQuery={searchQuery}
          onCategoryChange={setSelectedCategory}
          onPeriodChange={setSelectedPeriod}
          onSearchChange={setSearchQuery}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onShowDetails={handleShowDetails}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 text-center mb-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Aucun produit ne correspond à vos critères de recherche.
            </p>
          </div>
        )}

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={handleCloseModal}
            onAddToCart={handleAddToCart}
          />
        )}
      </div>
    </div>
  );
}