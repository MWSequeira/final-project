import { Container, Row, Col } from "react-bootstrap"
import type { GameType, PlayerType } from "./ExportTypes"

type DisplaySchedProps = {
    selectedPlayer: PlayerType[],
    gameSched: GameType[]
}

function DisplaySched( { selectedPlayer,gameSched }: DisplaySchedProps) {

    // functions for this component
    let playerGames = gameSched.filter(game => selectedPlayer.playerHistory[game.gameId] !== 0)

  return (
    <Container>
        <Row>
            <h1>{selectedPlayer.firstName}'s schedule</h1> 
            <p>{selectedPlayer.firstName} {selectedPlayer.lastName}, {selectedPlayer.position}</p>
            <h2>Team: {selectedPlayer.teamName}</h2>
        </Row>
        <Row>
            <div>
                {playerGames.map(game => <div key={game.gameId}>
                    {game.date} at {game.time} </div>)}
            </div>
        </Row>
    </Container>
  )
}

export default DisplaySched