import React from 'react'
import TeamButtons from './TeamButtons'
import TeamPlayersList from './TeamPlayersList'

function TeamRosterPage() {
  return (
    <div className='teamRosterPage'>
        <h1>Team Rosters</h1>
        <TeamButtons />
        <TeamPlayersList />
    </div>
  )
}

export default TeamRosterPage