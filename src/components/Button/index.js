import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./styles.scss";

const Button = ({ url, label, icon, cta }) => {
    return (
        <a href={url} target="_blank" className={`btn ${cta && "btn-cta"}`} rel="noopener noreferrer">
            {icon !== null &&
                <FontAwesomeIcon icon={icon} size="lg" className="mx-1 md:mx-2" />
            }

            {label}
        </a>
    )
}

export default Button;