export type PatientData = {
  key: number;
  patientName: string;
  subtitle: string;
  description: string;
  weight: number;
  hba1c: number;
  avgBloodSugar: number;
}

export const patients: PatientData[] = [
  {
    key: 1,
    patientName: "Prediabetic Paul",
    subtitle: "Prediabetic Patient",
    description:
      "Paul is prediabetic. They are not on any medicine or insulin.",
    weight: 140,
    hba1c: 6.8,
    avgBloodSugar: 140,
  },
  {
    key: 2,
    patientName: "Diabetic Debbie",
    subtitle: "Diabetic Patient",
    description: "Debbie has diabetes, but isn't taking medicine or insulin.",
    weight: 178,
    hba1c: 7.4,
    avgBloodSugar: 167,
  },
  {
    key: 3,
    patientName: "Medicinal Mark",
    subtitle: "Diabetic Patient on Medication",
    description: "Mark takes medication to manage their diabetes.",
    weight: 200,
    hba1c: 7.8,
    avgBloodSugar: 180,
  },
  {
    key: 4,
    patientName: "Insulin Igor",
    subtitle: "Diabetic Patient on Insulin",
    description: "Igor uses insulin to manage their diabetes.",
    weight: 230,
    hba1c: 8,
    avgBloodSugar: 210,
  },
];
