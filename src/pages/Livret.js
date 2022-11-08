import React from "react";
import Navigation from "../components/Navigation";
import useFetch from "../usefetch";

const Livret = () => {
  const projets = useFetch(
    "https://leviathan-pacifique.com/wp-json/wp/v2/portfolio"
  );

  return (
    <div>
      <Navigation />
      <h1>Livret</h1>

      <div>
        {projets &&
          projets.map((projet, index) => (
            <div key={index}>
              <h2> {projet.title.rendered} </h2>
              <p> {console.log(projet)}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Livret;
