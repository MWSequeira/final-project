import type { PlayerType, GameType} from "./ExportTypes"

type PlayerChangeFormProps ={
    allPlayers: PlayerType[],
    selectedPlayer: PlayerType,
    setSelectedPlayer: PlayerType,
    loadingPlayers: boolean,
    errorPlayers: string | null,
    selectedGame: GameType,
    gameSched: GameType[]
}

function PlayerChangeForm( { allPlayers,
    selectedPlayer,
    setSelectedPlayer,
    loadingPlayers,
    errorPlayers,
    selectedGame,
    gameSched }) {
  return (
    <div>PlayerChangeForm</div>
  )
}

export default PlayerChangeForm