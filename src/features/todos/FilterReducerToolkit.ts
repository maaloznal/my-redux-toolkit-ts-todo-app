import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  filter: "all" | "completed" | "incomplete";
}

const initialState: FilterState = {
  filter: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter(
      state,
      action: PayloadAction<"all" | "completed" | "incomplete">
    ) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
