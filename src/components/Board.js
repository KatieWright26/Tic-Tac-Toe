import React, { Component } from 'react';

class Board extends Component {
  assignCellValue = (cell, idx) => {
    this.props.onClick(cell, idx)
  };

  render() {
    const { board } = this.props
    return (
      <div className="board">
        <ul>
          {board.map((cell, idx) => {
            return (
              <li key={idx} onClick={() => this.assignCellValue(cell, idx)}>
                {cell}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Board;