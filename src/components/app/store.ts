import { configureStore } from "@reduxjs/toolkit";
import patientsReducer from "../crystal-ball-app/PatientPicker/patientSlice";
import mealsReducer from "../crystal-ball-app/RoutineBuilder/Meals/mealsSlice";
import routineReducer from "../crystal-ball-app/RoutineBuilder/routineSlice";
import activitiesReducer from "../crystal-ball-app/RoutineBuilder/Activity/activitySlice";

export const store = configureStore({
  reducer: {
    patients: patientsReducer,
    routine: routineReducer,
    meals: mealsReducer,
    activities: activitiesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
