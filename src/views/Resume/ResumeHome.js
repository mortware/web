import React from 'react';
import Skills from './Skills';
import ResumeHeader from './ResumeHeader';
import * as Data from './ResumeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Resume.scss';

export default() => {

    let historyItems = Data.workHistory.map((item, i) => (
        <article className="resume-timeline-item pb-4 md:pb-12 relative">

            <header className="mb-1 md:mb-2">
                <div className="flex justify-between ">
                    <h3 className="font-bold">{item.title}</h3>
                    <div className="text-sm font-medium">{item.employer}</div>
                </div>
                <div className="text-sm text-gray-500">{item.from} - {item.to}</div>
            </header>

            <p className="mb-1 md:mb-4">
                {item.description}
            </p>

            <div className="mb-4">
                <h4 className="font-bold mb-1">Achievements:</h4>
                <ul className="list-disc list-outside pl-5 print:text-sm">
                    {item.keyNotes.map((note) =>
                        <li className="ml-5">
                            {note}
                        </li>
                    )}
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-1">Technologies used:</h4>
                <div className="flex flex-wrap">
                    {item.keyTech.map((tech) => (
                        <span className="badge mr-1 mb-2">{tech}</span>
                    ))}
                </div>
            </div>
        </article>
    ))

    let education = Data.education.map((item, i) => (
        <div className="mb-2 flex space-x-1 sm:flex-col sm:space-x-0 print:flex-col print:space-x-0">
            <div className="font-bold">{item.name}</div>
            <div className="font-light text-sm print:text-xs">{item.provider}</div>
            <div className="font-light text-sm print:text-xs">{item.completed}</div>
        </div>
    ))

    let interests = Data.interests.map((item, i) => (
        <li className="mb-2">
            <div className="">{item}</div>
        </li>
    ))

    return (
        <article className="resume mx-auto text-left bg-white md:shadow-lg md:max-w-5xl text-sm md:text-base">

            <ResumeHeader/> 

            <section className="p-4 md:p-12 print:p-0 print:pt-2">
                <section className="mb-4 sm:mb-12">
                    <h2 className="resume-section-title font-bold pb-3 mb-3 uppercase text-xl print:pb-1 print:mb-1">Career Summary</h2>
                    <p className="mb-0">
                        {Data.summary.map((line) => (
                            <p className="mb-2">{line}</p>
                        ))}
                    </p>
                </section>

                <div className="mb-4 flex flex-col-reverse sm:flex-row sm:space-x-8 print:flex-row print:space-x-8">

                    <div className="w-auto sm:w-3/4 print:w-3/4">
                        <h2 className="resume-section-title font-bold pb-3 mb-6 uppercase text-xl print:pb-1 print:mb-1">Work Experience</h2>
                        <section className="resume-timeline pl-8">
                            {historyItems}
                        </section>
                    </div>

                    <div className="w-auto sm:w-1/4 print:w-1/4">

                        {/* Skills */}
                        <div className="mb-4 sm:mb-12" style={{ pageBreakAfter: 'always' }}>
                            <h2 className="resume-section-title font-bold pb-3 mb-6 uppercase text-xl print:pb-1 print:mb-1">Skills & Tools</h2>
                            <Skills />
                        </div>

                        {/* Education */}
                        <div className="mb-4 sm:mb-12">
                            <h2 className="resume-section-title font-bold pb-3 mb-6 uppercase text-xl print:pb-1 print:mb-1">Education</h2>
                            <ul>
                                {education}
                            </ul>
                        </div>

                        {/* Interests */}
                        <div className="mb-4 sm:mb-12">
                            <h2 className="resume-section-title font-bold pb-3 mb-6 uppercase text-xl print:pb-1 print:mb-1">Interests</h2>
                            <ul>
                                {interests}
                            </ul>
                        </div>

                    </div>


                </div>

            </section>
        </article >
    );
};
