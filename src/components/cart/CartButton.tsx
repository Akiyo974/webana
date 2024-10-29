import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export function CartButton() {
  const { state, dispatch } = useCart();

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      onClick={() => dispatch({ type: 'TOGGLE_CART' })}
      className="relative p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Open cart"
    >
      <ShoppingBag className={`h-6 w-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${state.justAdded ? 'animate-bounce-once' : ''}`} />
      {itemCount > 0 && (
        <span className={`absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center ${state.justAdded ? 'animate-bounce-once' : ''}`}>
          {itemCount}
        </span>
      )}
    </button>
  );
}