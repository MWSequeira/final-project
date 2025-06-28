import React from 'react'
import GetData from './GetData'

function TeamPlayersList() {

  return (
    <div className='teamPlayersList'>
        <h2>List of team players for a game</h2>
        <p>Game date and time here. The teams and games need to be passed down as props.</p>
        <p>The players and subs for this team, game and time listed here.</p>
        <GetData /> 
    </div>
  )
}

export default TeamPlayersList