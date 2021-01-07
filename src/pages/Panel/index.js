import React from 'react';

const Test = ({name: Name, ...rest}) => (
    <div>
        Teste
        
    </div>
);

const Panel = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <Test name="Kevin" age="14" height="170"/>
        </div>
    );
}

export default Panel;