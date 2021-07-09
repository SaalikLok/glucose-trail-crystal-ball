import React from "react";
import PatientPicker from "./PatientPicker/PatientPicker";
import Calculator from "./Calculator/Calculator";
import RoutineBuilder from "./RoutineBuilder/RoutineBuilder";

const CrystalBallApp = () => {
  return (
    <div>
      <div className="section">
        <h1 className="title">The Crystal Ball</h1>
      </div>
      <div className="section">
        <div className="columns">
          <PatientPicker />
          <RoutineBuilder />
        </div>
      </div>
      <Calculator />
      <div className="container has-text-centered mb-6 mt-6">
        <p className="is-size-7">
          &copy; Glucose Trail 2021 ~ All Rights Reserved.
        </p>
        <p className="is-size-7">
          Built by{" "}
          <a href="http://saaliklok.com" target="_blank">
            Saalik Lokhandwala
          </a>
          .{" "}
          <a href="http://github.com/saaliklok/glucose-trail-crystal-ball">
            Open Source
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default CrystalBallApp;
