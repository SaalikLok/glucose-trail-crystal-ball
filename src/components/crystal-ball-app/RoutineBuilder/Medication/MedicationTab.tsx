import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectMedicationsState } from "./medicationsSlice";
import MedicationPanel from "./MedicationPanel";

const MedicationTab = () => {
  const medications = useAppSelector(selectMedicationsState);

  const medicationPanels = medications.map((medication) => {
    return <MedicationPanel key={medication.generic} medication={medication} />;
  });

  return <>{medicationPanels}</>;
};

export default MedicationTab;
