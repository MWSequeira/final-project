import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// import styles
import './App.css'

// import pages and elements to appear on each page
import NavBar from './components/NavBar'
import GamesListPage from './components/GamesListPage'
import TeamRosterPage from './components/TeamRosterPage'
import AddSubPage from './components/AddSubPage'

export type PlayerType = {
  firstName: string,
  lastName: string,
  phone: string,
  position: string,
  playerId: number,
  teamId: number
}

export type TeamsType = {
  teamId: number,
  teamName: string
}

export type GameType = {
  gameId: number,
  team1: string,
  team2: string,
  date: string,
  time: string
}

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
          console.log("teams")
          console.log(teams)
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
          element={<AddSubPage />} />
      </Routes>

    </>
  )
}

export default App
