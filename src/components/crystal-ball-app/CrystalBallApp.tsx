import React from "react";
import PatientPicker from "./PatientPicker/PatientPicker";
import Calculator from "./Calculator/Calculator";
import RoutineBuilder from "./RoutineBuilder/RoutineBuilder";

const CrystalBallApp = () => {
  return (
    <div>
      <div className="section">
        <h1 className="title">The Crystal Ball</h1>
      </div>
      <div className="section">
        <div className="columns">
          <PatientPicker />
          <RoutineBuilder />
        </div>
      </div>
          <Calculator />
    </div>
  );
};

export default CrystalBallApp;
