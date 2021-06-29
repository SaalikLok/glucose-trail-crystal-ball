export type Exercise = {
  MET: number
}

export const exercises: { [name: string]: Exercise } = {
  sitting: {
    MET: 1
  },
  easy: {
    MET: 2
  },
  moderate: {
    MET: 5
  },
  vigorous: {
    MET: 8
  }
}

// Mild, moderate, intense
// Durations to choose: 15 min, 30 min, 60 min, 90 min
// Look up METs for mild, moderate and intense to calculate
