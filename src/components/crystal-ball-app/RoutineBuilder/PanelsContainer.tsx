import React from "react";
import { useAppSelector } from "../../app/hooks";
import MealTab from "./Meals/MealTab";
import ActivityTab from "./Activity/ActivityTab";
import MedicationTab from "./Medication/MedicationTab";
import { selectRoutineState } from "./routineSlice";

const PanelsContainer = () => {
  const tabId = useAppSelector(selectRoutineState).activeTabId

  const renderTab = () => {
    if(tabId <= 2) {
      return <MealTab />
    } else if(tabId === 3) {
      return <ActivityTab />
    } else {
      return <MedicationTab />
    }
  }

  return (
    <>
      {renderTab()}
    </>
  );
};

export default PanelsContainer;
