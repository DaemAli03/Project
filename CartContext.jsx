import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
        return {
            ...state,
            items: [...state.items, action.payload],
        };
        case 'REMOVE_FROM_CART':
        return {
            ...state,
            items: state.items.filter(item => item.id !== action.payload.id),
        };
        default:
        return state;
}
};

const CartProvider = ({ children }) => {
    const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
};

    const removeFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
};

return (
    <CartContext.Provider value={{ cartState, addToCart, removeFromCart }}>
        {children}
    </CartContext.Provider>
);
};

const useCart = () => {
    const context = useContext(CartContext);
        if (!context) {
        throw new Error('useCart must be used within a CartProvider');
}
return context;
};

export { CartProvider, useCart };
