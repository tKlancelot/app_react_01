import React from "react";

const Logo = () => {

      // The pop() function is called on every click
    function pop(e) { 
        // Loop to generate 32 particles at once
        for (let i = 0; i < 32; i++) {
            // We pass the mouse coordinates to the createParticle() function
            createParticle(e.clientX, e.clientY);
        }
    }

    function createParticle(x, y) {
        // Create a custom particle element
        const particle = document.createElement('particle');
          // Calculate a random size from 5px to 25px
        const size = Math.floor(Math.random() * 20 + 5);
        // Apply the size on each particle
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        // Generate a random color in a blue/purple palette

        // particle.style.background = `hsl(${Math.random() * 90 + 180}, 70%, 60%)`;
        // particle.innerHTML = ['❤','🧡','💛','💚','💙','💜','🤎']
        // [Math.floor(Math.random() * 7)];
        // particle.style.fontSize = `${Math.random() * 24 + 10}px`;

        particle.style.background = `hsl(${Math.random() * 60 + 240}, 70%, 60%)`;
        particle.style.border = '1px solid white';
        // width = height = 'auto';
          // Generate a random x & y destination within a distance of 150px from the mouse
        const destinationX = x + (Math.random() - 0.16) * 2 * 200;
        const destinationY = y + (Math.random() - 0.16) * 2 * 200;

        // Store the animation in a variable because we will need it later
        const animation = particle.animate([
            {
            // Set the origin position of the particle
            // We offset the particle with half its size to center it around the mouse
            transform: `translate(${x - (size / 2)}px, ${y - (size / 2)}px)`,
            opacity: 1
            },
            {
            // We define the final coordinates as the second keyframe
            transform: `translate(${destinationX}px, ${destinationY}px)`,
            opacity: 0
            }
        ], {
            // Set a random duration from 500 to 1500ms
            duration: 500 + Math.random() * 1000,
            easing: 'cubic-bezier(0, .9, .57, 1)',
            // Delay every particle with a random value from 0ms to 200ms
            delay: Math.random() * 200
        });

        animation.onfinish = () => {
            particle.remove();
        };

        // Append the element into the body
        document.body.appendChild(particle);
    }



  return (
    <React.Fragment>
      <div className="logotype">
        {/* <img src="./logo-portfolio-react.svg" alt="logotype portfolio react" /> */}
        <svg width="78" height="80" viewBox="0 0 78 80" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={pop}>
          <path
            d="M77.6401 53.048H25.6401V1H41.9921C51.4465 1 60.5139 4.75576 67.1992 11.4411C73.8845 18.1263 77.6401 27.1935 77.6401 36.648V53.048Z"
            stroke="white"
            strokeWidth="0.688"
            strokeMiterlimit="10"
          />
          <path
            d="M73.4158 55.5758H23.1758V5.31983H39.3998C43.866 5.31773 48.2891 6.19562 52.4159 7.90333C56.5428 9.61106 60.2929 12.1151 63.4518 15.2725C66.6107 18.4299 69.1164 22.1788 70.8262 26.3049C72.5358 30.431 73.4158 34.8536 73.4158 39.3198V55.5758Z"
            stroke="white"
            strokeWidth="0.688"
            strokeMiterlimit="10"
          />
          <path
            d="M69.1919 58.1361H20.7119V9.64014H36.8399C41.0884 9.64014 45.2954 10.4769 49.2206 12.1028C53.1457 13.7286 56.7121 16.1117 59.7162 19.1158C62.7204 22.1199 65.1034 25.6865 66.7294 29.6116C68.3551 33.5367 69.1919 37.7436 69.1919 41.9921V58.1361Z"
            stroke="white"
            strokeWidth="0.704"
            strokeMiterlimit="10"
          />
          <path
            d="M65 60.6963H18.248V13.9602H34.248C38.285 13.956 42.2831 14.7475 46.014 16.2894C49.7448 17.8315 53.1351 20.0935 55.9911 22.9467C58.8471 25.7996 61.1128 29.1876 62.6586 32.9167C64.2044 36.646 65 40.6433 65 44.6803V60.6963Z"
            stroke="white"
            strokeWidth="0.72"
            strokeMiterlimit="10"
          />
          <path
            d="M60.7597 63.256H15.7837V18.28H31.6877C39.3968 18.2843 46.7888 21.3487 52.24 26.7997C57.6912 32.2509 60.7554 39.6429 60.7597 47.352V63.256Z"
            stroke="white"
            strokeWidth="0.736"
            strokeMiterlimit="10"
          />
          <path
            d="M56.5358 65.8479H13.3198V22.6479H29.1118C36.3768 22.6479 43.3449 25.5307 48.4865 30.6633C53.6281 35.7959 56.5232 42.759 56.5358 50.024V65.8479Z"
            stroke="white"
            strokeWidth="0.736"
            strokeMiterlimit="10"
          />
          <path
            d="M52.312 68.3919H10.856V26.9199H26.6C33.4266 26.9412 39.9662 29.6678 44.7859 34.5025C49.6056 39.3372 52.312 45.8854 52.312 52.7119V68.3919Z"
            stroke="white"
            strokeWidth="0.752"
            strokeMiterlimit="10"
          />
          <path
            d="M48.1041 70.9522H8.39209V31.2402H23.9601C30.3622 31.2446 36.5009 33.7897 41.0278 38.3166C45.5548 42.8436 48.0998 48.9822 48.1041 55.3842V70.9522Z"
            stroke="white"
            strokeWidth="0.768"
            strokeMiterlimit="10"
          />
          <path
            d="M43.8797 73.5123H5.92773V35.5603H21.3837C27.3515 35.5645 33.0735 37.9382 37.2917 42.1595C41.5101 46.3809 43.8797 52.1045 43.8797 58.0723V73.5123Z"
            stroke="white"
            strokeWidth="0.784"
            strokeMiterlimit="10"
          />
          <path
            d="M39.6559 76.0881H3.46387V39.8801H18.8079C21.5394 39.8801 24.2441 40.4182 26.7677 41.4635C29.2913 42.5088 31.5842 44.0409 33.5157 45.9723C35.4471 47.9038 36.9793 50.1968 38.0245 52.7203C39.0698 55.244 39.6079 57.9486 39.6079 60.6801L39.6559 76.0881Z"
            stroke="white"
            strokeWidth="0.784"
            strokeMiterlimit="10"
          />
          <path
            d="M35.448 78.648H1V44.2H16.232C21.3242 44.2 26.2077 46.2228 29.8085 49.8235C33.4091 53.4241 35.432 58.3078 35.432 63.4L35.448 78.648Z"
            stroke="white"
            strokeWidth="0.8"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </React.Fragment>
  );
};

export default Logo;
