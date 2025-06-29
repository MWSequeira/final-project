import { useEffect, useState } from 'react'

function GamesList() {

  // data location
    const gamesBinUrl = "https://api.jsonbin.io/v3/b/68616bbd8a456b7966b8120e"
  
    // three pieces of state to fetch data from the backend
    const [gameSched, setGameSched] = useState<[GameType]>([]) // data we're trying to load
    const [loading, setLoading] = useState([]) // whether we're loading or not
    const [error, setError] = useState<null | string>() // whether we've run into an error
  
  
    // useEffect controls the render and try-catch handles server no-response errors
    useEffect(() => {
      const asyncFunction = async () => {
        setLoading(true)
        try {
          const response = await fetch(gamesBinUrl, {
            method: "GET",
            headers: { // read the documentation for JSONBin.io to get the headers
              "X-Master-Key": MY_API_KEY,
              "X-Bin-Meta": false,
              "X-JSON-Path": "$..games"
            }}
          )
          // check for a bad response error
          if (!response.ok) {
            setError("Error: " + response.statusText)
          } else {
            const data:GameType = await response.json()
            const gameSchedArray = data[0]
            setGameSched(gameSchedArray)
  
          }   
        } catch(error: any) {
          setError("Error: " + error.message)
        }
        setLoading(false)
      }
      asyncFunction()
    }, [])
  
    // let currentGameId = selectedGame[0].gameId // only one element in this array
    // let displayList = gameSched.filter(game => game.gameId === currentGameId)
     

  return (
    <div className="gamesList">
      { loading && <p>Loading...</p> }
      { error && <p> {error}</p> }

      {gameSched.map(game => <div key={game.gameId}>
        <p>
        <b>Game {game.gameId}: </b>
        on {game.date} at {game.time} &mdash; <b>{game.team1}</b> vs <b>{game.team2}</b>
        </p>
      </div>)}
    </div>

      
      
      


  )
}

export default GamesList