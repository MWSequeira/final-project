import TeamButtons from './TeamButtons'
import TeamPlayersList from './TeamPlayersList'
import type { GamesType, PlayerType, TeamsType } from '../App'

type TeamRosterPageProps = {
  teams: TeamsType[],
  loadingTeams: boolean,
  errorTeams: string,
  allPlayers: PlayerType,
  loadingPlayers: boolean,
  errorPlayers: string,
  selectedGame: GamesType,
  selectedTeam: TeamsType,
  setSelectedTeam: (newValue:TeamsType) => void
}

function TeamRosterPage( { teams,
  loadingTeams,
  errorTeams,
  allPlayers,
  loadingPlayers,
  errorPlayers,
  selectedGame,
  selectedTeam, 
  setSelectedTeam }: TeamRosterPageProps) {

  return (
    <div className='teamRosterPage'>
        <h1>Team Rosters</h1>
        <p>Select a team to see the roster</p>

        <TeamButtons 
          teams={teams}
          loadingTeams={loadingTeams}
          errorTeams={errorTeams}
          setSelectedTeam={setSelectedTeam}
        />

        <TeamPlayersList
          teams={teams}
          loadingPlayers={loadingPlayers}
          errorPlayer={errorPlayers}
          selectedTeam={selectedTeam}
        />
    </div>
  )
}

export default TeamRosterPage