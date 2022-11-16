import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ProjectCard from "../components/ProjectCard";
import { projectList } from "../datas/projectList";
// import Square from "../components/Square";
// import useFetch from "../usefetch";

const Projects = () => {

  // const projets = useFetch(
  //   "https://leviathan-pacifique.com/wp-json/wp/v2/portfolio"
  // );
  /* {projets &&
  projets.map((projet, index) => (
    <div key={index}>
      <h3> {projet.title.rendered} </h3>
    </div>
  ))} */

  const [state,setState] = useState({
    projects: projectList,
    radios:[
      {id:1, value: "html5"},
      {id:2, value: "css3"},
      {id:3, value: "sass"},
      {id:3, value: "js"},
      {id:3, value: "twig"},
      {id:3, value: "php"}
    ],
    selectedRadio : 'html5'
  })


  let {projects, radios, selectedRadio } = state;

  const handleRadio = (event) => {
    let value = event.target.value;
    setState({...state,selectedRadio : value});
  }



  const removeLastComa = () => {
    let item = document.querySelectorAll('table td:nth-child(2) > span:last-child > span');
    item.forEach((e) => {
      e.childNodes[1].remove();
    })
  }
  


  useEffect(() => {
    setTimeout(function(){
      removeLastComa();
    },10)
  },[]);




  return (
    <div className="body">
      <Navigation />
      <main>
        <div className="project-carousel">
          <div className="project-carousel__header">
            <ul>
              {radios.map((radio) => {
                return(
                  <li key={radio.id}>
                    <input 
                      type="radio"
                      name="radio"
                      checked={radio.value === selectedRadio}
                      value={radio.value}
                      id={radio.value}
                      onChange={handleRadio}
                    />
                    <span className="checkmark"></span>
                    <label htmlFor={radio.value}>{radio.value}</label>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="project-carousel__body">

            {projects && projects
            .filter(item => item.technos.includes(selectedRadio))
            .map((projet, index) => (
              <ProjectCard 
                key={index} 
                name={projet.name} 
                description={projet.description} 
                environment={projet.environment} 
                development={projet.development} 
                category={projet.category} 
                technos={projet.technos} 
                librairies={projet.librairies} 
                plugins={projet.plugins} 
                picture={projet.picture} 
                permalink={projet.permalink}
              />
            ))}


          </div>

          <div className="project-carousel__footer"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
