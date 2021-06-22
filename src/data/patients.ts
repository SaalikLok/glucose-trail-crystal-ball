export type PatientData = {
  key: number;
  title: string;
  description: string;
  weight: number;
  hba1c: number;
  avgBloodSugar: number;
  icon: "user" | "user-ninja" | "user-tie" | "user-nurse"
}

export const patients: PatientData[] = [
  {
    key: 0,
    title: "Prediabetic Patient",
    description:
      "They are not on any medicine or insulin.",
    weight: 140,
    hba1c: 6.8,
    avgBloodSugar: 140,
    icon: "user"
  },
  {
    key: 1,
    title: "Diabetic Patient",
    description: "This patient has diabetes, but isn't taking medicine or insulin.",
    weight: 178,
    hba1c: 7.4,
    avgBloodSugar: 167,
    icon: "user-nurse"
  },
  {
    key: 2,
    title: "Diabetic Patient on Medication",
    description: "This patient takes medication to manage their diabetes.",
    weight: 200,
    hba1c: 7.8,
    avgBloodSugar: 180,
    icon: "user-ninja"
  },
  {
    key: 3,
    title: "Diabetic Patient on Insulin",
    description: "This patient uses insulin to manage their diabetes.",
    weight: 230,
    hba1c: 8,
    avgBloodSugar: 210,
    icon: "user-tie"
  },
];
