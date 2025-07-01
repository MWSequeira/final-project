import { useEffect, useState } from 'react'
import type { GameType } from '../App'

type GamesListProps = {
  gameSched: GameType[],
  loadingGames: boolean,
  errorGames: string
}

function GamesListPage( {gameSched, loadingGames, errorGames}: GamesListProps) {

  return (
    <div className="gamesList">
      { loadingGames && <p>Loading...</p> }
      { errorGames && <p> {errorGames}</p> }
      
      <h1>Schedule of Games</h1>
      {gameSched.map(game => <div key={game.gameId}>
        <p>
        <b>Game {game.gameId}: </b>
        on {game.date} at {game.time} &mdash; <b>{game.team1}</b> vs <b>{game.team2}</b>
        </p>
      </div>)}
    </div>

      
      
      


  )
}

export default GamesListPage