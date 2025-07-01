import type { PlayerType } from '../App'
import type { TeamsType } from './TeamButtons'

type PlayersListProps = {
  teams: TeamsType[],
  loadingPlayers: boolean,
  errorPlayers: string,
  selectedTeam: Array<TeamsType>
}

function TeamPlayersList( {teams,
  loadingPlayers,
  errorPlayers,
  selectedTeam }: PlayersListProps) {

  let currentTeamName = selectedTeam[0].teamName // only one element in this array
  const displayList = teams.filter(player => player.teamName === currentTeamName)


  return (
    <>
        { loadingPlayers && <p>Loading...</p> }
        { errorPlayers && <p> {errorPlayers}</p> }
        <h1>League Players</h1>
        <h3>{selectedTeam[0].teamName}</h3>
        {displayList.map(item => <div key={item.playerId}>
          <b>{item.firstName} {item.lastName}</b>, {item.position}, {item.phone}
        </div>)}
      </>
  )
}

export default TeamPlayersList