import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  stock: number;
  description: string;
  specifications: {
    longueur: string;
    poids: string;
    acier: string;
    tsuka: string;
  };
}

interface ProductCardProps {
  product: Product;
  onShowDetails: (product: Product) => void;
}

export function ProductCard({ product, onShowDetails }: ProductCardProps) {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    });
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={() => onShowDetails(product)}
    >
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.stock < 3 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
            Plus que {product.stock} en stock
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < product.rating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            {product.price.toLocaleString('fr-FR', {
              style: 'currency',
              currency: 'EUR',
            })}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center transition"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}