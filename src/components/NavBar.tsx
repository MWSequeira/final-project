import { ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <h1>Men's Hockey League</h1>
      <ButtonGroup aria-label="topNav">
        
        <Link to='/'>
          <Button variant="outline-primary">Games Schedule</Button>
        </Link>

        <Link to="/add-sub">
          <Button variant="outline-primary">Add A Sub</Button>
        </Link>

        <Link to="/update-player">
          <Button variant="outline-primary">Make an Update</Button>
        </Link>

        <Link to="/player-schedule">
          <Button variant="outline-primary">Check Player Schedule</Button>
        </Link>
       
      </ButtonGroup>
    </div>
  )
}

export default NavBar