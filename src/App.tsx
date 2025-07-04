import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import styles
import './App.css'

// import pages and elements to appear on each page
import NavBar from './components/NavBar'
import GamesListPage from './components/GamesListPage'
import TeamRosterPage from './components-not-used/TeamRosterPage'
import AddSubPage from './components/AddSubPage'
import GameDetails from './components/GameDetails'

// import types
import type { GameType, PlayerType, TeamsType } from './components/ExportTypes'

function App() {
  // data locations
  const gamesBinUrl = "https://api.jsonbin.io/v3/b/68616bbd8a456b7966b8120e"
  const teamsBinUrl = "https://api.jsonbin.io/v3/b/686079348a456b7966b78eba"
  const allPlayersBinUrl = "https://api.jsonbin.io/v3/b/68619e538a456b7966b83828"
  
  // pieces of state needed throughout the app
  const [selectedTeam, setSelectedTeam] = useState([0, <div>Pick a Team to View</div>])
  const [selectedGame, setSelectedGame] = useState<[GameType]>([[0, "Team1", "Team2", "date", "time"]])

  // each state needs three pieces of state to fetch data from the backend
  const [gameSched, setGameSched] = useState<[GameType]>([]) // data we're trying to load
  const [loadingGames, setLoadingGames] = useState([]) // whether we're loading or not
  const [errorGames, setErrorGames] = useState<null | string>() // whether we've run into an error

  const [teams, setTeams] = useState<[TeamsType]>([[0, "Select a Team"]]) // data to load
  const [loadingTeams, setLoadingTeams] = useState([]) // whether we're loading or not
  const [errorTeams, setErrorTeams] = useState<null | string>() // whether we've run into an error

  const [allPlayers, setAllPlayers] = useState<[PlayerType]>([])
  const [loadingPlayers, setLoadingPlayers] = useState([]) // whether we're loading or not
  const [errorPlayers, setErrorPlayers] = useState<null | string>() // whether we've run into an error



  // GETTING DATA HERE SO THE APP DOESN'T RERENDER EACH TIME A PAGE LOADS
  // GET GAMES DATA
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

  // GET TEAMS DATA
  // useEffect controls the render and try-catch handles server no-response errors
  useEffect(() => {
    const asyncFunction = async () => {
      setLoadingTeams(true)
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
          setErrorTeams("Error: " + response.statusText)
        } else {
          const data:TeamsType = await response.json()
          const teamsArray = data[0]
          setTeams(teamsArray)
        }   
      } catch(error: any) {
        setErrorTeams("Error: " + error.message)
      }
      setLoadingTeams(false)
    }
    asyncFunction()
  }, [])

  // GET ALL PLAYERS DATA
  // useEffect controls the render and try-catch handles server no-response errors
  useEffect(() => {
    const asyncFunction = async () => {
      setLoadingPlayers(true)
      try {
        const response = await fetch(allPlayersBinUrl, {
          method: "GET",
          headers: { // read the documentation for JSONBin.io to get the headers
            "X-Master-Key": MY_API_KEY,
            "X-Bin-Meta": false,
            "X-JSON-Path": "$..players"
          }}
        )
        // check for a bad response error
        if (!response.ok) {
          setErrorPlayers("Error: " + response.statusText)
        } else {
          const data:PlayerType = await response.json()
          const allPlayerArray = data[0]
          setAllPlayers(allPlayerArray)

        }   
      } catch(error: any) {
        setErrorPlayers("Error: " + error.message)
      }
      setLoadingPlayers(false)
    }
    asyncFunction()
  }, [])

  // UPDATE THE BACKEND WHEN NEEDED
  // first, destructure the players' history arrays to create a state for the dependency array
  let allHistoriesArray = []
  for (let i = 0; i < allPlayers.length; i++) {
    allHistoriesArray.push(allPlayers[i].playerHistory)
  }
  const[allHistories, setAllHistories] = useState(allHistoriesArray)

  // next, use the useEffect hook with a PUT to update the backend
  // create the other two pieces of state needed for loading and error
  const [loadingHistories, setLoadingHistories] = useState([]) // whether we're loading or not
  const [errorHistories, setErrorHistories] = useState<null | string>() // whether we've run into an error
  // useEffect controls the render and try-catch handles server no-response errors
  // useEffect(() => {
  //   const asyncFunction = async () => {
  //     setLoadingHistories(true)
  //     try {
  //       const response = await fetch(allPlayersBinUrl, {
  //         method: "PUT",
  //         headers: { // read the documentation for JSONBin.io to get the headers
  //           "Content-Type": "application/json",
  //           "X-Master-Key": MY_API_KEY,
  //         },
  //         body: JSON.stringify([allPlayers]) // must match "Content-Type"
  //       }
  //       )
  //       // check for a bad response error
  //       if (!response.ok) {
  //         setErrorHistories("Error: " + response.statusText)
  //       } else {
  //         // const data:PlayerType = await response.json()
  //         // const allPlayerArray = data[0]
  //         // setAllPlayers(allPlayerArray)
          
  //       }   
  //     } catch(error: any) {
  //       setErrorHistories("Error: " + error.message)
  //     }
  //     setLoadingHistories(false)
  //     console.log("updating backend")
  //   }
  //   asyncFunction()
  // }, [allHistories])

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" 
          element={<GamesListPage 
            gameSched={gameSched}
            loadingGames={loadingGames}
            errorGames={errorGames}
            selectedGame={selectedGame}
            setSelectedGame={setSelectedGame}
          />} />
        <Route path="/team-roster" 
          element={<TeamRosterPage 
            teams={teams}
            loadingTeams={loadingTeams}
            errorTeams={errorTeams}
            allPlayers={allPlayers}
            loadingPlayers={loadingPlayers}
            errorPlayers={errorPlayers}
            gameSched={gameSched}
            selectedGame={selectedGame}
            setSelectedGame={setSelectedGame}
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
          />} />
        <Route path="/add-sub" 
          element={<AddSubPage 
            gameSched={gameSched}
            selectedGame={selectedGame}
            allPlayers={allPlayers} 
            loadingPlayers={loadingPlayers}
            errorPlayers={errorPlayers}
            setAllPlayers={setAllPlayers}
            allHistories={allHistories}
            setAllHistories={setAllHistories}
          />} />
        <Route path="/games/:gameId"
          element={<GameDetails 
          gameSched={gameSched}
          teams={teams}
          allPlayers={allPlayers} 
          selectedGame={selectedGame}
          setSelectedGame={setSelectedGame}
          />} />
      </Routes>

    </>
  )
}

export default App
