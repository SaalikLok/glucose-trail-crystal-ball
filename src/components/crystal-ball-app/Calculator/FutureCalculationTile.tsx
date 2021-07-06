import React from "react";

const FutureCalculationTile = () => {
  return (
    <div>
      <p>If this were your routine for...</p>
      <p className="subtitle pl-3">
        <b>1</b> week
      </p>
      <p className="has-background-success-light pl-3">
        <span className="subtitle">123</span>
        <span className="tag is-success ml-3">mg/dl</span>
      </p>
      <p className="has-background-warning-light pl-3">
        <span className="subtitle">7.2</span>
        <span className="tag is-warning ml-3">HBa1C</span>
      </p>
      <p className="pl-3">
        <span className="subtitle">209</span>
        <span className="tag ml-3">lbs</span>
      </p>
    </div>
  );
};

export default FutureCalculationTile;
