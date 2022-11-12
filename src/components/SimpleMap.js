import React from 'react';
import GoogleMapReact from 'google-map-react';


const SimpleMap = () => {

    return (
        <div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21028.938808712777!2d2.3592691669270267!3d48.789195057053185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6739a07dbb7ed%3A0x1c0b82c6e1d88720!2s94400%20Vitry-sur-Seine!5e0!3m2!1sfr!2sfr!4v1668192339751!5m2!1sfr!2sfr" width="1200" height="540"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>     
    );
};

export default SimpleMap;