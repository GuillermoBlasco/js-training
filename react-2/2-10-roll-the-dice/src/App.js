import React from 'react';
import './App.css';

// This returns one number randomly from 1 to 6
const rollOneDice = () => Math.floor(Math.random() * 6) + 1;

function App() {
  const [dices, setDices] = React.useState([1,1]);
  return (
    <div className="App">
      <button>Roll them</button>
      {dices.map((x,i) => <p key={i}>Dice is {x}</p>)}
      {/* on double six, this should display <p>You win!</p> */}
    </div>
  );
}

export default App;
