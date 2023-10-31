import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("list")
  ? JSON.parse(localStorage.getItem("list"))
  : { listItems: [] };

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToList: (state, action) => {
      const item = action.payload;
      const existingItem = state.listItems.find(
        (listItem) => listItem._id === item._id
      );
      if (existingItem) {
        state.listItems = state.listItems.map((listItem) =>
          listItem._id === existingItem._id ? item : listItem
        );
      } else {
        state.listItems = [...state.listItems, item];
      }
      localStorage.setItem("list", JSON.stringify(state));
    },
  },
});

export const { addToList } = listSlice.actions;

export default listSlice.reducer;
