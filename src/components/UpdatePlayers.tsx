// RENDERS THE LIST OF CURRENT PLAYERS WITH LINKS TO THE UPDATE FORM

import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import type { PlayerType } from './ExportTypes'
import type { GameType } from './ExportTypes'

type UpdatePlayersProps = {
  allPlayers: PlayerType[],
  selectedPlayer: PlayerType,
  setSelectedPlayer: (newValue: PlayerType) => void,
  loadingPlayers: boolean,
  errorPlayers: null | string,
  selectedGame: GameType,
  gameSched: GameType
}


function UpdatePlayers( { allPlayers,
  loadingPlayers,
  errorPlayers
  }: UpdatePlayersProps) {

  const currentPlayers = allPlayers.filter(player => player.teamName !== "Removed")

  return (
    <div className='addNewPlayer'>
      { loadingPlayers && <p>Loading...</p> }
      { errorPlayers && <p>{errorPlayers}</p> }

      <Container>
        <Row>
          <h2>Make Changes</h2>
        </Row>
        <Row>
          <p>Choose a player to change that player's information:</p>
            {currentPlayers.map(player => <div key={player.playerId}>
                <Link to={"/change/" + player.playerId}>{player.firstName} {player.lastName}</Link>, {player.position}
            </div>)}
        </Row>
      </Container>
      
    </div>
  )
}

export default UpdatePlayers