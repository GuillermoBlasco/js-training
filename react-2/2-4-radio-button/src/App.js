import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <div className="container">
      <h1>What is your OS (Operative System) ?</h1>
      <div className="radio">
        <label>
          <input
            type="radio"
          />
          Linux
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
          />
          Windows
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
          />
          MacOs
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
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
