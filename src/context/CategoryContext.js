import Axios from 'axios';
import React from 'react';

//crear el context 
export const CategoryContext = React.createContext();

//Provider que es donde se encuentran las funciones y el state, este provider provee de todo a los hijos que esten en el mismo contexto
const CategoryProvider = (props) => {

    //crear el state de context
    const [categories,setCategories] = React.useState([]);

    //llamar la api para el listado categorias cuando cargue el context 
    React.useEffect(() => {
        
        const getCategories = async () => {

            const url= `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const categories = await Axios.get(url);
            setCategories(categories.data.drinks);
            
        }
        getCategories();
    },[]);

    return (
        <CategoryContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;