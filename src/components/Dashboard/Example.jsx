import React from 'react';

export const Example = (props) => {

    return (
        <div>-{props.title}</div>
    )
};

Example.defaultProps = {
    title: 'HIII'
};