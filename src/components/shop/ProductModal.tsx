import React from 'react';
import { X, Star } from 'lucide-react';

interface ProductModalProps {
    product: {
        id: string;
        name: string;
        price: number;
        rating: number;
        image: string;
        description: string;
        specifications: {
            longueur: string;
            poids: string;
            acier: string;
            tsuka: string;
        };
    };
    onClose: () => void;
    onAddToCart: () => void;
}

export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
    return (
        <>
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                onClick={onClose}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slide-up"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-end p-4">
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                        {/* Image Section */}
                        <div className="relative">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-[400px] object-cover rounded-lg"
                            />
                            <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full px-3 py-1 flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < product.rating
                                                ? 'text-yellow-400 fill-current'
                                                : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {product.name}
                                </h2>
                                <p className="text-3xl font-bold text-red-600 dark:text-red-500">
                                    {product.price.toLocaleString('fr-FR', {
                                        style: 'currency',
                                        currency: 'EUR',
                                    })}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    Description
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {product.description}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    Spécifications
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Longueur</p>
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            {product.specifications.longueur}
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Poids</p>
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            {product.specifications.poids}
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Acier</p>
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            {product.specifications.acier}
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Tsuka</p>
                                        <p className="font-medium text-gray-900 dark:text-white">
                                            {product.specifications.tsuka}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={onAddToCart}
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
                            >
                                Ajouter au panier
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}