import React, { useState } from "react";
import { FoodData } from "../../../../data/foods";
import { useAppDispatch } from "../../../app/hooks";
import { removeBreakfastFood } from "./mealsSlice";

type Props = {
  food: FoodData;
};

const FoodPanel: React.FC<Props> = ({ food }: Props) => {
  const dispatch = useAppDispatch();
  const [numServings, setNumServings] = useState("");

  return (
    <div className="panel-block columns">
      <div className="column">
        <span className="panel-icon">
          <i className="fas fa-utensils"></i>
        </span>
        {food.name}
      </div>
      <span className="column">
        <input
          type="number"
          min="0"
          max="20"
          className="input is-small mr-3"
          value={numServings}
          onChange={(e) => setNumServings(e.target.value)}
        />
        {food.serving}
      </span>
      <a
        className="column button"
        onClick={() => dispatch(removeBreakfastFood(food))}
      >
        Remove
      </a>
    </div>
  );
};

export default FoodPanel;
