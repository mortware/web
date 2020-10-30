import React from 'react';
import './style.scss';

const Feature = ({ imageUrl, title, description, children }) => {
    return (
        <section className="feature flex-1 text-center items-center">
            <header className="feature-image p-16 mb-8 inline-block bg-center bg-no-repeat bg-cover bg-opacity-50 bg-gray-600"
                style={{ backgroundImage: `url('${imageUrl}')` }}>
            </header>
            <h1 className="uppercase">{title}</h1>
            <p>{description}</p>
        </section>
    )
}

export default Feature;