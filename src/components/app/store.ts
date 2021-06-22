import { configureStore } from "@reduxjs/toolkit";
import patientsReducer from "../crystal-ball-app/PatientPicker/patientSlice";

export const store = configureStore({
  reducer: {
    patients: patientsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
