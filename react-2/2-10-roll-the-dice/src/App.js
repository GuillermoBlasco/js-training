import React from 'react';
import './App.css';

// This returns one number randomly from 1 to 6
const rollOneDice = () => Math.floor(Math.random() * 6) + 1;
const rollManyDices = n => {
  const array = [];
  let i = 0;
  for (i = 0; i < n; i++) {
    array.push(rollOneDice());
  }
  return array;
};


const checkDices = dices => dices.find(x => x !== 6) === undefined;

const RandomNumberInterval = () => {
  const [number, setNumber] = React.useState();
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber(Math.random());
      console.log("random generated");
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return <p>{number}</p>;
}

const Dices = ({ nDices }) => {
  const [dices, setDices] = React.useState(rollManyDices(nDices));
  const handleClick = () => {
    setDices(rollManyDices(nDices));
  };
  React.useEffect(() => {
    setDices(rollManyDices(nDices));
  }, [nDices]);
  return (
    <div className="Dices">
      <button onClick={handleClick}>Roll them</button>
      {dices.map((x,i) => <p key={i}>Dice is {x}</p>)}
      {checkDices(dices) && <p>You win!</p>}
    </div>
  );
};

function App() {
  const [nDices, setNDices] = React.useState(2);

  return (
    <div className="App">
      {nDices > 0 && <RandomNumberInterval />}
      <input value={nDices} type="text" onChange={e => {
        debugger;
        try {
          const newNDices = parseInt(e.target.value);
          setNDices(newNDices);
        } catch (e) {
          setNDices(0);
        }
      }} />
      {nDices > 0 && <Dices nDices={nDices} />}
    </div>
  );
}

export default App;
