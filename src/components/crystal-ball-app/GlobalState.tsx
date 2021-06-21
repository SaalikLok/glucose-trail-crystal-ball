import React, { createContext, useReducer } from "react";

const initialValues = {
  patient: {
    id: 0,
    patientName: "",
    subtitle: "",
    description: "null",
    weight: 0,
    hba1c: 0,
    avgBloodSugar: 0,
  },
  routine: {
    meal1: null,
    meal2: null,
    meal3: null,
    snack: null,
    exercise: null,
    medication: null
  },
  calculation: {
    twoWeek: null,
    oneMonth: null,
    sixMonths: null
  },
  updatePatient: () => {}
}

export const GlobalState = createContext(initialValues)

type Action = {
  type: "patient" | "routine" | "calculation"
}

type State = {
  patient: object
  routine: object
  calculation: object
}

function reducer(state: State, action: Action): any {
  switch (action.type) {
    case "patient":
      return state.patient
    case "routine":
      return state.routine
    case "calculation":
      return state.calculation
    default:
      return state;
  }
}

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues)
  
  return (
    <GlobalState.Provider value={{
      patient: state.patient,
      routine: state.routine,
      calculation: state.calculation,
      updatePatient: () => dispatch({ type: "patient" }),
    }}>
      {children}
    </GlobalState.Provider>
  )
}

