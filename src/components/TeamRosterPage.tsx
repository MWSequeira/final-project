import TeamButtons from './TeamButtons'
import TeamPlayersList from './TeamPlayersList'
import type { GameType, PlayerType, TeamsType } from '../App'
import { Container, Row, Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

type TeamRosterPageProps = {
  teams: TeamsType[],
  loadingTeams: boolean,
  errorTeams: string,
  allPlayers: PlayerType[],
  loadingPlayers: boolean,
  errorPlayers: string,
  gameSched: GameType[],
  selectedGame: GameType[],
  selectedTeam: TeamsType[],
  setSelectedTeam: (newValue:TeamsType[]) => void
}

function TeamRosterPage( { teams,
  loadingTeams,
  errorTeams,
  allPlayers,
  loadingPlayers,
  errorPlayers,
  gameSched,
  selectedGame,
  setSelectedGame,
  selectedTeam, 
  setSelectedTeam }: TeamRosterPageProps) {


  // const team1Roster:PlayerType[] = allPlayers.filter(player => player.teamName === selectedGame[0].team1)
  // const team2Roster:PlayerType[] = allPlayers.filter(player => player.teamName === selectedGame[0].team2)


  return (
    <div className='teamRosterPage'>
      <Container>
        <Row>
          Heading Here
        </Row>
        <Row>
          <Col>
          Team 1 here
            {/* {team1Roster.map(player => <div key={player.playerId}>
              {player.firstName} {player.lastName}, {player.position}, {player.phone}
            </div>)} */}
          </Col>
          <Col>
          Team 2 here
            {/* {team2Roster.map(player => <div key={player.playerId}>
              {player.firstName} {player.lastName}, {player.position}, {player.phone}
            </div>)} */}
          </Col>
        </Row>
      </Container>  
        

        
    </div>
  )
}

export default TeamRosterPage

{/* <h3>{selectedGame[0].team1}</h3>
            {team1Roster.map(player => <div key={player.playerId}>
              {player.firstName} {player.lastName}, {player.position}, {player.phone}
            </div>)}

<h3>{selectedGame[0].team2}</h3>
{team2Roster.map(player => <div key={player.playerId}>
  {player.firstName} {player.lastName}, {player.position}, {player.phone}
</div>)} */}