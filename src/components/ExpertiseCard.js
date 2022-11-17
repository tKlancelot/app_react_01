import React from 'react';

const ExpertiseCard = (props) => {
    return (
        <div className='expertise-card' style={{borderColor:props.borderColor}}>
            <div className="expertise-card__header">
                <h3>{props.title}</h3>
            </div>
            <div className="expertise-card__body">
                <h4>{props.subtitle}</h4>
                <p>{props.paragraphOne}</p>
                <p>{props.paragraphTwo}</p>
                <p>{props.paragraphThree}</p>
            </div>
            <div className="expertise-card__footer" >
                footer
            </div>
        </div>
    );
};

export default ExpertiseCard;