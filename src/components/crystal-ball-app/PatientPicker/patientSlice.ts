import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type PatientState = {
  currentPatient: number;
};

const initialState: PatientState = {
  currentPatient: 0,
};

export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    updateCurrentPatient: (state, action: PayloadAction<number>) => {
      state.currentPatient = action.payload;
    },
  },
});

export const { updateCurrentPatient } = patientSlice.actions;
export const selectCurrentPatient = (state: RootState) =>
  state.patients.currentPatient;
export default patientSlice.reducer;
