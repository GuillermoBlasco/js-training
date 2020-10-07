import React from 'react';



export const EmployeeForm = () => {
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
    <button onClick={handleCreate}>Create!</button>
  </div>)
};
