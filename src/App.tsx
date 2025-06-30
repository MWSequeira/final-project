import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

// import styles
import './App.css'

// import pages and elements to appear on each page
import NavBar from './components/NavBar'
import GameSchedPage from './components/GameSchedPage'
import TeamRosterPage from './components/TeamRosterPage'
import AddSubPage from './components/AddSubPage'

// import functions that create state for the entire app
import GetAllPlayers from './components/GetAllPlayers'
import GamesList from './components/GamesList'
import TeamButtons from './components/TeamButtons'

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
  gameId: number
  team1: string,
  team2: string,
  date: string,
  time: string
}

function App() {
  // pieces of state needed throughout the app
   const[selectedTeam, setSelectedTeam] = useState([0, <div>Pick a Team to View</div>])
  const [selectedGame, setSelectedGame] = useState<[GameType]>([[0, "Team1", "Team2", "date", "time"]])
  

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" 
          element={<GameSchedPage 
            GamesList={GamesList} />} />
        <Route path="/team-roster" 
          element={<TeamRosterPage 
            TeamsButtons={TeamButtons} 
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam} />} />
        <Route path="/add-sub" 
          element={<AddSubPage 
            GamesList={GamesList}
            GetAllPlayers={GetAllPlayers} />} />
      </Routes>

    </>
  )
}

export default App
