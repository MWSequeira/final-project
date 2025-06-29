import React from 'react'
import GetPlayersData from './GetPlayersData'
import type { TeamsType } from './TeamButtons'

type PlayersListProps = {
  selectedTeam: Array<TeamsType>
}

function TeamPlayersList( {selectedTeam}: PlayersListProps) {

  return (
    <div className='teamPlayersList'>
        <GetPlayersData 
          selectedTeam={selectedTeam}
        /> 
    </div>
  )
}

export default TeamPlayersList