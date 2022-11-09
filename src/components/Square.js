import {React, useLayoutEffect, useRef} from 'react';
import { gsap, random } from "gsap";


const Square = () => {

    // const setRandomPosition = () => {
    //     let randomPos = Math.ceil((Math.random() * 100));
    //     let offsetValue = randomPos + '%';
    //     return offsetValue;
    // }

    // const setRandomWidth = () => {
    //     let randomWidth = Math.ceil((Math.random() * 100));
    //     let offsetValue = randomWidth + 'px';
    //     return offsetValue;
    // }

    // function randomIntFromInterval(min, max) { // min and max included 
    // return Math.floor(Math.random() * (max - min + 1) + min)
    // }


    // const setRandomRotation = () => {
    //     let randomPos = randomIntFromInterval(4,300);
    //     let offsetValue = randomPos + 'deg';
    //     return offsetValue;
    // }
    
    const comp = useRef(); // create a ref for the root level element (for scoping)

    useLayoutEffect(() => {
    
        let ctx = gsap.context(() => {
        
            // var tl = gsap.timeline({repeat: -1, repeatDelay: 1});

            // tl.from(".square-frame", {
            //     rotation:"360",
            //     opacity:0,
            //     x:"random([-300, 300, 5])",
            //     y:"random([-200, 200, 5])",
            //     duration:"random([4,8,12,16,20,24])",
            //     scale:"random(-1, 1, 0.1)",
            //     ease:"random(['Power2.easeInOut','Power3.linear','Power4.easeIn'])",
            //     yoyo:true
            // });
            // tl.to(".square-frame", {
            //     rotation:"180",
            //     x:"random([-250, 250, 5])",
            //     y:"random([-500, 500, 5])",
            //     duration:"random([4,8,12,16,20,24])",
            //     scale:"random(-1, 1, 0.1)",
            //     ease:"random(['Power2.easeInOut','Power3.linear','Power4.easeIn'])",
            //     // backgroundColor:'random(["purple,dodgerblue,lightskyblue"])',
            //     opacity:0.32,
            //     yoyo:true, 
            // });
            // tl.to(".square-frame", {
            //     rotation:"180",
            //     x:"random([-500, 500, 5])",
            //     y:"random([-500, 500, 5])",
            //     duration:"random([4,8,12,16,20,24])",
            //     scale:"random(-1, 1, 0.1)",
            //     ease:"random(['Power2.easeInOut','Power3.linear','Power4.easeIn'])",
            //     yoyo:true, 
            // });

        
    }, comp); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
    
    }, []); 


    return (
        <div ref={comp}>

 
        {/* <div className="square-frame" 
            style={{
                top:setRandomPosition(),
                left:setRandomPosition(),
                width:setRandomWidth(),
                // height:setRandomWidth(),
                transform:"rotate("+setRandomRotation()+")",
            }}>
            <div></div>
        </div> */}

        </div>
    );
};

export default Square;