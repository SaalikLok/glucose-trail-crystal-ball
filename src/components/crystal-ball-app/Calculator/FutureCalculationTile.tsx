import React from "react";

type FutureCalculation = {
  averageBloodSugar: number,
  hba1c: number,
  weight: number
}

type Props = {
  calculation: FutureCalculation,
  weeks: number
}

const FutureCalculationTile: React.FC<Props> = ({ calculation, weeks }) => {
  return (
    <div>
      <p>If this were your routine for...</p>
      <p className="subtitle pl-3">
        <b>{weeks}</b> weeks
      </p>
      <p className="has-background-success-light pl-3">
        <span className="subtitle">{Math.round(calculation.averageBloodSugar)}</span>
        <span className="tag is-success ml-3">mg/dl</span>
      </p>
      <p className="has-background-warning-light pl-3">
        <span className="subtitle">{Math.round(calculation.hba1c)}</span>
        <span className="tag is-warning ml-3">HBa1C</span>
      </p>
      <p className="pl-3">
        <span className="subtitle">{Math.round(calculation.weight)}</span>
        <span className="tag ml-3">lbs</span>
      </p>
    </div>
  );
};

export default FutureCalculationTile;
