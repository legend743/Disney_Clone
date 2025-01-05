import React, { useEffect, useState } from 'react';

interface Patient {
  fullName: string | null;
  dateOfBirth: string | null;
  gender: string | null;
  socialSecurityNumber: string | null;
  nationality: string | null;
  maritalStatus: string | null;
  address: string | null;
  homePhoneNumber: string | null;
  emailAddress: string | null;
  insuranceDetails: string | null;
  height: number | null;
  weight: number | null;
  bloodPressure: string | null;
  patientImage: string | null;
}

function PatientDetails() {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:8080/hospital/getpatient/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch patient details');
        }
        return response.json();
      })
      .then((data) => setPatient(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!patient) {
    return <div>Loading patient details...</div>;
  }

  return (
    <div className="patient-details">
      <h1>Patient Details</h1>
      <div className="detail">
        <strong>Full Name:</strong> {patient.fullName || 'N/A'}
      </div>
      <div className="detail">
        <strong>Date of Birth:</strong> {patient.dateOfBirth || 'N/A'}
      </div>
      <div className="detail">
        <strong>Gender:</strong> {patient.gender || 'N/A'}
      </div>
      <div className="detail">
        <strong>Nationality:</strong> {patient.nationality || 'N/A'}
      </div>
      <div className="detail">
        <strong>Marital Status:</strong> {patient.maritalStatus || 'N/A'}
      </div>
      <div className="detail">
        <strong>Address:</strong> {patient.address || 'N/A'}
      </div>
      <div className="detail">
        <strong>Home Phone Number:</strong> {patient.homePhoneNumber || 'N/A'}
      </div>
      <div className="detail">
        <strong>Email Address:</strong> {patient.emailAddress || 'N/A'}
      </div>
      <div className="detail">
        <strong>Insurance Details:</strong> {patient.insuranceDetails || 'N/A'}
      </div>
      <div className="detail">
        <strong>Height:</strong> {patient.height || 'N/A'} cm
      </div>
      <div className="detail">
        <strong>Weight:</strong> {patient.weight || 'N/A'} kg
      </div>
      <div className="detail">
        <strong>Blood Pressure:</strong> {patient.bloodPressure || 'N/A'}
      </div>
      {patient.patientImage && (
        <div className="detail">
          <strong>Patient Image:</strong>
          <img src={patient.patientImage} alt="Patient" />
        </div>
      )}
    </div>
  );
}

export default PatientDetails;
