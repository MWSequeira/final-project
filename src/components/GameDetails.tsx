import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import type { GameType, PlayerType } from '../App'

type GameDetailsProps ={
    gameSched: GameType[],
    allPlayer: PlayerType[],
    selectedGame: GameType[],
    setSelectedGame: (newValue: GameType) => void
}

function GameDetails({ gameSched, 
    allPlayers,
    selectedGame,
    setSelectedGame}) {

    const { gameId } = useParams()


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