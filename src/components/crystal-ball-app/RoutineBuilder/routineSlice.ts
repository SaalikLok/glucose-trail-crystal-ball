import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type RoutineState = {
  activePicker: number;
  panels: string[];
};

const initialState: RoutineState = {
  activePicker: 0,
  panels: ["Breakfast", "Lunch", "Dinner", "Activity", "Medications"],
};

export const routineSlice = createSlice({
  name: "routine",
  initialState,
  reducers: {
    updateActivePicker: (state, action: PayloadAction<number>) => {
      state.activePicker = action.payload;
    },
  },
});

export const { updateActivePicker } = routineSlice.actions;
export const selectRoutineState = (state: RootState) => state.routine;
export default routineSlice.reducer;
