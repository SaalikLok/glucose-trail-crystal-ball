import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { patients, PatientData } from "../../../data/patients";
import { RootState } from "../../app/store";

type PatientState = {
  patientList: PatientData[];
  currentPatient: number;
};

const initialState: PatientState = {
  patientList: patients,
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
export const selectAllPatients = (state: RootState) =>
  state.patients.patientList;
export default patientSlice.reducer;
