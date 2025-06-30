import { useState, useEffect } from 'react'
import type { PlayerType } from '../App'

function GetAllPlayers() {
 // data location
    const allPlayersBinUrl = "https://api.jsonbin.io/v3/b/68619e538a456b7966b83828"
  
    // three pieces of state to fetch data from the backend
    const [allPlayers, setAllPlayers] = useState<[PlayerType]>([]) // data we're trying to load
    const [loading, setLoading] = useState([]) // whether we're loading or not
    const [error, setError] = useState<null | string>() // whether we've run into an error
  
    // useEffect controls the render and try-catch handles server no-response errors
    useEffect(() => {
      const asyncFunction = async () => {
        setLoading(true)
        try {
          const response = await fetch(allPlayersBinUrl, {
            method: "GET",
            headers: { // read the documentation for JSONBin.io to get the headers
              "X-Master-Key": MY_API_KEY,
              "X-Bin-Meta": false,
              "X-JSON-Path": "$..players"
            },
          }
          )
          // check for a bad response error
          if (!response.ok) {
            setError("Error: " + response.statusText)
          } else {
            const data:PlayerType = await response.json()
            const allPlayerArray = data[0]
            setAllPlayers(allPlayerArray)
            
          }   
        } catch(error: any) {
          setError("Error: " + error.message)
        }
        setLoading(false)
      }
      asyncFunction()
    }, [])

  return (
    <div className='getAllPlayers'>
      { loading && <p>Loading...</p> }
      { error && <p> {error}</p> }

      <h2>Full Players List</h2>
      {allPlayers.map(player => <div key={player.playerId}>
        {player.firstName} {player.lastName}, {player.position}, {player.phone} <br />
      </div>)}
    </div>
  )
}

export default GetAllPlayers