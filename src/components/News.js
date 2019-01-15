import React from 'react';

import extractRootDomain from '../apis/addressExtract.js';

const News = ({ news }) => {
    return (
        <div className="list-group-item">
            <a href={news.url} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <h5>{news.title}  <small>({extractRootDomain(news.url)})</small></h5>
            </a>
            <small>{news.score} points by {news.by} | {news.comments} comments</small>
        </div>
    );
};

export default News;
