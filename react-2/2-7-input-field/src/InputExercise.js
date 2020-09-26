import React, { useState } from 'react';
import './InputExercise.css';

function InputExercise() {
  const [inputText, setInputText] = useState("");

  // modify this input to solve the exercise - do not change the data-testid values (we use them for the auto evaluation)
  return (
    <div className="container">
      <input className="input" data-testid="input-test"/>
      <span data-testid="span-test" className="inputResult">Typed text: {inputText}</span>
    </div>
  );
}

export default InputExercise;
