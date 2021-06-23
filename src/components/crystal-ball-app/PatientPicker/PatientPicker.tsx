import React from "react";
import PatientCard from "./PatientCard";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectCurrentPatient,
  updateCurrentPatient,
} from "./patientSlice";
import { patients, PatientData } from "../../../data/patients"
import AvatarSelector from "./AvatarSelector";


const PatientPicker: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentPatientId = useAppSelector(selectCurrentPatient);
  const patient = patients[currentPatientId]

  const updatePatient = (id: number) => {
    dispatch(updateCurrentPatient(id));
  };

  return (
    <div className="column">
      <AvatarSelector
        selectPatient={updatePatient}
        selectedPatient={currentPatientId}
      />
    <PatientCard
        key={patient.key}
        title={patient.title}
        description={patient.description}
        hba1c={patient.hba1c}
        avgBloodSugar={patient.avgBloodSugar}
        weight={patient.weight}
      />
    </div>);
};

export default PatientPicker;
