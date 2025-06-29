import React, { useState } from 'react'
import TeamButtons from './TeamButtons'
import TeamPlayersList from './TeamPlayersList'


function TeamRosterPage( {selectedTeam, setSelectedTeam}: TeamProps) {

  return (
    <div className='teamRosterPage'>
        <h1>Team Rosters</h1>
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