import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";


const Booklet = () => {


  return (
    <div className="body">
      <Navigation />
      <main>
        <div className="booklet">
          <div>
            livret
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Booklet;
