import React from 'react';
import * as Data from './ResumeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {

    let links = Data.links.map((link, i) =>
        <li className="mb-1 md:mb-2 print:mb-1" key={i}>
            <a href={link.url} className="flex flex-row items-center flex-end md:flex-row-reverse print:flex-row-reverse text-gray-600 md:text-gray-500 text-sm md:text-base whitespace-no-wrap truncate" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={link.icon} fixedWidth size="lg" className="mx-1 md:mx-2" />
                <span className="inline-block print:inline-block">{link.display}</span>
            </a>
        </li>
    );

    return (
        <header className="">
            <div className="text-gray-800 md:text-white md:bg-resume print:bg-white print:text-black">
                <div className="flex flex-col items-center md:items-start print:items-start md:flex-row print:flex-row">

                    {/* Profile Image */}
                    <div className="relative w-full md:w-auto print:hidden">

                        <img src="dp_profile.png" className="w-1/2 border-8 border-white md:border-0 z-10 my-6 mx-auto rounded-full md:rounded-none md:m-0 md:w-auto md:h-auto relative" alt="Profile" />
                        <div className="z-0 inset-0 absolute bg-resume h-1/2 w-full "></div>
                    </div>


                    <div className="text-center md:text-left print:text-left flex-1 p-2 lg:p-6 print:p-0">

                        {/* Name & Title */}
                        <div className="md:uppercase whitespace-no-wrap truncate text-4xl md:text-2xl lg:text-4xl md:tracking-widest font-black print:text-3xl">{Data.details.name}</div>
                        <div className="text-2xl whitespace-no-wrap truncate mb-4 md:mb-1">{Data.details.title}</div>

                    </div>

                    {/* Link */}
                    <div className="p-2 print:p-0 w-full md:w-auto">
                        <ul className="list-unstyled">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}