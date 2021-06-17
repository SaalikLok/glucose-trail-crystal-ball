import React from "react";
import PatientPicker from "./PatientPicker/PatientPicker";
import Calculations from "./Calculations/Calculations";
import RoutineBuilder from "./RoutineBuilder/RoutineBuilder";

const CrystalBallApp = () => {
  return (
    <div>
      <PatientPicker />
      <RoutineBuilder />
      <Calculations />
    </div>
  );
};

export default CrystalBallApp;
