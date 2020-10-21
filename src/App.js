import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CocktailsList from './components/CocktailsList';
import "nes.css/css/nes.min.css";
import CategoryProvider from './context/CategoryContext';
import SearchProvider from './context/SearchContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoryProvider>
      <Header/>
      <SearchProvider>
        <div className="nes-container mt-2 mb-4">
          <div className="row">
              <Form/>
          </div>
        </div>
        <ModalProvider>
        <div className="nes-container with-title">
          <h2 className="title">Lista</h2>
          <CocktailsList/>
        </div>
        </ModalProvider>
      </SearchProvider> 
    </CategoryProvider>
  );
}

export default App;
