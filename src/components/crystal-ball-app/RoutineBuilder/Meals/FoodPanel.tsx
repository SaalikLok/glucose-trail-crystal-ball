import React, { useState } from "react";

type Props = {
  foodName: string;
  serving: string;
};

const FoodPanel: React.FC<Props> = ({ foodName, serving }: Props) => {
  const [numServings, setNumServings] = useState("");

  return (
    <div className="panel-block columns">
      <div className="column">
      <span className="panel-icon">
        <i className="fas fa-utensils"></i>
      </span>
        {foodName}
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
        {serving}
      </span>
    </div>
  );
};

export default FoodPanel;
