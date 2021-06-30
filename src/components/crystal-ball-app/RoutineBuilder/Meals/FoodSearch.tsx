import React, { useState, useEffect } from "react";
import { foods, FoodData } from "../../../../data/foods";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addBreakfastFood, addDinnerFood, addLunchFood } from "./mealsSlice";
import { selectRoutineState } from "../routineSlice";

const FoodSearch = () => {
  const routineState = useAppSelector(selectRoutineState)
  const { activeTabId, tabs } = routineState
  const dispatch = useAppDispatch();
  const [searchVal, setSearchVal] = useState("");
  const [searchResults, setSearchResults] = useState<FoodData[] | []>([]);

  useEffect(() => {
    const results = foods.filter((food) =>
      food.name.toLowerCase().includes(searchVal)
    );
    setSearchResults(results);
  }, [searchVal]);

  const addFood = (food: FoodData) => {
    if(activeTabId === 0) {
      dispatch(addBreakfastFood(food))
    } else if(activeTabId === 1) {
      dispatch(addLunchFood(food))
    } else {
      dispatch(addDinnerFood(food))
    }
  }

  const renderSearchResults = () => {
    if (searchVal.length > 0) {
      const results = searchResults.map((food, index) => {
        return (
          <li onClick={() => addFood(food)} key={index}>
            <a>{food.name}</a>
          </li>
        );
      });
      return results;
    }
  };

  return (
    <div className="mx-2 my-3">
      <label>
        Search for {tabs[activeTabId]} Food
        <input
          type="text"
          className="input mb-4"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </label>

      <aside className="menu">
        <p className="menu-label">Foods</p>
        <ul className="menu-list">{renderSearchResults()}</ul>
      </aside>
    </div>
  );
};

export default FoodSearch;
