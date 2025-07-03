import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import type { GameType, PlayerType, TeamsType } from '../App'

type GameDetailsProps ={
    gameSched: GameType[],
    teams: TeamsType[],
    allPlayers: PlayerType[],
    selectedGame: GameType[],
    setSelectedGame: (newValue: GameType) => void
}

function GameDetails({ gameSched, 
    allPlayers,
    teams,
    selectedGame,
    setSelectedGame}: GameDetailsProps) {

    const { gameId } = useParams()

    let chosenGame = parseInt(gameId) // gameId is passed as a string; the prop is a number
    setSelectedGame(gameSched.find(game => game.gameId === chosenGame))

    console.log(teams)
    
    let team1Roster:PlayerType[] = allPlayers.filter(player => player.teamName === selectedGame.team1)
    let team2Roster:PlayerType[] = allPlayers.filter(player => player.teamName === selectedGame.team2)

  return (
    <div>
        <Container>
            <Row>
            <h1>Game {gameId} Players</h1> 
            </Row>
            <Row>
                <Col>
                    <h3>{selectedGame.team1}</h3>
                    {team1Roster.map(player => <p>
                        {player.firstName} {player.lastName}, {player.position}
                    </p>)}
                </Col>
                <Col>
                    <h3>{selectedGame.team2}</h3>
                    {team2Roster.map(player => <p>
                        {player.firstName} {player.lastName}, {player.position}
                    </p>)}
                </Col>
                <Col>
                    <h3>Available Subs</h3>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default GameDetails