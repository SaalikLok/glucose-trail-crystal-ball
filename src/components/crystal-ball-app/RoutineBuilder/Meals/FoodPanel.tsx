import React from "react";
import { FoodData } from "../../../../data/foods";
import { useAppDispatch } from "../../../app/hooks";
import { removeFoodFromMeal } from "./mealsSlice";
import { changeFoodCount } from "./mealsSlice";

type Props = {
  food: FoodData;
  mealName: string;
};

const FoodPanel: React.FC<Props> = ({ food, mealName }: Props) => {
  const dispatch = useAppDispatch();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFood: FoodData = {
      ...food,
      quantity: Number(e.target.value),
    };
    dispatch(changeFoodCount({ mealName: mealName, food: newFood }));
  };

  return (
    <div className="panel-block columns">
      <div className="column">
        <span className="panel-icon">
          <i className="fas fa-utensils"></i>
        </span>
        {food.name}
      </div>
      <div className="column">
        <input
          type="number"
          min="0"
          max="20"
          className="input is-small mr-3"
          value={food.quantity}
          onChange={(e) => handleInputChange(e)}
        />
        {food.serving}
      </div>
      <div className="column">

      <button
        className="delete is-align-self-center"
        onClick={() =>
          dispatch(
            removeFoodFromMeal({
              mealName: mealName,
              food: food,
            })
          )
        }
      >
      </button>
      </div>
    </div>
  );
};

export default FoodPanel;
