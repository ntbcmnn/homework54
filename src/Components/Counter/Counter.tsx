import React from 'react';

interface ICounter {
    tries: number;
}

const Counter: React.FC<ICounter> = ({tries}) => {
    return (
        <h4 className="counter">
            Tries: {tries}
        </h4>
    );
};

export default Counter;