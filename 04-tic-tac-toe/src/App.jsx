import { useState } from 'react';

import Player from './components/Player/Player';
import GameBoard from './components/GameBoard/GameBoard';
import Log from './components/Log/Log';
import GameOver from './components/GameOver/GameOver';
import { WINNING_COMBINATIONS } from './resources/winning-combinations';


const PLAYERS = {
    X: 'Player 1',
    O: 'Player 2'
};

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];


const deriveActivePlayer = (gameTurns) => {
    let currentPlayer = 'X';

    if ((gameTurns.length > 0) && (gameTurns[0].player === 'X')) {
        currentPlayer = 'O';
    }

    return currentPlayer;
}


const deriveWinner = (gameBoard, players) => {
    let winner = null;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

        if (
            firstSquareSymbol && 
            (firstSquareSymbol == secondSquareSymbol) &&
            (firstSquareSymbol == thirdSquareSymbol)) {
            winner = players[firstSquareSymbol];
        }
    }

    return winner;
}


const deriveGameBoard = (gameTurns) => {
    let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];// crea una copia profunda

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    return gameBoard;
}


function App() {
    const [ gameTurns, setGameTurns ] = useState([]);
    const [ players, setPlayers ] = useState(PLAYERS);


    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard, players);
    const hasDraw = gameTurns.length == 9 && !winner;


    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameTurns((prevTurns) => {
            const currentPlayer = deriveActivePlayer(prevTurns);

            const updatedTurns = [
                {
                    square: {
                        row: rowIndex,
                        col: colIndex
                    },
                    player: currentPlayer
                },
                ...prevTurns
            ];

            return updatedTurns;
        });
    }


    const handleRestart = () => {
        setGameTurns([]);
    }


    const handlePlayerNameChange = (symbol, newName) => {
        setPlayers((prevState) => {
            return {
                ...prevState,
                [symbol]: newName
            }
        });
    }


    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player 
                        name={PLAYERS.X} 
                        symbol="X" 
                        isActive={activePlayer === 'X'}
                        onChangeName={handlePlayerNameChange}
                    />
                    <Player
                        name={PLAYERS.O} 
                        symbol="O" 
                        isActive={activePlayer === 'O'} 
                        onChangeName={handlePlayerNameChange}
                    />
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
                <GameBoard
                    onSelectSquare={handleSelectSquare}
                    board={gameBoard}
                />
            </div>
            <Log turns={gameTurns} />
        </main>
    )
}

export default App
