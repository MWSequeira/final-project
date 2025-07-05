import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import styles
import './App.css'

// import pages and elements to appear on each page
import NavBar from './components/NavBar'
import GamesListPage from './components/GamesListPage'
import AddSubPage from './components/AddSubPage'
import GameDetails from './components/GameDetails'
import PlayerSchedPage from './components/PlayerSchedPage'
import PlayerSched from './components/PlayerSched'
import UpdatePlayers from './components/UpdatePlayers'

// import types
import type { GameType, PlayerType, TeamsType } from './components/ExportTypes'
import PlayerChangeForm from './components/PlayerChangeForm'

function App() {
  // data locations
  const gamesBinUrl = "https://api.jsonbin.io/v3/b/68616bbd8a456b7966b8120e"
  const teamsBinUrl = "https://api.jsonbin.io/v3/b/686079348a456b7966b78eba"
  const allPlayersBinUrl = "https://api.jsonbin.io/v3/b/68619e538a456b7966b83828"
  
  // pieces of state needed throughout the app
  const [selectedGame, setSelectedGame] = useState<[GameType]>([[0, "Team1", "Team2", "date", "time"]])
  const [selectedPlayer, setSelectedPlayer] = useState<[PlayerType]>([])
  const [changedHistory, setChangedHistory] = useState(false)

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
            "X-Bin-Meta": false
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

  // UPDATE THE PLAYER DATA ON THE BACKEND WHEN NEEDED   
  const updateAllPlayers = async () => {
   console.log(allPlayers)
    try {
      const response = await fetch(allPlayersBinUrl, {
        method: "PUT",
        headers: { // read the documentation for JSONBin.io to get the headers
          "Content-Type": "application/json",
          "X-Master-Key": MY_API_KEY,
        },
        body: JSON.stringify([allPlayers]) // must match "Content-Type"
      }
      )
      // check for a bad response error
      if (!response.ok) {
        setErrorHistories("Error: " + response.statusText)
      } else {
        // const data:PlayerType = await response.json()
        // const allPlayerArray = data[0]
        // setAllPlayers(allPlayerArray)
        
      }   
    } catch(error: any) {
      setErrorHistories("Error: " + error.message)
    }
    
    console.log("updating backend")
  }

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
        <Route path="/games/:gameId"
          element={<GameDetails 
          gameSched={gameSched}
          teams={teams}
          allPlayers={allPlayers} 
          selectedGame={selectedGame}
          setSelectedGame={setSelectedGame}
          />} />
        <Route path="/add-sub" 
          element={<AddSubPage 
            gameSched={gameSched}
            selectedGame={selectedGame}
            allPlayers={allPlayers} 
            loadingPlayers={loadingPlayers}
            errorPlayers={errorPlayers}
            setAllPlayers={setAllPlayers}
            changedHistory={changedHistory}
            setChangeHistory={setChangedHistory}
            updateAllPlayers={updateAllPlayers}
          />} />
        <Route path="/player-schedule" 
          element={<PlayerSchedPage
            allPlayers={allPlayers}
            gameSched={gameSched}
            selectedPlayer={selectedPlayer}
            loadingPlayers={loadingPlayers}
            errorPlayers={errorPlayers}
          />} />
        <Route path="/scheds/:playerId"
          element={<PlayerSched
            allPlayers={allPlayers}
            gameSched={gameSched}
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
          />} />
          <Route path="/update-player"
          element={<UpdatePlayers 
            allPlayers={allPlayers}
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
            loadingPlayers={loadingPlayers}
            errorPlayers={errorPlayers}
            selectedGame={selectedGame}
            gameSched={gameSched}
          />} />
          <Route path="/change-form"
            element={<PlayerChangeForm 
              allPlayers={allPlayers}
              selectedPlayer={selectedPlayer}
              setSelectedPlayer={setSelectedPlayer}
              loadingPlayers={loadingPlayers}
              errorPlayers={errorPlayers}
              selectedGame={selectedGame}
              gameSched={gameSched}
          />}/>
      </Routes>

    </>
  )
}

export default App
