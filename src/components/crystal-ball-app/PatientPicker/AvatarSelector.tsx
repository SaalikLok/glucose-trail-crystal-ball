import React from "react";
import { patients } from "../../../data/patients";

type Props = {
  selectPatient(id: number): void;
  selectedPatient: number;
};

const AvatarSelector: React.FC<Props> = ({
  selectPatient,
  selectedPatient,
}: Props) => {

  const patientAvatars = patients.map((patient, index) => {
    
    let classNames = "icon is-large"
    if(selectedPatient === index) {
      classNames = "icon is-large selected-patient"
    }
    
    return (
      <span
        onClick={() => selectPatient(index)}
        className={classNames}
        key={index}
      >
        <i className={`fas fa-${patient.icon} fa-2x`}></i>
      </span>
    );
  });

  return <div>{patientAvatars}</div>;
};
export default AvatarSelector;
