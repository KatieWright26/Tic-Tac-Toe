import React from 'react';

const Scoreboard = props => {
  return (
    <aside className="scoreboard">
      <h2>ScoreBoard</h2>
      <h3>Player X: {props.xWins}</h3>
      <h3>Player O: {props.yWins}</h3>
    </aside>
  );
}

export default Scoreboard;