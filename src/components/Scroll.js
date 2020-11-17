import React from 'react';

const Scroll = (test) => {
    return (
        <div style={{overflowX: 'scroll', border: '1px', height: '800px'}}>
            {test.children}
        </div>
    )
};

export default Scroll;