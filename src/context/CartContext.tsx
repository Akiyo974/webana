import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartNotification } from '../components/cart/CartNotification';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  justAdded: boolean;
  lastAddedItem: string | null;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'TOGGLE_CART' }
  | { type: 'CLEAR_CART' }
  | { type: 'RESET_ADDED_STATE' };

const initialState: CartState = {
  items: [],
  isOpen: false,
  justAdded: false,
  lastAddedItem: null,
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          justAdded: true,
          lastAddedItem: action.payload.name,
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        justAdded: true,
        lastAddedItem: action.payload.name,
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };
    case 'RESET_ADDED_STATE':
      return {
        ...state,
        justAdded: false,
        lastAddedItem: null,
      };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const { items } = JSON.parse(savedCart);
      items.forEach((item: CartItem) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify({ items: state.items }));
  }, [state.items]);

  useEffect(() => {
    if (state.justAdded) {
      const timer = setTimeout(() => {
        dispatch({ type: 'RESET_ADDED_STATE' });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [state.justAdded]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
      {state.justAdded && state.lastAddedItem && (
        <CartNotification
          message={`${state.lastAddedItem} ajouté au panier`}
          isVisible={state.justAdded}
          onHide={() => dispatch({ type: 'RESET_ADDED_STATE' })}
        />
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}