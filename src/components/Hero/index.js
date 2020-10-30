import React from 'react';
import './style.scss';

const Hero = ({ imageUrl, title, subtitle, children }) => {
    return (
        <div
            className="hero h-20 p-32 bg-center bg-no-repeat bg-cover bg-opacity-50 bg-gray-600"
            style={{ backgroundImage: `url('${imageUrl}')` }}>
            <h2 className="text-center text-white text-4xl uppercase tracking-widest">{title}</h2>
            {children}
        </div>
    )
}

export default Hero;