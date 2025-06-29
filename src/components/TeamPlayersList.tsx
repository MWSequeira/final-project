import React from 'react'
import GetPlayersData from './GetPlayersData'
import type { TeamsType } from './TeamButtons'

type PlayersListProps = {
  selectedTeam: Array<TeamsType>
}

function TeamPlayersList( {selectedTeam}: PlayersListProps) {

  return (
    <div className='teamPlayersList'>
        <h2>List of team players for a game</h2>
        <p>Game date and time here. The teams and games need to be passed down as props.</p>
        <p>The players and subs for this team, game and time listed here.</p>
        <p>The data is pulled from the backend each time this page is loaded</p>
        <GetPlayersData 
          selectedTeam={selectedTeam}
        /> 
    </div>
  )
}

export default TeamPlayersList