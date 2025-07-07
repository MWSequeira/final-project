import { useState } from "react"
import { Button } from "react-bootstrap"
import type { PlayerType } from "./ExportTypes"
import GamesListPage from "./GamesListPage"

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
        phone: "XXX-xxx-xxxx",
        position: "position"
    })

    // handling changes in the form
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => 
    setFormValues({ 
        ...formValues, 
        [event.target.name]: event.target.value 
    })
    
    // make changes to the player's data
    const handleFormSubmit = (event: MouseEvent) => {
        event.preventDefault() // to keep the page from refreshing

        let newPlayer = {
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            phone: formValues.phone,
            position: formValues.position,
            playerId: allPlayers.length + 1, // results from how the playerIds were assigned
            teamName: "Subs List",
            playerHistory: [allPlayers.length, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }

        console.log(newPlayer)

        setAllPlayers([...allPlayers, newPlayer])
        alert("Player Added")
        console.log(allPlayers)
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
            <label>Player Position: 
                <input
                    name="position"
                    type="text"
                    placeholder='position'
                    onChange={handleChange}
                    value={formValues.position}
                />
            </label> 
            <p></p>
            <Button variant="outline-success" onClick={handleFormSubmit}>Submit Info</Button>
        </form>
    </>
  )
}

export default AddPlayerForm