import React from 'react';
import * as Data from './ResumeData';
import Tags from '../../components/Tags';

export default () => {
    let skillSections = null;
    if (Data) {
        skillSections = Data.skills.sections.map((section, i) =>
            <div className="resume-skill-item col-span-1" key={i}>
                <h4 className="font-bold mb-2">{section.name}</h4>
                <ul className="list-unstyled mb-4">
                    {section.skills.map((skill, i) =>
                        <li className="mb-2 print:mb-1" key={i}>
                            <div className="text-sm whitespace-no-wrap truncate">{skill.name}</div>
                        </li>
                    )}
                </ul>
            </div>
        );
    }

    console.log(Data.skills.other);
    return (
        <section className="grid grid-cols-3 gap-4">
            {skillSections}
            <div className="resume-skill-item">
                <h4 className="font-bold mb-2">Other</h4>
                {Data.skills.other
                    .sort((a, b) => a > b ? 1 : -1)
                    .map(skill =>
                        <span>{skill}, </span>
                    )}

            </div>
        </section >
    );
}