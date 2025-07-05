import { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import type { PlayerType } from './ExportTypes'
import type { GameType } from './ExportTypes'

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

  // state for the player selection form
  const[formValues, setFormValues] = useState({
    inputPlayerId: "0"
  })


  // keep track of form  changes
  const handleFormChange = (event: ChangeEvent<HTMLInputElement>) => 
    setFormValues({ 
        ...formValues, 
        [event.target.name]: event.target.value 
  })

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
        <p>Choose a Player</p>
                {allPlayers.map(player => <div key={player.playerId}>
                    <Link to={"/change/" + player.playerId}>{player.firstName} {player.lastName}</Link>, {player.position}
                </div>)}
        </Row>
      </Container>
      
    </div>
  )
}

export default UpdatePlayers

{/*  */}