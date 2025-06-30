type GamesSchedPageProps ={
  GamesList: () => void
}

function GameSchedPage( {GamesList }: GamesSchedPageProps) {
  return (
    <div className='gameSchedPage'>
         <h1>Schedule of Games</h1>
         <GamesList />
    </div>
  )
}

export default GameSchedPage