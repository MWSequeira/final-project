import { Container, Row, Col } from 'react-bootstrap'
import type { GameType, PlayerType } from './ExportTypes'

type DisplayGamesProps = {
    allPlayers: PlayerType[],
    selectedGame: GameType[]
}

function DisplayGames( { allPlayers, 
    selectedGame }: DisplayGamesProps) {

    // functions for this component
    let team1Roster:PlayerType[] = allPlayers.filter(player => player.teamName === selectedGame.team1)
    let team2Roster:PlayerType[] = allPlayers.filter(player => player.teamName === selectedGame.team2)
    let gameSubs:PlayerType[] = allPlayers.filter(player => player.playerHistory[selectedGame.gameId] === 5)

  return (
    <Container>
        <Row>
            <h1>Game {selectedGame.gameId} Players</h1> 
        </Row>
        <Row>
            <Col>
                <h3>{selectedGame.team1}</h3>
                {team1Roster.map(player => <p key={player.playerId}>
                    {player.firstName} {player.lastName}, {player.position}
                </p>)}
            </Col>
            <Col>
                <h3>{selectedGame.team2}</h3>
                {team2Roster.map(player => <p key={player.playerId}>
                    {player.firstName} {player.lastName}, {player.position}
                </p>)}
            </Col>
            <Col>
                <h3>Available Subs</h3>
                {gameSubs.map(player => <p key={player.playerId}>
                    {player.firstName} {player.lastName}, {player.position}
                </p>)}
            </Col>
        </Row>
    </Container>
  )
}

export default DisplayGames