import { useState, useEffect } from 'react'
import type { PlayerType } from './ExportTypes'
import type { GameType } from './ExportTypes'
import { Container, Row, Col } from 'react-bootstrap'

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

      <Container>
        <Row>
        <h2>Make Changes</h2>
          <p>Change a player's information or league schedule</p>
        </Row>
        <Row>
          <Col>
          <p>Choose a Player</p>
          {allPlayers.map(player => <div key={player.playerId}>
            {player.playerId} &mdash; {player.firstName} {player.lastName}, {player.position}
          </div>)}</Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default UpdatePlayers
