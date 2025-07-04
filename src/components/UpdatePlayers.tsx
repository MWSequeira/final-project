import { useState, useEffect } from 'react'
import type { PlayerType } from './ExportTypes'
import type { GameType } from './ExportTypes'

type UpdatePlayersProps = {
  allPlayers: PlayerType[],
  loadingPlayers: boolean,
  errorPlayers: null | string,
  selectedGame: GameType[],
}

function UpdatePlayers( { allPlayers, 
  loadingPlayers, 
  errorPlayers, 
  selectedGame }: UpdatePlayersProps) {
    
    // data location -- happens to be the same as in the App component
    const allPlayersBinUrl = "https://api.jsonbin.io/v3/b/68619e538a456b7966b83828"
      

  return (
    <div className='addNewPlayer'>
      { loadingPlayers && <p>Loading...</p> }
      { errorPlayers && <p> {errorPlayers}</p> }

      <alert>Player Added to Subs List for Game {selectedGame.gameId}</alert>

    </div>
  )
}

export default UpdatePlayers
