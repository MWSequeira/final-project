// RENDER THE FORM TO GATHER INFO ON THE NEW PLAYER

import { useState } from "react"
import { Button } from "react-bootstrap"
import type { PlayerType } from "./ExportTypes"

type AddPlayerFormProps = {
    allPlayers: [PlayerType],
    setAllPlayers: (newValue:PlayerType) => void,
    updateAllPlayers: () => void
}


function AddPlayerForm( { allPlayers,
    setAllPlayers,
    updateAllPlayers }: AddPlayerFormProps) {


    // state used in this form
    const[formValues, setFormValues] = useState({
        firstName: "first name",
        lastName: "last name",
        phone: "XXX-xxx-xxxx"
    })

    // handling changes in the form
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
    
    // make changes to the player's data
    const handleFormSubmit = (event: MouseEvent) => {
        event.preventDefault() // to keep the page from refreshing

        let newPlayer = {
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            phone: formValues.phone,
            position: radioValue,
            playerId: allPlayers.length + 1, // results from how the playerIds were assigned
            teamName: "Subs List",
            playerHistory: [allPlayers.length, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }


        setAllPlayers([...allPlayers, newPlayer])
        alert("Player Added")
        updateAllPlayers() // trigger an update to the backend
    }

  return (
    <>

        <form>
            <p></p>
            <label>First Name:  
                <input
                    name="firstName"
                    type="text"
                    placeholder="first name"
                    onChange={handleChange}
                    value={formValues.firstName}
                />
            </label> 
            <p></p>
            <label>Last Name: 
                <input
                    name="lastName"
                    type="text"
                    placeholder='last Name'
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
            <label>Player Position: <br />
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
            <Button variant="success" onClick={handleFormSubmit}>Submit Info</Button>
        </form>
    </>
  )
}

export default AddPlayerForm