import React from 'react';
import ModalComponent from './Modal';
import './App.css';

function App() {
  // Your code here

  const handleOpenModal = () => {
    // Your code here
  };
  const handleOnClose = () => {
    // Your code here
  };

  return (
    <div className="App">
      <button type="button" onClick={handleOpenModal}>
        Open Modal
      </button>
      <ModalComponent
        open={}
        handleOnClose={handleOnClose}
      >
        <h3>React Simple Modal Example</h3>
      </ModalComponent>
    </div>
  );
}

export default App;
