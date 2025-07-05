import { useState } from "react"
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
    gameSched }: PlayerChangeFormProps) {

    const[formValues, setFormValues] = useState({
        firstName: "first name",
        lastName: "last name",
        phone: "XXX-xxx-xxxx",
        position: "position",
    })


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => 
        setFormValues({ 
            ...formValues, 
            [event.target.name]: event.target.value 
        })

    // handling changes in the form
    const handleFormSubmit = (event: ChangeEvent<HTMLInputElement>) => 
    setFormValues({ 
        ...formValues, 
        [event.target.name]: event.target.value 
    })


  return (
    <form>
        <label>Player Name: 
            <input
                name="firstName"
                type="text"
                placeholder='first name'
                onChange={handleChange}
                value={formValues.firstName}
            />
        </label> 
        <label>Player Name: 
            <input
                name="lastName"
                type="text"
                placeholder='last name'
                onChange={handleChange}
                value={formValues.lastName}
            />
        </label> 
        <label>Player Name: 
            <input
                name="phone"
                type="text"
                placeholder='XXX-xxx-xxxx'
                onChange={handleChange}
                value={formValues.phone}
            />
        </label> 
        <label>Player Name: 
            <input
                name="position"
                type="text"
                placeholder='position'
                onChange={handleChange}
                value={formValues.position}
            />
        </label> 
    </form>
  )
}

export default PlayerChangeForm