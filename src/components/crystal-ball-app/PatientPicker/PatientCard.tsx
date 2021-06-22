import React, { useState, useEffect } from "react";
import Patient1 from "../../image-components/Patient1";
import Patient2 from "../../image-components/Patient2";
import Patient3 from "../../image-components/Patient3";
import Patient4 from "../../image-components/Patient4";

type Props = {
  id: number;
  patientName: string;
  subtitle: string;
  description: string;
  weight: number;
  hba1c: number;
  avgBloodSugar: number;
  selectPatient(id: number): void;
  selectedPatient: number;
};

const PatientCard: React.FC<Props> = ({
  id,
  patientName,
  subtitle,
  description,
  weight,
  hba1c,
  avgBloodSugar,
  selectPatient,
  selectedPatient,
}: Props) => {
  const [selectedClass, setSelectedClass] = useState("");

  const avatar = () => {
    switch (id) {
      case 1:
        return <Patient1 />;
      case 2:
        return <Patient2 />;
      case 3:
        return <Patient3 />;
      case 4:
        return <Patient4 />;
      default:
        break;
    }
  };

  useEffect(() => {
    if (id === selectedPatient) {
      setSelectedClass("selected");
    } else {
      setSelectedClass("");
    }
  });

  return (
    <div className={`card mb-6 ${selectedClass}`}>
      <div className="card-image">
        <figure className="image">{avatar()}</figure>
      </div>
      <div className="card-content">
        <p className="title is-4">{patientName}</p>
        <p className="subtitle is-6">{subtitle}</p>
        <div className="content">
          {description}
          <div className="container mt-3">
            <span className="tag is-green m-1">{hba1c} A1C</span>
            <span className="tag is-yellow m-1">{weight} lbs</span>
            <span className="tag is-danger m-1">{avgBloodSugar} mg/dL</span>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div
          onClick={() => {
            selectPatient(id);
          }}
          className="card-footer-item has-background-yellow"
        >
          Select This Patient
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
