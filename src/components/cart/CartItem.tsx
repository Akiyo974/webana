import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export function CartItem({ id, name, price, image, quantity }: CartItemProps) {
  const { dispatch } = useCart();

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id, quantity: newQuantity },
      });
    }
  };

  return (
    <div className="flex items-center gap-4 py-4 border-b dark:border-gray-700">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
          {name}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {price.toLocaleString('fr-FR', {
            style: 'currency',
            currency: 'EUR',
          })}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => updateQuantity(quantity - 1)}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button
            onClick={() => updateQuantity(quantity + 1)}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <button
        onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: id })}
        className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <X className="h-5 w-5 text-gray-500" />
      </button>
    </div>
  );
}