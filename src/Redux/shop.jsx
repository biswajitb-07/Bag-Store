import { createSlice } from "@reduxjs/toolkit";
import products from "../../api/products.json";

const initialState = {
  products,
  currency: '$',
  delivery_fee: 10,
  search: '',
  showSearch: false,
};

const shop = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setShowSearch: (state, action) => {
      state.showSearch = action.payload;
    },
  },
});

export const { setSearch, setShowSearch } = shop.actions;

export const Products = (state) => state.shop.products;
export const Currency = (state) => state.shop.currency;
export const DeliveryFee = (state) => state.shop.delivery_fee;
export const Search = (state) => state.shop.search;
export const ShowSearch = (state) => state.shop.showSearch;

export default shop.reducer;
