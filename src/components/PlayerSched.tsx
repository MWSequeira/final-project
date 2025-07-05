import DisplaySched from './DisplaySched'
import { useParams } from 'react-router-dom'
import type { GameType, PlayerType } from './ExportTypes'


type PlayerSchedProps = {
    allPlayers: PlayerType[],
    gameSched: GameType
    selectedPlayer: PlayerType[],
    setSelectedPlayer: (newValue: PlayerType[]) => void
}

function PlayerSched( { allPlayers, setSelectedPlayer}: PlayerSchedProps) {

    const { playerId } = useParams()

    let chosenPlayerId = parseInt(playerId) // playerId is passed as a string; the prop is a number
    setSelectedPlayer(allPlayers.find(player => player.playerId === chosenPlayerId))

  return (
    <div>
        <DisplaySched
            allPlayers={allPlayers}
            gameSched={gameSched} />
    </div>
  )
}

export default PlayerSched