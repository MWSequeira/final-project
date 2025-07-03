import type { GameType, PlayerType } from '../App'
import { Container, Col, Row } from 'react-bootstrap'

type AddSubPageProps = {
  gameSched: GameType[],
  allPlayers: PlayerType
}

function AddSubPage( { gameSched, allPlayers }: AddSubPageProps) {

  return (
    <div className='addSubPage'>

      <Container>

        <Row>
          <h1>Add a Sub</h1>
        </Row>
        <Row>
          <Col>
            <h2>Games</h2>
            <p><b>Choose Game:</b></p>
            {gameSched.map(game => <div key={game.gameId}>
              <p>Game {game.gameId} on {game.date} at {game.time}</p>
            </div>)}
          </Col>
          <Col>
            <h2>Add a Sub</h2>
            <p><b>Choose from the list below</b></p>
              {allPlayers.map(player => <p>
                {player.firstName} {player.lastName}, {player.position}
              </p>)}
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default AddSubPage