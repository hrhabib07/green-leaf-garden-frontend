import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TEditProductSate = {
  id: string;
};

const initialState: TEditProductSate = {
  id: "",
};

export const editProductSlice = createSlice({
  name: "editProduct",
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    clearList: (state) => {
      state.id = "";
    },
  },
});

export const { addToList, clearList } = editProductSlice.actions;
export default editProductSlice.reducer;
