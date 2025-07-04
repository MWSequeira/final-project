import { ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <ButtonGroup aria-label="topNav">
        <Link to='/'>
          <Button variant="outline-primary">Games Schedule</Button>
        </Link>
        <Link to="/add-sub">
          <Button variant="outline-primary">Add Subs</Button>
        </Link>
        <Link to="/team-roster">
          <Button variant="outline-primary">Team Rosters</Button>
        </Link>
      </ButtonGroup>
    </div>
  )
}

export default NavBar