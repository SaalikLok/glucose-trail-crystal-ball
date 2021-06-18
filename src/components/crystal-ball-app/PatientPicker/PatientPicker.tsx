import React, { useState } from "react";
import PatientCard from "./PatientCard";
import { patients } from "../../../data/patients";

const PatientPicker: React.FC = () => {
  const [selectedPatient, setSelectedPatient] = useState(0);

  const selectPatient = (id: number) => {
    setSelectedPatient(id);
  };

  const patientCards = patients.map((patient) => {
    return (
      <PatientCard
        key={patient.key}
        id={patient.key}
        patientName={patient.patientName}
        subtitle={patient.subtitle}
        description={patient.description}
        hba1c={patient.hba1c}
        avgBloodSugar={patient.avgBloodSugar}
        weight={patient.weight}
        selectPatient={selectPatient}
        selectedPatient={selectedPatient}
      />
    );
  });

  return <div className="column">{patientCards}</div>;
};

export default PatientPicker;
