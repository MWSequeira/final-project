import { useState, useEffect } from "react"
import type { GameType } from "../App"

type GamesSchedPageProps ={
  gameSched: Array<GameType>,
  setGameSched: () => void,
  GamesList: () => void
}

function GameSchedPage( {gameSched, setGameSched, GamesList }: GamesSchedPageProps) {


  return (
    <div className='gameSchedPage'>
         <h1>Schedule of Games</h1>
         <GamesList 
            gameSched={gameSched}
            setGameSchedu={setGameSched}/>
    </div>
  )
}

export default GameSchedPage