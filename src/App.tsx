import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import GameSchedPage from './components/GameSchedPage'
import TeamRosterPage from './components/TeamRosterPage'
import AddSubPage from './components/AddSubPage'


function App() {

  return (
    <>
     <NavBar />
     <GameSchedPage />
     <TeamRosterPage />
     <AddSubPage />
    </>
  )
}

export default App
