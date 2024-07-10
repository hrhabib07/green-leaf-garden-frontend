import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCartItem = {
  id: string;
  quantity: number;
};
type TCartState = TCartItem[];

const initialState: TCartState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.find((item) => item.id === productId);
      if (existingItem) {
        console.log("existingItem", existingItem);
        existingItem.quantity += 1;
      } else {
        state.push({ id: productId, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
