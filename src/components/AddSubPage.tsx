import { Container, Col, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState, type ChangeEvent } from 'react'
import { Modal } from 'react-bootstrap'
import type { GameType, PlayerType } from '../App'


type AddSubPageProps = {
  gameSched: GameType[],
  selectedGame: GameType[],
  allPlayers: PlayerType[],
  setAllPlayers: (newValue: PlayerType) => void,
}

function AddSubPage( { gameSched,
  selectedGame,
  allPlayers,
  setAllPlayers }: AddSubPageProps) {


  // state variables for the form -- in progress values
  const[formValues, setFormValues] = useState({
    gameId: 0,
    playerId: 0
  })

  // small functions for this component
  console.log(selectedGame.team1)

  let findPlayer = (playerId) => allPlayers.find(player => player.playerId === playerId) // get a particular player
  let updatedPlayerHistory = (playerId, gameId) => findPlayer(playerId).playerHistory[gameId-1] = 5


  // state for the Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // I'm borrowing Natalie's code from class here and updating for this form.
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => 
    setFormValues({ 
        ...formValues, 
        [event.target.name]: event.target.value 
    })

  const handleFormSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault() // to keep the page from refreshing
    let gameId = parseInt(formValues.gameId) // values from the form are strings
    let playerId = parseInt(formValues.playerId) // values from the form are strings
}



  return (
    <div className='addSubPage'>

      <Container>
        <Row>
        <Button variant="outline-primary" onClick={handleShow}>
                Add a Sub to Game {selectedGame.gameId}
        </Button>
        </Row>
        <Row>
          <Col>
            <h2>Game {selectedGame.gameId}</h2>
            {selectedGame.date} at {selectedGame.time} <br />
            {selectedGame.team1} vs {selectedGame.team2}
          </Col>
          <Col>
            <h2>Add a Sub</h2>
            {availPlayers.map(player => <p>
                {player.playerId} &mdash; {player.firstName} {player.lastName}, {player.position}
            </p>)}
          </Col>
        </Row>
        <Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adding a Sub</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form >
                        <label>Game Number: 
                            <input
                                name="gameId"
                                type="text"
                                onChange={handleChange}
                                value={formValues.gameId}
                            />
                        </label>
                        <br />
                        <label>Player Id Number: 
                            <input
                                name="playerId"
                                type="text"
                                onChange={handleChange}
                                value={formValues.playerId}
                            />
                        </label>  
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleFormSubmit}>
                        Add Player
                    </Button>
                </Modal.Footer>

            </Modal>
        </Row>

      </Container>
    </div>
  )
}

export default AddSubPage