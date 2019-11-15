import React, { Component } from 'react';

class Board extends Component {
  assignCellValue = (e, cell, idx) => {
    this.props.onClick(e, cell, idx)
  };

  render() {
    const { board, onClick } = this.props
    return (
      <div>
        <ul className="board">
          {board.map((cell, idx) => {
          return <li key={idx} onClick={e => this.assignCellValue(e, cell, idx)}>{cell}</li>})}
        </ul>
      </div>
    );
  }
}

export default Board;