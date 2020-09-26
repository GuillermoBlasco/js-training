import React from 'react';
import './App.css';

// This returns one number randomly from 1 to 6
const rollOneDice = () => Math.floor(Math.random() * 6) + 1;

function App() {
  const [dices, setDices] = React.useState([1,1]);
  const rollDices = () => setDices([rollOneDice(), rollOneDice()]);
  const isDoubleSix = dices.filter(x => x === 6).length === 2;
  return (
    <div className="App">
      <button onClick={rollDices}>Roll them</button>
      {dices.map((x,i) => <p key={i}>Dice is {x}</p>)}
      {isDoubleSix && <p>You win!</p>}
    </div>
  );
}

export default App;
