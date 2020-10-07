import React from 'react';
import {EmployeeCard} from "../EmployeeCard";
import './EmployeeList.css';
import {EmployeeForm} from "../EmployeeForm";

const makeQuery = params => {
  if (!params || Object.keys(params).length === 0) {
    return '';
  }
  return '?' + Object.keys(params).map(key => key + "=" + params[key]).join('&')
};

export const EmployeeList = () => {
  const [name, setName] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [employees, setEmployees] = React.useState(undefined);
  React.useEffect(() => {
    let url = "http://localhost:3000/employees";
    const params = {};
    if (name !== '') {
      params['name_like'] = name;
    }
    if (page !== '') {
      params['_page'] = page;
    }
    fetch(url + makeQuery(params))
      .then(response => response.json())
      .then(jsonData => {
        setEmployees(jsonData);
      });
    console.log('maiu');
  }, [name, page]);

  let content = <p>Loading...</p>;
  if (employees) {
    if (employees.length === 0) {
      content = <p>No matching employees</p>
    } else {
      content = employees.map(employee => <EmployeeCard employee={employee}/>);
    }
  }
  const handleNextPage = () => setPage(page + 1);
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  return (<div className="EmployeeList">
    <input value={name} onChange={e => setName(e.target.value)} />
    {content}
    <div className="Pagination">
      <button onClick={handlePrevPage}>Prev Page</button>
      <p>{page}</p>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
    <EmployeeForm />
  </div>);
};
