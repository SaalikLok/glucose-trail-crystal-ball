import React from "react";
import TodayCalculation from "./TodayCalculationTile";
import FutureCalculationTile from "./FutureCalculationTile";
import { useAppSelector } from "../../app/hooks";
import { selectCurrentPatient } from "../PatientPicker/patientSlice";
import { selectMeals } from "../RoutineBuilder/Meals/mealsSlice";
import { selectActivitiesState } from "../RoutineBuilder/Activity/activitySlice";
import { selectMedicationsState } from "../RoutineBuilder/Medication/medicationsSlice";
import { calculatePredictionValues, calculateTodayAvgBloodSugar } from "../../../data/calculations";

const Calculator = () => {
  /**
   * Pull in current state of patient and routine here and perform calculations.
   * Pass appropriate values down to calculations that read from it.
   */
  const patient = useAppSelector(selectCurrentPatient)
  const meals = useAppSelector(selectMeals)
  const activity = useAppSelector(selectActivitiesState)
  const medication = useAppSelector(selectMedicationsState)

  const todayAvgBloodSugar = calculateTodayAvgBloodSugar(patient, meals, activity, medication)

  return (
    <div className="column">
      <p className="title">Predictions</p>
      <div className="columns">
        <div className="column">
          <TodayCalculation bloodSugar={todayAvgBloodSugar}/>
        </div>
        <div className="column">
          <FutureCalculationTile calculation={calculatePredictionValues(patient, meals, activity, medication, 2)} weeks={2} />
        </div>
        <div className="column">
          <FutureCalculationTile calculation={calculatePredictionValues(patient, meals, activity, medication, 6)} weeks={6} />
        </div>
        <div className="column">
          <FutureCalculationTile calculation={calculatePredictionValues(patient, meals, activity, medication, 12)} weeks={12} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
