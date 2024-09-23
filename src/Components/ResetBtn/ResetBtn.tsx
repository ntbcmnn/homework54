import React from 'react';
import './ResetBtn.css';

interface IResetBtn {
    onHandleReset: () => void;
}

const ResetBtn: React.FC<IResetBtn> = ({onHandleReset}) => {
    return (
        <button className="reset" onClick={onHandleReset}>Reset</button>
    );
};

export default ResetBtn;