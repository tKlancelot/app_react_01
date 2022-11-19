import React from 'react';

const ExpertiseCard = (props) => {
    return (
        <div className='expertise-card' style={{borderColor:props.borderColor}}>
            <div className="expertise-card__header">
            </div>
            <div className="expertise-card__body">
                <h2>{props.title}</h2>
                <p>{props.paragraphOne}</p>
                <p>{props.paragraphTwo}</p>
            </div>
            <div className="expertise-card__footer" >
                
            </div>
        </div>
    );
};

export default ExpertiseCard;