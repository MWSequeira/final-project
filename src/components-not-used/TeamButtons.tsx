import { Button, ButtonGroup } from 'react-bootstrap'
import type { TeamsType } from '../App'


type TeamButtonProps = {
  teams: TeamsType,
  loadingTeams: boolean,
  errorTeams:string,
  setSelectedTeam: (newValue: number) => void
}

function TeamButtons({ teams,
  loadingTeams,
  errorTeams,
  setSelectedTeam}: TeamButtonProps) {

  // select a different team
  const changeTeam = (idToSelect: number) => {
    setSelectedTeam(teams.filter(team => team.teamId === idToSelect))
  }

  return (
    <>
      { loadingTeams && <p>Loading...</p> }
      { errorTeams && <p> {errorTeams}</p> }

        <ButtonGroup aria-label="teams">
          {teams.map(team =>
              <Button variant="outline-primary" key={team.teamId} onClick={() => changeTeam(team.teamId)}>{team.teamName}</Button>)
          }
        </ButtonGroup>
    </>
  )
}
export default TeamButtons