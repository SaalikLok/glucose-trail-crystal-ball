import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {patients, PatientData} from "../../../data/patients"

type PatientState = {
  currentPatient: PatientData;
};

const initialState: PatientState = {
  currentPatient: patients[0]
};

export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    updateCurrentPatient: (state, action: PayloadAction<number>) => {
      state.currentPatient = patients[action.payload];
    },
  },
});

export const { updateCurrentPatient } = patientSlice.actions;
export const selectCurrentPatient = (state: RootState) =>
  state.patients.currentPatient;
export default patientSlice.reducer;
