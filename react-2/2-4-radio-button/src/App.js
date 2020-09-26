import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedValue, setSelectedValue] = useState();

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="container">
      <h1>What is your OS (Operative System) ?</h1>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="linux"
            checked={selectedValue === "linux"}
            onChange={handleChange}
          />
          Linux
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="windows"
            checked={selectedValue === "windows"}
            onChange={handleChange}
          />
          Windows
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="macos"
            checked={selectedValue === "macos"}
            onChange={handleChange}
          />
          MacOs
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="other"
            checked={selectedValue === "other"}
            onChange={handleChange}
          />
          Other
        </label>
      </div>

      <div className="result">
        {selectedValue ? (<h2>Your OS is: {selectedValue}</h2>) : (<h2>Not selected</h2>)}
      </div>
    </div>
  );
}

export default App;
