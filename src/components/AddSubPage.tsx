import { Container, Col, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState, type ChangeEvent } from 'react'
import { Modal } from 'react-bootstrap'
import type { GameType, PlayerType } from '../App'


type AddSubPageProps = {
  gameSched: GameType[],
  allPlayers: PlayerType[],
  setAllPlayers: (newValue: PlayerType) => void,
}

function AddSubPage( { gameSched,
  allPlayers,
  setAllPlayers }: AddSubPageProps) {

  // state variables for the form -- in progress values
  const[formValues, setFormValues] = useState({
    gameId: 0,
    playerId: 0
  })

  // small functions for this component
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
    console.log(gameId)
    console.log(playerId)
    console.log(findPlayer(playerId))
    console.log(findPlayer(playerId).playerHistory)
    
    console.log(findPlayer(playerId).playerHistory[gameId]) 
    console.log(updatedPlayerHistory(playerId, gameId))
}



  return (
    <div className='addSubPage'>

      <Container>
        <Row>
        <Button variant="outline-primary" onClick={handleShow}>
                Add a Sub
        </Button>
        </Row>
        <Row>
          <Col>
            <h2>Games</h2>
            {gameSched.map(game => <div key={game.gameId}>
              <p>
              <b>Game {game.gameId}</b> on {game.date} at {game.time} &mdash; <b>{game.team1}</b> vs <b>{game.team2}</b>
              </p>
            </div>)}
          </Col>
          <Col>
            <h2>Add a Sub</h2>
            {allPlayers.map(player => <p>
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