import React from 'react';
import { ExternalLink } from 'react-external-link';

const SocialLink = (props) => {
    return (
        <div>
            <ExternalLink href={props.url}>{props.value}</ExternalLink>
        </div>
    );
};

export default SocialLink;