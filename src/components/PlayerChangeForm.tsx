import { useState } from "react"
import { useParams } from "react-router-dom"
import type { PlayerType, GameType} from "./ExportTypes"

type PlayerChangeFormProps ={
    allPlayers: PlayerType,
    selectedPlayer: PlayerType,
    setSelectedPlayer: (newValue:PlayerType) => void,
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



    const { playerId } = useParams()

    let chosenPlayerId = parseInt(playerId) // playerId is passed as a string; the prop is a number
    setSelectedPlayer(allPlayers.find(player => player.playerId === chosenPlayerId))

    const[formValues, setFormValues] = useState({
        firstName: "first name",
        lastName: "last name",
        phone: "XXX-xxx-xxxx",
        position: "position"
    })

    // handling changes in the form
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => 
    setFormValues({ 
        ...formValues, 
        [event.target.name]: event.target.value 
    })

    // select the player to update AND open the Modal
    const handleFormSubmit = (event: MouseEvent) => {
        event.preventDefault() // to keep the page from refreshing
        let chosenPlayerId = parseInt(formValues.inputPlayerId) // values from the form are strings
        setSelectedPlayer(allPlayers.filter(player => player.playerId === chosenPlayerId))
        handleShow
    }

  return (
    <form>
        <p></p>
        <label>First Name: 
            <input
                name="firstName"
                type="text"
                placeholder= {selectedPlayer.firstName}
                onChange={handleChange}
                value={formValues.firstName}
            />
        </label> 
        <p></p>
        <label>Last Name: 
            <input
                name="lastName"
                type="text"
                placeholder='last name'
                onChange={handleChange}
                value={formValues.lastName}
            />
        </label> 
        <p></p>
        <label>Phone Number: 
            <input
                name="phone"
                type="text"
                placeholder='XXX-xxx-xxxx'
                onChange={handleChange}
                value={formValues.phone}
            />
        </label> 
        <p></p>
        <label>Player Position: 
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