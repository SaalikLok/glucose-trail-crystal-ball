import React from "react";
import { meals } from "../../../data/meals";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectRoutineState, updateBreakfastId } from "./routineSlice";

const MealPicker = () => {
  const dispatch = useAppDispatch();
  const currentRoutine = useAppSelector(selectRoutineState);

  const updateMealState = (id: number) => {
    dispatch(updateBreakfastId(id));
  };

  const mealOptions = meals.map((meal) => {
    let classNames = "dropdown-item";

    currentRoutine.breakfastId === meal.id
      ? (classNames = "is-active dropdown-item")
      : "dropdown-item";

    return (
      <a
        href="#"
        key={meal.id}
        onClick={() => updateMealState(meal.id)}
        className={classNames}
      >
        {meal.name}
      </a>
    );
  });

  return (
    <div className="dropdown is-hoverable">
      <p>Meal Selected: {meals[currentRoutine.breakfastId - 1].name}</p>
      <div className="dropdown-trigger">
        <button className="button">
          <span>Select a Meal</span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">{mealOptions}</div>
      </div>
    </div>
  );
};

export default MealPicker;
