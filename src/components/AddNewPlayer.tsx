import { useState, useEffect } from 'react'
import type { PlayerType } from '../App'

type AddNewPlayerProps = {
  allPlayers: Array<PlayerType>,
  setAllPlayers: (NewValue:PlayerType) => void,
}

function AddNewPlayer( {allPlayers, setAllPlayers }: AddNewPlayerProps) {
  // data location
    const allPlayersBinUrl = "https://api.jsonbin.io/v3/b/68619e538a456b7966b83828"
  
    // three pieces of state to fetch data from the backend
    // data we're trying to load
    const [loading, setLoading] = useState([]) // whether we're loading or not
    const [error, setError] = useState<null | string>() // whether we've run into an error
  
    let newPlayer = {
      firstName: "FirstName",
      lastNMame: "LastName",
      phone: "Phone",
      position: "Position",
      playerId: 500,
      teamId: 0 //all non-league players have a teamId of 0
    }

  
    // useEffect controls the render and try-catch handles server no-response errors
    useEffect(() => {
      const asyncFunction = async () => {
        setLoading(true)
        try {
          const response = await fetch(allPlayersBinUrl, {
            method: "POST",
            headers: { // read the documentation for JSONBin.io to get the headers
              "Content-Type": "application/json",
              "X-Master-Key": MY_API_KEY,
            }
            // body: JSON.stringify(newPlayer) // must match "Content-Type"
          }
          )
          // check for a bad response error
          if (!response.ok) {
            setError("Error: " + response.statusText)
          } else {
            setPlayers([...players, newPlayer])

          }   
        } catch(error: any) {
          setError("Error: " + error.message)
        }
        setLoading(false)
      }
      asyncFunction()
    }, [])


  return (
    <div className='addNewPlayer'>
      { loading && <p>Loading...</p> }
      { error && <p> {error}</p> }
      <p>Add a new player to the players list</p>
      <p>New Player to add: </p>
      {newPlayer.firstName} {newPlayer.lastNMame}, {newPlayer.position}, {newPlayer.phone}
    </div>
  )
}

export default AddNewPlayer