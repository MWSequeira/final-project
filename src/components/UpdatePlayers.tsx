import { useState } from 'react'
import type { PlayerType } from './ExportTypes'
import type { GameType } from './ExportTypes'
import { Container, Row, Col } from 'react-bootstrap'
import PlayerChangeForm from './PlayerChangeForm'


type UpdatePlayersProps = {
  allPlayers: PlayerType,
  selectedPlayer: PlayerType,
  setSelectedPlayer: (newValue: PlayerType) => void,
  loadingPlayers: boolean,
  errorPlayers: null | string,
  selectedGame: GameType,
  gameSched: GameType
}

function UpdatePlayers( { allPlayers,
  selectedPlayer,
  setSelectedPlayer,
  loadingPlayers,
  errorPlayers,
  selectedGame,
  gameSched }: UpdatePlayersProps) {
      
    let inputPlayerId = 0
    
    const handleChoosePlayer = (inputPlayerId:number) =>
    setSelectedPlayer(allPlayers.filter(player => player.playerId = inputPlayerId))

  return (
    <div className='addNewPlayer'>
      { loadingPlayers && <p>Loading...</p> }
      { errorPlayers && <p>{errorPlayers}</p> }

      <Container>
        <Row>
        <h2>Make Changes</h2>
          <p>Change a player's information or league schedule</p>
        </Row>
        <Row>
          <Col>
          {allPlayers.map(player => <div key={player.playerId}>
            {player.playerId} &mdash; {player.firstName} {player.lastName}, {player.position}
          </div>)}
          </Col>
          <Col>
          <form >
              <label>Player Id Number: 
                  <input
                      name="inputPlayerId"
                      type="number"
                      placeholder='0'
                      onChange={handleChoosePlayer}
                      value={inputPlayerId}
                  />
              </label>  
          </form>
          <PlayerChangeForm />
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default UpdatePlayers
