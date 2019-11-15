import React, { Component } from 'react';
import Board from './Board';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: new Array(9).fill(''),
      currentPlayer: true,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('update')
    if(this.state.currentPlayer === prevState.currentPlayer) {
      this.setState({ currentPlayer: !prevState.currentPlayer });
    }
  };

  handleClick = (e, cell, idx) => {
    if(cell.length === 0) {
      this.setState((state) =>
      state.board[idx] = this.state.currentPlayer ? 'X' : 'O'
      );
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