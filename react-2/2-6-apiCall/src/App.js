import React, {useState, useEffect} from 'react';
import './App.css';
import chuckNorris from './chucknorris.png';

function App() {

  const [fact, setFact] = useState('');
  const [refresh, setRefresh] = useState(false);
  const url = 'https://api.chucknorris.io/jokes/random';

  useEffect(() => {
        (async () => {
            const res = await fetch(url);
            const data = await res.json();
            setFact(data.value);
        })();
    }, [url, refresh]);

  const refreshFact = () => {
      setRefresh(!refresh);
  };

  return (
    <div className="App">
      <h1>Welcome to the Chuck Norris facts Exercise!</h1>
        <img src={chuckNorris} alt="chuckNorris"/>
        <h3 data-testid="fact">{fact}</h3>
        <button onClick={refreshFact}>Get random fact</button>
    </div>
  );
}

export default App;
