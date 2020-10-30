import React from 'react';
import './Styles.scss';

export default ({ title, children }) => {

    return (
        <section className="resume-section mb-4">
            <h2 className="font-bold pb-3 mb-6 uppercase text-xl print:pb-1 print:mb-1">{title}</h2>
            {children}
        </section>
    )
}