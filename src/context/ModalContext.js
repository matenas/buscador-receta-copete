import Axios from 'axios';
import React from 'react';

export const ModalContext = React.createContext();

const ModalProvider  = (props) => {


    const [idReceta, setIdReceta] = React.useState(null);
    const [receta, setReceta] = React.useState({});

    React.useEffect(()=> {

        if(idReceta === null) return;
       
        
        const callApiModal = async () => {
            const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
            const res = await Axios.get(url);
            setReceta(res.data.drinks[0]);
        }
        callApiModal();
    },[idReceta]);

    return (
        <ModalContext.Provider
            value={{
                setIdReceta,
                receta
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
};


export default ModalProvider;