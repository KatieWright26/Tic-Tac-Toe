import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: new Array(9).fill(' ')
    };
  }

  render() {
    const { board } = this.state;
    console.log(board.length)
    return (
      <div>
        <Board board={board}/>
      </div>
    );
  }
}

export default Game;