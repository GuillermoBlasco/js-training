import React from 'react';
import {ThemeContext} from "../ThemeContext";
import {Button} from "../Button";



export const EmployeeForm = () => {
  const { theme } = React.useContext(ThemeContext);
  const [name, setName] = React.useState('');
  const handleCreate = () => {
    fetch('http://localhost:3000/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name }),
    })
  };
  return (<div className="EmployeeCard">
    <input value={name} onChange={e => setName(e.target.value)} />
    <Button onClick={handleCreate}>Create!</Button>
  </div>)
};
