import React from 'react';

const Ask = ({ ask }) => {
    return (
        <div className="list-group-item">
                <h5>
                   {ask.title}
                </h5>
            <small>{ask.score} points by <strong>{ask.by}</strong></small>
        </div>
    );
};

export default Ask;
