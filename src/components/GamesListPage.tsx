// RENDER THE LIST OF ALL GAMES WITH LINKS TO EACH GAME

import type { GameType } from './ExportTypes'
import { Link } from 'react-router-dom'

type GamesListProps = {
  gameSched: GameType[] | null,
  loadingGames: boolean,
  errorGames: string
}


function GamesListPage( {gameSched,
  loadingGames,
  errorGames}: GamesListProps) {

    console.log("gameSched", gameSched)

  return (
    <div className="gamesList">
      { loadingGames && <p>Loading...</p> }
      { errorGames && <p> {errorGames}</p> }
      
      <h2>Schedule of Games</h2>
      {gameSched.map(game => <div key={game.gameId}>
        <p>
        <b> <Link to={"/games/" + game.gameId}>Game {game.gameId}</Link></b> on {game.date} at {game.time} &mdash; <b>{game.team1}</b> vs <b>{game.team2}</b>
        </p>

      </div>)}
    </div>

      
      
      


  )
}

export default GamesListPage