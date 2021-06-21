import React from "react";
import PatientPicker from "./PatientPicker/PatientPicker";
import Calculator from "./Calculator/Calculator";
import RoutineBuilder from "./RoutineBuilder/RoutineBuilder";
import { GlobalProvider } from "./GlobalState";

const CrystalBallApp = () => {
  return (
    <GlobalProvider>
      <div className="section">
        <h1 className="title">The Crystal Ball</h1>
        <div className="columns">
            <PatientPicker />
            <RoutineBuilder />
            <Calculator />
        </div>
      </div>
    </GlobalProvider>
  );
};

export default CrystalBallApp;
