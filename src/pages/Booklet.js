import React, { useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ExpertiseCard from "../components/ExpertiseCard";
import Square from "../components/Square";
import { expertiseList } from "../datas/expertiseList";

const Booklet = () => {

  const [state,setState] = useState({
    expertises: expertiseList
  })

  let {expertises} = state;

  return (
    <div className="body">
      <Navigation />
      <main>
        <div className="booklet">
          <div className="booklet__header"></div>
          <div className="booklet__body">
            <Splide 
              aria-label="livret d'expertise"
              options={{
                type:'loop',
                rewind: true,
                width : '80vw',
                gap   : '2vw',
                perPage:2,
                arrows:false,
                breakpoints: {
                    780: {
                        type:'loop',
                        width : '100vw',
                        // gap:'0',
                        perPage:1,
                        focus:'center'
                    }
                }
              }}
            >
            {expertises.map((expertise, index) => (
              <SplideSlide>
                <ExpertiseCard 
                  title={expertise.title} 
                  subtitle={expertise.subtitle}
                  paragraphOne={expertise.paragraphOne}
                  paragraphTwo={expertise.paragraphTwo}
                  paragraphThree={expertise.paragraphThree}
                  borderColor={expertise.colorTag}
                />
              </SplideSlide>
            ))
            }
            </Splide>
          </div>
          <div className="booklet__footer">

          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Booklet;
