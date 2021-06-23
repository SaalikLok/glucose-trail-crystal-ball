import React from "react";
import PatientCard from "./PatientCard";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectCurrentPatient,
  updateCurrentPatient,
} from "./patientSlice";
import AvatarSelector from "./AvatarSelector";


const PatientPicker: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentPatient = useAppSelector(selectCurrentPatient);
  const { key, title, description, hba1c, avgBloodSugar, weight } = currentPatient

  const updatePatient = (id: number) => {
    dispatch(updateCurrentPatient(id));
  };

  return (
    <div className="column">
      <AvatarSelector
        selectPatient={updatePatient}
        selectedPatient={key}
      />
    <PatientCard
        key={key}
        title={title}
        description={description}
        hba1c={hba1c}
        avgBloodSugar={avgBloodSugar}
        weight={weight}
      />
    </div>);
};

export default PatientPicker;
