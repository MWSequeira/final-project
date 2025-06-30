import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import AddNewPlayer from "./AddNewPlayer"

type PlayerType = {
  firstName: string,
  lastName: string,
  phone: string,
  position: string,
  playerId: number,
  teamId: number
}

type AddSubFormProps = {
  allPlayers: PlayerType[],
  setAllPlayers: (newValue: PlayerType[]) => void
}

function AddSubForm( { allPlayers,setAllPlayers }: AddSubFormProps) {

    // state variables for the form -- in progress values
    const[formValues, setFormValues] = useState<PlayerType>([])

  // I'm borrowing Natalie's code from class here and updating for this form.
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => 
    setFormValues({ 
        ...formValues, 
        [event.target.name]: event.target.value 
  })

  const handleFormSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault() // to keep the page from refreshing
    let newPlayer:NewPlayerInput = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      phone: formValues.phone,
      position: formValues.position,
      playerId: allPlayers.length,
      teamId: 0
    }
    setAllPlayers([...allPlayers, newPlayer])
    console.log("Added Player")
  }

  return (
    <div className='addSubForm'>
      <p><b>Need a sub?</b><br />All players are listed at right.</p>
      <p><b>Want to sub?</b><br />Make sure your name is on the list.</p>
      <h3>Add Yourself below</h3>

      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="first name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="last name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Phone Number with area code</Form.Label>
          <Form.Control type="text" placeholder="XXX-XXX-XXXX" />
        </Form.Group>

        <Form.Select aria-label="Position">
          <option>Postion</option>
          <option value="Forward">Forward</option>
          <option value="Defense">Defense</option>
          <option value="Goalie">Goalie</option>
        </Form.Select>
        
        <Button variant="success" type="submit">Submit</Button>
        <Button variant="danger" type="reset">Clear Info</Button>

      </Form>

    </div>
  )
}

export default AddSubForm