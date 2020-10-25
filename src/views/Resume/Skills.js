import React from 'react';
import * as Data from './ResumeData';

export default () => {
    let skillSections = null;
    let otherSkills = null;
    if (Data) {
        skillSections = Data.skills.sections.map((section, i) =>
            <div className="resume-skill-item col-span-1" key={i}>
                <h4 className="font-bold mb-2">{section.name}</h4>
                <ul className="list-unstyled mb-4">
                    {section.skills.map((skill, i) =>
                        <li className="mb-2" key={i}>
                            <div className="resume-skill-name whitespace-no-wrap truncate">{skill.name}</div>
                            <div className="progress resume-progress">
                                <div className="progress-bar" style={{ width: skill.progress * 100 + "%" }}></div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        );

        otherSkills = Data.skills.other.map((skill, i) =>
            <span className="badge badge-light mb-2 mr-2">{skill}</span>
        );

    }
    return (
        <section className="grid grid-cols-2 gap-4 md:grid-cols-1 print:grid-cols-1">
            {skillSections}
            <div className="resume-skill-item col-span-2 md:col-auto print:col-auto">
                <h4 className="font-bold mb-2">Other</h4>
                <div className="flex flex-wrap">
                    {otherSkills}
                </div>
            </div>
        </section >
    );
}