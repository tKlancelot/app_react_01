import {React, useRef, useLayoutEffect} from 'react';
import gsap from 'gsap';
import Navigation from "../components/Navigation";
import Footer from '../components/Footer';
// import Square from "../components/Square";

const Home = () => {

    // const n = 48;

    const comp = useRef(); 

    useLayoutEffect(() => {
        
        let ctx = gsap.context(() => {

        gsap.to('.home-banner__body h1',{
            duration:8,
            color:'#5d34ab',
            yoyo:true,
            repeat:-1
        })
        gsap.to('.home-banner__header',{
            duration:8,
            x:-100,
            y:-50,
            yoyo:true,
            repeat:-1
        })
        gsap.to('.home-banner__footer',{
            duration:12,
            scale:0.72,
            x:100,
            y:50,
            yoyo:true,
            repeat:-1
        })
        
        }, comp); // <- IMPORTANT! Scopes selector text
    
        return () => ctx.revert(); // cleanup
        
    }, []);   

    return (
        <div className="body" ref={comp}>
            <Navigation />
            <main>
                <div className="home-banner">
                    <div className="home-banner__header"></div>
                    <div className="home-banner__body">
                        <h1>hello world<br/></h1>
                        <div><button>explorer</button></div>
                        {/* {[...Array(n)].map((e, i) => <span className="busterCards" key={i}>♦</span>)} */}
                        {/* {[...Array(n)].map((e, i) => <Square key={i.toString()}/>)} */}
                    </div>
                    <div className="home-banner__footer"></div>
                </div>

            </main>
            <Footer/>
        </div>
    );
};

export default Home;
