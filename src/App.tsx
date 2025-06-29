import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import GameSchedPage from './components/GameSchedPage'
import TeamRosterPage from './components/TeamRosterPage'
import AddSubPage from './components/AddSubPage'

export type PlayerType = {
  firstName: string,
  lastNMame: string,
  phone: string,
  position: string,
  playerId: number,
  teamId: number
}

type TeamsType = {
  teamId: number,
  teamName: string
}

type GameType = {
  gameId: number
  team1: string,
  team2: string,
  date: string,
  time: string
}

function App() {
  // pieces of state needed throughout the app
  const [selectedTeam, setSelectedTeam] = useState<[TeamsType]>([[0, "Select a Team"]])
  const [selectedGame, setSelectedGame] = useState<[GameType]>([[0, "Team1", "Team2", "date", "time"]])
  const [players, setPlayers] = useState<[PlayerType]>([])

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<GameSchedPage />} />
        <Route path="/team-roster" element={<TeamRosterPage />} />
        <Route path="/add-sub" element={<AddSubPage />} />
      </Routes>

    </>
  )
}

export default App
