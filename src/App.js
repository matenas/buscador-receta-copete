import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import "nes.css/css/nes.min.css";


function App() {
  return (
    <>
      <Header/>
      <div className="nes-container mt-2">
        <div className="row">
          <Form/> 
        </div>
      </div>
    </>
  );
}

export default App;
