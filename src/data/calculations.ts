import { MealsState } from "../components/crystal-ball-app/RoutineBuilder/Meals/mealsSlice";
import { ActivityData } from "./activities";
import { MedicationData } from "./medications";
import { PatientData } from "./patients";

export const calculateTodayAvgBloodSugar = (
  patient: PatientData,
  meals: MealsState,
  activity: ActivityData[],
  medications: MedicationData[]
) => {
  let avgBloodSugar = patient.avgBloodSugar;

  // fake meal calculation
  let totalMealCalories = 0;
  meals.meals.forEach((meal) => {
    meal.foods.forEach((food) => {
      totalMealCalories += food.calories * food.quantity;
    });
  });
  avgBloodSugar += totalMealCalories / 5;

  // fake exercise calculation
  let caloriesBurned = 0;
  activity.forEach((activity) => {
    caloriesBurned +=
      activity.duration *
      ((activity.met * 3.5 * (patient.weight * 0.45359237)) / 200);
  });
  avgBloodSugar -= caloriesBurned / 10;

  // fake medication calculation
  medications.forEach((med) => {
    avgBloodSugar -= med.timesTaken * 5;
  });

  return avgBloodSugar;
};


export const calculatePredictionValues = (
  patient: PatientData,
  meals: MealsState,
  activity: ActivityData[],
  medications: MedicationData[],
  weeks: number
) => {
  const days = weeks * 7

  let avgBloodSugar = patient.avgBloodSugar;
  let hba1c = patient.hba1c;
  let weight = patient.weight;

  // fake meal calculation
  let totalMealCalories = 0;
  meals.meals.forEach((meal) => {
    meal.foods.forEach((food) => {
      totalMealCalories += food.calories * food.quantity;
    });
  });
  avgBloodSugar += (totalMealCalories / 5 * days)/weeks;
  weight += totalMealCalories/3500

  // fake exercise calculation
  let caloriesBurned = 0;
  activity.forEach((activity) => {
    caloriesBurned +=
      activity.duration *
      ((activity.met * 3.5 * (patient.weight * 0.45359237)) / 200);
  });
  avgBloodSugar -= caloriesBurned / 10 * weeks;
  weight -= caloriesBurned/3500

  // fake medication calculation
  medications.forEach((med) => {
    avgBloodSugar -= med.timesTaken * 5;
  });

  return { 
    averageBloodSugar: avgBloodSugar,
    hba1c: (46.7 + avgBloodSugar) / 28.7,
    weight: weight
  };
};