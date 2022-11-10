import React, { useState } from 'react';

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

    let {index,name,description,environment,category,development,technos,librairies,plugins,permalink} = props;

    return (
        <div>
            <div className="project-card" key={index}>
                <h3> {name} </h3>
                <h4>Description : {description}</h4>
                <button onClick = {handleInfo} >détails <span>+</span></button>
                {(state.showInfo == true) &&
                    <div className="details__panel">
                        <div className="details__panel__frame">
                            <div className="details__panel__frame__header">
                                <h3>{name}</h3>
                            </div>
                            <div className="details__panel__frame__body">
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
                            </div>
                            <div className="details__panel__frame__footer">
                                <button onClick = {handleInfo} >fermer</button>
                            </div>
                        </div>
                    </div>
                }
                <a href={permalink} target="_blank" rel="noopener noreferrer">visiter</a>
                {/* <h4><Link to={pathname:{projet.permalink}}>visiter</Link></h4> */}

                {/* <h5>{props.id}</h5> */}
            </div>
        </div>
    );
};

export default ProjectCard;