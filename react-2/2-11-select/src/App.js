import React from 'react';
import logo from './logo.svg';
import './App.css';
import Select from "./select";

function App() {

	const arr = [
		{
			value: 1,
			text: "holi"
		},
		{
			value: 2,
			text: "digital"
		},
		{
			value: 3,
			text: "school"
		}
	]
  return (
    <div className="App">
      <Select label="Patabrava" options={arr} />
    </div>
  );
}

export default App;
