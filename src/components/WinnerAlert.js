import React from 'react';
import { GameResetButton } from './GameResetButton';

export const WinnerAlert = ({ winner, handleResetClick }) => {
  return (
    <div className="winner_alert">
      {winner}
      <GameResetButton handleResetClick={handleResetClick} />
    </div>
  );
}