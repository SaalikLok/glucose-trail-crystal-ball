export type MedicationData = {
  generic: string,
  medicationType: string,
  dose: number,
  unit: string,
  timesTaken: number
}

export const medications: MedicationData[] = [
  {
    generic: "Metformin",
    medicationType: "Insulin Sensitizer",
    dose: 1,
    unit: "mg",
    timesTaken: 0
  },
  {
    generic: "Glipizide",
    medicationType: "Insulin Secretogogue",
    dose: 2,
    unit: "mg",
    timesTaken: 0
  },
  {
    generic: "Insulin",
    medicationType: "Insulin Replacement",
    dose: 1,
    unit: "g",
    timesTaken: 0
  }
] 
