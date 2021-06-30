import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type RoutineState = {
  activeTabId: number;
  tabs: string[];
};

const initialState: RoutineState = {
  activeTabId: 0,
  tabs: ["Breakfast", "Lunch", "Dinner", "Activity", "Medications"],
};

export const routineSlice = createSlice({
  name: "routine",
  initialState,
  reducers: {
    updateActiveTabId: (state, action: PayloadAction<number>) => {
      state.activeTabId = action.payload;
    },
  },
});

export const { updateActiveTabId } = routineSlice.actions;
export const selectRoutineState = (state: RootState) => state.routine;
export default routineSlice.reducer;
