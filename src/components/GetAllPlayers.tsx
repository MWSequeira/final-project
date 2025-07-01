import { useState, useEffect } from 'react'
import type { PlayerType } from '../App'

type GetAllPlayersProps = {
  allPlayers: PlayerType[],
  setAllPlayers: (newValue: PlayerType) => void
}

function GetAllPlayers( {allPlayers, setAllPlayers }: GetAllPlayersProps) {
 

  return (
    <div className='getAllPlayers'>
      { loading && <p>Loading...</p> }
      { error && <p> {error}</p> }

      <h2>Full Players List</h2>
      {allPlayers.map(player => <div key={player.playerId}>
        {player.firstName} {player.lastName}, {player.position}, {player.phone} <br />
      </div>)}
    </div>
  )
}

export default GetAllPlayers