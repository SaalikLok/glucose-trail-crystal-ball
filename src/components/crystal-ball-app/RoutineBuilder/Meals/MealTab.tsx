import React from 'react'
import FoodSearch from './FoodSearch';
import { useAppSelector } from '../../../app/hooks';
import { selectMeals } from './mealsSlice';
import FoodPanel from './FoodPanel';
import { FoodData } from '../../../../data/foods';
import { selectRoutineState } from '../routineSlice';

const MealTab = () => {
  const tabId = useAppSelector(selectRoutineState).activeTabId

  const getMeal = () => {
    switch (tabId) {
      case 0:
        return useAppSelector(selectMeals).meals[0].foods;
      case 1:
        return useAppSelector(selectMeals).meals[1].foods;
      case 2:
        return useAppSelector(selectMeals).meals[2].foods;
      default:
        return [];
    }
  };

  const mealFoods: FoodData[] = getMeal();
  const mealName: string = useAppSelector(selectMeals).meals[tabId].mealName

  const allPanels = mealFoods.map((food, index) => {
    return <FoodPanel key={index} mealName={mealName} food={food} />;
  });

  return (
    <>
      <FoodSearch />
      {allPanels}
    </>
  )
}

export default MealTab
