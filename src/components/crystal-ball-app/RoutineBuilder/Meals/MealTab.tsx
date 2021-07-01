import React from 'react'
import FoodSearch from './FoodSearch';
import { useAppSelector } from '../../../app/hooks';
import { selectBreakfast, selectLunch, selectDinner } from './mealsSlice';
import FoodPanel from './FoodPanel';
import { FoodData } from '../../../../data/foods';
import { selectRoutineState } from '../routineSlice';

const MealTab = () => {
  const tabId = useAppSelector(selectRoutineState).activeTabId

  const getMeal = () => {
    switch (tabId) {
      case 0:
        return useAppSelector(selectBreakfast);
      case 1:
        return useAppSelector(selectLunch);
      case 2:
        return useAppSelector(selectDinner);
      default:
        return [];
    }
  };

  let meal: [] | FoodData[] = getMeal();

  const allPanels = meal.map((food, index) => {
    return <FoodPanel key={index} food={food} />;
  });

  return (
    <>
      <FoodSearch />
      {allPanels}
    </>
  )
}

export default MealTab
