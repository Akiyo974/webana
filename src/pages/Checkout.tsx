import React from 'react';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, Shield, AlertCircle } from 'lucide-react';

export function Checkout() {
  const { state } = useCart();
  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
            <p className="ml-3 text-sm text-yellow-800 dark:text-yellow-200">
              Cette page est une démonstration. Aucune transaction réelle ne sera effectuée.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Récapitulatif de la commande
            </h2>
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Quantité: {item.quantity}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {(item.price * item.quantity).toLocaleString('fr-FR', {
                        style: 'currency',
                        currency: 'EUR',
                      })}
                    </p>
                  </div>
                </div>
              ))}
              <div className="border-t dark:border-gray-700 pt-4 mt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-gray-900 dark:text-white">Total</span>
                  <span className="text-gray-900 dark:text-white">
                    {total.toLocaleString('fr-FR', {
                      style: 'currency',
                      currency: 'EUR',
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Paiement
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nom sur la carte
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Numéro de carte
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="1234 5678 9012 3456"
                    />
                    <CreditCard className="absolute right-4 top-3 h-6 w-6 text-gray-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Date d'expiration
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border dark:border-gray-600 focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition"
              >
                Payer {total.toLocaleString('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </button>
            </form>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-6 w-6 text-red-500" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Paiement sécurisé
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Truck className="h-6 w-6 text-red-500" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Livraison gratuite
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <CreditCard className="h-6 w-6 text-red-500" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Carte bancaire
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}