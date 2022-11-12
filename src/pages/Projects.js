import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ProjectCard from "../components/ProjectCard";
import Square from "../components/Square";
import { projectList } from "../datas/projectList";
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
                    <span class="checkmark"></span>
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

          <div className="project-carousel__footer">
                        <Square
              top="-10%"
              left="-10%"
              width="56vw"
              height="56vw"
              radius="32%"
              rotation="10deg"
            />
            <Square
              top="25%"
              left="72%"
              width="40vw"
              height="40vw"
              radius="32%"
              rotation="-10deg"
            />
            <Square
              top="-6%"
              left="76%"
              width="50vw"
              height="50vw"
              radius="24%"
              rotation="-2deg"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
