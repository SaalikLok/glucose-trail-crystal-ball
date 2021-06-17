import React from "react";
import PatientPicker from "./PatientPicker/PatientPicker";
import Calculator from "./Calculator/Calculator";
import RoutineBuilder from "./RoutineBuilder/RoutineBuilder";

const CrystalBallApp = () => {
  return (
    <div className="container">
      <h1 className="title">The Crystal Ball</h1>
      <div className="box">SOmething</div>
      <div className="columns">
          <PatientPicker />
          <RoutineBuilder />
          <Calculator />
      </div>
    </div>
  );
};

export default CrystalBallApp;
