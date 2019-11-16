import React from 'react';
import GameResetButton from './GameResetButton';

const WinnerAlert = props => {

  return (
    <div className="winner_alert">
      {props.winner}
      <GameResetButton handleResetClick={props.handleReset}/>
    </div>
  )
}

export default WinnerAlert;