// RENDER THE SCHEDULE FOR THE SELECTED PLAYER

import { Container, Row } from "react-bootstrap"
import type { GameType, PlayerType } from "./ExportTypes"

type DisplaySchedProps = {
    selectedPlayer: PlayerType,
    gameSched: GameType
}


function DisplaySched( { selectedPlayer,gameSched }: DisplaySchedProps) {

    // functions for this component
    let playerGames = gameSched.filter(game => selectedPlayer.playerHistory[game.gameId] !== 0)

  return (
    <Container>
        <Row>
            <h1>{selectedPlayer.firstName}'s schedule</h1> 
            <p>{selectedPlayer.firstName} {selectedPlayer.lastName}, {selectedPlayer.position}, {selectedPlayer.phone}</p>
            <h2>Team: {selectedPlayer.teamName}</h2>
        </Row>
        <Row>
            <div>
                {playerGames.map(game => <div key={game.gameId}>
                    <p>{game.date} at {game.time} </p>
                </div>)}
            </div>
        </Row>
    </Container>
  )
}

export default DisplaySched