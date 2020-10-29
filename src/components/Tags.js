import React from 'react';
import './Tags.scss';

export default ({ tags = [], theme = "dark" }) => {
    return (
        <div className="flex flex-wrap">
            {tags.map((item, i) =>
                <span key={i} className={`tag tag-${theme} mb-2 mr-2`}>{item}</span>
            )}
        </div>
    )
}