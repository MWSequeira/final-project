import { useEffect, useState } from 'react'
import type { GameType } from '../App'
import { Button } from 'react-bootstrap'

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

  // select a game
  const selectGame = (idToSelect: number) => {
    setSelectedGame(gameSched.filter(game => game.gameId === idToSelect))
    console.log(selectedGame)
  }

  return (
    <div className="gamesList">
      { loadingGames && <p>Loading...</p> }
      { errorGames && <p> {errorGames}</p> }
      
      <h1>Schedule of Games</h1>
      {gameSched.map(game => <div key={game.gameId}>
        <p>
        <Button onClick={selectGame(game.gameId)}>Choose</Button>
        <b>Game {game.gameId}</b> on {game.date} at {game.time} &mdash; <b>{game.team1}</b> vs <b>{game.team2}</b>
        </p>

      </div>)}
    </div>

      
      
      


  )
}

export default GamesListPage