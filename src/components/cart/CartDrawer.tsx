import React from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { CartItem } from './CartItem';

export function CartDrawer() {
  const { state, dispatch } = useCart();

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!state.isOpen) return null;

  const handleCheckout = () => {
    dispatch({ type: 'TOGGLE_CART' });
    // Trigger navigation to checkout page through the global state
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'checkout' }));
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => dispatch({ type: 'TOGGLE_CART' })}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl z-50 transform transition-transform duration-300">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <div className="flex items-center">
            <ShoppingBag className="h-6 w-6 text-red-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Votre Panier
            </h2>
          </div>
          <button
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4 flex flex-col h-[calc(100vh-180px)]">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
              <ShoppingBag className="h-12 w-12 mb-4" />
              <p>Votre panier est vide</p>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto">
              {state.items.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          )}
        </div>

        {state.items.length > 0 && (
          <div className="border-t dark:border-gray-700 p-4">
            <div className="flex justify-between mb-4">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                Total
              </span>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {total.toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition"
            >
              Passer la commande
            </button>
          </div>
        )}
      </div>
    </>
  );
}