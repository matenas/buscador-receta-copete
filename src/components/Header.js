import React from 'react';

const Header = () => {
    return (
        <header className="nes-container is-dark with-title">
            <h1>Buscador Recetas de copete</h1> 
            <section className="icon-list row align-items-center justify-content-between mt-5">
                <i className="nes-logo"></i>
                <i className="nes-bulbasaur"></i>         
                <i className="nes-squirtle"></i>
                <i className="nes-mario"></i>
                <i className="nes-octocat animate"></i>
                <i className="nes-kirby"></i>
                <i className="nes-ash"></i>
            </section>
  
        </header>
    );
};

export default Header;