import React from 'react';
import styled from '@emotion/styled'
//import de material-ui para modal
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import { ModalContext } from '../context/ModalContext';

const Avatar = styled.div`
    width: 150px;
    height: 150px;
    margin: 0 auto 20px;
    border-radius:50%;
    overflow:hidden;
`;
const Thumb = styled.img`
    width: 100%;
`;
const Name = styled.p`
    text-align:center;
`;
function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));



const Cocktail = ({name,image,id}) => {
    
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    
    const { setIdReceta,copete, setReceta } = React.useContext(ModalContext)

    const handleButton = () => {
    setIdReceta(id);
    }

    //abro cierro modal funcion

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };


    //saco variables del llamado a la api para ponerlos en el modal
    return (
        <>
        <div className="nes-container is-dark col-12 col-md-3 mb-3 text-center">
            <Avatar>
                <Thumb src={image} alt={name}/>
            </Avatar>
            <Name>{name}</Name>
            <button 
                type="button" 
                className="nes-btn is-primary"
                onClick={() => {
                    handleButton();
                    handleOpen();
                }}
                >
                Ver Receta
            </button>
        </div>   
        <Modal
            open={open}
            onClose={() => {
                handleClose();
                setReceta({});

            }}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            
            <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">{copete.strDrink}</h2>
                <p id="simple-modal-description">
                    {copete.strInstructions}
                </p>
                <img src={copete.strDrinkThumb} alt="" className="img-fluid my-4"/>
            </div>
        </Modal>
        </>
    );
};

export default Cocktail;