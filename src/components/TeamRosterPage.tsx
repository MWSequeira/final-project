import React, { useState } from 'react'
import TeamButtons from './TeamButtons'
import TeamPlayersList from './TeamPlayersList'


function TeamRosterPage() {
  const[selectedTeam, setSelectedTeam] = useState([0])

  return (
    <div className='teamRosterPage'>
        <h1>Team Rosters</h1>
        <p>(Choose a team to see the roster)</p>
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