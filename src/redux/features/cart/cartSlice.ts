import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

type TCartItem = {
  id: string;
  quantity: number;
  price: number;
};
type TCartState = TCartItem[];

const initialState: TCartState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ id: string; price: number }>
    ) => {
      const { id, price } = action.payload;
      // const productPrice = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ id, quantity: 1, price });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.find((item) => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        toast.error("You can not order zero item.");
      }
    },
    clearTheCart: (state) => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearTheCart } = cartSlice.actions;
export default cartSlice.reducer;
