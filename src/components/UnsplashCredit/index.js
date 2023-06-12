import React from 'react';

import "./style.css"

const UnsplashCredit = ({unsplashName}) => {
    const url = `https://unsplash.com/${unsplashName}?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`
    return (
        <div className="unsplash-container">
            Photo by
            <a href={url} target="_blank" rel="noreferrer">{`\xa0${unsplashName}\xa0`}</a>
            on
            <a href={url} target="_blank" rel="noreferrer">{`\xa0Unsplash`}</a>
        </div>
    )
}

export default UnsplashCredit;

