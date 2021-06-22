import { foods as f, FoodData, foods } from './foods'

export type MealData = {
  id: number
  name: string,
  food: FoodData[],
  calories: number
}

const mealCalories = (foodArray: FoodData[]) => {
  let totalCalories = 0
  foodArray.forEach( food => {
    totalCalories += food.calories
  })

  return totalCalories
}

export const meals: MealData[] = [
  {
    id: 1,
    name: "Fast Food",
    food: [f.cheeseBurger, f.cola, f.fries],
    calories: mealCalories([f.cheeseBurger, f.cola, f.fries])
  }, 
  {
    id: 2,
    name: "Pancake Breakfast",
    food: [f.pancake, f.milk, f.apple],
    calories: mealCalories([f.pancake, f.milk, f.apple])
  },
  {
    id: 3,
    name: "Fruit Party",
    food: [f.apple, f.banana, f.orange],
    calories: mealCalories([f.apple, f.banana, f.orange])
  }
]
