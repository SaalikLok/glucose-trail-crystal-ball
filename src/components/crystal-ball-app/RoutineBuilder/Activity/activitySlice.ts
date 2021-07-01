import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { activities, ActivityData } from "../../../../data/activities";

type ActivityState = {
  allActivities: ActivityData[];
};

const initialState: ActivityState = {
  allActivities: activities,
};

export const activitySlice = createSlice({
  name: "activities",
  initialState,
  reducers: {
    updateActivity: (state, action: PayloadAction<ActivityData>) => {
      const activityToUpdate = state.allActivities.findIndex(
        (activity) => activity.intensity === action.payload.intensity
      );
      state.allActivities[activityToUpdate] = action.payload;
    },
  },
});

export const { updateActivity } = activitySlice.actions;
export const selectActivitiesState = (state: RootState) => state.activities.allActivities;
export default activitySlice.reducer;
