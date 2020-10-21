import Axios from 'axios';
import React from 'react';
import { useEffect } from 'react';

export const SearchContext = React.createContext();

const SearchProvider = (props) => {

    //state con la consulta ya realizada 
    const [cocktail, setCocktail] = React.useState([]);

    //state para hacer la consulta
    const [searchReceta, setSearchReceta] = React.useState({
        name: '',
        category: ''
    })
    const {name,category} = searchReceta;
    //cuando tengo los datos del formulario puedo hacer la consulta a la api
    useEffect(() => {
        if(searchReceta.name === '') return;
        
        const callApi = async () => {
            const urlApi = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
            const res = await Axios.get(urlApi);
            console.log(res.data.drinks);
            setCocktail(res.data.drinks);
        }
        callApi();

    },[searchReceta])



    return (
        <SearchContext.Provider
            value={ {
                setSearchReceta,
                cocktail
            }}
        >
            {props.children}
        </SearchContext.Provider>
    )
}
export default SearchProvider;