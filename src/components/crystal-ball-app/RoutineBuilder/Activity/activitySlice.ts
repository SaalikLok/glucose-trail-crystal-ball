import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { activities, ActivityData } from "../../../../data/activities";

type ActivityState = {
  allActivities: ActivityData[];
};

const initialState: ActivityState = {
  allActivities: activities,
};

const calculateSittingTime = (state: ActivityState) => {
  return (
    1440 -
    (state.allActivities[1].duration +
      state.allActivities[2].duration +
      state.allActivities[3].duration)
  );
};

export const activitySlice = createSlice({
  name: "activities",
  initialState,
  reducers: {
    updateActivity: (state, action: PayloadAction<ActivityData>) => {
      const activityToUpdate = state.allActivities.findIndex(
        (activity) => activity.intensity === action.payload.intensity
      );
      state.allActivities[activityToUpdate].duration = action.payload.duration;
      state.allActivities[0].duration = calculateSittingTime(state);
    },
  },
});

export const { updateActivity } = activitySlice.actions;
export const selectActivitiesState = (state: RootState) =>
  state.activities.allActivities;
export default activitySlice.reducer;
