import { Container, Row, Col } from "react-bootstrap"
import type { GameType, PlayerType } from "./ExportTypes"

type DisplaySchedProps = {
    allPlayers: PlayerType[],
    selectedPlayer: PlayerType[],
    gameSched: GameType[]
}

function DisplaySched( { allPlayers, selectedPlayer,gameSched }: DisplaySchedProps) {

    console.log(gameSched)
    // functions for this component
    let playerGames = gameSched.filter(game => selectedPlayer[0].playerHistory[game.gameId] !== 0)

  return (
    <Container>
        <Row>
            <h1>{selectedPlayer[0].firstName}</h1> 
        </Row>
        <Row>
            <div>Player's schedule here</div>
        </Row>
    </Container>
  )
}

export default DisplaySched