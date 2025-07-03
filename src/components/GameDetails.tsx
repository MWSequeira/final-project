import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import type { GameType, PlayerType } from '../App'

type GameDetailsProps ={
    gameSched: GameType[],
    allPlayers: PlayerType[],
    selectedGame: GameType[],
    setSelectedGame: (newValue: GameType) => void
}

function GameDetails({ gameSched, 
    allPlayers,
    selectedGame,
    setSelectedGame}) {

    const { gameId } = useParams()

    let chosenGame = parseInt(gameId) // gameId is passed as a string; the prop is a number
    setSelectedGame(gameSched.find(game => game.gameId === chosenGame))

  return (
    <div>
        <Container>
            <Row>
            <h1>Game {gameId} Rosters</h1> 
            </Row>
            <Row>
                <Col>
                    <h3>{selectedGame.team1}</h3>
                    <p>roster here</p>
                </Col>
                <Col>
                    <h3>{selectedGame.team2}</h3>
                    <p>roster here</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default GameDetails