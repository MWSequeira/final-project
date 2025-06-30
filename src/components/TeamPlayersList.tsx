import React from 'react'
import GetLeaguePlayers from './GetLeaguePlayers'
import type { TeamsType } from './TeamButtons'

type PlayersListProps = {
  selectedTeam: Array<TeamsType>
}

function TeamPlayersList( {selectedTeam}: PlayersListProps) {

  return (
    <div className='teamPlayersList'>
        <GetLeaguePlayers 
          selectedTeam={selectedTeam}
        /> 
    </div>
  )
}

export default TeamPlayersList