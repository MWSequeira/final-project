// RENDERS THE CHANGE FORM, GATHERS THE INFO AND UPDATES THE PLAYERS DATA (INCLUDING REMOVAL)

import { useState, type ChangeEvent } from "react"
import { useParams } from "react-router-dom"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import type { PlayerType, GameType} from "./ExportTypes"

type PlayerChangeFormProps ={
    allPlayers: [PlayerType],
    setAllPlayers: (newValue:PlayerType[] | undefined) => void,
    selectedPlayer: PlayerType,
    setSelectedPlayer: (newValue: PlayerType | undefined) => void,
    loadingPlayers: boolean,
    errorPlayers: string | null,
    updateAllPlayers: () => void,
    selectedGame: GameType,
    gameSched: GameType[]
}


function PlayerChangeForm( { allPlayers,
    setAllPlayers,
    selectedPlayer,
    setSelectedPlayer,
    loadingPlayers,
    errorPlayers,
    updateAllPlayers
     }: PlayerChangeFormProps) {

    const { playerId } = useParams()

    let chosenPlayerId = parseInt(playerId) // playerId is passed as a string; the prop is a number
    setSelectedPlayer(allPlayers.find(player => player.playerId === chosenPlayerId))

    // state used in this form
    const[formValues, setFormValues] = useState({
        firstName: "first name",
        lastName: "last name",
        phone: "XXX-xxx-xxxx",
        position: "position"
    })

    // handling text changes in the form
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => 
        setFormValues({ 
        ...formValues, 
        [event.target.name]: event.target.value 
    })

    // state for the radio buttons
    const[radioValue, setRadioValue] = useState("Defense")

    // handling radio button changes in the form
    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRadioValue(event.target.value)
        }

    // handling changes to the player's data
    const handleFormSubmit = (event: MouseEvent) => {
        event.preventDefault() // to keep the page from refreshing
        setAllPlayers(allPlayers.map(player =>(
            player.playerId !== selectedPlayer.playerId ? player: {
                ...player, firstName: formValues.firstName, 
                lastName: formValues.lastName,
                phone: formValues.phone,
                position: radioValue
            }
        ) ))
        updateAllPlayers() // trigger an update to the backend
    }

    // handling removal of the player
    const handleRemovePlayer = (event: MouseEvent) => {
        event.preventDefault() // keep the page from refreshing
        
        const updatedPlayerHistory = selectedPlayer.playerHistory.map(()=>{
            return 0;
        })

           const updatedTeamPlayers = allPlayers.map((player)=> {
           if( player.playerId === selectedPlayer.playerId){
            player.playerHistory = updatedPlayerHistory;
            player.teamName = "Removed";
           }
           return player;
        });

        setAllPlayers(updatedTeamPlayers);
        alert("Player removed")
        updateAllPlayers();
    }
        // const number = number ? do something : do another thing

  return (
    <>
        { loadingPlayers && <p>Loading...</p> }
        { errorPlayers && <p>{errorPlayers}</p> }
        <form>
            <p></p>
            <p className="alert">
            Sorry, but you'll have to re-enter all of your information.<br/>
            <b>All fields must be filled</b> or your data will be lost.<br />
            For your convenience, your current information is provided for you to copy and paste into the fields.<br />
            <Link to="/player-schedule"><b>Don't Make Changes and Go Back</b></Link>
            </p>
            <Button variant="danger" onClick={handleRemovePlayer}>Remove This Player</Button>
            <p></p>
            <label>First Name: <b>{selectedPlayer.firstName}</b><br />Change to: 
                <input
                    name="firstName"
                    type="text"
                    placeholder="first name"
                    onChange={handleChange}
                    value={formValues.firstName}
                />
            </label> 
            <p></p>
            <label>Last Name: <b>{selectedPlayer.lastName}</b><br /> Change to: 
                <input
                    name="lastName"
                    type="text"
                    placeholder='last Name'
                    onChange={handleChange}
                    value={formValues.lastName}
                />
            </label> 
            <p></p>
            <label>Phone Number: <b>{selectedPlayer.phone}</b><br />Change to:
                <input
                    name="phone"
                    type="text"
                    placeholder='XXX-xxx-xxxx'
                    onChange={handleChange}
                    value={formValues.phone}
                />
            </label> 
            <p></p>
            <label>Player Position: <b>{selectedPlayer.position}</b><br />Change to:<br />
                <input
                    type="radio"
                    name="position"
                    value="Forward"
                    onChange={handleRadioChange}
                    checked={radioValue === "Forward"}
                />Forward<br />
                <input
                    type="radio"
                    name="position"
                    value="Defense"
                    onChange={handleRadioChange}
                    checked={radioValue === "Defense"}
                />Defense<br />
                <input
                    type="radio"
                    name="position"
                    value="Goalie"
                    onChange={handleRadioChange}
                    checked={radioValue === "Goalie"}
                />Goalie
            </label> 
            <p></p>
            <Button variant="outline-success" onClick={handleFormSubmit}>Submit Info</Button>
        </form>
    </>
  )
}

export default PlayerChangeForm