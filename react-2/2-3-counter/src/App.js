import React, {useState} from 'react';
import './App.css';
import {dnaCheck } from './solucion_cristian';

const App = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [checkValue, setCheckValue] = useState([]);

  console.log(checkValue);
  /* modify this buttons to solve the exercise.
  Do not change the data-testid values (we use them for the auto evaluation)
  */
  const doCheck = () => {
    const checkData = dnaCheck(text1, text2);
    setCheckValue(checkData);
  };
  const doReset = () => {
    setText1('');
    setText2('');
  };
  const enableCheckButton = text1.length === text2.length;
  const isAllOk = checkValue.filter(x => x !== 0).length === 0;

  return (
    <div className="App">
      <h1>Welcome to the Counter Exercise!</h1>
      <input type="text" onChange={v => setText1(v.currentTarget.value)} value={text1}/>
      <input type="text" onChange={v => setText2(v.currentTarget.value)} value={text2}/>
      {enableCheckButton && <button onClick={doCheck} disabled={!enableCheckButton}>Check</button>}
      <button onClick={doReset} disabled={text1.length === 0 && text2.length === 0}>Reset</button>
      <p>{checkValue.join('')}</p>
      {isAllOk ? <p>All ok</p> : <p>not ok</p>}
    </div>
  );
}

export default App;
