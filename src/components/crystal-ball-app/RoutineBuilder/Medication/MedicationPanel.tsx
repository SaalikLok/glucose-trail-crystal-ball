import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { MedicationData } from "../../../../data/medications";
import { updateMedication } from "./medicationsSlice";

type Props = {
  medication: MedicationData;
};

const MedicationPanel: React.FC<Props> = ({ medication }) => {
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTimesTaken = Number(e.target.value);
    const updatedMedication = {
      ...medication,
      timesTaken: newTimesTaken,
    };

    dispatch(updateMedication(updatedMedication));
  };

  return (
    <div className="panel-block columns">
      <div className="column">
        <span className="panel-icon">
          <i className="fas fa-medicine"></i>
        </span>
        {medication.generic} - {medication.dose} {medication.unit}
      </div>
      <div className="column">
        <input
          className="input is-small mr-3"
          type="number"
          name=""
          id=""
          min="0"
          value={medication.timesTaken}
          onChange={(e) => handleChange(e)}
        />
        times taken daily
      </div>
    </div>
  );
};

export default MedicationPanel;
