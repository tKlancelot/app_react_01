import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const ProjectCard = (props) => {

    // let state = {
    //     showInfo : false
    // }   

    const [state, setState] = useState({showInfo : false});

    const handleInfo = () => {
        setState({
            showInfo : !state.showInfo
        })
    }

    let {index,name,description,environment,category,development,technos,librairies,plugins,permalink,picture} = props;

    return (
        <div>
            <div className="project-card" key={index}>
                <div className="project-card__header">
                    {/* <img src={picture}/> */}
                    {picture ? <img src={picture} alt={name} onClick = {handleInfo}/> : <img onClick = {handleInfo} src='./images/steve-johnson.jpg' alt="par défaut"/> }
                    
                </div>
                <div className="project-card__body">
                    <h3> {name} </h3>
                    <button onClick = {handleInfo} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11 17h2v-6h-2Zm1-8q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 13q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/></svg>
                    </button>
                </div>
                {/* <p>Description : {description}</p> */}
                {(state.showInfo === true) &&
                    
                    // <Draggable handle=".handle">
                        <div className="details__panel">
                            <div className="details__panel__frame">
                                <div className="details__panel__frame__header handle">
                                    <h3>{name}</h3>
                                    <button onClick = {handleInfo} >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"/></svg>
                                    </button>
                                </div>
                                <div className="details__panel__frame__body">
                                    <Splide 
                                        aria-label="details panel body"
                                        options={{
                                            type:'loop',
                                            rewind: true,
                                            width : '30vw',
                                            gap   : '2vw',
                                            perPage:1,
                                            arrows:true,
                                            pagination:false,
                                            breakpoints: {
                                                780: {
                                                    // perPage: 2,
                                                    gap   : '0vw',
                                                    width : '82vw',
                                                }
                                            }
                                        }}
                                    >
                                        <SplideSlide>
                                            <table className='details'>
                                                <tbody>
                                                    <tr>
                                                    <td>environnement</td>
                                                    <td>{environment}</td>
                                                    </tr>
                                                    <tr>
                                                    <td>catégories</td>
                                                    <td>
                                                        {category.map((cat,index) => (
                                                        <span key={index}>
                                                            <span>{cat}, </span>
                                                        </span>  
                                                        ))}
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <td>développement</td>
                                                    <td>
                                                        {development.map((env,index) => (
                                                        <span key={index}>
                                                            <span>{env}, </span>
                                                        </span>  
                                                        ))}
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <td>technos</td>
                                                    <td>
                                                        {technos.map((tech,index) => (
                                                        <span key={index}>
                                                            <span>{tech}, </span>
                                                        </span>  
                                                        ))}
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <td>librairies</td>
                                                    <td>
                                                        {librairies.map((lib,index) => (
                                                        <span key={index}>
                                                            <span>{lib}, </span>
                                                        </span>  
                                                        ))}
                                                    </td>
                                                    </tr>
                                                    <tr>
                                                    <td>plugins</td>
                                                    <td>
                                                        {plugins.map((plugin,index) => (
                                                        <span key={index}>
                                                            <span>{plugin}, </span>
                                                        </span>  
                                                        ))}
                                                    </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div className='description-frame'>
                                                <p>{description}</p>
                                            </div>
                                        </SplideSlide>
                                    </Splide>
                                </div>
                                <div className="details__panel__frame__footer">
                                    <a href={permalink} target="_blank" rel="noopener noreferrer">visiter</a>
                                    {/* <button onClick = {handleInfo} >fermer</button> */}
                                </div>
                            </div>
                        </div>
                    // </Draggable>
                }
            </div>
        </div>
    );
};

export default ProjectCard;