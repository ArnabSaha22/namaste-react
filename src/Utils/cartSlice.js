import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    //initial value
    items: [],
  },
  reducers: {
    //Here is the mapping between the action and the reducer[addItem is the action and the corresponding reducer function]
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items.pop(action.payload);
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions; //This will always be actions as there are many of them and thus we 
                                                                     //have named export 

export default cartSlice.reducer; //This will always be reducer and not reducers as that will combine all reducers into one and then export.
