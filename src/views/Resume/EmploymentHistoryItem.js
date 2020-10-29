import React from 'react';
import Tags from '../../components/Tags';

export default ({ key, title, employer, description, from, to, notes, tags }) => {
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