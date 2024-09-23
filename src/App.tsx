import {useState} from 'react';
import {IProps} from './types';
import GameBoard from './Components/GameBoard/GameBoard.tsx';
import Counter from './Components/Counter/Counter.tsx';
import ResetBtn from './Components/ResetBtn/ResetBtn.tsx';
import './App.css';

const createItems = (): IProps[] => {
    const cells: IProps[] = Array(36).fill(null).map(() => ({
        hasItem: false,
        clicked: false,
    }));

    const randomCell: number = Math.floor(Math.random() * cells.length);
    cells[randomCell].hasItem = true;

    return cells;
};

const App = () => {
    const [board, setBoard] = useState<IProps[]>(createItems());
    const [tries, setTries] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const handleCellClick = (index: number): void => {
        if (gameOver || board[index].clicked) return;

        const newCells: IProps[] = [...board];
        newCells[index].clicked = true;

        if (newCells[index].hasItem) {
            setGameOver(true);
        }

        setBoard(newCells);
        setTries(tries + 1);
    };

    const handleReset = (): void => {
        setBoard(createItems());
        setTries(0);
        setGameOver(false);
    };

    return (
        <>
            {
                gameOver ?
                    <h4 className="counter">
                        You found the plant in {tries} {tries === 1 ? 'try' : 'tries'}
                    </h4>
                    :
                    <Counter tries={tries}/>
            }
            <GameBoard
                cells={board}
                onHandleCellClick={handleCellClick}
            />
            <ResetBtn onHandleReset={handleReset}/>
        </>
    );
};

export default App;