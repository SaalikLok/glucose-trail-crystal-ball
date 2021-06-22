import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {patients, PatientData} from "../../../data/patients"

// TODO: figure out whether I want to be passing in the full object or just the id.

type PatientState = {
  currentPatient: number;
};

const initialState: PatientState = {
  currentPatient: 1
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
