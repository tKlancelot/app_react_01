import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ExpertiseCard from "../components/ExpertiseCard";
import Square from "../components/Square";

const Booklet = () => {


  return (
    <div className="body">
      <Navigation />
      <main>
        <div className="booklet">
          <div className="booklet__header">
            <Square height='48vw' width='48vw' radius="32%" top="-2%" left="-4%" rotation='16deg'/>
            <Square height='40vw' width='40vw' radius="24%" top="8%" left="68%" rotation='-10deg'/>
            <Square height='24vw' width='24vw' radius="28%" top="-10%" left="60%" rotation='-10deg'/>
          </div>
          <div className="booklet__body">
            <Splide 
              aria-label="livret d'expertise"
              options={{
                type:'loop',
                rewind: true,
                width : '80vw',
                gap   : '2vw',
                perPage:3,
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
              <SplideSlide>
                <ExpertiseCard title="card one"/>
              </SplideSlide>
              <SplideSlide>
                <ExpertiseCard title="card two"/>
              </SplideSlide>
              <SplideSlide>
                <ExpertiseCard title="card three"/>
              </SplideSlide>
              <SplideSlide>
                <ExpertiseCard title="card four"/>
              </SplideSlide>
              <SplideSlide>
                <ExpertiseCard title="card five"/>
              </SplideSlide>
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
