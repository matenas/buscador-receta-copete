import React from 'react';

const Header = () => {
    return (
        <header className="nes-container is-dark with-title">
            <h1>Buscador Recetas de copete</h1> 
            <section className="icon-list row align-items-center justify-content-between mt-5">
                <i className="nes-logo"></i>
                <i className="nes-bulbasaur"></i>         
                <i className="nes-squirtle"></i>
                <i class="nes-mario"></i>
                <i class="nes-octocat animate"></i>
                <i class="nes-kirby"></i>
                <i class="nes-ash"></i>
            </section>
  
        </header>
    );
};

export default Header;