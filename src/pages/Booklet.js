import React, { useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ExpertiseCard from "../components/ExpertiseCard";
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
                width : '76vw',
                gap   : '2vw',
                arrows:false,
                perPage:2,
                breakpoints: {
                    520: {
                        width : '96vw',
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
