import React from "react";
import PatientCard from "./PatientCard";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectAllPatients,
  selectCurrentPatient,
  updateCurrentPatient,
} from "./patientSlice";

const PatientPicker: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentPatient = useAppSelector(selectCurrentPatient);
  const patients = useAppSelector(selectAllPatients);

  const updatePatient = (id: number) => {
    dispatch(updateCurrentPatient(id));
  };

  const patientCards = patients.map((patient: any) => {
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
        selectPatient={updatePatient}
        selectedPatient={currentPatient}
      />
    );
  });

  return <div className="column">{patientCards}</div>;
};

export default PatientPicker;
