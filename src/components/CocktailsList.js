import React from 'react';
import { SearchContext } from '../context/SearchContext';
import Cocktail from './Cocktail';

const CocktailsList = () => {

    //extraigo el value disponible desde el context
    
    const { cocktail } = React.useContext(SearchContext)

    return (
        <div className="row justify-content-between">
            { cocktail.map(trago => (
                <Cocktail
                    key={trago.idDrink}
                    name={trago.strDrink}
                    image={trago.strDrinkThumb}
                    id={trago.idDrink}
                ></Cocktail>
            )) }
        </div>
    );
};

export default CocktailsList;