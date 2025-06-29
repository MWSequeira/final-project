import { useEffect, useState } from 'react'
import { TeamsType } from './TeamButtons'

type PlayerType = {
  first_name: string,
  last_name: string,
  phone: string,
  position: string,
  player_id: number,
  team_id: number
}

type PlayersDataProps = {
  selectedTeam: Array<TeamsType>
}

function GetPlayersData( {selectedTeam}: PlayersDataProps) {
  // data location
  const playersBinUrl = "https://api.jsonbin.io/v3/b/685f3beb8960c979a5b2b795"

  // three pieces of state to fetch data from the backend
  const [assignedPlayers, setAssignedPlayers] = useState<[PlayerType]>([]) // data we're trying to load
  const [loading, setLoading] = useState([]) // whether we're loading or not
  const [error, setError] = useState<null | string>() // whether we've run into an error


  // useEffect controls the render and try-catch handles server no-response errors
  useEffect(() => {
    const asyncFunction = async () => {
      setLoading(true)
      try {
        const response = await fetch(playersBinUrl, {
          method: "GET",
          headers: { // read the documentation for JSONBin.io to get the headers
            "X-Master-Key": MY_API_KEY,
            "X-Bin-Meta": false,
            "X-JSON-Path": "$..players"
          }}
        )
        // check for a bad response error
        if (!response.ok) {
          setError("Error: " + response.statusText)
        } else {
          const data:PlayerType = await response.json()
          const assignedPlayerArray = data[0]
          setAssignedPlayers(assignedPlayerArray)

        }   
      } catch(error: any) {
        setError("Error: " + error.message)
      }
      setLoading(false)
    }
    asyncFunction()
  }, [])

  let currentTeamId = selectedTeam[0].team_id // only one element in this array
  let displayList = assignedPlayers.filter(player => player.team_id === currentTeamId)) 

  // return the list of players
  return (
      <>
        { loading && <p>Loading...</p> }
        { error && <p> {error}</p> }
        <h1>League Players</h1>
        {dsiplayList.map(item => <div key={item.player_id}>
          {item.first_name} {item.last_name},   
          {item.position},  team {item.team_id},  
          {item.phone}
        </div>)}
      </>
  )
}
export default GetPlayersData;