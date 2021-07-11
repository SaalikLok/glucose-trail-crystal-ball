import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoodData } from "../../../../data/foods";
import { RootState } from "../../../app/store";

type Meal = {
  mealName: string;
  foods: FoodData[];
};

export type MealsState = {
  meals: Meal[];
};

type MealPayload = {
  mealName: string;
  food: FoodData;
};

const initialState: MealsState = {
  meals: [
    {
      mealName: "Breakfast",
      foods: [],
    },
    {
      mealName: "Lunch",
      foods: [],
    },
    {
      mealName: "Dinner",
      foods: [],
    },
  ],
};

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    addFoodToMeal: (state, action: PayloadAction<MealPayload>) => {
      const mealToUpdate = state.meals.find(
        (meal) => meal.mealName === action.payload.mealName
      );

      mealToUpdate?.foods.push(action.payload.food);
    },

    removeFoodFromMeal: (state, action: PayloadAction<MealPayload>) => {
      const mealToUpdate = state.meals.findIndex(
        (meal) => meal.mealName === action.payload.mealName
      );

      state.meals[mealToUpdate].foods = state.meals[mealToUpdate]?.foods.filter(
        (food) => food.name !== action.payload.food.name
      );
    },

    changeFoodCount: (state, action: PayloadAction<MealPayload>) => {
      const mealToUpdate = state.meals.findIndex(
        (meal) => meal.mealName === action.payload.mealName
      );
      const foodToUpdate = state.meals[mealToUpdate]?.foods.findIndex(
        (food) => food.name === action.payload.food.name
      );

      state.meals[mealToUpdate].foods[foodToUpdate].quantity =
        action.payload.food.quantity;
    },
  },
});

export const { addFoodToMeal, removeFoodFromMeal, changeFoodCount } =
  mealsSlice.actions;
export const selectMeals = (state: RootState) => state.meals;
export default mealsSlice.reducer;
