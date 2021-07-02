import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { medications, MedicationData } from "../../../../data/medications";

type MedicationState = {
  allMedications: MedicationData[];
};

const initialState: MedicationState = {
  allMedications: medications,
};

export const medicationsSlice = createSlice({
  name: "medications",
  initialState,
  reducers: {
    updateMedication: (state, action: PayloadAction<MedicationData>) => {
      const medicationToUpdate = state.allMedications.findIndex(
        (medication) => medication.generic === action.payload.generic
      );
      state.allMedications[medicationToUpdate].timesTaken =
        action.payload.timesTaken;
    },
  },
});

export const { updateMedication } = medicationsSlice.actions;
export const selectMedicationsState = (state: RootState) =>
  state.medications.allMedications;
export default medicationsSlice.reducer;
