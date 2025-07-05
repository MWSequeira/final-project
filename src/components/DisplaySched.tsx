import { Container, Row, Col } from "react-bootstrap"
import type { GameType, PlayerType } from "./ExportTypes"

type DisplaySchedProps = {
    selectedPlayer: PlayerType[],
    gameSched: GameType[]
}

function DisplaySched( { selectedPlayer,gameSched }: DisplaySchedProps) {

    console.log(selectedPlayer)
    // functions for this component
    // let playerGames = gameSched.filter(game => selectedPlayer[0].playerHistory[game.gameId] !== 0)

  return (
    <Container>
        <Row>
            <h1>{selectedPlayer.firstName}'s schedule</h1> 
            <p>{selectedPlayer.firstName} {selectedPlayer.lastName}</p>
            <h2>{selectedPlayer.teamName}</h2>
        </Row>
        <Row>
            <div>Player's schedule here</div>
        </Row>
    </Container>
  )
}

export default DisplaySched