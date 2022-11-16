import React from 'react';

const StarSvg = (props) => {
    return (
        // <div>
            <svg className="star" width="791" height="790" viewBox="0 0 791 790" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ width: props.width+'%', height: props.height+'%', top : props.top+'%', left: props.left+'%', transform:'rotate('+props.rotation+'deg)' }}
            >
                <g filter="url(#filter0_i_41_131)">
                <path d="M1 395L342.354 342.354L395 1.00001M1 395L352.354 352.354L395 1.00001M1 395L362.354 362.354L395 1.00001M1 395L372.354 372.354L395 1.00001M1 395L382.354 382.354L395 1.00001" stroke="white"></path>
                <path d="M1 395.707L342.354 448.354L395 789.707M1 395.707L352.354 438.354L395 789.707M1 395.707L362.354 428.354L395 789.707M1 395.707L372.354 418.354L395 789.707M1 395.707L382.354 408.354L395 789.707" stroke="white"></path>
                <path d="M790.707 395L449.353 342.354L396.707 1.00001M790.707 395L439.353 352.354L396.707 1.00001M790.707 395L429.353 362.354L396.707 1.00001M790.707 395L419.353 372.354L396.707 1.00001M790.707 395L409.353 382.354L396.707 1.00001" stroke="white"></path>
                <path d="M790.707 395.707L449.353 448.354L396.707 789.707M790.707 395.707L439.353 438.354L396.707 789.707M790.707 395.707L429.353 428.354L396.707 789.707M790.707 395.707L419.353 418.354L396.707 789.707M790.707 395.707L409.353 408.354L396.707 789.707" stroke="white"></path>
                </g>
                <defs>
                <filter id="filter0_i_41_131" x="0.923828" y="0.923798" width="789.859" height="788.859" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                  <feOffset dx="50" dy="50"></feOffset>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.572549 0 0 0 0 0.921569 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_41_131"></feBlend>
                </filter>
                </defs>
            </svg>
        // </div>
    );
};

export default StarSvg;