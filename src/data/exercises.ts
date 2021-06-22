export type Exercise = {
  caloriesBurnedPerMin: number
}

export const exercises: { [name: string]: Exercise } = {
  walking: {
    caloriesBurnedPerMin: 10
  },
  running: {
    caloriesBurnedPerMin: 20
  },
  sitting: {
    caloriesBurnedPerMin: 3
  }
}