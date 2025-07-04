import { Container, Col, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import type { GameType, PlayerType } from '../App'


type AddSubPageProps = {
  gameSched: GameType[],
  allPlayers: PlayerType
}

function AddSubPage( { gameSched, allPlayers }: AddSubPageProps) {

  const [formValues, setFormValues] = useState({
    gameId: Number,
    playerId: Number
  })

  const handleSubmit = (gameId, playerId) => {
    console.log(gameId)
    console.log(playerId)
  }

  return (
    <div className='addSubPage'>

      <Container>

        <Row>
          <h1>Add a Sub</h1>
        </Row>

        <Row>
          <Col>
            <h2>Games</h2>
            <form>
              <div class="form-group">
                <label for="getGame">Choose a Game</label>
                <select class="form-control"
                  id="getGame"
                  value={formValues.gameId}>
                    {gameSched.map(game => <option key={game.gameId}>
                      Game {game.gameId} on {game.date} at {game.time}</option>
                    )}
                </select>
              </div>
            </form>
          </Col>
          <Col>
            <h2>Add a Sub</h2>
            <form>
              <div class="form-group">
                <label for="getPlayer">Choose a Player</label>
                <select class="form-control" 
                  id="getPlayer"
                  value={formValues.playerId}>
                    {allPlayers.map(player => <option key={player.playerId}>
                      {player.firstName} {player.lastName}, {player.position}
                    </option>)}
                </select>
              </div>
            </form>
          </Col>
        </Row>
        <Row>
          <Button variant="outline-primary" onClick={handleSubmit}>Submit</Button>
        </Row>

      </Container>
    </div>
  )
}

export default AddSubPage