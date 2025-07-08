export type PlayerType = {
  firstName: string,
  lastName: string,
  phone: string,
  position: string,
  playerId: number,
  teamName: string,
  playerHistory: number[]
}

export type TeamsType = {
  teamId: number,
  teamName: string
}

export type GameType = {
  gameId: string | number,
  team1: string,
  team2: string,
  date: string,
  time: string
}
