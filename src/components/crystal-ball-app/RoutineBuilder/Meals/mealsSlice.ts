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
    addBreakfastFood: (state, action: PayloadAction<FoodData>) => {
      state.breakfast.push(action.payload);
    },
    removeBreakfastFood: (state, action: PayloadAction<FoodData>) => {
      state.breakfast = state.breakfast.filter((food) => food.name !== action.payload.name);
    },
    addLunchFood: (state, action: PayloadAction<FoodData>) => {
      state.lunch.push(action.payload);
    },
    removeLunchFood: (state, action: PayloadAction<FoodData>) => {
      state.lunch = state.lunch.filter((food) => food.name !== action.payload.name);
    },
    addDinnerFood: (state, action: PayloadAction<FoodData>) => {
      state.dinner.push(action.payload);
    },
    removeDinnerFood: (state, action: PayloadAction<FoodData>) => {
      state.dinner = state.dinner.filter((food) => food.name !== action.payload.name);
    },
  },
});

export const { addBreakfastFood, removeBreakfastFood, addLunchFood, removeLunchFood, addDinnerFood, removeDinnerFood } = mealsSlice.actions;
export const selectBreakfast = (state: RootState) => state.meals.breakfast;
export const selectLunch = (state: RootState) => state.meals.lunch;
export const selectDinner = (state: RootState) => state.meals.dinner;
export default mealsSlice.reducer;
