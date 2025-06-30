import { useEffect, useState } from 'react'
import type { GameType } from '../App'

type GamesListProps = {
  gameSched: Array<GameType>,
  setGameSched: (newValue:GameType) => void,
}

function GamesListPage( { gameSched, setGameSched  }: GamesListProps) {

  // data location
    const gamesBinUrl = "https://api.jsonbin.io/v3/b/68616bbd8a456b7966b8120e"
  
    // three pieces of state to fetch data from the backend; gameSched was lifted up so it can be used in other components
    const [loadingGames, setLoadingGames] = useState([]) // whether we're loading or not
    const [errorGames, setErrorGames] = useState<null | string>() // whether we've run into an error
  

    // useEffect controls the render and try-catch handles server no-response errors
    useEffect(() => {
      const asyncFunction = async () => {
        setLoadingGames(true)
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
            setErrorGames("Error: " + response.statusText)
          } else {
            const data:GameType = await response.json()
            const gameSchedArray = data[0]
            setGameSched(gameSchedArray)
  
          }   
        } catch(error: any) {
          setErrorGames("Error: " + error.message)
        }
        setLoadingGames(false)
      }
      asyncFunction()
    }, [])
  
    // let currentGameId = selectedGame[0].gameId // only one element in this array
    // let displayList = gameSched.filter(game => game.gameId === currentGameId)
     

  return (
    <div className="gamesList">
      { loadingGames && <p>Loading...</p> }
      { errorGames && <p> {errorGames}</p> }
      
      <h1>Schedule of Games</h1>
      {gameSched.map(game => <div key={game.gameId}>
        <p>
        <b>Game {game.gameId}: </b>
        on {game.date} at {game.time} &mdash; <b>{game.team1}</b> vs <b>{game.team2}</b>
        </p>
      </div>)}
    </div>

      
      
      


  )
}

export default GamesListPage