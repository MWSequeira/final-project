import { useState, useEffect } from 'react'
import type { PlayerType } from './ExportTypes'
import type { GameType } from './ExportTypes'

type UpdatePlayersProps = {
  allPlayers: PlayerType[],
  selectedPlayer: PlayerType[],
  setSelectedPlayer: (newValue: PlayerType) => void,
  loadingPlayers: boolean,
  errorPlayers: null | string,
  selectedGame: GameType[],
  gameSched: GameType[]

}

function UpdatePlayers( { allPlayers, 
  loadingPlayers, 
  errorPlayers, 
  selectedGame }: UpdatePlayersProps) {
      

  return (
    <div className='addNewPlayer'>
      { loadingPlayers && <p>Loading...</p> }
      { errorPlayers && <p> {errorPlayers}</p> }
      <h2>Make Changes</h2>
      <p>Change a player's information or league schedule</p>
      <p>Choose a Player</p>
          {allPlayers.map(player => <div key={player.playerId}>
            {player.firstName} {player.lastName}, {player.position}
          </div>)}
    </div>
  )
}

export default UpdatePlayers
