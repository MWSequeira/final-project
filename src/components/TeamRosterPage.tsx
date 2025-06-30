import React, { useState } from 'react'
import TeamButtons from './TeamButtons'
import TeamPlayersList from './TeamPlayersList'
import type { TeamsType } from '../App'

type TeamRosterPageProps = {
  TeamsButtons: (newValue:TeamsType) => void,
  selectedTeam: TeamsType,
  setSelectedTeam: (newValue:TeamsType) => void,
}

function TeamRosterPage( { TeamsButtons, selectedTeam, setSelectedTeam }: TeamRosterPageProps) {

  return (
    <div className='teamRosterPage'>
        <h1>Team Rosters</h1>
        <p>Select a team to see the roster</p>
        <TeamButtons 
          setSelectedTeam={setSelectedTeam}
        />
        <TeamPlayersList
        selectedTeam={selectedTeam}
        />
    </div>
  )
}

export default TeamRosterPage