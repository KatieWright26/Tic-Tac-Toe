import React, { Component } from 'react';
import Board from './Board';
import Scoreboard from './Scoreboard';

const POSSIBLE_WINS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: new Array(9).fill(''),
      currentPlayer: true,
      winner: null,
      playerXScore: 0,
      playerOScore: 0,
      winnerMessage: '',
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.winner === 'X') {
      this.setState({
        playerXScore: this.state.playerXScore + 1,
        winner: null,
        board: new Array(9).fill("")
      });
    } else if ( this.state.winner === 'O') {
      this.setState({
        playerOScore: this.state.playerOScore + 1,
        winner: null,
        board: new Array(9).fill("")
      });
    } else if (!this.state.board.includes("")) {
      this.setState({
        winner: null,
        board: new Array(9).fill("")
      });
    }
  };

  checkForWin = () => {
    let board = this.state.board;
    let winner = null;
    POSSIBLE_WINS.filter(w => {
      if (w.every(idx => board[idx] === 'X')) { winner = 'X' }
      if (w.every(idx => board[idx] === 'O')) { winner = 'O' }
      return winner;
    });
    return winner;
  }

  handleClick = (cell, idx) => {
    if(cell.length === 0) {
      this.setState((state) => {
        let winner = this.checkForWin();
        let board = this.state.board.map((cell, i) => {
          if(i === idx) {
            cell = this.state.currentPlayer ? "X" : "O";
          }
          return cell;
        });
        return {
          board,
          winner,
          currentPlayer: !this.state.currentPlayer,
        }
      });
    }
  };

  render() {
    const { board, playerXScore, playerOScore } = this.state;
    return (
      <div className="container">
        <Scoreboard xWins={playerXScore} yWins={playerOScore} />
        <Board board={board} onClick={this.handleClick} />
      </div>
    );
  }
}

export default Game;

