import React from 'react';

const Modal = ({modaleState,updateModaleState}) => {

    const handleClick = () => {
        updateModaleState({
            modaleState : !modaleState
        })
        console.log(modaleState);
    }

    return (

            <div className='modale'>

                {/* <Draggable handle=".handle"> */}
                    <div className='modale__frame'>
                        <div className="modale__frame__header handle">
                            <h3>À propos de ce site</h3>
                            <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path fill="white" d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"/></svg>
                        </div>
                        <div className="modale__frame__body">
                            <p>Bonjour et bienvenue sur mon site web crée avec le framework React</p>
                            <p>Pour les connaisseurs, cette boîte de dialogue est une boite modale, et dans le cadre de react, c'est simplement un composant qui apparaît ou non en fonction du state.</p>
                            <p>Je vous souhaite une agréable visite !</p>
                        </div>
                        <div className="modale__frame__footer">
                            
                        </div>
                    </div>
                {/* </Draggable> */}
            </div>
    );
};

export default Modal;