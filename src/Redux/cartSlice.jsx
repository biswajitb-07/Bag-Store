import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
  cart: loadCartFromLocalStorage(),
  cartValue: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productData, quantity } = action.payload;
      const productIndex = state.cart.findIndex(item => item.id === productData.id);

      if (productIndex !== -1) {
        state.cart[productIndex].quantity = quantity;
        state.cart[productIndex].subTotal = productData.price * quantity;
      } else {
        const subTotal = productData.price * quantity;
        state.cart.push({ ...productData, quantity, subTotal });
      }

      state.cartValue = state.cart.length;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter(item => item.id !== productId);
      state.cartValue = state.cart.length;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    initializeCart: (state) => {
      const savedCart = loadCartFromLocalStorage();
      state.cart = savedCart;
      state.cartValue = savedCart.length;
    },
  },
});

export const { addToCart, removeFromCart, initializeCart } = cartSlice.actions;
export const selectCart = (state) => state.cart.cart;
export const selectCartValue = (state) => state.cart.cartValue;

export default cartSlice.reducer;