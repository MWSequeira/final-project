import { Container, Col, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useState, type ChangeEvent } from 'react'
import { Modal } from 'react-bootstrap'
import type { GameType, PlayerType } from './ExportTypes'

type AddSubPageProps = {
  selectedGame: GameType,
  allPlayers: PlayerType,
  setAllPlayers: (newValue: PlayerType) => void,
  changedHistory: boolean,
  setChangedHistory: (newValue) => void
}

function AddSubPage( { selectedGame,
  allPlayers,
  setAllPlayers,
  updateAllPlayers,
  setChangedHistory
   }: AddSubPageProps) {

  // state variables for the form -- in progress values
  const[formValues, setFormValues] = useState({
    gameId: selectedGame.gameId,
    playerId: 0
  })

  // small functions for this component
  let availPlayers:PlayerType[] = allPlayers.filter(player => player.teamName != selectedGame.team1 && player.teamName !== selectedGame.team2 && player.teamName !== "Removed" && player.playerHistory[selectedGame.gameId] !== 5)

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

  const handleFormSubmit = (event: MouseEvent<HTMLButtonElement>) => {87
    event.preventDefault() // to keep the page from refreshing
    let playerIdNo = parseInt(formValues.playerId) // values from the form are strings
    let chosenSub:PlayerType[] = allPlayers.filter(player => player.playerId === playerIdNo) // get the player object within the allPlayes array
    let chosenSubHistory:Array<number> = chosenSub[0].playerHistory // get the playerHistory array
    
    // there's propbaby a more elegant way to update the history, but this code works
    let historyCopy = chosenSubHistory.slice() // copy the history array for the sub
    historyCopy.splice(selectedGame.gameId, 1, 5) // replace the element at the gameId with a 5 
    console.log(historyCopy)
    // update the allPlayers state so that the subs will show for each game
     setAllPlayers(allPlayers.map(player => (
      player.playerId !== playerIdNo ? player: {
      ...player, playerHistory: historyCopy }
    )))

    // close the Modal
    setShow(false)
    //trigger an update to the backend
    updateAllPlayers()
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
            <h2>Available Players</h2>
            {availPlayers.map(player => <p key={player.playerId}>
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