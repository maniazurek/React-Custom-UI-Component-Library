import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

const theme = createSlice({
  name: "theme",
  initialState: { value: initialStateValue },
  reducers: {
    changeColor: (store, action) => {
      store.value = action.payload;
    },
  },
});

export const { changeColor } = theme.actions;

export default theme;
