import React, { useState } from 'react';
import ModalComponent from './Modal';
import './App.css';

function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleOnClose = () => setOpenModal(false);

  return (
    <div className="App">
      <button type="button" onClick={handleOpenModal}>
        Open Modal
      </button>
      <ModalComponent
        open={openModal}
        handleOnClose={handleOnClose}
      >
        <h3>React Simple Modal Example</h3>
      </ModalComponent>
    </div>
  );
}

export default App;
