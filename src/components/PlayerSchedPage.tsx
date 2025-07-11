import type { PlayerType, GameType } from "./ExportTypes"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

type PlayerSchedPageProps = {
    allPlayers: PlayerType[],
    loadingPlayers: boolean,
    errorPlayers: string | null
}

function PlayerSchedPage( { allPlayers, loadingPlayers, errorPlayers }: PlayerSchedPageProps) {
    
const currentPlayers = allPlayers.filter(player => player.teamName !== "Removed")

  return (
    <div>
        { loadingPlayers && <p>Loading...</p> }
        { errorPlayers && <p> {errorPlayers}</p> }
        <Container>
            <Row>
            <h1>Player Schedules</h1>
            </Row>
            <Row>

                <p>Choose a Player</p>
                {currentPlayers.map(player => <div key={player.playerId}>
                    <Link to={"/scheds/" + player.playerId}>{player.firstName} {player.lastName}</Link>, {player.position}
                </div>)}

            </Row>

        </Container>
        
    </div>
  )
}

export default PlayerSchedPage