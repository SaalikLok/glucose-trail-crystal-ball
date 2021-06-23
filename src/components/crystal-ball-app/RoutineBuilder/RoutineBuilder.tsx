import React from "react";
import MealPicker from "./MealPicker";

const RoutineBuilder = () => {
  return (
  <div className="column">
    <nav className="panel is-dark">
      <p className="panel-heading">
        Routine Builder
      </p>
      <p className="panel-tabs">
        <a className="active">Meals</a>
        <a>Physical Activity</a>
        <a>Medications</a>
      </p>
      <div className="panel-block">
        <span className="panel-icon">
          <i className="fas fa-utensils"></i>
        </span>
        Fast Food Meal
      </div>
      <div className="panel-block is-active">
        <span className="panel-icon">
          <i className="fas fa-utensils"></i>
        </span>
        Pancake Breakfast
      </div>
    </nav>
    
    <MealPicker />  
  </div>);
};

export default RoutineBuilder;
