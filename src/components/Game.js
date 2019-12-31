import React, { useState, useEffect } from 'react';
import { Board } from './Board';
import { Scoreboard } from './Scoreboard';
import { WinnerAlert } from './WinnerAlert';
import { POSSIBLE_WINS } from '../lib/winningMoves';

function Game() {
  const [board, setBoard] = useState(new Array(9).fill(''));
  const [winner, setWinner] = useState('');
  const [playerOScore, setPlayerOScore] = useState(0);
  const [playerXScore, setPlayerXScore] = useState(0);
  const [winnerMessage, setWinnerMessage] = useState('');
  const [currentPlayer, setCurrentPlayer] = useState(true);

  // DETECT WINNER
  useEffect(() => {
    POSSIBLE_WINS.filter(w => {
      if (w.every(idx => board[idx] === "X")) {
        setWinner("X");
        setPlayerXScore(prevState => prevState + 1);
      }
      if (w.every(idx => board[idx] === "O")) {
        setWinner("O");
        setPlayerOScore(prevState => prevState + 1);
      }
      return board;
    });
  }, [board]);

  const boardIsFull = board.every(cell => cell.length === 1);

  useEffect(() => {
    if (boardIsFull) setWinnerMessage(`TIE!!`);
  }, [boardIsFull]);

  // SET WINNING MESSAGE
  useEffect(() => {
    if (winner.length > 0) setWinnerMessage(`PLAYER ${winner} WINS!!`);
  }, [winner])

  const handleResetClick = () => {
    setWinner('');
    setWinnerMessage('');
    setCurrentPlayer(!currentPlayer);
    setBoard(new Array(9).fill(''));
  }

  const handleClick = (idx) => {
    if (board[idx] === '') {
      board[idx] = currentPlayer ? "X" : "O"
      setBoard([
        ...board,
      ]);
      setCurrentPlayer(!currentPlayer);
    }
  };

  return (
    <div className="container">
      {winnerMessage && (
        <WinnerAlert
          winner={winnerMessage}
          handleResetClick={handleResetClick}
        />
      )}
      <div className="game_container">
        <Scoreboard xWins={playerXScore} yWins={playerOScore} />
        <Board board={board} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Game;

