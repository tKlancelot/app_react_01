import React from 'react';
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SocialLink = (props) => {
    return (
        <div className='social-link'>
            <ExternalLink href={props.url}><FontAwesomeIcon icon={props.icon} /></ExternalLink>
        </div>
    );
};

export default SocialLink;