import { configureStore } from "@reduxjs/toolkit";
import patientsReducer from "../crystal-ball-app/PatientPicker/patientSlice";
import routineReducer from "../crystal-ball-app/RoutineBuilder/routineSlice";

export const store = configureStore({
  reducer: {
    patients: patientsReducer,
    routine: routineReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
