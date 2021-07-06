import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoodData } from "../../../../data/foods";
import { RootState } from "../../../app/store";

type Meal = {
  mealName: string;
  foods: FoodData[];
};

type MealsState = {
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

/**
 *
 * REFACTORING
 *
 * the mealstate will be an object shaped like this:
 * {
 *  meals: [
 *    {
 *      mealName: string,
 *      foods: FoodData[]
 *    },
 *    {...}
 * ]
 * }
 *
 * addFoodToMeal(meal, FoodData) will add that food to the meal
 * removeFoodFromMeal(meal, FoodData) will remove that food from the meal
 * changeFoodQuantity(meal, FoodData, quantity) will update the food's quantity with the quantity argument
 *
 */

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
    

    // changeFoodCount: (state, action: PayloadAction<MealPayload>) => {
    //   const mealToUpdate = state.meals.find(
    //     (meal) => meal.mealName === action.payload.mealName
    //   );
    //   const foodToUpdate = mealToUpdate?.foods.findIndex(
    //     (food) => food.name === action.payload.food.name
    //   );

    //   mealToUpdate?.foods[foodToUpdate] = action.payload.food;
    // },
  },
});

export const { addFoodToMeal, removeFoodFromMeal } = mealsSlice.actions;
export const selectMeals = (state: RootState) => state.meals;
export default mealsSlice.reducer;
