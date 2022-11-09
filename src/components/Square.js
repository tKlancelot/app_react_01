import {React, useLayoutEffect, useRef} from 'react';
import { gsap } from "gsap";


const Square = (props) => {
    
    const comp = useRef();

    useLayoutEffect(() => {
    
        let ctx = gsap.context(() => {

            // on pourrait aussi passer des props ici 
        
            var tl = gsap.timeline({repeat: -1, repeatDelay: 1, yoyo:true});

            tl.from(".square-frame", {
                x:"random([-40, 0, 5])",
                y:"random([0, 40, 5])",
                rotation:"random([-8, 8, 1])",
                duration:6,
                ease:'Power2.easeOut',
            }).to(".square-frame",{
                x:"random([-40, 0, 5])",
                y:"random([0, 40, 5])",
                rotation:"random([-10, 10, 1])",
                duration:6,
                scale:0.96,
                ease:"Power2.easeIn",
            });


    }, comp);
    
    return () => ctx.revert(); // cleanup ?
    
    }, []); 


    return (
        <div ref={comp} className="square">
            <div className="square-frame" 
                style={{
                    marginTop:props.top,
                    left:props.left,
                    width:props.width,
                    height:props.height,
                    borderRadius:props.radius,
                    transform:'rotate('+props.rotation+')'
                }}>
            </div>

        </div> 
    );
};

export default Square;