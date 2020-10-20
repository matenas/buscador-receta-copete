import React from 'react';
import { CategoryContext } from '../context/CategoryContext';
import { SearchContext } from '../context/SearchContext';

const Form = () => {

    const { categories } = React.useContext(CategoryContext)
    const { setSearchReceta } = React.useContext(SearchContext)

    //creo el state local para guardar la busqueda
    const [search, setSearch] = React.useState({
        name: '',
        category: ''
    })

    //funcion para guardar la busqueda en el state
    const saveSearch = (e) => {
        setSearch({
            //guardo una copia del state para no sobreescribirlo cuando me pase al otro input
            ...search,
            [e.target.name]: e.target.value
        })
    }
    //funcion al presionar buscar, guardo datos en state del context
    const handleSubmit = (e) => {
        e.preventDefault();

        setSearchReceta(search);
    }

    return (    
        <form 
            className="col-12"
            onSubmit={handleSubmit}
        >
            <div className="nes-container with-title">
                <h2 className="title">Busca copete por categoria o ingredientes</h2>
                <div className="row align-items-end">
                    <div className="col-12 col-md-6">
                                
                        <div className="nes-field">
                            <label htmlFor="name_field">Buscar por ingredientes</label>
                            <input 
                                type="text" 
                                id="name_field" 
                                className="nes-input" 
                                placeholder="buscar por ingredientes"
                                name="name"
                                onChange={saveSearch}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="name_field">Buscar por ingredientes</label>
                        <div className="nes-select">
                            <select 
                                id="default_select"
                                name="category"    
                                onChange={saveSearch}
                                defaultValue={""}
                            >
                                <option value="" disabled hidden>Selecciona</option>
                                {categories.map( (element, index) => (
                                    <option key={index} value={element.strCategory}>{element.strCategory}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="col col-md-12 mt-4">
                        <button 
                            type="submit" 
                            className="nes-btn is-primary float-right"
                        >Buscar copete
                        </button>
                    </div>
                </div>
            </div>

        </form>
    );
};

export default Form;