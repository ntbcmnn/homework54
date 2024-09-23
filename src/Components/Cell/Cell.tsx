import React from 'react';
import './Cell.css';
import {IProps} from '../../types';

interface ICell {
    cell: IProps;
    onChangeBackground: () => void;
}

const Cell: React.FC<ICell> = ({cell, onChangeBackground}) => {

    const cellClasses: string[] = ['cell'];

    if (cell.clicked) {
        cellClasses.push('clicked');
    }

    return (
        <div className={cellClasses.join(' ')} onClick={onChangeBackground}>
            {cell.clicked && cell.hasItem ? '🪴' : ''}
        </div>
    );
};

export default Cell;