import React from 'react';
import './style.scss';

const PageSection = ({ theme = "light", title, subtitle, children }) => {
    return (
        <section className={`page-section ${theme} pt-12 pb-4 md:pt-24 md:pb-16`}>
            <h2 className="text-center text-4xl uppercase tracking-widest mb-4">{title}</h2>
            <p className="text-center text-2xl mb-8">{subtitle}</p>
            <div className="container mx-auto">
                {children}
            </div>
            
        </section>
    )
}

export default PageSection;