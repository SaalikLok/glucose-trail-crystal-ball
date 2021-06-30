import React from "react";
import FoodPanel from "./Meals/FoodPanel";
import FoodSearch from "./Meals/FoodSearch";
import { selectBreakfast, selectLunch, selectDinner } from "./Meals/mealsSlice";
import { useAppSelector } from "../../app/hooks";
import { FoodData } from "../../../data/foods";

type Props = {
  tabId: number;
};

const PanelsContainer: React.FC<Props> = ({ tabId }: Props) => {
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
  );
};

export default PanelsContainer;
