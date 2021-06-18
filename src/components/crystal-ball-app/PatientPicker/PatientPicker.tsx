import React from "react";
import PatientCard from "./PatientCard";

const PatientPicker = () => {
  return (
    <div className="column">
      <PatientCard />
      <PatientCard />
      <PatientCard />
      <PatientCard />
    </div>
  );
};

export default PatientPicker;
