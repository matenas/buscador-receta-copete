import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import "nes.css/css/nes.min.css";
import CategoryProvider from './context/CategoryContext';
import SearchProvider from './context/SearchContext';


function App() {
  return (
    <CategoryProvider>
      <Header/>
      <div className="nes-container mt-2">
        <div className="row">
          <SearchProvider>
            <Form/>
          </SearchProvider> 
        </div>
      </div>
    </CategoryProvider>
  );
}

export default App;
