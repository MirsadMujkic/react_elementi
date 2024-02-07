import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './Modal.css'; // Import CSS file for modal styling
import ModalForm from './ModalForm';
import Create from './Create';


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = (ModalForm) => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // Handle form submission here, such as sending data to a server
  };
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

         <Create onClick={openModal} />
      {isModalOpen && <ModalForm onClose={closeModal} onSubmit={handleFormSubmit} />}
      </header>
      
    </div>
  );

};
export default App;
