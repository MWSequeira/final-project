import { useParams } from 'react-router-dom'
import type { GameType, PlayerType } from './ExportTypes'
import DisplaySched from './DisplaySched'

type PlayerSchedProps = {
    allPlayers: PlayerType[],
    gameSched: GameType[],
    selectedPlayer: PlayerType[],
    setSelectedPlayer: (newValue: PlayerType) => void
}

function PlayerSched( { allPlayers, 
    gameSched,
    selectedPlayer, 
    setSelectedPlayer }: PlayerSchedProps) {

    const { playerId } = useParams()

    let chosenPlayerId = parseInt(playerId) // playerId is passed as a string; the prop is a number
    setSelectedPlayer(allPlayers.find(player => player.playerId === chosenPlayerId))

  return (
    <div>
        <DisplaySched
            gameSched={gameSched}
            selectedPlayer={selectedPlayer}
        />
    </div>
  )
}

export default PlayerSched