import React from'react';
import './GameBoard.css';
import {IProps} from '../../types';
import Cell from '../Cell/Cell.tsx';

interface IGameBoard{
    cells: IProps[];
    onHandleCellClick: (id: number) => void;
}

const GameBoard: React.FC<IGameBoard> = ({cells, onHandleCellClick}) => {
    return (
        <div className="board">
            {cells.map((cell, id) => (
                <Cell
                    key={id}
                    cell={cell}
                    onChangeBackground={() => onHandleCellClick(id)}
                />
            ))}
        </div>
    );
};

export default GameBoard;