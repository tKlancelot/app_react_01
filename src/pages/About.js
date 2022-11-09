import {React, useRef, useLayoutEffect} from 'react';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Square from "../components/Square";
import gsap from 'gsap';

const About = () => {

  const comp = useRef(); 

  useLayoutEffect(() => {
      
      let ctx = gsap.context(() => {

      gsap.from('.profile__body__left',{
          opacity:0.48,
          scale:0.72,
          duration:2.8,
          rotate:-90,
          ease:'Power2.easeOut',
          x:-400,
      })
      
      }, comp);
  
      return () => ctx.revert(); // cleanup
      
  }, []);  

  return (
    <div id="about" className="body" ref={comp}>
      <Navigation />
      <main>
        <div className="profile">
          <div className="profile__header">
            <Square top="-10%" left="-10%" width="56vw" height="56vw" radius="32%" rotation="10deg"/>
            <Square top="25%" left="72%" width="40vw" height="40vw" radius="32%" rotation="-10deg"/>
          </div>
          <div className="profile__body">
            <div className="profile__body__left">
              <div className="portrait-frame">
                <img src="./images/khoa-vo.jpg" alt="portrait grayscale" />
              </div>
            </div>
            <div className="profile__body__right">
              <div className="content-frame">
                <h2>Portrait.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum adipisci magnam, nam ipsa eligendi in quas quam asperiores at totam nisi corrupti architecto repellendus aut dolores libero quis aspernatur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quasi, facilis, excepturi consequuntur ipsam fugit rem sapiente, magnam ipsa minus impedit vitae veritatis autem reprehenderit voluptatem earum inventore placeat voluptas.</p>
              </div>
            </div>
          </div>
        </div>  
      </main>
      <Footer/>
    </div>
  );
};

export default About;
