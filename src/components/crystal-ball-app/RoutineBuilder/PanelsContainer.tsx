import React from "react";
import { useAppSelector } from "../../app/hooks";
import MealTab from "./Meals/MealTab";
import ActivityTab from "./Activity/ActivityTab";
import { selectRoutineState } from "./routineSlice";

const PanelsContainer = () => {
  const tabId = useAppSelector(selectRoutineState).activeTabId

  const renderTab = () => {
    if(tabId <= 2) {
      return <MealTab />
    } else if(tabId === 3) {
      return <ActivityTab />
    } else {
      return <div>Last Tab</div>
    }
  }

  return (
    <>
      {renderTab()}
    </>
  );
};

export default PanelsContainer;
