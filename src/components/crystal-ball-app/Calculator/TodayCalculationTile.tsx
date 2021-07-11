import React from "react";

type Props = {
  bloodSugar: number;
};

const TodayCalculation: React.FC<Props> = ({ bloodSugar }: Props) => {
  const renderBloodSugar = () => {
    if (bloodSugar < 150) {
      return (
        <p className="title has-text-success">
          {Math.round(bloodSugar)}
          <span className="tag is-success ml-4">mg/dl</span>
        </p>
      );
    } else if (bloodSugar >= 150 && bloodSugar <= 200) {
      return (
        <p className="title has-text-warning">
          {Math.round(bloodSugar)}
          <span className="tag is-warning ml-4">mg/dl</span>
        </p>
      );
    } else {
      return (
        <p className="title has-text-danger">
          {Math.round(bloodSugar)}
          <span className="tag is-danger ml-4">mg/dl</span>
        </p>
      );
    }
  };

  return (
    <div className="content">
      <p>If you were to have this routine,</p>
      <p>
        <b>Today</b> your average blood sugar would be...
      </p>
      {renderBloodSugar()}
    </div>
  );
};

export default TodayCalculation;
