import React from 'react';
import * as Data from './ResumeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {

    let links = Data.links.map((link, i) =>
        <li className="mb-1 md:mb-3" key={i}>
            <a href={link.url} className="text-gray-500 text-xs md:text-base">
                <FontAwesomeIcon icon={link.icon} fixedWidth size="lg" className="mr-1 md:mr-2" />
                <span className="hidden sm:inline-block print:inline-block">{link.display}</span>
            </a>
        </li>
    );

    return (
        <header className="text-white bg-resume print:bg-white print:text-black">
            <div className="flex flex-row items-start">
                <img src="dp_profile.png" className="w-1/4 h-1/4 md:w-auto md:h-auto print:hidden" alt="Profile" />
                <div className="flex-1 p-2 md:p-6 print:p-0">
                    <div className="uppercase lg:text-4xl tracking-widest font-black">{Data.details.name}</div>
                    <div className="lg:text-2xl mb-1 md:mb-4">{Data.details.title}</div>

                    <ul className="text-gray-500">
                        <li className="text-xs md:text-base">
                            <FontAwesomeIcon icon={['fas', 'envelope']} fixedWidth className="mr-1 md:mr-2" />
                            {Data.details.email}</li>
                        <li className="text-xs md:text-base">
                            <FontAwesomeIcon icon={['fas', 'mobile-alt']} fixedWidth className="mr-1 md:mr-2" />
                            {Data.details.phone}</li>
                    </ul>
                </div>
                <div className="p-2 md:p-6">
                    <ul className="list-unstyled">
                        {links}
                    </ul>
                </div>
            </div>
        </header>
    )
}