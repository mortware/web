import React from 'react';
import ResumeHeader from './ResumeHeader';
import * as Data from './ResumeData';
import Tags from '../../components/Tags';
import Moment from 'moment';

import './Styles.scss';

const History = ({ key, title, employer, description, from, to, notes, tags }) => {
    return (
        <article key={key} className="resume-timeline-item mb-4 md:mb-8 last:mb-0 relative">

            <header className="mb-1 md:mb-2">
                <div className="flex justify-between ">
                    <h3 className="font-bold whitespace-no-wrap truncate">{title}</h3>
                    <div className="text-sm font-medium whitespace-no-wrap truncate">{employer}</div>
                </div>
                <div className="text-sm text-gray-500">{from} - {to}</div>
            </header>

            <p className="mb-1 md:mb-4">
                {description}
            </p>

            <div className="mb-4">
                {/* <h4 className="font-bold mb-1">Achievements:</h4> */}
                <ul className="list-disc list-outside pl-0 print:text-sm">
                    {notes.map((note) =>
                        <li className="ml-5">
                            {note}
                        </li>
                    )}
                </ul>
            </div>
            <div>
                {/* <h4 className="font-bold mb-1">Technologies used:</h4> */}
                <Tags tags={tags} theme="light" />
            </div>
        </article>
    )
}

const Section = ({ title, children }) => {

    return (
        <section className="resume-section mb-4">
            <h2 className="font-bold pb-3 mb-6 uppercase text-xl print:pb-1 print:mb-1">{title}</h2>
            {children}
        </section>
    )
}

const Resume = () => {

    return (
        <article className="md:p-3 md:container mx-auto resume mx-auto text-left bg-white md:shadow-lg md:max-w-5xl text-sm md:text-base">

            <ResumeHeader />

            <section className="p-4 md:p-12 print:p-0 print:pt-2">

                <Section title="Career Summary">
                    <p className="mb-0">
                        {Data.summary.map((line) => (
                            <p className="mb-2">{line}</p>
                        ))}
                    </p>
                </Section>

                <Section title="Skills & Tools">
                    {Data.skills.map(category =>
                        <p>
                            <strong>{category.name}: </strong>
                            {category.skills.sort((a, b) => a > b ? 1 : -1).join(", ")}
                        </p>
                    )}
                </Section>

                <Section title="Work Experience">
                    <div className="resume-timeline pl-8">
                        {Data.workHistory
                            .sort((a, b) => a.from < b.from ? 1 : -1)
                            .slice(0, 5)
                            .map((item, i) => {
                                let fromDate = Moment(item.from).format('YYYY');
                                let toDate = !item.to ? "Present" : Moment(item.to).format('YYYY');
                                return <History
                                    key={i}
                                    title={item.title}
                                    employer={item.employer}
                                    description={item.description}
                                    from={fromDate}
                                    to={toDate}
                                    notes={item.keyNotes}
                                    tags={item.tags}
                                />
                            })}
                        {Data.workHistory
                            .sort((a, b) => a.from < b.from ? 1 : -1)
                            .slice(5)
                            .map((item, i) => {
                                let fromDate = Moment(item.from).format('YYYY');
                                let toDate = !item.to ? "Present" : Moment(item.to).format('YYYY');
                                return <History
                                    key={i}
                                    title={item.title}
                                    employer={item.employer}
                                    description={item.description}
                                    from={fromDate}
                                    to={toDate}
                                    notes={[]}
                                    tags={item.tags}
                                />
                            })}
                    </div>
                </Section>

                <Section title="Education">
                    <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-2">
                        {Data.education.map((item, i) =>
                            <div key={i} className="mb-2 flex flex-no-wrap space-x-1 md:flex-col md:space-x-0 print:flex-col print:space-x-0">
                                <div className="font-bold whitespace-no-wrap truncate">{item.name}</div>
                                <div className="font-light whitespace-no-wrap truncate text-sm print:text-xs">{item.provider}</div>
                                <div className="font-light whitespace-no-wrap truncate text-sm print:text-xs">{item.completed}</div>
                            </div>
                        )}
                    </div>
                </Section>

            </section>
        </article >
    );
};

export default Resume;