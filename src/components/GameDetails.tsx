import { useParams } from 'react-router-dom'
import type { GameType, PlayerType } from './ExportTypes'
import DisplayGames from './DisplayGames'

type GameDetailsProps ={
    gameSched: GameType[],
    allPlayers: PlayerType[],
    selectedGame: GameType[],
    setSelectedGame: (newValue: GameType) => void
}

function GameDetails({ gameSched, 
    allPlayers,
    selectedGame,
    setSelectedGame}: GameDetailsProps) {

    const { gameId } = useParams()

    let chosenGameId = parseInt(gameId) // gameId is passed as a string; the prop is a number
    setSelectedGame(gameSched.find(game => game.gameId === chosenGameId))

  return (
    <div>
       <DisplayGames 
            allPlayers={allPlayers} 
            selectedGame={selectedGame}
        />
    </div>
  )
}

export default GameDetails