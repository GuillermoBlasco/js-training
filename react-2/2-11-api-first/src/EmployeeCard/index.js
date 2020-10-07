import React from 'react';
import './EmployeeCard.css';



export const EmployeeCard = ({ employee }) => {

  return (<div className="EmployeeCard">
    <img src={employee.media} />
    <h2>{employee.name}</h2>
  </div>)
};
