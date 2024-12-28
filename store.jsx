import { configureStore } from '@reduxjs/toolkit';
import shop from './src/Redux/shop';
import cart from './src/Redux/cartSlice';

export const store = configureStore({
    reducer: {
        shop,
        cart
    }
});
