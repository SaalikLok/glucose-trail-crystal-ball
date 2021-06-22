import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type RoutineState = {
  breakfastId: number;
  lunchId: number;
  dinnerId: number;
  snackId: number;
  exerciseId: number;
  medicationId: number;
};

const initialState: RoutineState = {
  breakfastId: 0,
  lunchId: 0,
  dinnerId: 0,
  snackId: 0,
  exerciseId: 0,
  medicationId: 0,
};

export const routineSlice = createSlice({
  name: "routine",
  initialState,
  reducers: {
    updateBreakfastId: (state, action: PayloadAction<number>) => {
      state.breakfastId = action.payload;
    },
    updateLunchId: (state, action: PayloadAction<number>) => {
      state.lunchId = action.payload;
    },
    updateDinnerId: (state, action: PayloadAction<number>) => {
      state.dinnerId = action.payload;
    },
    updateExerciseId: (state, action: PayloadAction<number>) => {
      state.exerciseId = action.payload;
    },
    updateSnackId: (state, action: PayloadAction<number>) => {
      state.snackId = action.payload;
    },
    updateMedicationId: (state, action: PayloadAction<number>) => {
      state.medicationId = action.payload;
    },
  },
});

export const {
  updateBreakfastId,
  updateLunchId,
  updateDinnerId,
  updateSnackId,
  updateExerciseId,
  updateMedicationId,
} = routineSlice.actions;
export const selectRoutineState = (state: RootState) => state.routine;
export default routineSlice.reducer;
