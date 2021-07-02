export type MedicationData = {
  generic: string,
  dose: number,
  unit: string,
  timesTaken: number
}

export const medications: MedicationData[] = [
  {
    generic: "Metformin",
    dose: 1,
    unit: "mg",
    timesTaken: 0
  },
  {
    generic: "dinosaur",
    dose: 2,
    unit: "mg",
    timesTaken: 0
  },
  {
    generic: "pokemon",
    dose: 1,
    unit: "g",
    timesTaken: 0
  }
] 
