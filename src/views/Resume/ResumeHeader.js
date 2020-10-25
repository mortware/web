import React from 'react';
import * as Data from './ResumeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {

    let links = Data.links.map((link, i) =>
        <li className="mb-1 sm:mb-3" key={i}>
            <a href={link.url} className="text-gray-600 sm:text-gray-500 text-sm md:text-base whitespace-no-wrap truncate" target="_blank">
                <FontAwesomeIcon icon={link.icon} fixedWidth size="lg" className="mr-1 md:mr-2" />
                <span className="inline-block print:inline-block">{link.display}</span>
            </a>
        </li>
    );

    return (
        <header className="">
            <div className="text-gray-800 sm:text-white sm:bg-resume print:bg-white print:text-black">
                <div className="flex flex-col items-center sm:items-start print:items-start sm:flex-row print:flex-row">

                    {/* Profile Image */}
                    <div className="relative w-full sm:w-auto print:hidden">
                        
                        <img src="dp_profile.png" className="w-1/2 border-8 border-white sm:border-0 z-10 my-6 mx-auto rounded-full sm:rounded-none sm:m-0 sm:w-auto sm:h-auto relative" alt="Profile" />
                        <div className="z-0 inset-0 absolute bg-resume h-1/2 w-full "></div>
                    </div>


                    <div className="text-center sm:text-left print:text-left flex-1 p-2 md:p-6 print:p-0">

                        {/* Name & Title */}
                        <div className="sm:uppercase whitespace-no-wrap truncate text-4xl sm:text-3xl sm:tracking-widest font-black print:text-2xl">{Data.details.name}</div>
                        <div className="text-2xl whitespace-no-wrap truncate mb-4">{Data.details.title}</div>

                        {/* Contact Details */}
                        <ul>
                            <li className="text-xs md:text-base">
                                <a href={"mailto:" + Data.contact.email} className="text-gray-600 sm:text-gray-500 text-sm md:text-base" target="_blank">
                                    <FontAwesomeIcon icon={['fas', 'envelope']} fixedWidth className="mr-1 md:mr-2" />
                                    {Data.contact.email}
                                </a>
                            </li>
                            <li className="text-xs md:text-base">
                                <a href={"tel:" + Data.contact.phone} className="text-gray-600 sm:text-gray-500 text-sm md:text-base" target="_blank">
                                    <FontAwesomeIcon icon={['fas', 'mobile-alt']} fixedWidth className="mr-1 md:mr-2" />
                                    {Data.contact.phone}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Link */}
                    <div className="text-center sm:text-left print:text-left p-2 md:p-8 print:p-0">
                        <ul className="list-unstyled">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}