import React from 'react'
import Patient3 from '../../image-components/Patient3'

const PatientCard = () => {
  return (
    <div className="card mb-6">
      <div className="card-image">
        <figure className="image">
          <Patient3/>
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-4">Patient Person</p>
        <p className="subtitle is-6">Pre-Diabetic</p>
        <div className="content">
          This patient is someone who's a prediabetic. They're not on any medications or insulin.
          <div className="container mt-3">
            <span className="tag is-green m-1">5.0 A1C</span>
            <span className="tag is-yellow m-1">196 lbs</span>
            <span className="tag is-danger m-1">150 mg/dL</span>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="card-footer-item has-background-yellow">Select This Patient</div>
      </div>
    </div>
  )
}

export default PatientCard
