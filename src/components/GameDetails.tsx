import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function GameDetails({ gameSched, allPlayers}) {

    const { gameId } = useParams()

    const currentGame = gameSched.filter(game => game.gameId === gameId)
    console.log(currentGame)

  return (
    <div>
        <Container>
            <Row>
            <h1>Game {gameId} Details</h1> 
            </Row>
            <Row>
                <Col>
                    <h3>Team 1 Roster Here</h3>
                </Col>
                <Col>
                    <h3>Team 2 Roster here</h3>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default GameDetails