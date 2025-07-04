import type { PlayerType, GameType } from "./ExportTypes"
import { Container, Row, Col } from "react-bootstrap"

type PlayerSchedPageProps = {
    allPlayers: PlayerType[],
    gameSched: GameType[]
}

function PlayerSchedPage( { allPlayers, gameSched }: PlayerSchedPageProps) {

  return (
    <div>
        <Container>
            <Row>
            <h1>Player Schedules</h1>
            </Row>
            <Row>
                <Col>
                <p>Players List here</p>
                </Col>
                <Col>
                <p>Selected Player's Schedule Here</p>
                </Col>
            </Row>

        </Container>
        
    </div>
  )
}

export default PlayerSchedPage