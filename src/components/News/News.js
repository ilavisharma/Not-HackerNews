import React from 'react';

import extractRootDomain from '../../apis/addressExtract.js';

const News = ({ news }) => {
    return (
        <div className="list-group-item">
                <h5>
                    <a href={news.url} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                        {news.title}
                    </a>  <small>({extractRootDomain(news.url)})</small>
                </h5>
            <small>{news.score} points by {news.by} | {news.comments} comments</small>
        </div>
    );
};

export default News;
