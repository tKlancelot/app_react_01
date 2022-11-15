import { React, useRef, useLayoutEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import gsap from "gsap";
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const Home = () => {
  // const n = 48;

  const comp = useRef();

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
        duration: 1.2,
        color: "#fff",
        border: "1px solid #33156b",
        outlineColor: "#37157524",
        outlineWidth: "2.4vw",
        repeat: -1,
        ease: "power1.linear",
        yoyo: true,
        // paused: true
      });

      //   item.addEventListener("mouseover", () => animation.pause());
      //   item.addEventListener("mouseout", () => animation.restart());
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div className="body" ref={comp}>
      <Navigation />
      <main>
        <div className="home-banner">
          {/* <BrowserView> */}
          <div className="home-banner__header">
          </div>
          {/* </BrowserView> */}
          <div className="home-banner__body">
            <div className="content">
              <h1>
                hello world
                <br />
              </h1>
              <div>
                <button>Explorer</button>
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
