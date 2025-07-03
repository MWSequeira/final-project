import type { GameType, PlayerType } from '../App'
import { Container, Col, Row } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'

type AddSubPageProps = {
  gameSched: GameType[],
  allPlayers: PlayerType
}

function AddSubPage( { gameSched, allPlayers }: AddSubPageProps) {

  const chooseGame = (MouseEvent:HTMLButtonElement) => {
    console.log("Game Chosen")
    console.log(gameId)
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
            <p><b>Choose Game:</b></p>
            {gameSched.map(game => <div key={game.gameId}>
              <p><Button>Game {game.gameId}</Button> {game.date} at {game.time}</p>
            </div>)}
          </Col>
          <Col>
            <h2>Add a Sub</h2>
            <p><b>Choose from the list below</b></p>
              {allPlayers.map(player => <p>
                {player.firstName} {player.lastName}, {player.position}
              </p>)}
          </Col>
          <Col>
                <Form>
                  {['checkbox', 'radio'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`game-${type}`}
                        label={`game ${type}`}
                      />

                      <Form.Check
                        disabled
                        type={type}
                        label={`disabled ${type}`}
                        id={`disabled-default-${type}`}
                      />
                    </div>
                  ))}
                </Form>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default AddSubPage