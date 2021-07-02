export type ActivityData = {
  intensity: "Sitting" | "Easy" | "Moderate" | "Vigorous"
  met: number,
  duration: number
}

export const activities: ActivityData[] = [
  {
    intensity: "Sitting",
    met: 1,
    duration: 0
  },
  {
    intensity: "Easy",
    met: 2,
    duration: 0
  },
  {
    intensity: "Moderate",
    met: 5,
    duration: 0
  },
  {
    intensity: "Vigorous",
    met: 8,
    duration: 0
  }
]


// Mild, moderate, intense
// Durations to choose: 15 min, 30 min, 60 min, 90 min
// Look up METs for mild, moderate and intense to calculate
