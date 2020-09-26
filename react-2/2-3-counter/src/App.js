import React, {useState} from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState(0);

  const incrementValue = () => {
    /* Your code here */
  };

  const decrementValue = () => {
    /* Your code here */
  };

  /* modify this buttons to solve the exercise.
  Do not change the data-testid values (we use them for the auto evaluation)
  */
  return (
    <div className="App">
      <h1>Welcome to the Counter Exercise!</h1>
        <p data-testid="value">{value}</p>
        <button data-testid="decrement">Decrement</button>
        <button data-testid="increment">Increment</button>
    </div>
  );
}

export default App;
