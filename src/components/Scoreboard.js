import React from 'react';

export const Scoreboard = ({ xWins, yWins}) => {
  return (
    <aside className="scoreboard">
      <h2>ScoreBoard</h2>
      <h3>Player X: { xWins }</h3>
      <h3>Player O: { yWins }</h3>
    </aside>
  );
}