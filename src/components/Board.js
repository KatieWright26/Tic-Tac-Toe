import React from 'react';

export const Board = ({ board, handleClick })  => {
  return (
    <div className="board">
      <ul>
        {board.map((cell, idx) => (
          <li key={idx} onClick={() => handleClick(idx)}>
            {cell}
          </li>
        ))}
      </ul>
    </div>
  );
}
