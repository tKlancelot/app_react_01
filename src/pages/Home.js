import {React, useRef, useLayoutEffect} from 'react';
import Navigation from "../components/Navigation";
import Footer from '../components/Footer';
import Square from '../components/Square';
import gsap from 'gsap';

const Home = () => {

    // const n = 48;

    const comp = useRef(); 

    useLayoutEffect(() => {
        
        let ctx = gsap.context(() => {

        gsap.from('.home-banner__body h1',{
            opacity:0.16,
            duration:4,
            color:'#5d34ab',
            ease:'Power2.easeOut',
            y:-80,
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
                        <Square top="-8%" left="-14%" width="56vw" height="56vw" radius="24%" rotation="8deg"/>
                        <Square top="-16%" left="60%" width="50vw" height="50vw" radius="32%" rotation="-2deg"/>
                        <Square top="25%" left="72%" width="40vw" height="40vw" radius="32%" rotation="-24deg"/>
                    </div>
                    <div className="home-banner__body">
                        <div className="content">
                            <h1>hello world<br/></h1>
                            <div><button>Explorer</button></div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer/>
        </div>
    );
};

export default Home;
