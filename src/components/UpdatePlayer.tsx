import { useState, useEffect } from 'react'
import type { PlayerType } from './ExportTypes'
import type { GameType } from './ExportTypes'

type UpdatePlayerProps = {
  allPlayers: PlayerType[],
  loadingPlayers: boolean,
  errorPlayers: null | string,
  selectedGame: GameType[],
}

function UpdatePlayer( { allPlayers, 
  loadingPlayers, 
  errorPlayers, 
  selectedGame }: UpdatePlayerProps) {
    
    // data location -- happens to be the same as in the App component
    const allPlayersBinUrl = "https://api.jsonbin.io/v3/b/68619e538a456b7966b83828"
      
    // useEffect controls the render and try-catch handles server no-response errors
    useEffect(() => {
      const asyncFunction = async () => {
        setLoading(true)
        try {
          const response = await fetch(allPlayersBinUrl, {
            method: "PUT",
            headers: { // read the documentation for JSONBin.io to get the headers
              "Content-Type": "application/json",
              "X-Master-Key": MY_API_KEY,
              // "X-Bin-Meta": false,
              // "X-JSON-Path": "$..players"
            },
            body: JSON.stringify([...allPlayers, newPlayer]) // must match "Content-Type"
          }
          )
          // check for a bad response error
          if (!response.ok) {
            setError("Error: " + response.statusText)
          } else {
            // const data:PlayerType = await response.json()
            // const allPlayerArray = data[0]
            // setAllPlayers(allPlayerArray)
            
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
      { loadingPlayers && <p>Loading...</p> }
      { errorPlayers && <p> {errorPlayers}</p> }

      <alert>Player Added to Subs List for Game {selectedGame.gameId}</alert>

    </div>
  )
}

export default UpdatePlayer
