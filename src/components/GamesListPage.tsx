import { useEffect, useState } from 'react'
import type { GameType } from '../App'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type GamesListProps = {
  gameSched: GameType[],
  loadingGames: boolean,
  errorGames: string,
  selectedGame: GameType[],
  setSelectedGame: (newValue: number) => void
}

function GamesListPage( {gameSched,
  loadingGames,
  errorGames,
  selectedGame,
  setSelectedGame}: GamesListProps) {

  return (
    <div className="gamesList">
      { loadingGames && <p>Loading...</p> }
      { errorGames && <p> {errorGames}</p> }
      
      <h1>Schedule of Games</h1>
      {gameSched.map(game => <div key={game.gameId}>
        <p>
        <b> <Link to={"/games/" + game.gameId}>Game {game.gameId}</Link></b> on {game.date} at {game.time} &mdash; <b>{game.team1}</b> vs <b>{game.team2}</b>
        </p>

      </div>)}
    </div>

      
      
      


  )
}

export default GamesListPage