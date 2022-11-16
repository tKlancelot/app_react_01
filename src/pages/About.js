import {React, useRef, useLayoutEffect} from 'react';
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import gsap from 'gsap';
import SocialLink from '../components/SocialLink';
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
// import Square from "../components/Square";


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

          </div>
          <div className="profile__body">
            <div className="profile__body__left">
              <div className="portrait-frame">
                <img src="./images/default-background.jpg" alt="portrait grayscale" />
              </div>
            </div>
            <div className="profile__body__right">
              <div className="content-frame">
                {/* <h2>Portrait.</h2> */}
                <h2>Portrait.</h2>
                <p>Suite à des études de langues à l'université et une expérience de huit ans dans le commerce de grande distribution, je décide d'entreprendre, il y a maintenant 4 ans de cela, une révolution dans ma carrière. Je découvre alors le développement web et je me prends de passion pour les nouvelles technologies et en particulier pour l'intégration. J'en ferai très rapidement mon métier actuel.</p>
                <p>Mon objectif : développer des sites beaux et bien construits. Mais ... pas que ! Rester en veille face à l'évolution rapide des technologies du web, afin de proposer des sites et des applications de qualité, durables et dans l'ère du temps !</p>
              </div>
              <div className="social-media">
                  <SocialLink url='https://github.com/tKlancelot' value="github" icon={faGithub}/>
                  <SocialLink url='https://www.linkedin.com/in/tarik-louatah-7983481b3/' value="linkedIn" icon={faLinkedin}/>
                  <SocialLink url='https://www.instagram.com/tklancelot/' value="instagram" icon={faInstagram}/>
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
