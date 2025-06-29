import { useEffect, useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

type TeamsType = {
   team_id: number,
   team_name: string
}

type TeamButtonProps = {
  setSelectedTeam: (newValue: number) => void
}

function TeamButtons({setSelectedTeam}: TeamButtonProps) {
  // data location
  const teamsBinUrl = "https://api.jsonbin.io/v3/b/686079348a456b7966b78eba"

  // three pieces of state to fetch data from the backend
  const [teams, setTeams] = useState<[TeamsType]>([]) // data we're trying to load
  const [loading, setLoading] = useState([]) // whether we're loading or not
  const [error, setError] = useState<null | string>() // whether we've run into an error

  // useEffect controls the render and try-catch handles server no-response errors
  useEffect(() => {
    const asyncFunction = async () => {
      setLoading(true)
      try {
        const response = await fetch(teamsBinUrl, {
          method: "GET",
          headers: { // read the documentation for JSONBin.io to get the headers
            "X-Master-Key": MY_API_KEY,
            "X-Bin-Meta": false,
            "X-JSON-Path": "$..teams"
          }}
        )
        // check for a bad response error
        if (!response.ok) {
          setError("Error: " + response.statusText)
        } else {
          const data:TeamsType = await response.json()
          const teamsArray = data[0]
          setTeams(teamsArray)

        }   
      } catch(error: any) {
        setError("Error: " + error.message)
      }
      setLoading(false)
    }
    asyncFunction()
  }, [])

  // select a different team
  const changeTeam = (idToSelect: number) => {
    console.log(teams.filter(team => team.team_id === idToSelect))
    setSelectedTeam(teams.filter(team => team.team_id === idToSelect))
  }

  return (
    <>
      { loading && <p>Loading...</p> }
      { error && <p> {error}</p> }

        <ButtonGroup aria-label="teams">
          {teams.map(team =>
              <Button key={team.team_id} onClick={() => changeTeam(team.team_id)}>{team.team_name}</Button>)
          }
        </ButtonGroup>
    </>
  )
}
export default TeamButtons