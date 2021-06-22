import React from "react";

type Props = {
  title: string;
  description: string;
  weight: number;
  hba1c: number;
  avgBloodSugar: number;
};

const PatientCard: React.FC<Props> = ({
  title,
  description,
  weight,
  hba1c,
  avgBloodSugar,
}: Props) => {
  return (
    <div className="box mb-6">
      <div className="content">
        <p className="subtitle is-5">{title}</p>
        {description}
        <div className="container mt-3">
          <span className="tag is-green m-1">{hba1c} A1C</span>
          <span className="tag is-yellow m-1">{weight} lbs</span>
          <span className="tag is-danger m-1">{avgBloodSugar} mg/dL</span>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
