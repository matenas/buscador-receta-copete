import React from 'react';

//crear el context 
export const CategoryContext = React.createContext();

//Provider que es donde se encuentran las funciones y el state, este provider provee de todo a los hijos que esten en el mismo contexto
const CategoryProvider = (props) => {
    //crear el state de context


    return (
        <CategoryContext.Provider
            value={{

            }}
        >

                {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;