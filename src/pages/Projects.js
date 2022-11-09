import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Square from "../components/Square";
import useFetch from "../usefetch";

const Projects = () => {
  const projets = useFetch(
    "https://leviathan-pacifique.com/wp-json/wp/v2/portfolio"
  );

  return (
    <div class="body">
      <Navigation />
      <main>
        <div className="project-carousel">
          <div className="project-carousel__header">
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
          <div className="project-carousel__body">
            {projets &&
              projets.map((projet, index) => (
                <div key={index}>
                  <h3> {projet.title.rendered} </h3>
                </div>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
