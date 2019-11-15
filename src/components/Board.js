import React, { Component } from 'react';

class Board extends Component {
  render() {
    const { board } = this.props
    console.log(board.length)
    return (
      <div>
        <ul className="board">
          {board.map((cell, idx) => {
          return <li key={idx}>{cell}</li>})}
        </ul>
      </div>
    );
  }
}

export default Board;