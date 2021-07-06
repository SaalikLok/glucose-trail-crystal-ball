import React from "react";
import TodayCalculation from "./TodayCalculationTile";
import FutureCalculationTile from "./FutureCalculationTile";

const Calculator = () => {
  return (
    <div className="column">
      <p className="title">Predictions</p>
      <div className="columns">
        <div className="column">
          <TodayCalculation />
        </div>
        <div className="column">
          <FutureCalculationTile />
        </div>
        <div className="column">
          <FutureCalculationTile />
        </div>
        <div className="column">
          <FutureCalculationTile />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
