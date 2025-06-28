import { Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar'
import GameSchedPage from './components/GameSchedPage'
import TeamRosterPage from './components/TeamRosterPage'
import AddSubPage from './components/AddSubPage'


function App() {

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
