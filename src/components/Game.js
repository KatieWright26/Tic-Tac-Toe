import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: new Array(9).fill(''),
      player1: 'X',
    };
  }

  handleClick = (e, cell, idx) => {
    if(cell.length === 0) {
      this.setState((state) => state.board[idx] = 'X')
    }
  };

  render() {
    const { board } = this.state;
    return (
      <div>
        <Board board={board} onClick={this.handleClick}/>
      </div>
    );
  }
}

export default Game;