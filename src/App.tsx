import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import GameSchedPage from './components/GameSchedPage'
import TeamRosterPage from './components/TeamRosterPage'
import AddSubPage from './components/AddSubPage'


function App() {
  // pieces of state needed throughout the app
  const [selectedTeam, setSelectedTeam] = useState<[TeamsType]>([[0, "Select a Team"]])

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
