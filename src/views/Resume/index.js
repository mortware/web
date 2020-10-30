import React from 'react';
import Skills from './Skills';
import ResumeHeader from './ResumeHeader';
import * as Data from './ResumeData';
import './Styles.scss';
import EmploymentHistoryItem from './EmploymentHistoryItem';
import ResumeSection from './ResumeSection';

const Resume = () => {

    return (
        <article className="md:p-3 md:container mx-auto resume mx-auto text-left bg-white md:shadow-lg md:max-w-5xl text-sm md:text-base">

            <ResumeHeader />

            <section className="p-4 md:p-12 print:p-0 print:pt-2">

                <ResumeSection title="Career Summary">
                    <p className="mb-0">
                        {Data.summary.map((line) => (
                            <p className="mb-2">{line}</p>
                        ))}
                    </p>
                </ResumeSection>

                <ResumeSection title="Skills & Tools">
                    {Data.skills.map(category =>
                        <p>
                            <strong>{category.name}: </strong>
                            {category.skills.sort((a, b) => a > b ? 1 : -1).join(", ")}
                        </p>
                    )}
                </ResumeSection>

                <ResumeSection title="Work Experience">
                    <div className="resume-timeline pl-8">
                        {Data.workHistory
                            .sort((a, b) => a.to < b.to ? 1 : -1)
                            .slice(0, 5)
                            .map((item, i) =>
                                <EmploymentHistoryItem
                                    key={i}
                                    title={item.title}
                                    employer={item.employer}
                                    description={item.description}
                                    from={item.from}
                                    to={item.to}
                                    notes={item.keyNotes}
                                    tags={item.tags}
                                />
                            )}
                    </div>
                </ResumeSection>

                <ResumeSection title="Education">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {Data.education.map((item, i) =>
                            <div key={i} className="mb-2 flex flex-no-wrap space-x-1 md:flex-col md:space-x-0 print:flex-col print:space-x-0">
                                <div className="font-bold whitespace-no-wrap truncate">{item.name}</div>
                                <div className="font-light whitespace-no-wrap truncate text-sm print:text-xs">{item.provider}</div>
                                <div className="font-light whitespace-no-wrap truncate text-sm print:text-xs">{item.completed}</div>
                            </div>
                        )}
                    </div>
                </ResumeSection>

            </section>
        </article >
    );
};

export default Resume;