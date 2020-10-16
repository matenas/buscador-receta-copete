import React from 'react';

const Form = () => {
    return (    
        <form className="col-12">
            <div className="nes-container with-title">
                <h2 className="title">Busca copete por categoria o ingredientes</h2>
                <div className="row align-items-end">
                    <div className="col-12 col-md-6">
                                
                        <div className="nes-field">
                            <label for="name_field">Buscar por ingredientes</label>
                            <input 
                                type="text" 
                                id="name_field" 
                                className="nes-input" 
                                placeholder="buscar por ingredientes"
                                name="name"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <label for="name_field">Buscar por ingredientes</label>
                        <div className="nes-select">
                            <select 
                                id="default_select"
                                name="category"    
                            >
                                <option value="" disabled selected hidden>Selecciona categoria</option>
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