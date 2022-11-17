import React from 'react';
import $ from 'jquery';

const Modal = () => {

    const handleClick = () => {
        $('.modale').hide();
    }

    return (
        <div className='modale'>
            <div className='modale__frame'>
                <div className="modale__frame__header">

                </div>
                <div className="modale__frame__body">
                    <p>Bonjour et bienvenue sur mon site web crée avec le framework React</p>
                    <p>Pour les connaisseurs, cette boîte de dialogue est une boite modale, et dans le cadre de react, c'est simplement un composant qui apparaît ou non en fonction du state.</p>
                </div>
                <div className="modale__frame__footer">
<svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"/></svg>
                </div>
            </div>
        </div>
    );
};

export default Modal;