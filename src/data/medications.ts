export type Medication = {
  generic: string,
  dose: number,
  unit: string
}

export const medications: { [name: string ]: Medication } = {
  metformin: {
    generic: "Metformin",
    dose: 1,
    unit: "mg"
  },
  tyranasaurus: {
    generic: "dinosaur",
    dose: 2,
    unit: "mg"
  },
  pikachu: {
    generic: "pokemon",
    dose: 1,
    unit: "g"
  }
} 