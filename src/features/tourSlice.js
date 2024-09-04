import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  selectedTourId: null,
  tourData: null,
};

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    setTourId(state, action) {
      state.selectedTourId = action.payload;
    },
    setTourData(state, action) {
      state.tourData = action.payload;
    },
  },
});

export const { setTourData, setTourId } = tourSlice.actions;
export default tourSlice.reducer;
