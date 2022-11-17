import { React, useRef, useLayoutEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import gsap from "gsap";
import SceneEmail3d from "../components/SceneEmail3d";
// import StarSvg from "../components/StarSvg";
// import Square from "../components/Square";
// import { Timeline } from "gsap/gsap-core";
// import { BasisClosedCurve, BasisCurve, BundleCurve } from "react-svg-curve";
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Home = () => {

  const comp = useRef();

  // const n = 40;
  
  // function randomIntFromInterval(min, max) { // min and max included 
  //   return Math.ceil(Math.random() * (max - min + 1) + min)
  // }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.from(".home-banner__body h1", {
        opacity: 0,
        duration: 5,
        color: "#5d34ab",
        ease: 'CustomEase.create("custom", "M0,0,C0.104,0.204,0.402,0.694,1,1")',
        y: -100,
      });

      const item = document.querySelector(".home-banner__body .content button");

      gsap.to(item, {
        duration: 1.8,
        color: "#fff",
        border: "1px solid #33156b",
        outlineColor: "#37157556",
        outlineWidth: "2.4vw",
        ease: "power1.linear",
        repeat: -1,
        yoyo: true
      });

      var tl = gsap.timeline({repeat: -1, repeatDelay: 1, yoyo:true});

      tl.to('.star',{
        x:"random([-400,400])",
        y:"random([-400, 400])",
        duration:"random([12,20])",
        scale:"random([0.5,1])",
        rotation:"random([0,180])"
        // ease: "power3.linear",
      }).to('.star',{
        x:"random([-400,400])",
        y:"random([-400, 400])",
        duration:"random([12,20])",
        rotation:"random([0,180])"
        // ease: "power3.linear",
      })

    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div className="body" ref={comp}>
      <Navigation />
      <main>
        <div className="home-banner">
          <div className="home-banner__header">
            {/* star system  */}
            {/* {[...Array(n)].map((e, i) => 
            <StarSvg 
              className="busterCards" 
              key={i} 
              top={randomIntFromInterval(10,100)} 
              left={randomIntFromInterval(10,100)}
              width={randomIntFromInterval(0,1)}
              height={randomIntFromInterval(0,1)}
              rotation={randomIntFromInterval(1,360)}
            />
            )} */}


            {/* banner with background */}
            <div className="home-banner__header__background">
              <img src="./images/milky-way.jpg" alt="milky way" />
            </div>
          </div>
          <div className="home-banner__body">
            <div className="content">
              <h1>
                hello world
                <br />
              </h1>
                <div className="picture-frame">
                    <SceneEmail3d/>
                </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
