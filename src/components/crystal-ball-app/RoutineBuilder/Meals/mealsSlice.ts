import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoodData } from "../../../../data/foods";
import { RootState } from "../../../app/store";

type MealsState = {
  breakfast: FoodData[];
  lunch: FoodData[];
  dinner: FoodData[];
};

const initialState: MealsState = {
  breakfast: [],
  lunch: [],
  dinner: [],
};

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    updateBreakfast: (state, action: PayloadAction<FoodData>) => {
      state.breakfast.push(action.payload);
    },
  },
});

export const { updateBreakfast } = mealsSlice.actions;
export const selectMealsState = (state: RootState) => state.meals;
export default mealsSlice.reducer;
