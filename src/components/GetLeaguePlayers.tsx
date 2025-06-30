import { useEffect, useState } from 'react'

type TeamsType = {
  teamId: number,
  teamName: string
}

type PlayerType = {
  firstName: string,
  lastNMame: string,
  phone: string,
  position: string,
  playerId: number,
  teamId: number
}

type PlayersDataProps = {
  selectedTeam: Array<TeamsType>
}

function GetLeaguePlayers( {selectedTeam}: PlayersDataProps) {
  // data location
  const playersBinUrl = "https://api.jsonbin.io/v3/b/68616aea8a456b7966b81127"

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

  let currentTeamId = selectedTeam[0].teamId // only one element in this array
  let displayList = assignedPlayers.filter(player => player.teamId === currentTeamId)


  // return the list of players
  return (
      <>
        { loading && <p>Loading...</p> }
        { error && <p> {error}</p> }
        <h1>League Players</h1>
        <h3>{selectedTeam[0].teamName}</h3>
        {displayList.map(item => <div key={item.playerId}>
          <b>{item.firstName} {item.lastName}</b>, {item.position}, {item.phone}
        </div>)}
      </>
  )
}
export default GetLeaguePlayers;