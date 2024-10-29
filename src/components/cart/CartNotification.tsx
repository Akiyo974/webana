import React, { useEffect, useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';

interface CartNotificationProps {
  message: string;
  isVisible: boolean;
  onHide: () => void;
}

export function CartNotification({ message, isVisible, onHide }: CartNotificationProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onHide();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-slide-up">
      <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2">
        <Check className="h-5 w-5" />
        <span>{message}</span>
      </div>
    </div>
  );
}